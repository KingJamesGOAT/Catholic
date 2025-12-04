import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import TableOfContents from './TableOfContents';

interface TopicLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  quote?: {
    text: string;
    source: string;
  };
}

export default function TopicLayout({ children, title, subtitle, quote }: TopicLayoutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // FIXED: Changed pt-2 to pt-0 (mobile) to effectively remove the top gap completely
    // Kept md:pt-12 for desktop spacing
    <motion.div 
      className="min-h-screen pt-0 md:pt-12 pb-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Table of Contents */}
      <TableOfContents />
      
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header: Kept reduced mb-8 on mobile */}
          <div className="text-center mb-8 md:mb-16 pt-4 md:pt-0">
             {/* Added slight pt-4 only to the header container so text isn't cut off by status bars if pt-0 is too extreme */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Quote */}
          {quote && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center mb-8 md:mb-16 pb-8 border-b border-gray-800"
            >
              <p className="text-gray-300 italic text-lg mb-2">"{quote.text}"</p>
              <p className="text-gray-500">— {quote.source}</p>
            </motion.div>
          )}

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {children}
          </motion.article>
        </motion.div>
      </div>
    </motion.div>
  );
}
