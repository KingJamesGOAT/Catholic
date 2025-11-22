import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  BookOpen,
  Heart,
  Star,
  Flame,
  ShieldCheck,
  Hourglass,
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { tlmTranslations } from "../lib/i18n/tlmTranslations";

interface TraditionalLatinMassProps {
  onBack: () => void;
}

// Helper component for lazy loading videos with high-res thumbnails
function VideoFacade({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play
            className="ml-1 text-black fill-black"
            size={32}
          />
        </div>
      </div>
    </div>
  );
}

export default function TraditionalLatinMass({
  onBack,
}: TraditionalLatinMassProps) {
  const { language } = useLanguage();
  const trans = tlmTranslations;

  const pillars = [
    {
      icon: Star,
      title: trans.pillars.adOrientem.title,
      desc: trans.pillars.adOrientem.desc,
    },
    {
      icon: Heart,
      title: trans.pillars.silence.title,
      desc: trans.pillars.silence.desc,
    },
    {
      icon: BookOpen,
      title: trans.pillars.universal.title,
      desc: trans.pillars.universal.desc,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {trans.title[language as keyof typeof trans.title]}
          </h1>
          <p className="text-xl text-[#fe9a00] font-serif italic max-w-2xl mx-auto leading-relaxed">
            {
              trans.subtitle[
                language as keyof typeof trans.subtitle
              ]
            }
          </p>
        </motion.div>

        {/* Main Intro Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-16 bg-gray-900 group"
        >
          <VideoFacade
            id="p8m8Fq8eKXI"
            title="Intro to Latin Mass"
          />
        </motion.div>

        {/* Introduction Text */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-6">
            {
              trans.intro.title[
                language as keyof typeof trans.intro.title
              ]
            }
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {
              trans.intro.description[
                language as keyof typeof trans.intro.description
              ]
            }
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 p-8 rounded-xl text-center hover:bg-gray-900/50 transition-colors group"
            >
              <div className="bg-[#fe9a00]/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fe9a00]/30 transition-colors">
                <pillar.icon
                  className="text-[#fe9a00]"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {
                  pillar.title[
                    language as keyof typeof pillar.title
                  ]
                }
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {
                  pillar.desc[
                    language as keyof typeof pillar.desc
                  ]
                }
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Series Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {
              trans.series.title[
                language as keyof typeof trans.series.title
              ]
            }
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "-mIM_CrCYY4", title: trans.series.part1 },
              { id: "8y1cABhLc2o", title: trans.series.part2 },
              { id: "5aPbZj2C5_I", title: trans.series.part3 },
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-800 shadow-lg bg-gray-900">
                  <VideoFacade
                    id={video.id}
                    title={String(video.title)}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 px-1">
                  {
                    video.title[
                      language as keyof typeof video.title
                    ]
                  }
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

       {/* Deep Dive Section - Expanded with Insights */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // UPDATED: Changed p-8 to p-4 on mobile so the video is bigger/wider
            className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-4 md:p-12"
          >
            <div className="flex flex-col gap-12">
              
              {/* Top Section: Title and Video (Full Width) */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium" 
                    style={{ 
                      backgroundColor: 'rgba(254, 154, 0, 0.1)', 
                      borderColor: 'rgba(254, 154, 0, 0.3)', 
                      color: '#fe9a00' 
                    }}>
                    <Play size={14} className="fill-current" /> 
                    {trans.deepDive.title[language as keyof typeof trans.deepDive.title]}
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {trans.deepDive.videoTitle[language as keyof typeof trans.deepDive.videoTitle]}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {trans.deepDive.desc[language as keyof typeof trans.deepDive.desc]}
                  </p>
                </div>

                {/* Video container */}
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
                  <VideoFacade id="69evrQSTbEA" title="Deep Dive" />
                </div>
              </div>

              {/* Text Analysis - Grid on PC (Horizontal), Stack on Mobile */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1: Organic Development */}
                <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50 hover:border-[#fe9a00]/30 transition-colors duration-300 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#fe9a00]/10 flex items-center justify-center">
                      <Hourglass className="text-[#fe9a00]" size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">
                        {trans.insights.organic.title[language as keyof typeof trans.insights.organic.title]}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {trans.insights.organic.desc[language as keyof typeof trans.insights.organic.desc]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Autoimmune Condition */}
                <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50 hover:border-[#fe9a00]/30 transition-colors duration-300 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#fe9a00]/10 flex items-center justify-center">
                      <ShieldCheck className="text-[#fe9a00]" size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">
                        {trans.insights.autoimmune.title[language as keyof typeof trans.insights.autoimmune.title]}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {trans.insights.autoimmune.desc[language as keyof typeof trans.insights.autoimmune.desc]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: True Participation */}
                <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50 hover:border-[#fe9a00]/30 transition-colors duration-300 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#fe9a00]/10 flex items-center justify-center">
                      <Flame className="text-[#fe9a00]" size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">
                        {trans.insights.participation.title[language as keyof typeof trans.insights.participation.title]}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {trans.insights.participation.desc[language as keyof typeof trans.insights.participation.desc]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>


        
      </div>
    </div>
  );
}