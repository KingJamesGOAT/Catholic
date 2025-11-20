import { useState, useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { GlossaryTerm } from "../lib/i18n/glossaryData";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { BookOpen } from "lucide-react";
import { useIsMobile } from "./ui/use-mobile";

interface GlossaryTooltipProps {
  word: string;
  termData: GlossaryTerm;
}

export default function GlossaryTooltip({
  word,
  termData,
}: GlossaryTooltipProps) {
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  // 1. Add state to control visibility manually on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Hydration safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 2. Close tooltip immediately when the user scrolls (Mobile only)
  useEffect(() => {
    if (isOpen && isMobile) {
      const handleScroll = () => setIsOpen(false);

      // Listen for scroll events on the window
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Also listen for touch moves (swiping)
      window.addEventListener("touchmove", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
      };
    }
  }, [isOpen, isMobile]);

  const getTranslation = (obj: any) => {
    return obj[language] || obj["en"] || "";
  };

  // Shared Content Design (Apple Glass Style)
  const TooltipBody = () => (
    // w-[90vw] ensures it fits on small mobile screens, sm:w-80 keeps it fixed on desktop
    <div className="w-[90vw] sm:w-80 overflow-hidden rounded-2xl bg-gray-950/60 backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-black/5">
      {/* Glass Header */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="p-1.5 bg-blue-500/20 rounded-lg border border-blue-500/20 shadow-inner">
          <BookOpen className="w-3.5 h-3.5 text-blue-300" />
        </div>
        <h4 className="font-semibold text-white text-sm tracking-wide">
          {getTranslation(termData.term)}
        </h4>
      </div>

      {/* Glass Body */}
      <div className="p-4">
        <p className="text-sm leading-relaxed text-gray-200/90 font-light">
          {getTranslation(termData.definition)}
        </p>
      </div>
    </div>
  );

  const TriggerButton = (
    <button
      // ADDED 'underline' here so the dots actually show up!
      className="inline text-blue-400 underline decoration-blue-500/50 decoration-dotted decoration-2 underline-offset-4 hover:text-blue-300 hover:decoration-blue-400 transition-colors cursor-help mx-0.5 px-0 py-0 bg-transparent font-inherit focus:outline-none rounded-sm"
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        // 3. Toggle open state on click for mobile
        if (isMobile) setIsOpen(!isOpen);
      }}
    >
      {word}
    </button>
  );

  if (!mounted) return TriggerButton;

  // MOBILE: Use Controlled Popover
  if (isMobile) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>{TriggerButton}</PopoverTrigger>
        <PopoverContent
          className="p-0 border-0 bg-transparent shadow-none w-auto"
          sideOffset={8}
          collisionPadding={16} // Ensures 16px safety margin from screen edges
        >
          <TooltipBody />
        </PopoverContent>
      </Popover>
    );
  }

  // DESKTOP: Use HoverCard (Standard hover)
  return (
    <HoverCard openDelay={150} closeDelay={150}>
      <HoverCardTrigger asChild>{TriggerButton}</HoverCardTrigger>
      <HoverCardContent
        className="p-0 border-0 bg-transparent shadow-none"
        sideOffset={8}
      >
        <TooltipBody />
      </HoverCardContent>
    </HoverCard>
  );
}