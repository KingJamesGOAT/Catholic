import { motion } from "motion/react";
import { History, PlayCircle } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { reformationTranslations } from "../lib/i18n/reformationTranslations";
import SmartText from "./SmartText";
import TableOfContents from "./Journey/TableOfContents";

export default function ReformationHistory() {
  const { language } = useLanguage();
  const t = reformationTranslations[language];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          channel: "Brian Holdsworth",
        },
      ],
    },
    {
      id: "luther",
      title: t.lutherTitle,
      description: t.lutherDesc,
      videos: [
        {
          id: "gl9h3lf1tWw",
          title: t.vid2aTitle,
          text: t.vid2aText,
          channel: "Shameless Popery",
        },
        {
          id: "GT4Mc59Cmy4",
          title: t.vid2bTitle,
          text: t.vid2bText,
          channel: "Shameless Popery",
        },
      ],
    },
    // NEW SECTION: Faith Alone
    {
      id: "faith",
      title: t.faithTitle,
      description: t.faithDesc,
      videos: [
        {
          id: "Mki3MBhbksE",
          title: t.vidFaithTitle,
          text: t.vidFaithText,
          channel: "Keith Nester",
        },
      ],
    },
    // NEW SECTION: Fruit of Division
    {
      id: "division",
      title: t.divisionTitle,
      description: t.divisionDesc,
      videos: [
        {
          id: "GlSkKi3chQA",
          title: t.vidDivisionTitle,
          text: t.vidDivisionText,
          channel: "Shameless Popery",
        },
      ],
    },
    {
      id: "myths",
      title: t.mythsTitle,
      description: t.mythsDesc,
      videos: [
        {
          id: "SbBJCvbFRbk",
          title: t.vid3aTitle,
          text: t.vid3aText,
          channel: "Shameless Popery",
        },
        {
          id: "Cj6iVUKK_m0",
          title: t.vid3bTitle,
          text: t.vid3bText,
          channel: "Counsel of Trent",
        },
      ],
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
          channel: "Brian Holdsworth",
        },
      ],
    },
  ];

  return (
    <article className="min-h-screen bg-black text-gray-100 pt-24 pb-32 relative">
      <TableOfContents />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-32 text-center"
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

        {/* Sections */}
        <div className="flex flex-col gap-y-72">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="scroll-mt-32"
            >
              {/* Header + Description */}
              <div className="pt-24 pb-12">
                <div className="border-l-4 border-green-600 pl-8 py-2">
                  <h2
                    id={section.id}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                  >
                    {section.title}
                  </h2>
                  <div className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                    <SmartText>{section.description}</SmartText>
                  </div>
                </div>
              </div>

              {/* Videos */}
              <div>
                {section.videos.map((video, index) => (
                  <div key={video.id}>
                    {/* VIDEO CARD */}
                    <div className="group">
                      <div className="bg-gray-900/20 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-900/50 transition-all duration-500 shadow-2xl">
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
                    </div>

                    {/* SPACER BLOCK */}
                    {index < section.videos.length - 1 && (
                      <div className="h-48 w-full bg-black my-8" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </article>
  );
}
