import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { topics } from '../../App';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

interface ProgressTrackerProps {
  currentIndex: number;
  total: number;
  completedTopics: Set<number>;
  isVisible: boolean;
  onNavigate: (index: number) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function ProgressTracker({
  currentIndex,
  total,
  completedTopics,
  isVisible,
  onNavigate,
  onHoverStart,
  onHoverEnd
}: ProgressTrackerProps) {
  const { language } = useLanguage();
  const trans = translations;
  const completedCount = completedTopics.size;

  const progressPercent = currentIndex === -1 ? 0 : ((currentIndex + 1) / total) * 100;

  const renderTopicStatus = () => {
    if (currentIndex === -1) {
      return (
        <span className="text-sm text-gray-400">
          {completedCount} {t(trans.progress.completed, language)}
        </span>
      );
    }
    return (
      <span className="text-sm text-gray-400">
        {completedCount} {t(trans.progress.completed, language)} • {t(trans.progress.topicOf, language)} {currentIndex + 1} {t(trans.progress.of, language)} {total}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : "-100%", 
        opacity: isVisible ? 1 : 0 
      }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-16 md:top-20 left-0 right-0 z-30"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <div className="bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl">
        {/* FIXED: Reduced vertical padding on mobile (py-2) while keeping larger desktop padding (md:py-4 md:pb-6) */}
        <div className="container mx-auto px-4 py-2 md:py-4 md:pb-6"> 
          
          {/* --- DESKTOP VIEW --- */}
          <div className="hidden md:block mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">{t(trans.progress.yourProgress, language)}</span>
              {renderTopicStatus()}
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="hidden lg:flex items-start justify-between gap-2">
            {topics.map((topic, index) => {
              const isCompleted = completedTopics.has(index);
              const isCurrent = index === currentIndex; // False if currentIndex is -1
              const isPast = index < currentIndex;
              
              return (
                <button
                  key={topic.id}
                  onClick={() => onNavigate(index)}
                  className="flex-1 flex flex-col items-center min-w-0 text-left bg-transparent border-none p-0 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center w-full mb-3">
                    {/* Connecting Line */}
                    {index < topics.length - 1 && (
                      <div className={`absolute left-1/2 top-1/2 w-full h-0.5 -translate-y-1/2 ${
                        isPast ? 'bg-blue-600' : 'bg-gray-700'
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
                  
                  <span className={`text-xs text-center leading-tight px-1 transition-all duration-300 line-clamp-2 min-h-[2.5rem] flex items-center justify-center ${
                    isCurrent 
                      ? 'text-white font-medium' 
                      : isPast || isCompleted
                      ? 'text-gray-500 group-hover:text-gray-300'
                      : 'text-gray-600 group-hover:text-gray-400'
                  }`}>
                    {t(trans.topicTitles[topic.id as keyof typeof trans.topicTitles], language)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="lg:hidden flex items-center gap-1.5">
            {topics.map((_, index) => {
              const isCompleted = completedTopics.has(index);
              const isCurrent = index === currentIndex;
              const isPast = index < currentIndex;

              let colorClass = 'bg-gray-700 group-hover:bg-gray-600'; 

              if (isCurrent) {
                colorClass = 'bg-blue-600 group-hover:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]';
              } else if (isCompleted) {
                colorClass = 'bg-green-600 group-hover:bg-green-500';
              } else if (isPast) {
                colorClass = 'bg-blue-900 group-hover:bg-blue-800';
              }

              return (
                <button
                  key={index}
                  onClick={() => onNavigate(index)}
                  className="flex-1 h-8 flex items-center justify-center group cursor-pointer outline-none"
                  aria-label={`Go to topic ${index + 1}`}
                >
                  <div className={`h-1.5 w-full rounded-full transition-all duration-300 ${colorClass}`} />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </motion.div>
  );
}