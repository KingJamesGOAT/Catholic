import { useState } from 'react';
import { motion } from 'motion/react';
import { Book, Users, ScrollText, Quote } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { translations, t } from '../lib/i18n/translations';
import { doctrineData } from '../lib/i18n/doctrineData';
// FIXED: Import the correct named export 'earlyChurchTopics'
import { earlyChurchTopics } from '../lib/i18n/earlyChurchData';
// FIXED: Import as a named export with curly braces
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function DoctrineExplorer() {
  const { language } = useLanguage();
  const [selectedId, setSelectedId] = useState(doctrineData[0].id);

  const currentDoctrine = doctrineData.find(d => d.id === selectedId) || doctrineData[0];
  
  // Get Bible Verses
  const bibleVerses = currentDoctrine.verses[language as keyof typeof currentDoctrine.verses] || currentDoctrine.verses['en'] || [];

  // Get Fathers Quotes
  // FIXED: Logic updated to find the specific topic by ID, then get its quotes
  // Note: Ensure the 'relatedTag' in doctrineData.ts matches the 'id' in earlyChurchData.ts
  const matchedTopic = earlyChurchTopics.find(topic => topic.id === currentDoctrine.relatedTag);
  const fathersQuotes = matchedTopic ? matchedTopic.quotes : [];

  return (
    <section className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-400 mb-4"
          >
            <ScrollText size={16} />
            <span className="text-sm font-medium uppercase tracking-wider">
              {t(translations.nav.scriptureFathers, language)}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            One Faith, One Voice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Select a topic to see the unbroken continuity between the Bible and the Early Church.
          </motion.p>
        </div>

        {/* --- Buttons Bar (Scrollable) --- */}
        <div className="mb-12 -mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide flex justify-start md:justify-center">
          <div className="flex gap-3">
            {doctrineData.map((d) => {
              const isSelected = selectedId === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className={`
                    flex flex-col items-center justify-center px-5 py-3 rounded-xl border transition-all duration-200 min-w-[140px] shrink-0
                    ${isSelected 
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/50 scale-105' 
                      : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-gray-200'}
                  `}
                >
                  <span className="font-bold text-sm md:text-base whitespace-nowrap">
                    {t(d.title, language)}
                  </span>
                  <span className={`text-[10px] md:text-xs mt-1 ${isSelected ? 'text-indigo-200' : 'text-gray-600'}`}>
                    {t(d.subtitle, language)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Split View --- */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Scripture */}
          <motion.div 
            key={`scripture-${selectedId}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-yellow-900/10 to-transparent rounded-3xl p-6 md:p-8 border border-yellow-900/30"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-yellow-900/30 pb-4">
              <div className="p-3 bg-yellow-600/20 rounded-xl border border-yellow-600/50">
                <Book className="text-yellow-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sacred Scripture</h3>
                <p className="text-yellow-500/60 text-sm font-medium uppercase tracking-wide">The Written Word</p>
              </div>
            </div>

            <div className="space-y-6">
              {bibleVerses.map((verse, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-yellow-800/50 rounded-full group-hover:bg-yellow-500 transition-colors" />
                  <div className="pl-6">
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-serif italic">
                      "{verse.text}"
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-px flex-1 bg-yellow-900/30" />
                      <span className="text-yellow-500 font-bold font-mono text-sm tracking-wide">
                        {verse.book} {verse.chapter}:{verse.verse}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {bibleVerses.length === 0 && (
                <p className="text-gray-500 text-center italic py-8">Translation pending for this language.</p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Church Fathers */}
          <motion.div 
            key={`fathers-${selectedId}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl p-6 md:p-8 border border-blue-900/30"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-blue-900/30 pb-4">
              <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-600/50">
                <Users className="text-blue-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">The Early Church</h3>
                <p className="text-blue-500/60 text-sm font-medium uppercase tracking-wide">Living Tradition (AD 33-400)</p>
              </div>
            </div>

            <div className="space-y-6 max-h-[800px] overflow-y-auto custom-scrollbar pr-2">
              {fathersQuotes.length > 0 ? (
                fathersQuotes.map((entry) => (
                  <div key={entry.id} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-blue-800 hover:bg-gray-900 transition-all duration-300">
                    
                    <div className="flex gap-4 mb-4">
                      <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                         {/* If you have specific images, use ImageWithFallback, otherwise a placeholder is fine */}
                         <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold text-xl">
                            {t(entry.author, language).charAt(0)}
                         </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{t(entry.author, language)}</h4>
                        <span className="text-xs text-blue-400 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-900/50">
                          {entry.date}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-blue-900/40 w-8 h-8 -z-10" />
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {t(entry.text, language)}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Source: {t(entry.work, language)} {entry.sourceReference}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-900/30 border border-gray-800 rounded-xl">
                  <p className="text-gray-400 mb-2">No quotes found for this topic.</p>
                  <p className="text-xs text-gray-600">
                    (Check that 'relatedTag' in doctrineData matches an 'id' in earlyChurchData)
                  </p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}