import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Check, Circle, BookOpen } from 'lucide-react';
import { topics } from '../../App';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

interface NavigationProps {
  currentTopicIndex: number;
  onNavigate: (index: number) => void;
  completedTopics: Set<number>;
  onEarlyChurchClick?: () => void;
}

export default function Navigation({ currentTopicIndex, onNavigate, completedTopics, onEarlyChurchClick }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => onNavigate(0)}
            >
              <h1 className="text-white tracking-wide">{t(trans.nav.title, language)}</h1>
              <p className="text-xs text-gray-500">{t(trans.nav.subtitle, language)}</p>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {onEarlyChurchClick && (
                <button
                  onClick={onEarlyChurchClick}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t(trans.nav.earlyChurch, language)}
                </button>
              )}
              <button
                onClick={() => setMenuOpen(true)}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <Menu size={20} />
                <span>{t(trans.nav.allTopics, language)}</span>
              </button>
              <LanguageSelector />
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-3">
              <LanguageSelector />
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="container mx-auto px-4 py-24 max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-white mb-2">{t(trans.nav.journeyTopics, language)}</h2>
                  <p className="text-gray-400">{t(trans.nav.selectTopic, language)}</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Early Church Link - Mobile & Desktop */}
              {onEarlyChurchClick && (
                <div className="mb-8">
                  <button
                    onClick={() => {
                      onEarlyChurchClick();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left p-6 rounded-lg border bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 hover:border-blue-700 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-1">{t(trans.earlyChurch.earlyChurchTimelineLink, language)}</h3>
                        <p className="text-sm text-gray-400">{t(trans.earlyChurch.earlyChurchDescription, language)}</p>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-4">
                {topics.map((topic, index) => {
                  const isCompleted = completedTopics.has(index);
                  const isCurrent = index === currentTopicIndex;
                  
                  return (
                    <motion.button
                      key={topic.id}
                      onClick={() => {
                        onNavigate(index);
                        setMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`text-left p-6 rounded-lg border transition-all duration-300 ${
                        isCurrent
                          ? 'bg-blue-900/30 border-blue-600'
                          : isCompleted
                          ? 'bg-green-900/20 border-green-800 hover:bg-green-900/30'
                          : 'bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                          isCurrent
                            ? 'bg-blue-600 border-blue-400'
                            : isCompleted
                            ? 'bg-green-600 border-green-400'
                            : 'bg-gray-800 border-gray-700'
                        }`}>
                          {isCompleted ? (
                            <Check size={20} className="text-white" />
                          ) : isCurrent ? (
                            <Circle size={20} className="text-white fill-white" />
                          ) : (
                            <span className="text-gray-400">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} {index + 1}</span>
                            {isCurrent && (
                              <span className="text-xs text-blue-400">• {t(trans.menu.current, language)}</span>
                            )}
                            {isCompleted && !isCurrent && (
                              <span className="text-xs text-green-400">• {t(trans.menu.completedStatus, language)}</span>
                            )}
                          </div>
                          <h3 className={`mb-2 ${
                            isCurrent ? 'text-white' : 'text-gray-300'
                          }`}>
                            {t(trans.topicFullTitles[topic.id as keyof typeof trans.topicFullTitles], language)}
                          </h3>
                          {topic.transition && (
                            <p className="text-sm text-gray-500 line-clamp-2">
                              {t(trans.topicTransitions[topic.id as keyof typeof trans.topicTransitions], language)}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  {completedTopics.size} {t(trans.menu.completedOf, language)} {topics.length} {t(trans.menu.topicsCompleted, language)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
