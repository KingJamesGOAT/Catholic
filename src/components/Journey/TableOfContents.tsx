import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const trans = translations;

  useEffect(() => {
    // Extract headings from the page
    const articleElement = document.querySelector('article') || document.querySelector('main');
    if (!articleElement) return;

    const headingElements = articleElement.querySelectorAll('h2, h3');
    const headingData: TocItem[] = Array.from(headingElements).map((heading) => {
      // Create ID if it doesn't exist
      if (!heading.id) {
        const id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || '';
        heading.id = id;
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      };
    });

    setHeadings(headingData);

    // Set up Intersection Observer to track active section
    const observerOptions = {
      rootMargin: '-280px 0px -66%', // Account for header + progress bar
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 280; // Account for fixed header (80px) + progress bar (200px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="xl:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-900/90 backdrop-blur-sm border border-blue-800 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-colors"
        aria-label="Toggle table of contents"
      >
        <List className="text-blue-300" size={20} />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="xl:hidden fixed top-0 right-0 bottom-0 w-80 bg-gray-900 border-l border-gray-800 z-50 overflow-y-auto scrollbar-thin p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <List className="text-gray-400" size={16} />
                  <span className="text-gray-400 text-sm">{t(trans.toc.onThisPage, language)}</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <ul className="space-y-2">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  const isH3 = heading.level === 3;

                  return (
                    <li key={heading.id}>
                      <button
                        onClick={() => {
                          handleClick(heading.id);
                          setIsExpanded(false);
                        }}
                        className={`
                          w-full text-left text-sm transition-all duration-200
                          ${isH3 ? 'pl-4' : 'pl-0'}
                          ${isActive 
                            ? 'text-blue-400 font-medium' 
                            : 'text-gray-400 hover:text-gray-300'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <div className="w-0.5 h-4 bg-blue-400 rounded-full absolute left-6" />
                          )}
                          <span className={`line-clamp-2 ${isActive ? 'ml-3' : ''}`}>
                            {heading.text}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsExpanded(false);
                }}
                className="w-full mt-6 pt-4 border-t border-gray-800 text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                ↑ {t(trans.toc.backToTop, language)}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Fixed ToC */}
      <div className="hidden xl:block fixed top-[280px] right-8 w-64 z-30">
        <AnimatePresence>
          {isVisible && (
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 max-h-[calc(100vh-320px)] overflow-y-auto scrollbar-thin"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                <List className="text-gray-400" size={16} />
                <span className="text-gray-400 text-sm">{t(trans.toc.onThisPage, language)}</span>
              </div>

              <ul className="space-y-2">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  const isH3 = heading.level === 3;

                  return (
                    <li key={heading.id}>
                      <button
                        onClick={() => handleClick(heading.id)}
                        className={`
                          w-full text-left text-sm transition-all duration-200
                          ${isH3 ? 'pl-4' : 'pl-0'}
                          ${isActive 
                            ? 'text-blue-400 font-medium' 
                            : 'text-gray-400 hover:text-gray-300'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="w-0.5 h-4 bg-blue-400 rounded-full absolute left-4"
                              initial={false}
                              transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 30
                              }}
                            />
                          )}
                          <span className={`line-clamp-2 ${isActive ? 'ml-3' : ''}`}>
                            {heading.text}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Scroll to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full mt-4 pt-4 border-t border-gray-800 text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                ↑ {t(trans.toc.backToTop, language)}
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
