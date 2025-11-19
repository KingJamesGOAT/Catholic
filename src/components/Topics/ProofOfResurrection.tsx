import SmartText from "../SmartText";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useIsMobile } from '../ui/use-mobile';
import {
  BookOpen,
  Users,
  UserX,
  Search,
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  BrainCircuit,
  Eye,
  Gavel,
  Shield,
  TrendingUp,
  Activity,
  History,
  Microscope
} from 'lucide-react';
import TopicLayout from '../Journey/TopicLayout';
import { Separator } from '../ui/separator';
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";
import { cn } from '../ui/utils';

type TopicComponentProps = {
  onComplete?: () => void;
  onScienceClick?: () => void; // Add this
};

type DetailItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  summary: string;
  fullContentHtml: string;
  color: string;
};

// Update function signature
export default function ProofOfResurrection({ onComplete, onScienceClick }: TopicComponentProps) {
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null);
  const { language } = useLanguage();
  const isMobile = useIsMobile(); // Add this line
  const trans = translations.proofOfResurrection;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // --- Data: Manuscript Evidence ---
  const rawManuscriptData = [
    { name: t(trans.manuscriptEvidence.newTestament, language), manuscripts: 5800, timeGap: 25, timeGapText: t(trans.manuscriptEvidence.timeGap25, language), sortManuscripts: 5800, isNewTestament: true, key: 'nt' },
    { name: t(trans.authorHomer, language), manuscripts: 1800, timeGap: 400, timeGapText: t(trans.manuscriptEvidence.timeGap400, language), sortManuscripts: 1800, isNewTestament: false, key: 'hom' },
    { name: t(trans.authorDemosthenes, language), manuscripts: 200, timeGap: 1400, timeGapText: t(trans.manuscriptEvidence.timeGap1400, language), sortManuscripts: 200, isNewTestament: false, key: 'dem' },
    { name: t(trans.authorHerodotus, language), manuscripts: 8, timeGap: 1400, timeGapText: t(trans.manuscriptEvidence.timeGap1400, language), sortManuscripts: 8, isNewTestament: false, key: 'her' },
    { name: t(trans.authorPlato, language), manuscripts: 7, timeGap: 1200, timeGapText: t(trans.manuscriptEvidence.timeGap1200, language), sortManuscripts: 7, isNewTestament: false, key: 'pla' },
    { name: t(trans.authorTacitus, language), manuscripts: 20, timeGap: 1000, timeGapText: t(trans.manuscriptEvidence.timeGap1000, language), sortManuscripts: 20, isNewTestament: false, key: 'tac' },
    { name: t(trans.authorCaesar, language), manuscripts: 10, timeGap: 1000, timeGapText: t(trans.manuscriptEvidence.timeGap1000, language), sortManuscripts: 10, isNewTestament: false, key: 'cae' },
    { name: t(trans.authorPliny, language), manuscripts: 7, timeGap: 750, timeGapText: t(trans.manuscriptEvidence.timeGap750, language), sortManuscripts: 7, isNewTestament: false, key: 'pli' },
  ];

  const sortedManuscriptData = rawManuscriptData.sort((a, b) => {
      if (a.sortManuscripts !== b.sortManuscripts) return a.sortManuscripts - b.sortManuscripts;
      return b.timeGap - a.timeGap;
  });

  const maxManuscripts = 6000;
  const maxTimeGap = 1500;

  function getTimeGapColor(timeGap: number) {
      if (timeGap <= 25) return "bg-green-600";
      if (timeGap <= 400) return "bg-blue-600";
      if (timeGap <= 750) return "bg-amber-600";
      if (timeGap <= 1000) return "bg-orange-600";
      return "bg-red-600";
  }

  // --- Data: 5 Facts ---
  const facts: DetailItem[] = [
    { id: 'fact-death', title: t(trans.minimalFacts.fact1.title, language), icon: Shield, color: 'red', summary: t(trans.minimalFacts.fact1.summary, language), fullContentHtml: t(trans.minimalFacts.fact1.content, language) },
    { id: 'fact-disciples', title: t(trans.minimalFacts.fact2.title, language), icon: Users, color: 'blue', summary: t(trans.minimalFacts.fact2.summary, language), fullContentHtml: t(trans.minimalFacts.fact2.content, language) },
    { id: 'fact-paul', title: t(trans.minimalFacts.fact3.title, language), icon: BookOpen, color: 'purple', summary: t(trans.minimalFacts.fact3.summary, language), fullContentHtml: t(trans.minimalFacts.fact3.content, language) },
    { id: 'fact-james', title: t(trans.minimalFacts.fact4.title, language), icon: TrendingUp, color: 'orange', summary: t(trans.minimalFacts.fact4.summary, language), fullContentHtml: t(trans.minimalFacts.fact4.content, language) },
    { id: 'fact-tomb', title: t(trans.minimalFacts.fact5.title, language), icon: Search, color: 'green', summary: t(trans.minimalFacts.fact5.summary, language), fullContentHtml: t(trans.minimalFacts.fact5.content, language) },
  ];

  // --- Data: Explanations ---
  const theories: DetailItem[] = [
    { id: 'theory-hallucination', title: t(trans.evaluatingExplanations.hallucination.title, language), icon: Eye, color: 'yellow', summary: t(trans.evaluatingExplanations.hallucination.summary, language), fullContentHtml: t(trans.evaluatingExplanations.hallucination.content, language) },
    { id: 'theory-swoon', title: t(trans.evaluatingExplanations.swoon.title, language), icon: Activity, color: 'red', summary: t(trans.evaluatingExplanations.swoon.summary, language), fullContentHtml: t(trans.evaluatingExplanations.swoon.content, language) },
    { id: 'theory-fraud', title: t(trans.evaluatingExplanations.fraud.title, language), icon: UserX, color: 'orange', summary: t(trans.evaluatingExplanations.fraud.summary, language), fullContentHtml: t(trans.evaluatingExplanations.fraud.content, language) },
    { id: 'theory-conversion', title: t(trans.evaluatingExplanations.conversionDisorder.title, language), icon: BrainCircuit, color: 'purple', summary: t(trans.evaluatingExplanations.conversionDisorder.summary, language), fullContentHtml: t(trans.evaluatingExplanations.conversionDisorder.content, language) },
    { id: 'theory-wrong-tomb', title: t(trans.evaluatingExplanations.wrongTomb.title, language), icon: HelpCircle, color: 'blue', summary: t(trans.evaluatingExplanations.wrongTomb.summary, language), fullContentHtml: t(trans.evaluatingExplanations.wrongTomb.content, language) },
    { id: 'theory-impact', title: t(trans.evaluatingExplanations.impact.title, language), icon: History, color: 'gray', summary: t(trans.evaluatingExplanations.impact.summary, language), fullContentHtml: t(trans.evaluatingExplanations.impact.content, language) },
  ];

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote, language),
        source: t(trans.quoteSource, language),
      }}
      onComplete={onComplete}
    >
      {/* 1. First Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kWSG5okmUr8"
            title="Evidence for the Resurrection"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>


      {/* ================= START PASTE HERE ================= */}
      <div className="space-y-12 text-gray-300 leading-relaxed mb-16">
        
        {/* Is Christianity Rooted in History? */}
        <div className="space-y-6">
          <h2 className="text-white text-2xl font-bold">{t(trans.introHeading, language)}</h2>
          <p><SmartText ignore={["Resurrection"]}>{t(trans.introPara1, language).replace(/<[^>]*>?/gm, '')}</SmartText></p>
          <p><SmartText ignore={["Resurrection"]}>{t(trans.introPara2, language).replace(/<[^>]*>?/gm, '')}</SmartText></p>
        </div>

        {/* 1. The "Minimal Facts" Approach */}
        <div className="space-y-6">
          <h2 className="text-white text-2xl font-bold">{t(trans.minimalFacts.heading, language)}</h2>
          <p dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.intro, language) }} />
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
             <ul className="list-none space-y-4">
               <li className="flex items-start gap-3">
                 <span className="text-blue-400 font-bold text-lg mt-[-2px]">1.</span>
                 <span dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.criterion1, language) }} />
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-blue-400 font-bold text-lg mt-[-2px]">2.</span>
                 <span dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.criterion2, language) }} />
               </li>
             </ul>
          </div>
        </div>

      </div>
      {/* ================= END PASTE HERE ================= */}

      

      {/* 2. Manuscript Evidence (IDENTICAL as requested) */}
      <section className="mb-16">
        <h2 className="text-white mb-6 text-2xl font-bold">{t(trans.manuscriptEvidence.heading, language)}</h2>
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed mb-6">{t(trans.manuscriptEvidence.intro, language)}</p>

          {/* Desktop Header */}
          <div className="hidden md:flex bg-gray-900/50 border-b border-gray-800 p-4 text-xs font-semibold text-gray-400">
            <div className="w-1/4">{t(trans.manuscriptEvidence.tableAuthor, language).toUpperCase()}</div>
            <div className="w-1/4 text-center">{t(trans.manuscriptEvidence.tableManuscripts, language).toUpperCase()}</div>
            <div className="w-1/2 text-left pl-4">{t(trans.manuscriptEvidence.tableTimeGap, language).toUpperCase()}</div>
          </div>

          {/* Chart Container */}
          <div className="grid grid-cols-1 border-4 border-blue-700 rounded-lg overflow-hidden bg-black/40">
            {sortedManuscriptData.map((data, index) => {
              const isNT = data.isNewTestament;
              let msBarRatio = (data.manuscripts / maxManuscripts) * 100;
              if (!isNT) msBarRatio = Math.min(msBarRatio, 35);
              let gapBarRatio = (data.timeGap / maxTimeGap) * 85 + 15; 
              if (isNT) gapBarRatio = 15;

              return (
                
                <motion.div
                  key={data.key}
                  // REMOVED: initial, whileInView, viewport, transition
                  // This keeps the row static (visible immediately) so only the bars animate
                  className={cn( 
                    "flex flex-col md:flex-row items-center p-4 transition-all duration-300 gap-4 md:gap-0",
                    isNT ? "bg-gradient-to-r from-blue-900/50 to-blue-900/20 border-l-4 border-blue-600" : "hover:bg-gray-900/50",
                    // RESTORED: 4px blue border on mobile, 1px gray border on desktop
                    "border-b-4 border-blue-700 md:border-b md:border-gray-800 last:border-0"
                  )}
                >
                  {/* Author */}
                  <div className={cn("w-full md:w-1/4 font-semibold text-center md:text-left", isNT ? "text-blue-400" : "text-gray-300")}>
                    <span className="text-xs font-medium text-gray-500 block mb-1">
                      {isNT ? t(trans.rankUnmatched, language) : t(trans.rankHistorical, language) + (index + 1)}
                    </span>
                    <span className="text-xl md:text-base block">{data.name}</span>
                  </div>

                  {/* Manuscripts */}
                  <div className="w-full md:w-1/4 flex flex-col items-center gap-1 relative">
                    <span className="md:hidden text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                      {t(trans.manuscriptEvidence.tableManuscripts, language)}
                    </span>
                    <span className={cn("text-lg font-bold tabular-nums block", isNT ? "text-white" : "text-gray-200")}>
                      {data.manuscripts.toLocaleString()}{isNT && "+"}
                    </span>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: isMobile ? `${msBarRatio}%` : 0 }}
                        whileInView={{ width: `${msBarRatio}%` }}
                        transition={{ duration: isMobile ? 0 : 1.0, delay: isMobile ? 0 : index * 0.1 + 0.3 }}
                        className={cn("h-full", isNT ? "bg-green-600" : "bg-purple-600")}
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 block">
                        {isNT ? t(trans.scaleCount, language) : t(trans.scaleMaxMs, language).replace('{0}', maxManuscripts.toLocaleString())}
                    </span>
                  </div>

                  {/* Time Gap */}
                  <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-4 text-center md:text-left gap-1 mt-2 md:mt-0">
                    <span className="md:hidden text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                      {t(trans.manuscriptEvidence.tableTimeGap, language)}
                    </span>
                    <span className={cn("text-base font-medium block", isNT ? "text-white" : "text-gray-300")}>
                      {data.timeGapText}
                    </span>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: isMobile ? `${gapBarRatio}%` : 0 }}
                        whileInView={{ width: `${gapBarRatio}%` }}
                        transition={{ duration: isMobile ? 0 : 1.0, delay: isMobile ? 0 : index * 0.1 + 0.3 }}
                        className={cn("h-full", getTimeGapColor(data.timeGap))}
                      />
                    </div>
                    <span className="text-xs text-gray-500 block">
                        {isNT ? t(trans.scaleTimeClose, language) : t(trans.scaleMaxGap, language).replace('{0}', maxTimeGap.toLocaleString())}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">{t(trans.scaleVisualNote, language)}</p>
          <p className="text-gray-300 mt-8 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(trans.manuscriptEvidence.conclusion, language) }} />
        </div>
      </section>

      <Separator className="my-16 bg-gray-800" />

      {/* 3. Who Was Jesus (IDENTICAL as requested) */}
      <section className="mb-16">
        <h2 className="text-white mb-6 text-2xl font-bold">{t(trans.whoWasJesus.heading, language)}</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{t(trans.whoWasJesus.intro, language)}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{t(trans.whoWasJesus.fact1, language)}</li>
                <li>{t(trans.whoWasJesus.fact2, language)}</li>
                <li>{t(trans.whoWasJesus.fact3, language)}</li>
            </ul>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.divineClaimIntro, language) }} />
            
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <p className="text-white text-xl italic font-serif">"{t(trans.whoWasJesus.john858, language)}"</p>
                <p className="text-blue-400 mt-2 text-sm font-bold uppercase tracking-widest">{t(trans.whoWasJesus.john858Source, language)}</p>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.blasphemy, language) }} />
            <p dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.blasphemyReason, language) }} />
        </div>
      </section>

      <Separator className="my-16 bg-gray-800" />

      {/* 4. The 5 Minimal Facts (Interactive Cards) */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-900/30 rounded-lg">
            <Gavel className="text-blue-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {t(trans.minimalFacts.heading, language)}
          </h2>
        </div>
        
        <p className="text-gray-400 mb-6">
          {t(trans.minimalFacts.intro, language)}
          <span className="text-blue-400 ml-2 text-sm font-medium tracking-wide uppercase block md:inline mt-2 md:mt-0">
            {t(trans.clickCards, language)}
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              onClick={() => setSelectedItem(fact)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-6 rounded-xl border bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden
                ${fact.color === 'red' ? 'border-red-900/30 hover:border-red-500/50' : ''}
                ${fact.color === 'blue' ? 'border-blue-900/30 hover:border-blue-500/50' : ''}
                ${fact.color === 'purple' ? 'border-purple-900/30 hover:border-purple-500/50' : ''}
                ${fact.color === 'orange' ? 'border-orange-900/30 hover:border-orange-500/50' : ''}
                ${fact.color === 'green' ? 'border-green-900/30 hover:border-green-500/50' : ''}
              `}
            >
              <div className="relative z-10">
                <fact.icon className={`mb-4 
                  ${fact.color === 'red' ? 'text-red-400' : ''}
                  ${fact.color === 'blue' ? 'text-blue-400' : ''}
                  ${fact.color === 'purple' ? 'text-purple-400' : ''}
                  ${fact.color === 'orange' ? 'text-orange-400' : ''}
                  ${fact.color === 'green' ? 'text-green-400' : ''}
                `} size={32} />
                
                <h3 className="text-lg font-bold text-white mb-2">{fact.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-4">{fact.summary}</p>
                
                <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                  {t(trans.clickExplore, language)} <ArrowRight size={12} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-gray-900/30 p-6 rounded-lg border border-gray-800 text-gray-300 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.support, language) }} />
        </div>
      </section>

      <Separator className="my-16 bg-gray-800" />

      {/* 5. Evaluating Explanations (Interactive Cards) */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-900/30 rounded-lg">
            <BrainCircuit className="text-purple-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {t(trans.evaluatingExplanations.heading, language)}
          </h2>
        </div>

        <p className="text-gray-400 mb-6">
          {t(trans.evaluatingExplanations.intro, language)}
          <span className="text-purple-400 ml-2 text-sm font-medium tracking-wide uppercase block md:inline mt-2 md:mt-0">
            {t(trans.clickCards, language)}
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {theories.map((theory) => (
            <motion.div
              key={theory.id}
              onClick={() => setSelectedItem(theory)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-5 rounded-xl border bg-gray-900/30 border-gray-800 hover:bg-gray-800 transition-all duration-200 flex items-start gap-4`}
            >
              <div className={`p-3 rounded-lg bg-black/50 ${
                theory.color === 'red' ? 'text-red-400' : 
                theory.color === 'yellow' ? 'text-yellow-400' : 
                theory.color === 'orange' ? 'text-orange-400' :
                theory.color === 'purple' ? 'text-purple-400' :
                theory.color === 'blue' ? 'text-blue-400' :
                'text-gray-400'
              }`}>
                <theory.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-200 mb-1">{theory.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{theory.summary}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Resurrection Conclusion Card */}
          <motion.div
            onClick={() => setSelectedItem({
              id: 'theory-resurrection',
              title: t(trans.evaluatingExplanations.resurrection.title, language),
              icon: CheckCircle2,
              color: 'green',
              summary: t(trans.evaluatingExplanations.resurrection.summary, language),
              fullContentHtml: t(trans.evaluatingExplanations.resurrection.content, language),
            })}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer p-5 rounded-xl border border-green-500/30 bg-green-900/10 hover:bg-green-900/20 transition-all duration-200 flex items-start gap-4 col-span-1 sm:col-span-2"
          >
            <div className="p-3 rounded-lg bg-green-900/30 text-green-400">
              <CheckCircle2 size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-green-400 mb-1">{t(trans.evaluatingExplanations.resurrection.title, language)}</h3>
              <p className="text-sm text-gray-400">{t(trans.evaluatingExplanations.resurrection.summary, language)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Last Video & Rationality (IDENTICAL as requested) */}
      <section className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl mb-12">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Z8lkuuhVkOI?start=127"
            title="Additional Video on Resurrection Evidence"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <h2 className="text-white mb-6 text-2xl font-bold">{t(trans.rationality.heading, language)}</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t(trans.rationality.intro, language) }} />
            <p>{t(trans.rationality.hypothesisLabel, language)}</p>
            <ul className="list-disc pl-6 space-y-3">
                <li>
                    <strong className="text-white block mb-1">{t(trans.rationality.plausible, language)}</strong>
                    <span dangerouslySetInnerHTML={{ __html: t(trans.rationality.plausibleDetail, language) }} />
                </li>
                <li>
                    <strong className="text-white block mb-1">{t(trans.rationality.powerful, language)}</strong>
                    <span dangerouslySetInnerHTML={{ __html: t(trans.rationality.powerfulDetail, language) }} />
                </li>
                <li>
                    <strong className="text-white block mb-1">{t(trans.rationality.consistent, language)}</strong>
                    <span dangerouslySetInnerHTML={{ __html: t(trans.rationality.consistentDetail, language) }} />
                </li>
            </ul>
        </div>
      </section>

      <Separator className="my-16 bg-gray-800" />

      {/* 7. Faith Rooted in History (IDENTICAL) */}
      <section className="mb-16">
        <h2 className="text-white mb-6 text-2xl font-bold">{t(trans.conclusion.heading, language)}</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para1, language) }} />
            
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-8 rounded-r-lg my-8">
                <p className="text-gray-200 italic text-xl text-center">"{t(trans.conclusion.conclusionQuote, language)}"</p>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para2, language) }} />
        </div>
      </section>


    {/* --- NEW SECTION: Shroud of Turin --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 bg-gradient-to-r from-gray-900 to-blue-950/20 border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg"
      >
        <div className="p-4 bg-blue-900/20 rounded-full hidden md:block">
          <Microscope className="text-blue-400" size={32} />
        </div>
        
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <Microscope className="text-blue-400 md:hidden" size={24} />
            {t(trans.shroud.title, language)}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {t(trans.shroud.text, language)}
          </p>
        </div>

        <button
          onClick={onScienceClick}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20 whitespace-nowrap group"
        >
          {t(trans.shroud.button, language)}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </motion.div>

      

      {/* 8. Moving Forward (IDENTICAL) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <h3 className="text-white mb-4 text-xl font-bold">{t(trans.bridge.heading, language)}</h3>
        <p className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t(trans.bridge.para1, language) }} />
        <p className="text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(trans.bridge.para2, language) }} />
      </motion.div>

      {/* --- New, Smoother Interactive Modal --- */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                // UPDATED: max-h-[60vh] on mobile, max-h-[85vh] on desktop
                className="bg-gray-900 w-full max-w-3xl max-h-[60vh] md:max-h-[85vh] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()} 
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-black/20">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gray-800 hidden sm:block ${
                      selectedItem.color === 'red' ? 'text-red-400' : 
                      selectedItem.color === 'blue' ? 'text-blue-400' : 
                      selectedItem.color === 'purple' ? 'text-purple-400' :
                      selectedItem.color === 'orange' ? 'text-orange-400' :
                      selectedItem.color === 'green' ? 'text-green-400' :
                      selectedItem.color === 'yellow' ? 'text-yellow-400' :
                      'text-gray-400'
                    }`}>
                      <selectedItem.icon size={28} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{selectedItem.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
                  >
                    <XCircle size={28} />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  <div 
                    className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: selectedItem.fullContentHtml }}
                  />
                </div>

                {/* Mobile Footer Tip */}
                <div className="p-3 bg-black/40 border-t border-gray-800 text-center sm:hidden">
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{t(trans.scrollMore, language)}</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </TopicLayout>
  );
}