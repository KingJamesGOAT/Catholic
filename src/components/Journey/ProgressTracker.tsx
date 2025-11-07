import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { topics } from '../../App';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

interface ProgressTrackerProps {
  currentIndex: number;
  total: number;
  completedTopics: Set<number>;
}

export default function ProgressTracker({ currentIndex, total, completedTopics }: ProgressTrackerProps) {
  const progress = ((currentIndex + 1) / total) * 100;
  const completedCount = completedTopics.size;
  const { language } = useLanguage();
  const trans = translations;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 pb-6">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">{t(trans.progress.yourProgress, language)}</span>
            <span className="text-sm text-gray-400">
              {completedCount} {t(trans.progress.completed, language)} • {t(trans.progress.topicOf, language)} {currentIndex + 1} {t(trans.progress.of, language)} {total}
            </span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Desktop: Step Indicators */}
        <div className="hidden lg:flex items-start justify-between gap-2">
          {topics.map((topic, index) => {
            const isCompleted = completedTopics.has(index);
            const isCurrent = index === currentIndex;
            const isPast = index < currentIndex;
            
            return (
              <div
                key={topic.id}
                className="flex-1 flex flex-col items-center min-w-0"
              >
                <div className="relative flex items-center justify-center w-full mb-3">
                  {/* Connecting Line */}
                  {index < topics.length - 1 && (
                    <div className={`absolute left-1/2 top-1/2 w-full h-0.5 -translate-y-1/2 ${
                      isPast || isCurrent ? 'bg-blue-600' : 'bg-gray-700'
                    }`} />
                  )}
                  
                  {/* Circle */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 ${
                      isCurrent
                        ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-600/50'
                        : isCompleted
                        ? 'bg-green-600 border-green-400'
                        : isPast
                        ? 'bg-blue-900 border-blue-700'
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={16} className="text-white" />
                    ) : (
                      <span className="text-xs text-gray-300">{index + 1}</span>
                    )}
                  </motion.div>
                </div>
                
                {/* Label - always show but with varying opacity */}
                <span className={`text-xs text-center leading-tight px-1 transition-all duration-300 line-clamp-2 min-h-[2.5rem] flex items-center justify-center ${
                  isCurrent 
                    ? 'text-white font-medium' 
                    : isPast || isCompleted
                    ? 'text-gray-500'
                    : 'text-gray-600'
                }`}>
                  {t(trans.topicTitles[topic.id as keyof typeof trans.topicTitles], language)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile: Simplified Progress */}
        <div className="lg:hidden flex items-center gap-2">
          {topics.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index <= currentIndex ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
