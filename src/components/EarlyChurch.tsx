import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Church,
  BookOpen,
  ScrollText,
  Users,
  Key,
  Sparkles,
  AlertCircle,
  Flame,
  ArrowLeft,
  Play,
  PlayCircle,
  X,
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { t } from "../lib/i18n/translations";
import { earlyChurchTopics } from "../lib/i18n/earlyChurchData";
import { earlyChurchUI } from "../lib/i18n/earlyChurchTranslations";

// --- ADDED IMPORTS FOR MODAL ---
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

// Map icon strings to Lucide components
const iconMap: { [key: string]: any } = {
  Church,
  BookOpen,
  ScrollText,
  Users,
  Key,
  Sparkles,
  AlertCircle,
  Flame,
};

// Helper component for videos
function VideoFacade({ id, title }: { id: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
    );
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer group rounded-xl overflow-hidden"
      onClick={() => setIsPlaying(true)}
    >
      <img 
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Modern Play Button Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
          <Play className="ml-1 text-white fill-white w-6 h-6 md:w-8 md:h-8 opacity-90" />
        </div>
      </div>
    </div>
  );
}

export default function EarlyChurch() {
  const { language } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedTopic = earlyChurchTopics.find(
    (t) => t.id === selectedTopicId,
  );

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 md:pt-24 pb-20">
      {/* Main Menu Container - Centered with padding */}
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            {t(earlyChurchUI.pageTitle, language)}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            {t(earlyChurchUI.pageSubtitle, language)}
          </p>

          {/* --- VIDEO MODAL SECTION --- */}
          <div className="my-8 flex justify-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 px-8 rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:scale-105 flex items-center gap-3"
              >
                <PlayCircle className="w-6 h-6" />
                {t(earlyChurchUI.exploreVideoLibrary, language)}
              </Button>



              
              {/* Modal Content - OPTIMIZED FOR COMPACT PC VIEW */}
              <DialogContent className="
                w-[95vw] max-w-[95vw] 
                h-[70vh] 
                md:h-auto md:max-h-[90vh]
                md:w-[90vw] md:max-w-[90vw] 
                overflow-y-auto bg-black/95 border-gray-800 backdrop-blur-xl p-4 md:p-8 rounded-2xl flex flex-col focus:outline-none"
              >
                
                {/* Custom VISIBLE Close Button */}
                <div className="absolute top-4 right-4 z-50">
                   <button 
                     onClick={() => setIsModalOpen(false)}
                     className="p-2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full transition-colors border border-gray-600 shadow-lg"
                   >
                     <X size={24} />
                   </button>
                </div>

                <DialogHeader className="mb-4 md:mb-8 pr-12 shrink-0"> 
                  <DialogTitle className="text-2xl md:text-5xl font-bold text-white mb-2">
                    {t(earlyChurchUI.pageTitle, language)}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-sm md:text-xl">
                    {t(earlyChurchUI.modalDescription, language)}
                  </DialogDescription>
                </DialogHeader>
                
                {/* Video Grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8">
                  
                  {/* 1. NEW VIDEO: Joshua Charles */}
                  <div className="space-y-3 group">
                     <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl relative ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all">
                       <VideoFacade 
                         id="4HNtR03OuCQ" 
                         title="The Bible and the Fathers Made me Catholic" 
                       />
                     </div>
                     <h3 className="text-base md:text-lg text-gray-200 font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                       {t(earlyChurchUI.videoTitle1, language)}
                     </h3>
                  </div>

                  {/* 2. St. Ignatius Part 1 */}
                  <div className="space-y-3 group">
                     <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl relative ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all">
                        <VideoFacade 
                         id="CK1_22AjdIQ" 
                         title="Part 1: How St. Ignatius 'Red Pilled' Me" 
                       />
                     </div>
                     <h3 className="text-base md:text-lg text-gray-200 font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                       {t(earlyChurchUI.videoTitle2, language)}
                     </h3>
                  </div>

                  {/* 3. St. Ignatius Part 2 */}
                  <div className="space-y-3 group">
                     <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl relative ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all">
                        <VideoFacade 
                         id="uYUm-eAP5v0" 
                         title="Part 2: How St. Ignatius 'Red Pilled' Me" 
                       />
                     </div>
                     <h3 className="text-base md:text-lg text-gray-200 font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                       {t(earlyChurchUI.videoTitle3, language)}
                     </h3>
                  </div>

                </div>
              </DialogContent>


              
            </Dialog>
          </div>
          {/* --- END VIDEO MODAL SECTION --- */}

          <p className="text-sm text-gray-500 mt-4 hidden md:block">
            {t(earlyChurchUI.selectPrompt, language)}
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {earlyChurchTopics.map((topic) => {
            const Icon = iconMap[topic.icon] || BookOpen;
            const isSelected = selectedTopicId === topic.id;

            return (
              <motion.button
                key={topic.id}
                onClick={() => {
                  setSelectedTopicId(topic.id);
                  setTimeout(scrollToContent, 100);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 md:p-6 rounded-xl border text-left transition-all duration-300 group flex items-start gap-3 ${
                  isSelected
                    ? "bg-blue-900/30 border-blue-500 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]"
                    : "bg-gray-900/40 border-gray-800 hover:bg-gray-900/60 hover:border-gray-600"
                }`}
              >
                <div
                  className={`p-2.5 md:p-3 rounded-lg shrink-0 ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-gray-200"
                  }`}
                >
                  <Icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm md:text-lg mb-1 leading-tight ${isSelected ? "text-white" : "text-gray-200 group-hover:text-white"}`}
                  >
                    <span className="md:hidden">
                      {t(
                        topic.shortTitle || topic.title,
                        language,
                      )}
                    </span>
                    <span className="hidden md:inline">
                      {t(topic.title, language)}
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {topic.quotes.length > 0
                      ? `${topic.quotes.length} ${t(earlyChurchUI.quoteCount, language)}`
                      : t(earlyChurchUI.comingSoon, language)}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Selected Content Display - Full Width Wrapper */}
      <AnimatePresence mode="wait">
        {selectedTopic && (
          <motion.div
            ref={contentRef}
            key={selectedTopic.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="w-full" // Full width container
          >
            {/* Sticky Header Bar - Full Screen Width */}
            <div className="sticky top-16 md:top-20 z-30 bg-black/95 backdrop-blur-sm border-b border-gray-800 w-full">
              <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center gap-4">
                <button
                  onClick={() => setSelectedTopicId(null)}
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors shrink-0"
                >
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-xl md:text-3xl font-bold text-blue-400 leading-tight line-clamp-1">
                  {t(selectedTopic.title, language)}
                </h2>
              </div>
            </div>

            {/* Content Body - Centered */}
            <div className="container mx-auto max-w-4xl px-4 pt-8 md:pt-12 pb-20">
              <div className="relative border-l-2 border-gray-800 ml-4 md:ml-8 space-y-8 md:space-y-12">
                {selectedTopic.quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="relative pl-6 md:pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500" />

                    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-5 md:p-8 hover:border-gray-700 transition-colors">
                      {/* Header */}
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {t(quote.author, language)}
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 text-xs font-mono border border-blue-800/50 whitespace-nowrap">
                          {quote.date}
                        </span>
                      </div>

                      {/* Quote Body */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/50 rounded-full" />
                        <p className="pl-4 md:pl-6 text-gray-300 leading-relaxed text-base md:text-lg italic">
                          "{t(quote.text, language)}"
                        </p>
                      </div>

                      {/* Source Footer */}
                      <div className="mt-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <BookOpen
                            size={14}
                            className="shrink-0"
                          />
                          <span className="font-medium">
                            {t(quote.work, language)}
                          </span>
                        </div>
                        <span className="hidden md:inline text-gray-600">
                          •
                        </span>
                        <span className="font-mono text-xs text-gray-600 md:text-gray-500">
                          {quote.sourceReference}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {selectedTopic.quotes.length === 0 && (
                  <div className="pl-8 text-gray-500 italic">
                    {t(earlyChurchUI.emptySection, language)}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}