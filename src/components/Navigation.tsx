import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { useLanguage } from "../lib/i18n/LanguageContext";
import { translations } from "../lib/i18n/translations";

interface NavigationProps {
  activeSection: string;
  scrolled: boolean;
  onSearchClick: () => void;
}

export default function Navigation({ activeSection, scrolled, onSearchClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hook for translations
  const { language } = useLanguage();
  const t = translations.nav;

  // Updated navItems using translations
  const navItems = [
    { id: 'home', label: t.home[language] },
    { id: 'what-it-means', label: t.whatItMeans[language] },
    { id: 'authority', label: t.authority[language] },
    { id: 'questions', label: t.questions[language] },
    { id: 'history', label: t.history[language] },
    { id: 'reformation', label: t.reformation[language] }, // Ensures dynamic translation
    { id: 'science', label: t.scienceAndMiracles[language] }, // Fixed: Matches translations.ts key
    { id: 'learn-more', label: t.learnMore[language] },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer flex-shrink-0"
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-base md:text-2xl font-extrabold text-white tracking-wide whitespace-nowrap">
                {t.title[language]}
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSearchClick}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Search size={20} />
              </motion.button>

              <button
                className="lg:hidden text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
