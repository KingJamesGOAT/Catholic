import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { translations, t } from "../lib/i18n/translations";

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  const { language } = useLanguage();
  const trans = translations.home;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center pt-48 md:pt-72 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {/* Main Title - Uses dangerouslySetInnerHTML to render the blue 'Catholic Faith' span */}
        <h1 
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          dangerouslySetInnerHTML={{ __html: t(trans.title, language) }}
        />

        {/* Scripture Quote */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 md:p-8 rounded-xl max-w-2xl mx-auto">
          {/* Quote Body - Uses dangerouslySetInnerHTML for the blue highlights */}
          <p 
            className="text-lg md:text-xl text-gray-300 italic font-serif leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t(trans.quote, language) }}
          />
          
          {/* Quote Source - Kept simple as the whole line is blue */}
          <p className="text-blue-400 mt-4 font-medium tracking-wide">
            — {t(trans.quoteSource, language)}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {t(trans.description, language)}
        </p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-8"
        >
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            {t(trans.startJourney, language)}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}