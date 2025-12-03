import { motion } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById('what-it-means');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Glowing cross */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Vertical beam */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-b from-transparent via-white to-transparent blur-sm" />
          {/* Horizontal beam */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent blur-sm" />
          
          {/* Glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-white mb-6 tracking-wide">
            Catholic Route
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 mb-4 max-w-2xl mx-auto"
          >
            Begin Your Journey into the Catholic Faith
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            A clear and structured guide to understanding the Catholic faith.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToContent}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300"
            >
              Start Learning
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Play className="mr-2" size={18} />
              Watch Video Overview
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
