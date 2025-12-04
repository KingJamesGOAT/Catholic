import { motion } from "motion/react";
import { ArrowLeft, History, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { reformationTranslations } from "../lib/i18n/reformationTranslations";
import SmartText from "./SmartText";

export default function ReformationHistory() {
  const { language } = useLanguage();
  const t = reformationTranslations[language];

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
          insight: t.vid1Insight,
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
          insight: t.vid2aInsight,
          channel: "Shameless Popery"
        },
        {
          id: "GT4Mc59Cmy4",
          title: t.vid2bTitle,
          insight: t.vid2bInsight,
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
          insight: t.vid3aInsight,
          channel: "Shameless Popery"
        },
        {
          id: "gl9h3lf1tWw",
          title: t.vid3bTitle,
          insight: t.vid3bInsight,
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
          insight: t.vid4Insight,
          channel: "Brian Holdsworth"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-900/30 border border-green-800 mb-6">
            <History className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Sections Loop */}
        <div className="space-y-24">
          {sections.map((section, idx) => (
            <motion.section
              key={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Section Header */}
              <div className="mb-8 border-l-4 border-green-600 pl-6">
                <h2 className="text-3xl font-bold text-white mb-3">
                  {section.title}
                </h2>
                <div className="text-lg text-gray-300">
                  <SmartText>{section.description}</SmartText>
                </div>
              </div>

              {/* Videos Grid */}
              <div className="grid gap-8">
                {section.videos.map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-green-900/50 transition-colors duration-300"
                  >
                    {/* Video Embed */}
                    <div className="aspect-video w-full bg-black relative group">
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
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-green-400 text-sm font-medium uppercase tracking-wider">
                        <PlayCircle size={16} />
                        {video.channel}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {video.title}
                      </h3>
                      <div className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-gray-800 pt-3 mt-2">
                        <span className="font-semibold text-gray-300 block mb-1">Key Insight:</span>
                        <SmartText>{video.insight}</SmartText>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
        
        {/* Back Button */}
        <div className="mt-24 flex justify-center">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-6 text-lg rounded-full"
          >
            <ArrowLeft size={20} />
            {t.backButton}
          </Button>
        </div>

      </div>
    </div>
  );
}
