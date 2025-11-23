import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Info, X, Target, User, Mail, 
  Menu, MoreVertical, Search, Command 
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { aboutTranslations } from '../lib/i18n/aboutTranslations';
import { t } from '../lib/i18n/translations';
import { useIsMobile } from './ui/use-mobile';

type Tab = 'mission' | 'author' | 'contact';

export default function AboutOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('mission');
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  const trans = aboutTranslations;

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderContent = () => {
    switch (activeTab) {
      case 'mission':
        return (
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-2 border border-blue-500/30">
              <Target className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(trans.mission.title, language)}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                {t(trans.mission.mainText, language)}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-4 md:p-5 border border-gray-800 mt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                {t(trans.mission.howItWorksTitle, language)}
              </h4>
              
              {isMobile ? (
                // MOBILE INSTRUCTIONS
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      <Menu size={18} />
                    </div>
                    <p className="text-gray-400 text-sm leading-tight mt-1.5">
                      {t(trans.mission.mobileMenu, language)}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      <MoreVertical size={18} />
                    </div>
                    <p className="text-gray-400 text-sm leading-tight mt-1.5">
                      {t(trans.mission.mobileOptions, language)}
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      <Search size={18} />
                    </div>
                    <p className="text-gray-400 text-sm leading-tight mt-1.5">
                      {t(trans.mission.mobileSearch, language)}
                    </p>
                  </div>
                </div>
              ) : (
                // DESKTOP INSTRUCTIONS
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      {/* Changed to Menu icon (3 horizontal lines) as requested */}
                      <Menu size={18} />
                    </div>
                    <p className="text-gray-400 text-base leading-tight mt-1">
                      {t(trans.mission.pcAllTopics, language)}
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      <Search size={18} />
                    </div>
                    <p className="text-gray-400 text-base leading-tight mt-1">
                      {t(trans.mission.pcSearch, language)}
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-8 h-8 rounded bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400">
                      <span className="text-[10px] font-bold">TOP</span>
                    </div>
                    <p className="text-gray-400 text-base leading-tight mt-1">
                      {t(trans.mission.pcTopSubjects, language)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      case 'author':
        return (
          <motion.div
            key="author"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4 border border-purple-500/30">
              <User className="text-purple-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{t(trans.author.title, language)}</h3>
            
            {/* Mobile: Scrollable container | Desktop: Normal */}
            <div className="max-h-[250px] md:max-h-none overflow-y-auto pr-2 md:pr-0 custom-scrollbar">
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg whitespace-pre-line">
                {t(trans.author.text, language)}
              </p>
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mb-4 border border-green-500/30">
              <Mail className="text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{t(trans.contact.title, language)}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
              {t(trans.contact.text, language)}
            </p>
            
            <a 
              href={`mailto:${trans.contact.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all group w-full md:w-auto justify-center"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-blue-400 font-medium group-hover:text-blue-300 break-all">
                {trans.contact.email}
              </span>
            </a>
          </motion.div>
        );
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // UPDATED: Rounded pill on desktop, circle on mobile. 
        // 'w-11' on mobile, 'px-4' on desktop for text space.
        className="fixed bottom-6 left-6 z-50 h-11 min-w-[44px] px-0 md:px-4 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white/60 transition-all duration-300 hover:bg-black/40 hover:text-white hover:border-white/20 shadow-2xl gap-2"
        aria-label="About & Contact"
      >
        <Info strokeWidth={1.5} size={20} />
        <span className="hidden md:inline font-medium text-sm">Info</span>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60"
            />

            {/* Content Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-black border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header (Fixed) */}
              <div className="p-4 md:p-6 border-b border-gray-800/50 bg-black/50 backdrop-blur-sm shrink-0 relative">
                 {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white bg-gray-900/50 hover:bg-gray-800 rounded-full transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="grid grid-cols-3 gap-2 bg-gray-900/50 p-1 rounded-xl border border-gray-800/50 mr-8">
                  {(['mission', 'author', 'contact'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-1 md:px-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 truncate ${
                        activeTab === tab 
                          ? 'bg-gray-800 text-white shadow-lg' 
                          : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                      }`}
                    >
                      {t(trans[tab].button, language)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="p-4 md:p-8 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {renderContent()}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}