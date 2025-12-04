import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { History, PlayCircle, Hash } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { reformationTranslations } from "../lib/i18n/reformationTranslations";
import SmartText from "./SmartText";
import { cn } from "./ui/utils";

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
      const scrollPosition = window.scrollY + 200; // Offset
      
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
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center max-w-4xl mx-auto"
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 relative">
          
          {/* Main Content Column */}
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="scroll-mt-32" 
              >
                {/* Section Header */}
                <div className="mb-12 border-l-4 border-green-600 pl-6">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-lg text-gray-300 leading-relaxed">
                    <SmartText>{section.description}</SmartText>
                  </div>
                </div>

                {/* Videos Grid */}
                <div className="space-y-16">
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
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4 text-green-400 text-sm font-bold uppercase tracking-wider">
                          <PlayCircle size={16} />
                          {video.channel}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {video.title}
                        </h3>
                        <div className="text-gray-300 leading-relaxed text-base border-t border-gray-800 pt-4">
                          <SmartText>{video.text}</SmartText>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Floating TOC Column (Hidden on mobile) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Hash size={16} className="text-green-400" />
                {t.tocTitle}
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200",
                      activeSection === section.id
                        ? "bg-green-900/30 text-green-400 font-medium translate-x-1"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
