import { useState } from 'react';
import { motion } from 'motion/react';
import { Book, Users, ScrollText, Quote, Flame, ShieldCheck, Heart, Droplets, Key, MessageCircle } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { translations, t } from '../lib/i18n/translations';
import { doctrineData } from '../lib/i18n/doctrineData';

// Helper to get icon for topic
const getTopicIcon = (id: string) => {
  switch (id) {
    case 'eucharist': return <Heart size={20} />;
    case 'authority': return <Key size={20} />;
    case 'salvation': return <ShieldCheck size={20} />;
    case 'baptism': return <Droplets size={20} />;
    case 'confession': return <MessageCircle size={20} />;
    case 'mary': return <Heart size={20} />;
    case 'purgatory': return <Flame size={20} />;
    default: return <Book size={20} />;
  }
};

export default function DoctrineExplorer() {
  const { language } = useLanguage();
  // Ensure we have data before rendering to prevent crashes
  const firstTopicId = doctrineData.length > 0 ? doctrineData[0].id : '';
  const [selectedId, setSelectedId] = useState(firstTopicId);

  const currentDoctrine = doctrineData.find(d => d.id === selectedId) || doctrineData[0];
  
  // Get Bible Verses
  const bibleVerses = currentDoctrine?.verses?.[language as keyof typeof currentDoctrine.verses] || currentDoctrine?.verses?.['en'] || [];

  // Get Tradition/Fathers Quotes
  const traditionQuotes = currentDoctrine?.tradition || [];

  const trans = translations.doctrineExplorer;

  // Safety check if translations aren't loaded yet
  if (!trans || !currentDoctrine) {
    return null;
  }

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
              {t(translations.nav?.scriptureFathers, language)}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t(trans.title, language)}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {t(trans.subtitle, language)}
          </motion.p>
        </div>

        {/* --- Buttons Bar --- */}
        <div className="mb-12 px-4 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-5xl">
            {doctrineData.map((d) => {
              const isSelected = selectedId === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className={`
                    flex flex-col items-center justify-center px-4 py-3 rounded-xl border transition-all duration-200
                    ${isSelected 
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/50 scale-105 z-10' 
                      : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-gray-200'}
                  `}
                >
                  <div className={`mb-2 ${isSelected ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {getTopicIcon(d.id)}
                  </div>
                  <span className="font-bold text-xs md:text-sm text-center leading-tight">
                    {t(d.title, language)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Split View --- */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Sacred Scripture */}
          <motion.div 
            key={`scripture-${selectedId}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-indigo-900/10 to-transparent rounded-3xl p-6 md:p-8 border border-indigo-900/30"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-indigo-900/30 pb-4">
              <div className="p-3 bg-indigo-600/20 rounded-xl border border-indigo-600/50">
                <Book className="text-indigo-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t(trans.scriptureTitle, language)}</h3>
                <p className="text-indigo-500/60 text-sm font-medium uppercase tracking-wide">{t(trans.scriptureSubtitle, language)}</p>
              </div>
            </div>

            <div className="space-y-8">
              {bibleVerses.map((verse, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-indigo-800/50 rounded-full group-hover:bg-indigo-500 transition-colors" />
                  <div className="pl-6">
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-serif italic">
                      "{verse.text}"
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-px flex-1 bg-indigo-900/30" />
                      <span className="text-indigo-400 font-bold font-mono text-sm tracking-wide bg-indigo-950/50 px-2 py-1 rounded border border-indigo-900/50">
                        {verse.book} {verse.chapter}:{verse.verse}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {bibleVerses.length === 0 && (
                <p className="text-gray-500 text-center italic py-8">{t(trans.pending, language)}</p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Tradition & Theology */}
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
                <h3 className="text-2xl font-bold text-white">{t(trans.traditionTitle, language)}</h3>
                <p className="text-blue-500/60 text-sm font-medium uppercase tracking-wide">{t(trans.traditionSubtitle, language)}</p>
              </div>
            </div>

            {/* SCROLL BEHAVIOR: Mobile expands fully (no scroll), Desktop has scroll */}
            <div className="space-y-6 md:max-h-[800px] md:overflow-y-auto md:custom-scrollbar md:pr-2">
              {traditionQuotes.length > 0 ? (
                traditionQuotes.map((entry) => (
                  <div key={entry.id} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-blue-800 hover:bg-gray-900 transition-all duration-300 relative overflow-hidden group">
                    
                    {/* Background decoration - HIDDEN ON MOBILE */}
                    <div className="hidden md:block absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      {entry.type === 'theology' ? <Book size={64} /> : <Quote size={64} />}
                    </div>

                    <div className="flex gap-4 mb-4 relative z-10">
                      <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 text-xl font-bold
                        ${entry.type === 'theology' 
                          ? 'bg-purple-900/30 border-purple-500/30 text-purple-400' 
                          : 'bg-blue-900/30 border-blue-500/30 text-blue-400'
                        }`}>
                         {/* Initials */}
                         {t(entry.author, language).charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight">{t(entry.author, language)}</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {entry.date && (
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                              {entry.date}
                            </span>
                          )}
                          {/* HIDE BADGE IF COUNCIL */}
                          {entry.type !== 'council' && (
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border
                              ${entry.type === 'father' ? 'text-blue-400 border-blue-900/50 bg-blue-950/30' : 
                                entry.type === 'doctor' ? 'text-orange-400 border-orange-900/50 bg-orange-950/30' : 
                                entry.type === 'papal' ? 'text-red-400 border-red-900/50 bg-red-950/30' :
                                'text-purple-400 border-purple-900/50 bg-purple-950/30'}`}>
                              {t(trans.types[entry.type], language)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {t(entry.text, language)}
                      </p>
                    </div>
                    
                    {entry.source && (
                      <div className="mt-4 pt-4 border-t border-gray-800 relative z-10">
                        <span className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-1">
                          <ScrollText size={12} /> {t(trans.source, language)}: {entry.source}
                        </span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-900/30 border border-gray-800 rounded-xl">
                  <p className="text-gray-400 mb-2">{t(trans.noQuotes, language)}</p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}