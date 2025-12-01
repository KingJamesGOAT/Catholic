import { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { translations, t } from "../lib/i18n/translations";
import { useIsMobile } from "./ui/use-mobile";

interface HomeProps {
  onStart: () => void;
}

// ------------------------------------------------------------------
// 1. HELPER: WORD-AWARE SPLIT TEXT
// ------------------------------------------------------------------
const SplitStaggeredText = ({
  htmlContent,
  scrollYProgress,
  range,
  baseClass = "text-white",
}: {
  htmlContent: string;
  scrollYProgress: MotionValue<number>;
  range: [number, number];
  baseClass?: string;
}) => {
  const { words, totalChars } = useMemo(() => {
    const regex = /(<span[^>]*>.*?<\/span>)|([^<]+)/g;
    const matches = htmlContent.match(regex) || [];

    let parsedWords: any[] = [];
    let charCounter = 0;

    matches.forEach((part) => {
      let text = part;
      let isBlue = false;

      if (part.startsWith("<span")) {
        text = part.replace(/<[^>]+>/g, "");
        isBlue = true;
      }

      const tokens = text.split(/(\s+)/);

      tokens.forEach((token) => {
        if (token.match(/\s+/)) {
          parsedWords.push({ type: "space", text: token });
          charCounter += token.length;
        } else if (token.length > 0) {
          const chars = token.split("").map((c, i) => ({
            char: c,
            globalIndex: charCounter + i,
          }));
          parsedWords.push({ type: "word", chars, isBlue });
          charCounter += token.length;
        }
      });
    });

    return { words: parsedWords, totalChars: charCounter };
  }, [htmlContent]);

  const [start, end] = range;
  const step = (end - start) / totalChars;

  return (
    <span className={`${baseClass} inline`}>
      {words.map((word, i) => {
        if (word.type === "space") {
          return (
            <span key={i} className="inline">
              {word.text}
            </span>
          );
        }
        return (
          <span key={i} className="inline-block whitespace-nowrap">
            {word.chars.map((item: any, j: number) => {
              const charStart = start + item.globalIndex * step;
              const charEnd = charStart + 0.15;
              const scale = useTransform(scrollYProgress, [charStart, charEnd], [1, 0]);
              const opacity = useTransform(scrollYProgress, [charStart, charEnd], [1, 1]);
              const rotate = useTransform(scrollYProgress, [charStart, charEnd], [0, Math.random() * 360 - 180]);
              const y = useTransform(scrollYProgress, [charStart, charEnd], [0, 50]);
              const blur = useTransform(scrollYProgress, [charStart, charEnd], ["0px", "5px"]);

              return (
                <motion.span
                  key={j}
                  style={{
                    scale,
                    opacity,
                    rotate,
                    y,
                    filter: useTransform(blur, (v) => `blur(${v})`),
                  }}
                  className={`inline-block ${word.isBlue ? "text-blue-500" : ""}`}
                >
                  {item.char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

// ------------------------------------------------------------------
// 2. NATIVE CANVAS ENGINE (Smaller, Gentler Repulsion)
// ------------------------------------------------------------------
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = isMobile ? 800 : 1600;
    const Z_DEPTH = 1000;
    const STAR_COLOR = "#3b82f6";
    let width = window.innerWidth;
    let height = window.innerHeight;

    const stars = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: (Math.random() - 0.5) * width * 3,
      y: (Math.random() - 0.5) * height * 3,
      z: Math.random() * Z_DEPTH,
    }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 10, centerX, centerY, isMobile ? 150 : 300
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(0.2, "rgba(20, 0, 30, 1)");
      gradient.addColorStop(0.4, "rgba(76, 29, 149, 0.4)");
      gradient.addColorStop(0.7, "rgba(59, 130, 246, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const speed = 1.5;

      stars.forEach((star) => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = Z_DEPTH;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        // --- UPDATED REPULSION LOGIC ---
        if (!isMobile) {
          const dx = px - mouseRef.current.x;
          const dy = py - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Radius reduced to 100px (was 200) for a tighter effect
          const repulsionRadius = 100;

          if (dist < repulsionRadius) {
            // Force reduced to 10 (was 20) for a gentler push
            const force = (1 - dist / repulsionRadius) * 10;
            const angle = Math.atan2(dy, dx);
            
            star.x += (Math.cos(angle) * force) / k;
            star.y += (Math.sin(angle) * force) / k;
          }
        }

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / Z_DEPTH) * (isMobile ? 3 : 4.5);
          const alpha = 1 - star.z / Z_DEPTH;
          ctx.beginPath();
          ctx.fillStyle = STAR_COLOR;
          ctx.globalAlpha = alpha;
          ctx.arc(px, py, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(render);
    };

    const animationId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-black"
    />
  );
};

// ------------------------------------------------------------------
// 3. MAIN COMPONENT
// ------------------------------------------------------------------
export default function Home({ onStart }: HomeProps) {
  const { language } = useLanguage();
  const trans = translations.home;

  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      scrollYProgress.set(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  const handleStartClick = () => {
    onStart();
  };

  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Quote Visibility (Fades OUT before final text)
  const quoteOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.65, 0.8],
    [0, 1, 1, 0]
  );
  
  const quoteScrollHintOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0, 1, 1, 0]
  );

  const finalOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.75, 1], [0.9, 1]);

  const [pointerEvents, setPointerEvents] = useState<"none" | "auto">("none");
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPointerEvents(latest > 0.85 ? "auto" : "none");
    });
  }, [scrollYProgress]);

  return (
    <div className="relative h-[400vh] bg-black">
      <ParticleCanvas />

      <div className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none overflow-hidden">
        {/* --- LAYER 1: TITLE --- */}
        <motion.div
          className="absolute flex flex-col items-center justify-center text-center w-full px-4"
          style={{
            opacity: titleOpacity,
            top: "50%",
            y: "-50%",
            scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.8]),
          }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl text-center max-w-4xl mx-auto">
            <SplitStaggeredText
              htmlContent={t(trans.title, language)}
              scrollYProgress={scrollYProgress}
              range={[0, 0.25]}
            />
          </h1>

          <motion.div
            style={{ opacity: titleOpacity }}
            className="absolute -bottom-32 left-0 right-0 text-center text-blue-400/60 animate-bounce text-xs md:text-sm font-medium tracking-widest uppercase"
          >
            Scroll to Begin
          </motion.div>
        </motion.div>

        {/* --- LAYER 2: QUOTE --- */}
        <motion.div
          className="absolute flex flex-col items-center justify-center text-center w-full px-4"
          style={{
            top: "50%",
            y: "-50%",
            opacity: quoteOpacity,
          }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-blue-900/40 p-6 md:p-12 rounded-3xl text-center shadow-[0_0_50px_-10px_rgba(76,29,149,0.3)] w-full max-w-3xl">
            <p className="text-xl md:text-3xl text-gray-100 italic font-serif leading-relaxed text-center">
              <SplitStaggeredText
                htmlContent={t(trans.quote, language)}
                scrollYProgress={scrollYProgress}
                range={[0.6, 0.8]}
                baseClass="italic text-center"
              />
            </p>

            <motion.p
              style={{ opacity: useTransform(scrollYProgress, [0.6, 0.7], [1, 0]) }}
              className="text-blue-400 mt-6 md:mt-8 font-bold tracking-widest uppercase text-xs md:text-base text-center"
            >
              — {t(trans.quoteSource, language)}
            </motion.p>
          </div>

          <motion.div
            style={{ opacity: quoteScrollHintOpacity }}
            className="absolute -bottom-24 left-0 right-0 text-center text-blue-400/60 animate-bounce text-xs md:text-sm font-medium tracking-widest uppercase"
          >
            Keep Scrolling
          </motion.div>
        </motion.div>

        {/* --- LAYER 3: FINAL DESCRIPTION & BUTTON --- */}
        <motion.div
          className="absolute flex flex-col items-center justify-center text-center w-full px-4 left-0 right-0 mx-auto"
          style={{
            top: "50%",
            y: "-50%",
            scale: finalScale,
            opacity: finalOpacity,
            pointerEvents: pointerEvents,
          }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-blue-900/40 p-6 py-8 md:p-12 rounded-3xl text-center shadow-[0_0_50px_-10px_rgba(76,29,149,0.3)] w-[90vw] max-w-2xl flex flex-col items-center gap-6 z-20">
            <div className="w-full max-h-[60vh] overflow-y-auto scrollbar-none px-2">
              <p className="text-gray-100 text-base md:text-xl leading-relaxed font-medium text-center drop-shadow-lg break-words whitespace-normal">
                {t(trans.description, language)}
              </p>
            </div>

            <Button
              onClick={handleStartClick}
              size="lg"
              className="shrink-0 bg-white text-black hover:bg-blue-50 hover:text-blue-900 text-lg md:text-xl px-10 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transform hover:scale-105 active:scale-95"
            >
              {t(trans.startJourney, language)}
              <ChevronRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}