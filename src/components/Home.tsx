import { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  MotionValue,
  animate,
} from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight, BookOpen, Scroll, Microscope, Church, Map } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { translations, t } from "../lib/i18n/translations";
import { useIsMobile } from "./ui/use-mobile";

interface HomeProps {
  onStart: () => void;
}

// ------------------------------------------------------------------
// 1. HELPER: WORD-AWARE SPLIT TEXT (Only for Title)
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
          return <span key={i} className="inline">{word.text}</span>;
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
                  style={{ scale, opacity, rotate, y, filter: useTransform(blur, (v) => `blur(${v})`) }}
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
// 2. PARTICLE ENGINE
// ------------------------------------------------------------------
type AnimationMode = 'normal' | 'implode' | 'void' | 'explode';

const ParticleCanvas = ({ mode }: { mode: AnimationMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const mouseRef = useRef({ x: -9999, y: -9999 });
  
  const starsRef = useRef<any[]>([]);
  const initializedRef = useRef(false);

  const modeRef = useRef(mode);
  useEffect(() => { modeRef.current = mode; }, [mode]);

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

    const PARTICLE_COUNT = isMobile ? 600 : 1200;
    const Z_DEPTH = 1000;
    const STAR_COLOR = "#3b82f6"; 
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (!initializedRef.current) {
        starsRef.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
            x: (Math.random() - 0.5) * width * 3,
            y: (Math.random() - 0.5) * height * 3,
            z: Math.random() * Z_DEPTH,
        }));
        initializedRef.current = true;
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    let lastTime = performance.now();
    const TARGET_FPS = 60;

    const render = (currentTime: number) => {
      const deltaTime = Math.max(0, currentTime - lastTime);
      lastTime = currentTime;
      const timeScale = deltaTime / (1000 / TARGET_FPS);
      const safeTimeScale = Math.min(timeScale, 2.0);

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

      if (modeRef.current === 'void') {
        requestAnimationFrame(render);
        return;
      }

      const stars = starsRef.current;
      
      stars.forEach((star) => {
        let speed = (isMobile ? 0.5 : 1.5) * safeTimeScale;
        const currentMode = modeRef.current;

        if (currentMode === 'implode') {
            star.z += speed * 15; 
        } else {
            star.z -= speed;
        }

        if (star.z <= 0) {
            star.z = Z_DEPTH;
            star.x = (Math.random() - 0.5) * width * 2;
            star.y = (Math.random() - 0.5) * height * 2;
        } else if (star.z > Z_DEPTH * 1.5) {
             star.z = 1;
             star.x = (Math.random() - 0.5) * width * 2;
             star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (!isMobile && (currentMode === 'normal' || currentMode === 'explode')) {
          const dx = px - mouseRef.current.x;
          const dy = py - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 100;

          if (dist < repulsionRadius) {
            const force = (1 - dist / repulsionRadius) * 10;
            const angle = Math.atan2(dy, dx);
            star.x += ((Math.cos(angle) * force) / k) * safeTimeScale;
            star.y += ((Math.sin(angle) * force) / k) * safeTimeScale;
          }
        }

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          let size = (1 - star.z / Z_DEPTH) * (isMobile ? 3 : 4.5);
          let alpha = 1 - star.z / Z_DEPTH;

          if (currentMode === 'implode') alpha *= 0.5;

          if (alpha > 0) {
            ctx.beginPath();
            ctx.fillStyle = STAR_COLOR;
            ctx.globalAlpha = Math.min(1, alpha);
            ctx.arc(px, py, Math.max(0, size / 2), 0, Math.PI * 2);
            ctx.fill();
          }
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
// 3. WARP STORY NODE
// ------------------------------------------------------------------
const WarpStoryNode = ({
  scrollYProgress,
  startRange,
  endRange,
  title,
  desc,
  icon: Icon,
  color,
}: {
  scrollYProgress: MotionValue<number>;
  startRange: number;
  endRange: number;
  title: string;
  desc: string;
  icon: any;
  color: string;
}) => {
  
  const span = endRange - startRange;
  const entryEnd = startRange + (span * 0.3); 
  const stayStart = entryEnd;
  const stayEnd = endRange - (span * 0.3);
  
  const scale = useTransform(
    scrollYProgress,
    [startRange, stayStart, stayEnd, endRange],
    [2.5, 1, 1, 0] 
  );

  const opacity = useTransform(
    scrollYProgress,
    [startRange, stayStart, stayEnd, endRange],
    [0, 1, 1, 0]
  );

  const iconClass = color === "white" 
    ? "text-white md:w-12 md:h-12" 
    : `text-${color}-500 md:w-12 md:h-12`;

  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute flex flex-col items-center justify-center text-center w-full px-6 md:px-4 top-1/2 -translate-y-1/2 pointer-events-none z-20"
    >
      <div className="relative mb-6 md:mb-8 p-6 rounded-full bg-black border border-white/20 z-10">
        <Icon size={32} className={iconClass} />
      </div>

      <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
        {title}
      </h2>
      
      <p className="text-gray-300 text-lg md:text-2xl max-w-xl mx-auto leading-relaxed bg-black/90 p-4 rounded-xl border border-white/10">
        {desc}
      </p>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// 4. MAIN COMPONENT
// ------------------------------------------------------------------
export default function Home({ onStart }: HomeProps) {
  const { language } = useLanguage();
  const trans = translations.home;
  const isMobile = useIsMobile();
  const scrollYProgress = useMotionValue(0);
  
  const [mode, setMode] = useState<AnimationMode>('normal');

  // --- MOBILE STATE ---
  const [mobileStage, setMobileStage] = useState(0);
  
  // Precise checkpoints for the mobile "slides"
  const MOBILE_STAGES = [
    0,      // 0: Title
    0.28,   // 1: Quote
    0.445,  // 2: Logic
    0.535,  // 3: History
    0.625,  // 4: Science
    0.715,  // 5: Beauty
    0.805,  // 6: Journey
    1.0     // 7: Final
  ];

  // --- DESKTOP SCROLLING ---
  useEffect(() => {
    if (isMobile) return; 

    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      scrollYProgress.set(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress, isMobile]);

  // --- MOBILE ANIMATION ---
  useEffect(() => {
    if (isMobile) {
        document.body.style.overflow = "hidden";
        
        animate(scrollYProgress, MOBILE_STAGES[mobileStage], { 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1] // Cubic-bezier for smooth landing
        });
    } else {
        document.body.style.overflow = "";
    }

    return () => { document.body.style.overflow = ""; };
  }, [isMobile, mobileStage, scrollYProgress]);

  // --- MOBILE TAP HANDLER ---
  const handleMobileTap = (e: React.MouseEvent) => {
      if (!isMobile) return;
      
      const { clientY } = e;
      const windowHeight = window.innerHeight;
      
      // Top 30% of screen goes BACK (up)
      if (clientY < windowHeight * 0.30) {
          setMobileStage(prev => Math.max(0, prev - 1));
      } 
      // Bottom 70% of screen goes FORWARD (down)
      else {
          if (mobileStage < MOBILE_STAGES.length - 1) {
              setMobileStage(prev => prev + 1);
          }
      }
  };

  // --- ANIMATION MODES ---
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.15) {
        setMode('normal');
      } else if (latest < 0.40) {
        setMode('implode');     
      } else if (latest < 0.85) { 
        setMode('void');        
      } else {
        setMode('explode');     
      }
    });
  }, [scrollYProgress]);

  const handleStartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onStart();
  };

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0.15, 0.20, 0.36, 0.40], [0, 1, 1, 0]); 
  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.85, 0.98], [0, 1]);

  const [pointerEvents, setPointerEvents] = useState<"none" | "auto">("none");
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPointerEvents(latest > 0.9 ? "auto" : "none");
    });
  }, [scrollYProgress]);

  return (
    <div 
        className={isMobile ? "fixed inset-0 bg-black overflow-hidden touch-manipulation" : "relative h-[950vh] bg-black"}
        onClick={handleMobileTap}
    >

      {/* --- PROGRESS BAR --- */}
      {isMobile ? (
        <motion.div
          className="fixed top-16 md:top-20 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: mobileStage / (MOBILE_STAGES.length - 1) 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ) : (
        <motion.div
          className="fixed top-16 md:top-20 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      <ParticleCanvas mode={mode} />

      <div className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none overflow-hidden">
        
        {/* --- LAYER 1: TITLE --- */}
        <motion.div
          key={`title-container-${language}`}
          className="absolute flex flex-col items-center justify-center text-center w-full px-4"
          style={{ opacity: titleOpacity, scale: useTransform(scrollYProgress, [0, 0.15], [1, 0.8]) }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl text-center max-w-4xl mx-auto">
            <SplitStaggeredText
              key={`title-text-${language}`}
              htmlContent={t(trans.title, language)}
              scrollYProgress={scrollYProgress}
              range={[0, 0.15]}
            />
          </h1>
          <motion.div
            style={{ opacity: titleOpacity }}
            className="absolute -bottom-32 left-0 right-0 text-center text-blue-400/60 animate-bounce text-xs md:text-sm font-medium tracking-widest uppercase"
          >
             {isMobile ? t(trans.tapToBegin, language) : t(trans.scrollToBegin, language)}
          </motion.div>
        </motion.div>

        {/* --- LAYER 2: QUOTE --- */}
        <motion.div
          key={`quote-container-${language}`}
          className="absolute flex flex-col items-center justify-center text-center w-full px-4"
          style={{ top: isMobile ? "50%" : "55%", y: "-50%", opacity: quoteOpacity }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-blue-900/40 p-6 md:p-12 rounded-3xl text-center shadow-[0_0_50px_-10px_rgba(76,29,149,0.3)] w-full max-w-3xl">
            <div 
              className="text-xl md:text-3xl text-gray-100 italic font-serif leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: t(trans.quote, language) }}
            />
            <p className="text-blue-400 mt-6 md:mt-8 font-bold tracking-widest uppercase text-xs md:text-base text-center">
              — {t(trans.quoteSource, language)}
            </p>
            <div className="absolute -bottom-16 left-0 right-0 text-center text-blue-400/60 animate-bounce text-xs font-medium uppercase">
               {isMobile ? t(trans.tapToContinue, language) : t(trans.keepScrolling, language)}
            </div>
          </div>
        </motion.div>

        {/* --- LAYER 3: THE WARP TUNNEL --- */}
        
        <WarpStoryNode 
          scrollYProgress={scrollYProgress}
          startRange={0.40} endRange={0.49}
          title={t(trans.logicTitle, language)}
          desc={t(trans.logicDesc, language)}
          icon={BookOpen}
          color="white"
        />

        <WarpStoryNode 
          scrollYProgress={scrollYProgress}
          startRange={0.49} endRange={0.58}
          title={t(trans.historyTitle, language)}
          desc={t(trans.historyDesc, language)}
          icon={Scroll}
          color="amber"
        />

        <WarpStoryNode 
          scrollYProgress={scrollYProgress}
          startRange={0.58} endRange={0.67}
          title={t(trans.scienceTitle, language)}
          desc={t(trans.scienceDesc, language)}
          icon={Microscope}
          color="cyan"
        />

        <WarpStoryNode 
          scrollYProgress={scrollYProgress}
          startRange={0.67} endRange={0.76}
          title={t(trans.beautyTitle, language)}
          desc={t(trans.beautyDesc, language)}
          icon={Church}
          color="yellow" 
        />

        <WarpStoryNode 
          scrollYProgress={scrollYProgress}
          startRange={0.76} endRange={0.85}
          title={t(trans.journeyTitle, language)}
          desc={t(trans.journeyDesc, language)}
          icon={Map}
          color="purple"
        />

        {/* --- LAYER 4: FINALE --- */}
        <motion.div
          key={`final-container-${language}`}
          className="absolute flex flex-col items-center justify-center text-center w-full px-4 left-0 right-0 mx-auto"
          style={{
            top: isMobile ? "50%" : "55%",
            y: "-50%",
            scale: finalScale,
            opacity: finalOpacity,
            pointerEvents: pointerEvents,
          }}
        >
          <div className="bg-black/90 border border-blue-900/40 p-6 py-8 md:p-12 rounded-3xl text-center shadow-[0_0_50px_-10px_rgba(76,29,149,0.3)] w-[90vw] max-w-2xl flex flex-col items-center gap-6 z-20">
            <div className="w-full max-h-[60vh] overflow-y-auto scrollbar-none px-2">
              <p className="text-gray-100 text-base md:text-xl leading-relaxed font-medium text-center drop-shadow-lg break-words whitespace-normal">
                {t(trans.description, language)}
              </p>
            </div>

            <Button
              onClick={handleStartClick}
              size="lg"
              className="shrink-0 bg-white text-black hover:bg-blue-50 hover:text-blue-900 text-lg md:text-xl px-10 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transform hover:scale-105 active:scale-95 pointer-events-auto"
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
