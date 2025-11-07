import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface TopicTransitionProps {
  message: string;
}

export default function TopicTransition({ message }: TopicTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8 flex justify-center"
          >
            <ArrowRight size={48} className="text-blue-500" />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed italic"
          >
            {message}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
