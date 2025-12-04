import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { History, PlayCircle, Hash, List, X, ChevronRight } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { reformationTranslations } from "../lib/i18n/reformationTranslations";
import SmartText from "./SmartText";
import { cn } from "./ui/utils";

export default function ReformationHistory() {
  const { language } = useLanguage();
  const t = reformationTranslations[language];
  const [activeSection, setActiveSection] = useState("nature");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      // Offset: Trigger highlight when section is 30% up the viewport
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3); 
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-32 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Page Main Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-32 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-900/20 border border-green-800/50 mb-8 shadow-[0_0_30px_-5px_rgba(22,163,74,0.3)]">
            <History className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* GRID LAYOUT:
            - lg:grid-cols-[1fr_280px]: 2 columns on desktop (Content + Sidebar)
            - items-start: CRITICAL for sticky sidebar to work (prevents stretching)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 relative items-start">
          
          {/* LEFT: Main Content */}
          <div className="flex flex-col gap-64 pb-32"> {/* gap-64 is ~256px spacing */}
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
                {/* Topic Header */}
                <div className="mb-16 pl-8 border-l-4 border-green-600 flex flex-col gap-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {section.title}
                  </h2>
                  <div className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                    <SmartText>{section.description}</SmartText>
                  </div>
                </div>

                {/* Videos Group */}
                <div className="flex flex-col gap-24">
                  {section.videos.map((video) => (
                    <div 
                      key={video.id} 
                      className="group"
                    >
                      <div className="bg-gray-900/20 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-green-900/50 transition-all duration-500 shadow-2xl">
                        
                        {/* Embed */}
                        <div className="aspect-video w-full bg-black relative">
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

                        {/* Text */}
                        <div className="p-8 md:p-10 flex flex-col gap-4">
                          <div className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider">
                            <PlayCircle size={16} />
                            {video.channel}
                          </div>
                          <h3 className="text-2xl font-bold text-white leading-snug">
                            {video.title}
                          </h3>
                          <div className="text-gray-300 leading-relaxed text-lg border-t border-gray-800 pt-6">
                            <SmartText>{video.text}</SmartText>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Separator (Line) */}
                {idx < sections.length - 1 && (
                    <div className="mt-64 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent w-full" />
                )}

              </motion.section>
            ))}
          </div>

          {/* RIGHT: Desktop Floating Sidebar (ToC) */}
          <aside className="hidden lg:block sticky top-32 w-full">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-md shadow-xl flex flex-col gap-6">
                <h3 className="text-white font-semibold flex items-center gap-2 text-lg">
                    <Hash size={20} className="text-green-400" />
                    {t.tocTitle}
                </h3>
                <nav className="flex flex-col gap-1 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-800" />
                    
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                "block w-full text-left px-5 py-3 rounded-r-md text-sm transition-all duration-200 border-l-2 relative ml-[1px]",
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
          </aside>

        </div>
      </div>

      {/* MOBILE: Floating Action Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.4)] text-white hover:bg-green-700 transition-transform active:scale-95"
      >
        <List size={24} />
      </button>

      {/* MOBILE: Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-gray-900 border-l border-gray-800 z-50 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Hash size={20} className="text-green-400" />
                  {t.tocTitle}
                </h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {sections.map((section) => {
                   const isActive = activeSection === section.id;
                   return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "text-left py-3 px-4 rounded-lg text-sm transition-all flex items-center justify-between group",
                        isActive 
                          ? "bg-green-900/20 text-green-400 border border-green-900/50" 
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      )}
                    >
                      <span className="line-clamp-2">{section.title}</span>
                      {isActive && <ChevronRight size={16} />}
                    </button>
                   );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
