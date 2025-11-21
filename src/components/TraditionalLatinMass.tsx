import { motion } from "framer-motion";
import { ArrowLeft, Play, BookOpen, Heart, Star } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { tlmTranslations } from "../lib/i18n/tlmTranslations";

interface TraditionalLatinMassProps {
  onBack: () => void;
}

export default function TraditionalLatinMass({ onBack }: TraditionalLatinMassProps) {
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
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} /> 
            <span>{trans.backButton[language as keyof typeof trans.backButton]}</span>
          </button>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {trans.title[language as keyof typeof trans.title]}
          </h1>
          <p className="text-xl text-amber-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
            {trans.subtitle[language as keyof typeof trans.subtitle]}
          </p>
        </motion.div>

        {/* Main Intro Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-16 bg-gray-900 group"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/p8m8Fq8eKXI"
            title="Intro to Latin Mass"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Introduction Text */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-6">
            {trans.intro.title[language as keyof typeof trans.intro.title]}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {trans.intro.description[language as keyof typeof trans.intro.description]}
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
              <div className="bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-900/30 transition-colors">
                <pillar.icon className="text-amber-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title[language as keyof typeof pillar.title]}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.desc[language as keyof typeof pillar.desc]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Series Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {trans.series.title[language as keyof typeof trans.series.title]}
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
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`Episode ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 px-1">
                  {video.title[language as keyof typeof video.title]}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deep Dive Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-medium">
                <Play size={14} className="fill-current" /> 
                {trans.deepDive.title[language as keyof typeof trans.deepDive.title]}
              </div>
              <h2 className="text-3xl font-bold text-white">
                The Latin Mass is Not Going Away
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {trans.deepDive.desc[language as keyof typeof trans.deepDive.desc]}
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/69evrQSTbEA"
                title="Deep Dive"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}