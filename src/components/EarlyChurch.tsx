import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Church, 
  BookOpen, 
  ScrollText, 
  Users, 
  Key, 
  Sparkles, 
  AlertCircle, 
  Flame, 
  ArrowLeft 
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { t } from '../lib/i18n/translations';
import { earlyChurchTopics } from '../lib/i18n/earlyChurchData';
import { earlyChurchUI } from '../lib/i18n/earlyChurchTranslations';

// Map icon strings to Lucide components
const iconMap: { [key: string]: any } = {
  Church,
  BookOpen,
  ScrollText,
  Users,
  Key,
  Sparkles,
  AlertCircle,
  Flame
};

export default function EarlyChurch() {
  const { language } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedTopic = earlyChurchTopics.find(t => t.id === selectedTopicId);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            {t(earlyChurchUI.pageTitle, language)}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            {t(earlyChurchUI.pageSubtitle, language)}
          </p>
          <p className="text-sm text-gray-500 mt-4 hidden md:block">
            {t(earlyChurchUI.selectPrompt, language)}
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {earlyChurchTopics.map((topic) => {
            const Icon = iconMap[topic.icon] || BookOpen;
            const isSelected = selectedTopicId === topic.id;

            return (
              <motion.button
                key={topic.id}
                onClick={() => {
                  setSelectedTopicId(topic.id);
                  setTimeout(scrollToContent, 100);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 md:p-6 rounded-xl border text-left transition-all duration-300 group flex items-start gap-4 ${
                  isSelected 
                    ? 'bg-blue-900/30 border-blue-500 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]' 
                    : 'bg-gray-900/40 border-gray-800 hover:bg-gray-900/60 hover:border-gray-600'
                }`}
              >
                <div className={`p-3 rounded-lg shrink-0 ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-200'
                }`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={`font-bold text-base md:text-lg mb-1 leading-tight ${isSelected ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {t(topic.title, language)}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {topic.quotes.length > 0 
                      ? `${topic.quotes.length} ${t(earlyChurchUI.quoteCount, language)}`
                      : t(earlyChurchUI.comingSoon, language)
                    }
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Selected Content Display */}
        <AnimatePresence mode="wait">
          {selectedTopic && (
            <motion.div
              ref={contentRef}
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8 sticky top-20 bg-black/95 py-4 z-10 border-b border-gray-800 md:static md:bg-transparent md:py-0 md:border-0">
                <button 
                  onClick={() => setSelectedTopicId(null)}
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors shrink-0"
                >
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 leading-tight">
                  {t(selectedTopic.title, language)}
                </h2>
              </div>

              <div className="relative border-l-2 border-gray-800 ml-4 md:ml-8 space-y-8 md:space-y-12 pb-20">
                {selectedTopic.quotes.map((quote) => (
                  <div key={quote.id} className="relative pl-6 md:pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500" />
                    
                    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-5 md:p-8 hover:border-gray-700 transition-colors">
                      {/* Header */}
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {t(quote.author, language)}
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 text-xs font-mono border border-blue-800/50 whitespace-nowrap">
                          {quote.date}
                        </span>
                      </div>

                      {/* Quote Body */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/50 rounded-full" />
                        <p className="pl-4 md:pl-6 text-gray-300 leading-relaxed text-base md:text-lg italic">
                          "{t(quote.text, language)}"
                        </p>
                      </div>

                      {/* Source Footer */}
                      <div className="mt-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <BookOpen size={14} className="shrink-0" />
                          <span className="font-medium">{t(quote.work, language)}</span>
                        </div>
                        <span className="hidden md:inline text-gray-600">•</span>
                        <span className="font-mono text-xs text-gray-600 md:text-gray-500">{quote.sourceReference}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {selectedTopic.quotes.length === 0 && (
                  <div className="pl-8 text-gray-500 italic">
                    {t(earlyChurchUI.emptySection, language)}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}