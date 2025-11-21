import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Check, Circle, Sparkles, Search, MoreVertical, ScrollText, Gavel, BookA, Church } from 'lucide-react'; 
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
  onDoctrineClick?: () => void;
  showDoctrine?: boolean;
  onTLMClick?: () => void;
  showTLM?: boolean;
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
  onDoctrineClick,
  showDoctrine = false,
  onTLMClick,
  showTLM = false,
  onLogoClick
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [kebabMenuOpen, setKebabMenuOpen] = useState(false); 
  const { language } = useLanguage();
  const trans = translations;

  useEffect(() => {
    if (menuOpen || kebabMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen, kebabMenuOpen]);

  useEffect(() => {
    if (menuOpen) setKebabMenuOpen(false);
  }, [menuOpen]);
  
  useEffect(() => {
    if (kebabMenuOpen) setMenuOpen(false);
  }, [kebabMenuOpen]);


  const navigateToTopic = (index: number) => {
    onNavigate(index);
    setMenuOpen(false);
  };
  
  const handleLogoClick = () => {
      onLogoClick();
  };

  const handleSpecialPageClick = (action: 'earlyChurch' | 'science' | 'glossary' | 'doctrine' | 'tlm') => {
    setMenuOpen(false);
    setKebabMenuOpen(false); 
    if (action === 'earlyChurch' && onEarlyChurchClick) {
      onEarlyChurchClick();
    } else if (action === 'science' && onScienceClick) {
      onScienceClick();
    } else if (action === 'glossary' && onGlossaryClick) { 
      onGlossaryClick();
    } else if (action === 'doctrine' && onDoctrineClick) {
      onDoctrineClick();
    } else if (action === 'tlm' && onTLMClick) {
      onTLMClick();
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
              
              <button
                onClick={onSearchClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all"
                aria-label="Search Glossary"
              >
                <Search size={20} />
                <span className="hidden lg:inline text-xs text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">Ctrl K</span>
              </button>

              <div className="w-px h-6 bg-gray-800 hidden md:block" />

              {/* MAIN GROUP: Science, Early Church, Doctrine */}
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

              {/* STANDALONE BUTTON: Latin Mass (Desktop only) */}
              <button
                  onClick={() => handleSpecialPageClick('tlm')}
                  className={cn(
                    "hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap border",
                    showTLM 
                      ? "bg-[#fe9a00] border-[#fe9a00] text-black shadow-[0_0_15px_rgba(254,154,0,0.3)] hover:bg-[#fe9a00]/90" 
                      : "bg-transparent border-gray-700 text-gray-300 hover:border-[#fe9a00] hover:text-[#fe9a00] hover:bg-[#fe9a00]/10"
                  )}
                  style={{ height: '42px' }} 
                >
                  <Church size={16} className="currentColor" />
                  <span>{t(trans.nav.latinMass, language)}</span>
              </button>
              
              
              <button
                onClick={() => setMenuOpen(true)}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm hidden md:flex"
              >
                <Menu size={20} />
                <span>{t(trans.nav.allTopics, language)}</span>
              </button>
              
              <LanguageSelector />

              {/* MOBILE KEBAB MENU BUTTON */}
              <button
                className="text-gray-400 hover:text-white transition-colors md:hidden"
                onClick={() => setKebabMenuOpen(!kebabMenuOpen)}
                aria-label="More pages"
              >
                <MoreVertical size={24} />
              </button>

              <button
                className="text-gray-400 hover:text-white transition-colors md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="All topics"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Topics Menu */}
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
              className="container mx-auto px-4 pt-8 md:pt-24 pb-12 max-w-5xl"
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

              <div className="grid md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-4 mb-8 pb-32">
                
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
                          
                          <p className="text-sm text-gray-500 line-clamp-2">
                              {t(trans.topicDescriptions[topic.id as keyof typeof trans.topicDescriptions], language)}
                          </p>

                        </div>
                      </div>
                    </motion.button>
                  );
                })}

                {onGlossaryClick && (
                  <motion.button
                    key="glossary-link"
                    onClick={() => handleSpecialPageClick('glossary')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-yellow-900/20 border-yellow-800 hover:bg-yellow-900/30 hover:border-yellow-700 hidden md:block"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-600 border-2 border-yellow-400 flex items-center justify-center">
                        <BookA size={20} className="text-white" /> 
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP4</span> 
                          <span className="text-xs text-yellow-400">• Glossary</span>
                        </div>
                        <h3 className="mb-2 text-white">{t(trans.glossary.title, language)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{t(trans.glossary.subtitle, language)}</p>
                      </div>
                    </div>
                  </motion.button>
                )}

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

      {/* KEBAB MENU (Mobile Only) */}
      <AnimatePresence>
        {kebabMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setKebabMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed top-20 right-4 z-50 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-2"
            >
              <button
                onClick={() => handleSpecialPageClick('science')}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Sparkles size={18} />
                <span>{t(trans.nav.scienceAndMiracles, language)}</span>
              </button>
              <button
                onClick={() => handleSpecialPageClick('earlyChurch')}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ScrollText size={18} />
                <span>{t(trans.nav.earlyChurch, language)}</span>
              </button>
              <button
                onClick={() => handleSpecialPageClick('doctrine')}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                <Gavel size={18} />
                <span>{t(trans.nav.scriptureFathers, language)}</span>
              </button>

              {/* SEPARATOR 1 */}
              <div className="h-px bg-gray-700 my-1" />

              {/* LATIN MASS - AMBER COLOR */}
              <button
                onClick={() => handleSpecialPageClick('tlm')}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-[#fe9a00] hover:bg-[#fe9a00] hover:text-black transition-colors"
              >
                <Church size={18} />
                <span>{t(trans.nav.latinMass, language)}</span>
              </button>

              {/* SEPARATOR 2 */}
              <div className="h-px bg-gray-700 my-1" />

              <button
                onClick={() => handleSpecialPageClick('glossary')}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-gray-300 hover:bg-yellow-600 hover:text-black transition-colors"
              >
                <BookA size={18} />
                <span>{t(trans.glossary.title, language)}</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}