import SmartText from "../SmartText";
import React from "react";
import { motion } from "motion/react"; // Added
import { Microscope, ArrowRight } from "lucide-react"; // Added
import TopicLayout from "../Journey/TopicLayout";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

type TopicComponentProps = {
  onComplete?: () => void;
  onScienceClick?: () => void;
};

export default function WhatIsWorship({
  onScienceClick,
}: TopicComponentProps) {
  const { language } = useLanguage();
  const trans = translations.whatIsWorship;

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      topicId="what-is-worship"
    >
      {/* Hero Quote */}
      <div className="mb-12 p-6 bg-blue-900/20 border border-blue-800/50 rounded-xl italic text-center text-lg md:text-xl text-blue-100">
        "{t(trans.quote, language)}"
        <div className="mt-4 text-sm text-blue-400 not-italic font-semibold">
          — {t(trans.quoteSource, language)}
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-6 text-gray-300 mb-12">
        <p className="text-lg leading-relaxed">
          <SmartText
            ignore={["Worship", "Sacrifice", "Latria", "Dulia"]}
          >
            {t(trans.intro.p1, language)}
          </SmartText>
        </p>
        <p className="text-lg leading-relaxed">
          <SmartText ignore={["Worship"]}>
            {t(trans.intro.p2, language)}
          </SmartText>
        </p>
      </div>

      {/* Video Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/lfXY4zZGTVw"
            title="The Protestant Worship Problem"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/V_qKh5z_nqY"
            title="Is Worship Supposed to Look Like This?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Section 1: Insight - Synagogue vs Temple */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            I
          </span>
          {t(trans.section1.title, language)}
        </h2>
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 space-y-4">
          <p>{t(trans.section1.p1, language)}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-white font-semibold mb-2">
                {t(trans.section1.synagogueTitle, language)}
              </h4>
              <p className="text-sm text-gray-400">
                {t(trans.section1.synagogueDesc, language)}
              </p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-white font-semibold mb-2">
                {t(trans.section1.templeTitle, language)}
              </h4>
              <p className="text-sm text-gray-400">
                {t(trans.section1.templeDesc, language)}
              </p>
            </div>
          </div>
          <p className="mt-4 italic text-gray-400">
            {t(trans.section1.conclusion, language)}
          </p>
        </div>
      </section>

      {/* Section 2: Instituted by Christ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            II
          </span>
          {t(trans.section2.title, language)}
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>{t(trans.section2.p1, language)}</p>
          <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-400 my-4">
            "{t(trans.section2.lukeQuote, language)}"
          </blockquote>
          <p>{t(trans.section2.p2, language)}</p>
          <p className="text-blue-300 italic">
            "{t(trans.section2.cccQuote, language)}"
          </p>
        </div>
      </section>

      {/* Section 3: Making Calvary Present */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            III
          </span>
          {t(trans.section3.title, language)}
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>{t(trans.section3.p1, language)}</p>
          <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-400 my-4">
            "{t(trans.section3.cccQuote, language)}"
          </blockquote>
          <p>{t(trans.section3.p2, language)}</p>
        </div>
      </section>

      {/* Section 4: Sunday is Lord's Day */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            IV
          </span>
          {t(trans.section4.title, language)}
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>{t(trans.section4.p1, language)}</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>{t(trans.section4.l1, language)}</li>
            <li>{t(trans.section4.l2, language)}</li>
            <li>{t(trans.section4.l3, language)}</li>
          </ul>
          <p className="text-blue-300 italic">
            "{t(trans.section4.cccQuote, language)}"
          </p>
        </div>
      </section>

      {/* Video Section 2 */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-4">
          {t(trans.video2Title, language)}
        </h3>
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/lg4S1VYac-Y"
            title="Do Protestants Really Worship God?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Section 5: Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            V
          </span>
          {t(trans.section5.title, language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">
              {t(trans.section5.liturgyWord, language)}
            </h3>
            <p className="text-gray-400 text-sm">
              {t(trans.section5.liturgyWordDesc, language)}
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">
              {t(trans.section5.liturgyEucharist, language)}
            </h3>
            <p className="text-gray-400 text-sm">
              {t(trans.section5.liturgyEucharistDesc, language)}
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-400 text-center italic">
          {t(trans.section5.emmausRef, language)}
        </p>
      </section>

      {/* Section 6: Personal Encounter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            VI
          </span>
          {t(trans.section6.title, language)}
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>{t(trans.section6.p1, language)}</p>
          <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-400 my-4">
            "{t(trans.section6.johnQuote, language)}"
          </blockquote>
          <p>{t(trans.section6.p2, language)}</p>
        </div>
      </section>

      {/* Section 7: Communion with Church & Spiritual Strength */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-sm">
            VII
          </span>
          {t(trans.section7.title, language)}
        </h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <p className="mb-2 font-semibold text-white">
              {t(trans.section7.communionTitle, language)}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>{t(trans.section7.c1, language)}</li>
              <li>{t(trans.section7.c2, language)}</li>
              <li>{t(trans.section7.c3, language)}</li>
            </ul>
            <p className="text-blue-300 italic mt-2">
              "{t(trans.section7.cccQuote, language)}"
            </p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-white">
              {t(trans.section7.strengthTitle, language)}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>{t(trans.section7.s1, language)}</li>
              <li>{t(trans.section7.s2, language)}</li>
              <li>{t(trans.section7.s3, language)}</li>
              <li>{t(trans.section7.s4, language)}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8 text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-4">
          {t(trans.conclusion.title, language)}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {t(trans.conclusion.p1, language)}
        </p>
        <p className="text-xl text-blue-200 font-serif italic">
          "{t(trans.conclusion.quote, language)}"
        </p>
        <p className="text-sm text-blue-400 mt-2">
          {t(trans.conclusion.source, language)}
        </p>
      </div>

      {/* --- NEW SECTION: Eucharistic Miracles --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-gray-900 to-blue-950/20 border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg"
      >
        <div className="p-4 bg-blue-900/20 rounded-full hidden md:block">
          <Microscope className="text-blue-400" size={32} />
        </div>
        
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <Microscope className="text-blue-400 md:hidden" size={24} />
            {t(trans.eucharisticMiracles.title, language)}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {t(trans.eucharisticMiracles.text, language)}
          </p>
        </div>

        <button
          onClick={onScienceClick}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20 whitespace-nowrap group"
        >
          {t(trans.eucharisticMiracles.button, language)}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </motion.div>

      {/* Bridge */}
      <div className="bg-gray-900/50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
        <h3 className="text-lg font-bold text-white mb-2">
          {t(trans.bridge.title, language)}
        </h3>
        <p className="text-gray-300">
          {t(trans.bridge.p1, language)}
        </p>
      </div>
    </TopicLayout>
  );
}