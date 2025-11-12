// kingjamesgoat/catholic/Catholic-9fa91d3b7a7dc54d4c122777284ed3a1f92c5303/src/components/Journey/Navigation.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Check, Circle, BookOpen, Sparkles, AlertCircle, XCircle } from 'lucide-react';
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
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  // NEW PROPS for unified bar
  isSpecialPage?: boolean;
  showEarlyChurch?: boolean;
  showScience?: boolean;
  onLogoClick: () => void;
}

export default function Navigation({ 
  currentTopicIndex, 
  onNavigate, 
  completedTopics, 
  onEarlyChurchClick, 
  onScienceClick,
  onHoverStart, 
  onHoverEnd,
  isSpecialPage = false,
  showEarlyChurch = false,
  showScience = false,
  onLogoClick
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  // Function to navigate back to the main journey and then to the selected topic
  const navigateToTopic = (index: number) => {
    onNavigate(index);
    setMenuOpen(false);
  };
  
  // Function to handle click on the logo/title
  const handleLogoClick = () => {
      onLogoClick();
      // Wait for the transition to complete before setting index 0, 
      // although setting the index here handles the initial redirect if needed.
      if (currentTopicIndex !== 0) {
          onNavigate(0);
      }
  };

  // Helper function for special page navigation
  const handleSpecialPageClick = (action: 'earlyChurch' | 'science') => {
    setMenuOpen(false);
    if (action === 'earlyChurch' && onEarlyChurchClick) {
      onEarlyChurchClick();
    } else if (action === 'science' && onScienceClick) {
      onScienceClick();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
        onHoverStart={onHoverStart} 
        onHoverEnd={onHoverEnd}     
      >
        <div className="container mx-auto px-4">
          {/* MODIFIED: Use h-16 for mobile and h-20 for desktop */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={handleLogoClick}
            >
              {/* MODIFIED: Responsive font size and hiding subtitle on smallest screens */}
              <h1 className="text-white tracking-wide text-lg md:text-xl">{t(trans.nav.title, language)}</h1>
              <p className="text-xs text-gray-500 hidden sm:block">{t(trans.nav.subtitle, language)}</p>
            </motion.div>

            {/* --- UNIFIED NAVIGATION BLOCK --- */}
            <div className="flex items-center gap-4">
              
              {/* Special Pages Button Block: HIDDEN ON MOBILE (phones) */}
              <div className="hidden md:flex rounded-lg border border-gray-700 bg-gray-900/50 p-1">
                
                {/* Science & Miracles Button */}
                <button
                  onClick={() => handleSpecialPageClick('science')}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap",
                    showScience
                      ? "bg-blue-600 text-white hover:bg-blue-700" // Active State
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white" // Inactive State
                  )}
                >
                  {t(trans.nav.scienceAndMiracles, language)}
                </button>

                {/* Early Church Button */}
                <button
                  onClick={() => handleSpecialPageClick('earlyChurch')}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap",
                    showEarlyChurch
                      ? "bg-blue-600 text-white hover:bg-blue-700" // Active State
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white" // Inactive State
                  )}
                >
                  {t(trans.nav.earlyChurch, language)}
                </button>
              </div>
              
              {/* All Topics / Menu Button */}
              {/* MODIFIED: Show on tablet/desktop (md:flex), hidden on mobile (default) */}
              <button
                onClick={() => setMenuOpen(true)}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm hidden md:flex"
              >
                <Menu size={20} />
                <span>{t(trans.nav.allTopics, language)}</span>
              </button>
              
              <LanguageSelector />

              {/* Mobile Menu Button for All Topics */}
              {/* MODIFIED: Show on mobile (default), hidden on tablet/desktop (md:hidden) */}
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

              {/* Main Topics and Special Pages (Unified Grid) */}
              {/* REMOVED SEPARATE DIV FOR SPECIAL LINKS. Added mb-8 for spacing before the final count. */}
              <div className="grid md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-4 mb-8">
                
                {/* Special Page 1: Early Church Timeline */}
                {onEarlyChurchClick && (
                  <motion.button
                    key="early-church-link"
                    onClick={() => handleSpecialPageClick('earlyChurch')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Unified styling with the rest of the topic cards
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-blue-900/20 border-blue-800 hover:bg-blue-900/30 hover:border-blue-700"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Block - Mimics main topic structure */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        {/* Text Block - Mimics main topic structure */}
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP1</span> 
                            <span className="text-xs text-blue-400">• {t(trans.nav.earlyChurch, language)}</span>
                        </div>
                        <h3 className="text-white mb-2">
                          {t(trans.earlyChurch.title, language)}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {t(trans.earlyChurch.subtitle, language)}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {/* Special Page 2: Science & Miracles */}
                {onScienceClick && (
                  <motion.button
                    key="science-miracles-link"
                    onClick={() => handleSpecialPageClick('science')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Unified styling with the rest of the topic cards
                    className="text-left p-6 rounded-lg border transition-all duration-300 bg-purple-900/20 border-purple-800 hover:bg-purple-900/30 hover:border-purple-700"
                  >
                    <div className="flex items-start gap-4">
                       {/* Icon Block - Mimics main topic structure */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 border-2 border-purple-400 flex items-center justify-center">
                        <Sparkles size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                         {/* Text Block - Mimics main topic structure */}
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{t(trans.menu.topicLabel, language)} SP2</span> 
                            <span className="text-xs text-purple-400">• {t(trans.nav.scienceAndMiracles, language)}</span>
                        </div>
                        <h3 className={`mb-2 text-white`}>
                           {t(trans.topicFullTitles['science-and-miracles' as keyof typeof trans.topicFullTitles], language)}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {t(trans.nav.scienceAndMiraclesDescription, language)}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )}


                {/* Main Topic List (Original content follows immediately) */}
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