// kingjamesgoat/catholic/Catholic-9fa91d3b7a7dc54d4c122777284ed3a1f92c5303/src/components/EarlyChurch.tsx

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, BookOpen, Cross, Users, Award, ChevronDown, ChevronUp, Church } from 'lucide-react';
import { Separator } from './ui/separator';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { translations, t } from '../lib/i18n/translations';
import { themeTranslations } from '../lib/i18n/earlyChurchTranslations';
import { earlyChurchDocumentsData } from '../lib/i18n/earlyChurchData';

interface Quote {
  text: string;
  reference: string;
  theme?: string;
}

interface Document {
  title: string;
  author: string;
  date: string;
  summary: string;
  primaryQuote: Quote;
  additionalQuotes?: Quote[];
  pdfFile: string;
  themes?: string[];
}

// Helper function to get localized documents
function getLocalizedDocuments(lang: string): Document[] {
  return earlyChurchDocumentsData.map(doc => ({
    title: doc.title[lang as 'en' | 'fr' | 'es' | 'de'],
    author: doc.author[lang as 'en' | 'fr' | 'es' | 'de'],
    date: doc.date[lang as 'en' | 'fr' | 'es' | 'de'],
    summary: doc.summary[lang as 'en' | 'fr' | 'es' | 'de'],
    primaryQuote: {
      text: doc.primaryQuote.text[lang as 'en' | 'fr' | 'es' | 'de'],
      reference: doc.primaryQuote.reference[lang as 'en' | 'fr' | 'es' | 'de'],
      theme: doc.primaryQuote.theme
    },
    additionalQuotes: doc.additionalQuotes?.map(quote => ({
      text: quote.text[lang as 'en' | 'fr' | 'es' | 'de'],
      reference: quote.reference[lang as 'en' | 'fr' | 'es' | 'de'],
      theme: quote.theme
    })),
    pdfFile: doc.pdfFile,
    themes: doc.themes
  }));
}

const themeIcons: { [key: string]: any } = {
  'Baptism': BookOpen,
  'Eucharist': Cross,
  'Authority': Award,
  'Unity': Users,
  'Succession': Award,
  'Faith': Cross,
  'Martyrdom': Cross,
  'Tradition': BookOpen,
  'Catholic Church': Church,
  'Primacy': Award,
  'Deuterocanon': BookOpen,
  'Mary': Users,
  'Rock': Award
};

function TimelineCard({ document, index }: { document: Document; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;
  const [showAdditional, setShowAdditional] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  return (
    <div className="relative flex items-center justify-center w-full mb-24">
      {/* Timeline dot - Desktop center */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10 hidden md:block"
      />

      {/* Timeline dot - Mobile left */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-4 w-3 h-3 rounded-full bg-blue-500 border-2 border-black z-10 md:hidden"
      />

      {/* Connecting line - Desktop */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent top-full hidden md:block"
        style={{ originTop: 'top' }}
      />

      {/* Connecting line - Mobile */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-4 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent top-full md:hidden"
        style={{ originTop: 'top' }}
      />

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.6 }}
        className={`w-full pl-12 md:pl-0 md:w-[calc(50%-3rem)] ${
          isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
        }`}
      >
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-blue-900/20">
          {/* Date badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full text-xs text-blue-300 mb-4"
          >
            {document.date}
          </motion.div>

          {/* Title and Author */}
          <h3 className="text-white mb-2">{document.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{t(trans.earlyChurch.by, language)} {document.author}</p>

          {/* Themes */}
          {document.themes && (
            <div className="flex flex-wrap gap-2 mb-4">
              {document.themes.map((theme) => {
                const Icon = themeIcons[theme] || BookOpen;
                const translatedTheme = themeTranslations[theme] ? t(themeTranslations[theme], language) : theme;
                return (
                  <div
                    key={theme}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400"
                  >
                    <Icon size={12} />
                    <span>{translatedTheme}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Summary */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {document.summary}
          </p>

          {/* Primary Quote */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-black/40 border-l-4 border-blue-600 p-4 mb-4 rounded-r"
          >
            <p className="text-gray-300 italic text-sm mb-2">
              "{document.primaryQuote.text}"
            </p>
            <p className="text-gray-500 text-xs">— {document.primaryQuote.reference}</p>
            {document.primaryQuote.theme && (
              <span className="inline-block mt-2 px-2 py-1 bg-blue-900/30 rounded text-xs text-blue-400">
                {themeTranslations[document.primaryQuote.theme] ? t(themeTranslations[document.primaryQuote.theme], language) : document.primaryQuote.theme}
              </span>
            )}
          </motion.div>

          {/* Additional Quotes */}
          {document.additionalQuotes && document.additionalQuotes.length > 0 && (
            <div className="mb-4">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-3"
              >
                {showAdditional ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                <span>
                  {showAdditional ? t(trans.earlyChurch.hideAdditional, language) : t(trans.earlyChurch.showAdditional, language)} {document.additionalQuotes.length} {document.additionalQuotes.length > 1 ? t(trans.earlyChurch.additionalQuotes, language) : t(trans.earlyChurch.additionalQuote, language)}
                </span>
              </button>

              <AnimatePresence>
                {showAdditional && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {document.additionalQuotes.map((quote, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="bg-black/40 border-l-4 border-gray-600 p-4 rounded-r"
                      >
                        <p className="text-gray-300 italic text-sm mb-2">
                          "{quote.text}"
                        </p>
                        <p className="text-gray-500 text-xs">— {quote.reference}</p>
                        {quote.theme && (
                          <span className="inline-block mt-2 px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400">
                            {themeTranslations[quote.theme] ? t(themeTranslations[quote.theme], language) : quote.theme}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Download button - REMOVED */}
        </div>
      </motion.div>
    </div>
  );
}

export default function EarlyChurch() {
  const timelineRef = useRef(null);
  const { language } = useLanguage();
  const trans = translations;
  const documents = getLocalizedDocuments(language);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 via-black to-black pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* MODIFIED: Increased font size and set to extra bold */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t(trans.earlyChurch.title, language)}</h1>
            <p className="text-xl text-gray-400 mb-6">
              {t(trans.earlyChurch.subtitle, language)}
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 leading-relaxed">
                {t(trans.earlyChurch.intro, language)}
              </p>
            </div>
          </motion.div>

          {/* Decorative separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative px-4 pb-32" ref={timelineRef}>
        <div className="container mx-auto max-w-6xl">
          {/* Central vertical line - desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-800 to-transparent top-0 hidden md:block" />
          
          {/* Left vertical line - mobile */}
          <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-800 to-transparent top-0 md:hidden" />

          {/* Timeline cards */}
          <div className="relative">
            {documents.map((document, index) => (
              <TimelineCard key={document.title} document={document} index={index} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center mt-12"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-black" />
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <Separator className="mb-8 bg-gray-800" />
            <p className="text-gray-400 leading-relaxed mb-4">
              {t(trans.earlyChurch.conclusion, language)}
            </p>
            <p className="text-gray-500 text-sm italic">
              {t(trans.earlyChurch.conclusionQuote, language)}
            </p>
            <p className="text-gray-600 text-xs mt-2">— {t(trans.earlyChurch.conclusionAttribution, language)}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}