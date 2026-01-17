import { motion } from "motion/react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  // Animation variants
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.01 }
      }
    })
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />

      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        initial="hidden"
        animate="visible"
      >
        {/* Vertical Line */}
        <motion.path
          d="M50 15 V90"
          variants={draw}
          custom={0}
        />

        {/* The "R" Loop and Leg */}
        <motion.path
          d="M50 25 C75 25 75 55 50 55 L70 90"
          variants={draw}
          custom={1}
        />

        {/* The "C" Curve */}
        <motion.path
          d="M80 35 C75 20 50 20 30 40 C15 60 25 85 50 85"
          variants={draw}
          custom={2}
        />
      </motion.svg>
    </div>
  );
}
