import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { glossaryTerms } from '../lib/i18n/glossaryData';
import { useLanguage } from '../lib/i18n/LanguageContext'; // Added
import { translations, t } from '../lib/i18n/translations'; // Added
import { BookOpen, AlertCircle, List, ChevronRight } from 'lucide-react';

export default function GlossaryPage() {
  const { language } = useLanguage(); // Get current language
  const trans = translations;

  // Safety check
  const allTerms = glossaryTerms || [];

  // Helper to get translated content
  // Returns an object with the term and definition in the CURRENT language
  const terms = allTerms.map(item => ({
    term: item.term[language as keyof typeof item.term] || item.term['en'],
    definition: item.definition[language as keyof typeof item.definition] || item.definition['en']
  })).sort((a, b) => a.term.localeCompare(b.term)); // Sort alphabetically by the translated term

  // Group terms by first letter
  const groupedTerms = terms.reduce((acc, item) => {
    if (!item.term) return acc;
    const letter = item.term.charAt(0).toUpperCase();
    // Group accents together (e.g., É -> E)
    const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (!acc[normalizedLetter]) acc[normalizedLetter] = [];
    acc[normalizedLetter].push(item);
    return acc;
  }, {} as Record<string, typeof terms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  // ToC State
  const [activeLetter, setActiveLetter] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLetter(entry.target.id.replace('letter-', ''));
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    sortedLetters.forEach((letter) => {
      const el = document.getElementById(`letter-${letter}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sortedLetters]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      const offset = 140; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsTocOpen(false);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      
      {/* --- TABLE OF CONTENTS (Desktop) --- */}
      {sortedLetters.length > 0 && (
        <div className="hidden xl:block fixed top-32 right-8 w-24 z-30">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin"
          >
            <div className="text-xs font-bold text-gray-500 mb-3 text-center uppercase tracking-wider">
              {t(trans.glossary.index, language)}
            </div>
            <div className="flex flex-col gap-1">
              {sortedLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className={`
                    w-full text-center py-1 rounded-md text-sm font-medium transition-all
                    ${activeLetter === letter 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
                  `}
                >
                  {letter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* --- TABLE OF CONTENTS (Mobile Toggle) --- */}
      {sortedLetters.length > 0 && (
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="xl:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-900/90 backdrop-blur-sm border border-blue-800 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-colors"
          aria-label="Toggle index"
        >
          <List className="text-blue-300" size={20} />
        </button>
      )}

      {/* --- TABLE OF CONTENTS (Mobile Drawer) --- */}
      <AnimatePresence>
        {isTocOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTocOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="xl:hidden fixed top-0 right-0 bottom-0 w-64 bg-gray-900 border-l border-gray-800 z-50 overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-sm font-medium">{t(trans.glossary.index, language)}</span>
                <button onClick={() => setIsTocOpen(false)}>
                  <ChevronRight className="text-gray-400" size={20} />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sortedLetters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => scrollToLetter(letter)}
                    className={`
                      aspect-square flex items-center justify-center rounded-md text-sm font-medium transition-all
                      ${activeLetter === letter 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
                    `}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-4xl px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-600 border-2 border-yellow-400 flex items-center justify-center shadow-[0_0_30px_-10px_rgba(234,179,8,0.5)]">
              <BookOpen className="text-white w-8 h-8" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            {t(trans.glossary.title, language)}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {t(trans.glossary.subtitle, language)}
            <br />
            <span className="text-sm text-gray-500 mt-2 block">
              {t(trans.glossary.tip, language)}
            </span>
          </motion.p>
        </div>

        {/* Glossary List */}
        {terms.length === 0 ? (
          <div className="text-center py-12 bg-red-900/10 border border-red-900 rounded-lg">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl text-white font-bold mb-2">{t(trans.glossary.noResults, language)}</h3>
          </div>
        ) : (
          <div className="space-y-12">
            {sortedLetters.map((letter, index) => (
              <motion.div
                key={letter}
                id={`letter-${letter}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-6 sticky top-20 bg-black/95 backdrop-blur-md py-4 z-10 border-b border-gray-800">
                  <span className="text-3xl font-bold text-blue-500 font-mono">{letter}</span>
                </div>
                
                <div className="grid gap-4">
                  {groupedTerms[letter].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group relative bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 hover:bg-gray-900/50 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                        {item.term}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}