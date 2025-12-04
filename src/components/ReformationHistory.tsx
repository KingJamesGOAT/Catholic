import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { History, PlayCircle, Hash } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { reformationTranslations } from "../lib/i18n/reformationTranslations";
import SmartText from "./SmartText";
import { cn } from "./ui/utils";
import { Separator } from "./ui/separator"; // Ensure you have this component, or use <hr />

export default function ReformationHistory() {
  const { language } = useLanguage();
  const t = reformationTranslations[language];
  const [activeSection, setActiveSection] = useState("nature");

  // Helper for Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Video Data Structure
  const sections = [
    {
      id: "nature",
      title: t.natureTitle,
      description: t.natureDesc,
      videos: [
        {
          id: "V2QxA-7YLus",
          title: t.vid1Title,
          text: t.vid1Text,
          channel: "Brian Holdsworth"
        }
      ]
    },
    {
      id: "luther",
      title: t.lutherTitle,
      description: t.lutherDesc,
      videos: [
        {
          id: "SbBJCvbFRbk",
          title: t.vid2aTitle,
          text: t.vid2aText,
          channel: "Shameless Popery"
        },
        {
          id: "GT4Mc59Cmy4",
          title: t.vid2bTitle,
          text: t.vid2bText,
          channel: "Shameless Popery"
        }
      ]
    },
    {
      id: "myths",
      title: t.mythsTitle,
      description: t.mythsDesc,
      videos: [
        {
          id: "Cj6iVUKK_m0",
          title: t.vid3aTitle,
          text: t.vid3aText,
          channel: "Shameless Popery"
        },
        {
          id: "gl9h3lf1tWw",
          title: t.vid3bTitle,
          text: t.vid3bText,
          channel: "Counsel of Trent"
        }
      ]
    },
    {
      id: "modern",
      title: t.modernTitle,
      description: t.modernDesc,
      videos: [
        {
          id: "jPZMx0S4zeQ",
          title: t.vid4Title,
          text: t.vid4Text,
          channel: "Brian Holdsworth"
        }
      ]
    }
  ];

  // Scroll Spy for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Offset to trigger earlier
      const scrollPosition = window.scrollY + 300; 
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-16 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-900/30 border border-green-800 mb-6">
            <History className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Grid for Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 relative">
          
          {/* Main Content Column */}
          <div className="space-y-48 pb-32">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="scroll-mt-32 relative"
              >
                {/* Section Header */}
                <div className="mb-12 border-l-4 border-green-600 pl-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                    <SmartText>{section.description}</SmartText>
                  </div>
                </div>

                {/* Videos Grid */}
                <div className="space-y-20">
                  {section.videos.map((video) => (
                    <div 
                      key={video.id} 
                      className="bg-gray-900/20 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-green-900/50 transition-colors duration-300"
                    >
                      {/* Video Embed */}
                      <div className="aspect-video w-full bg-black relative group shadow-2xl">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full z-10 relative"
                        ></iframe>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-4 text-green-400 text-sm font-bold uppercase tracking-wider">
                          <PlayCircle size={16} />
                          {video.channel}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                          {video.title}
                        </h3>
                        <div className="text-gray-300 leading-relaxed text-lg border-t border-gray-800 pt-6">
                          <SmartText>{video.text}</SmartText>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Separator between sections (except last) */}
                {idx < sections.length - 1 && (
                    <div className="mt-48 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
                )}

              </motion.section>
            ))}
          </div>

          {/* Floating TOC Column (Hidden on mobile) */}
          <aside className="hidden lg:block h-full">
            <div className="sticky top-32 w-full">
                <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-md shadow-xl">
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2 text-lg">
                        <Hash size={18} className="text-green-400" />
                        {t.tocTitle}
                    </h3>
                    <nav className="space-y-2 relative">
                        {/* Active Indicator Line (Optional visual flair) */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />

                        {sections.map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={cn(
                                    "block w-full text-left px-4 py-2.5 rounded-md text-sm transition-all duration-200 relative border-l-2",
                                    isActive
                                        ? "border-green-500 bg-green-500/10 text-green-400 font-medium"
                                        : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {section.title}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
