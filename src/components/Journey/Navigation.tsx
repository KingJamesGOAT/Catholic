import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Check, Circle, BookOpen, Sparkles, Search } from 'lucide-react';
import { topics } from '../../App';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';
import { cn } from '../ui/utils';

interface NavigationProps {
  currentTopicIndex: number;
  onNavigate: (index: number) => void;
  completedTopics: Set<number>;
  onEarlyChurchClick?: () => void;
  onScienceClick?: () => void;
  onGlossaryClick?: () => void;
  onSearchClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  isSpecialPage?: boolean;
  showEarlyChurch?: boolean;
  showScience?: boolean;
  showGlossary?: boolean;
  // ADDED
  onDoctrineClick?: () => void;
  showDoctrine?: boolean;
  onLogoClick: () => void;
}

export default function Navigation({ 
  currentTopicIndex, 
  onNavigate, 
  completedTopics, 
  onEarlyChurchClick, 
  onScienceClick, 
  onGlossaryClick,
  onSearchClick,
  onHoverStart, 
  onHoverEnd,
  showEarlyChurch = false,
  showScience = false,
  showGlossary = false,
  // ADDED
  onDoctrineClick,
  showDoctrine = false,
  onLogoClick
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  const navigateToTopic = (index: number) => {
    onNavigate(index);
    setMenuOpen(false);
  };
  
  const handleLogoClick = () => {
      onLogoClick();
      if (currentTopicIndex !== 0) {
          onNavigate(0);
      }
  };

  const handleSpecialPageClick = (action: 'earlyChurch' | 'science' | 'glossary' | 'doctrine') => {
    setMenuOpen(false);
    if (action === 'earlyChurch' && onEarlyChurchClick) {
      onEarlyChurchClick();
    } else if (action === 'science' && onScienceClick) {
      onScienceClick();
    } else if (action === 'glossary' && onGlossaryClick) {
      onGlossaryClick();
    } else if (action === 'doctrine' && onDoctrineClick) {
      onDoctrineClick();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800"
        onHoverStart={onHoverStart} 
        onHoverEnd={onHoverEnd}     
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={handleLogoClick}
            >
              <h1 className="text-white tracking-wide text-lg md:text-xl">{t(trans.nav.title, language)}</h1>
              <p className="text-xs text-gray-500 hidden sm:block">{t(trans.nav.subtitle, language)}</p>
            </motion.div>

            <div className="flex items-center gap-4">
              
              {/* SEARCH BUTTON */}
              <button
                onClick={onSearchClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all"
                aria-label="Search Glossary"
              >
                <Search size={20} />
                <span className="hidden lg:inline text-xs text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">Ctrl K</span>
              </button>

              <div className="w-px h-6 bg-gray-800 hidden md:block" />

              {/* Special Pages Button Block */}
              <div className="hidden md:flex rounded-lg border border-gray-700 bg-gray-900/50 p-1">
                <button
                  onClick={() => handleSpecialPageClick('science')}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap",
                    showScience ? "bg-blue-600 text-white hover:bg-blue-700" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  )}
                >
                  {t(trans.nav.scienceAndMiracles, language)}
                </button>

                <button
                  onClick={() => handleSpecialPageClick('earlyChurch')}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap",
                    showEarlyChurch ? "bg-blue-600 text-white hover:bg-blue-700" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  )}
                >
                  {t(trans.nav.earlyChurch, language)}
                </button>

                {/* NEW BUTTON */}
                <button
                  onClick={() => handleSpecialPageClick('doctrine')}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap",
                    showDoctrine ? "bg-indigo-600 text-white hover:bg-indigo-700" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  )}
                >
                  {t(trans.nav.scriptureFathers, language)}
                </button>
              </div>
              
              <button
                onClick={() => setMenuOpen(true)}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm hidden md:flex"
              >
                <Menu size={20} />
                <span>{t(trans.nav.allTopics, language)}</span>
              </button>
              
              <LanguageSelector />

              <button
                className="text-gray-400 hover:text-white transition-colors md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

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

              <div className="grid md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-4 mb-8">
                
                {onEarlyChurchClick && (
                  <motion.button
                    key="early-church-link"
                    onClick={() => handleSpecialPageClick('earlyChurch')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 hover:border-blue-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP1</span> 
                            <span className="text-xs text-blue-400">• {t(trans.nav.earlyChurch, language)}</span>
                        </div>
                        <h3 className="text-white mb-2">{t(trans.earlyChurch.title, language)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{t(trans.earlyChurch.subtitle, language)}</p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {onScienceClick && (
                  <motion.button
                    key="science-miracles-link"
                    onClick={() => handleSpecialPageClick('science')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-purple-900/20 border-purple-800 hover:bg-purple-900/30 hover:border-purple-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 border-2 border-purple-400 flex items-center justify-center">
                        <Sparkles size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP2</span> 
                            <span className="text-xs text-purple-400">• {t(trans.nav.scienceAndMiracles, language)}</span>
                        </div>
                        <h3 className="mb-2 text-white">{t(trans.topicFullTitles['science-and-miracles' as keyof typeof trans.topicFullTitles], language)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{t(trans.nav.scienceAndMiraclesDescription, language)}</p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {onGlossaryClick && (
                  <motion.button
                    key="glossary-link"
                    onClick={() => handleSpecialPageClick('glossary')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-yellow-900/20 border-yellow-800 hover:bg-yellow-900/30 hover:border-yellow-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 border-2 border-yellow-400 flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP3</span> 
                            <span className="text-xs text-yellow-400">• Glossary</span>
                        </div>
                        <h3 className="mb-2 text-white">{t(trans.glossary.title, language)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{t(trans.glossary.subtitle, language)}</p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {/* NEW MOBILE MENU ITEM */}
                {onDoctrineClick && (
                  <motion.button
                    key="doctrine-link"
                    onClick={() => handleSpecialPageClick('doctrine')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-indigo-900/20 border-indigo-800 hover:bg-indigo-900/30 hover:border-indigo-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP4</span> 
                            <span className="text-xs text-indigo-400">• {t(trans.nav.scriptureFathers, language)}</span>
                        </div>
                        <h3 className="mb-2 text-white">{t(trans.nav.scriptureFathers, language)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">Scripture & Tradition</p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {topics.map((topic, index) => {
                  const isCompleted = completedTopics.has(index);
                  const isCurrent = index === currentTopicIndex;
                  
                  return (
                    <motion.button
                      key={topic.id}
                      onClick={() => navigateToTopic(index)}
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