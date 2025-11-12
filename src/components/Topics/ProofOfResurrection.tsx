// kingjamesgoat/catholic/Catholic-9fa91d3b7a7dc54d4c122777284ed3a1f92c5303/src/components/Topics/ProofOfResurrection.tsx

import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  BookOpen,
  Shield,
  Users,
  TrendingUp,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";
import { cn } from "../ui/utils"; // FIXED: Import cn utility function

export default function ProofOfResurrection() {
  const { language } = useLanguage();
  const trans = translations.proofOfResurrection;

  const minimalFacts = [
    {
      number: "1",
      fact: t(trans.fourMinimalFacts.fact1, language),
      icon: Shield,
    },
    {
      number: "2",
      fact: t(trans.fourMinimalFacts.fact2, language),
      icon: BookOpen,
    },
    {
      number: "3",
      fact: t(trans.fourMinimalFacts.fact3, language),
      icon: Users,
    },
    {
      number: "4",
      fact: t(trans.fourMinimalFacts.fact4, language),
      icon: TrendingUp,
    },
  ];

  // --- START NEW DATA STRUCTURE AND VISUALIZER COMPONENT LOGIC (Simplified Bars) ---
  // Data: New Testament, Homer, Demosthenes, Herodotus, Plato, Tacitus, Caesar, Pliny
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
      // Sort 1: Manuscripts Ascending (Least impressive first)
      if (a.sortManuscripts !== b.sortManuscripts) {
          return a.sortManuscripts - b.sortManuscripts;
      }
      // Sort 2: Time Gap Descending (If manuscript count is tied, longer gap is less impressive)
      return b.timeGap - a.timeGap;
  });

  function getTimeGapColor(timeGap: number) {
      if (timeGap <= 25) return "bg-green-600";
      if (timeGap <= 400) return "bg-blue-600";
      if (timeGap <= 750) return "bg-amber-600";
      if (timeGap <= 1000) return "bg-orange-600";
      return "bg-red-600";
  }
  
  // MAX SCALING VALUES (Updated)
  const maxManuscripts = 6000;
  const maxTimeGap = 1500;

  const ManuscriptVisualizer = (
    <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed mb-6">
            {t(trans.manuscriptEvidence.intro, language)}
        </p>

        {/* Header for the Chart/List */}
        <div className="flex bg-gray-900/50 border-b border-gray-800 p-4 text-xs font-semibold text-gray-400">
            <div className="w-1/4">{t(trans.manuscriptEvidence.tableAuthor, language).toUpperCase()}</div>
            <div className="w-1/4 text-center">{t(trans.manuscriptEvidence.tableManuscripts, language).toUpperCase()}</div>
            <div className="w-1/2 text-left">{t(trans.manuscriptEvidence.tableTimeGap, language).toUpperCase()}</div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gray-800 border border-gray-800 rounded-lg overflow-hidden">
            {sortedManuscriptData.map((data, index) => {
                const isNT = data.isNewTestament;
                
                // 1. Manuscript Bar Calculation (Updated to use maxManuscripts = 6000)
                // Use a logarithmic-like scale for contrast (5800 is 100%, 6000 is used as max for calculation base)
                let msBarRatio = (data.manuscripts / maxManuscripts) * 100;
                if (!isNT) msBarRatio = Math.min(msBarRatio, 35); // Cap non-NT width at 35% for visualization contrast

                // 2. Time Gap Bar Calculation (CORRECTED LOGIC: Longer gap = Longer bar. Max gap is 1500)
                // Ratio calculation: (Document Gap / Max Gap) * Max Length (85%) + Min Length (15%)
                let gapBarRatio = (data.timeGap / maxTimeGap) * 85 + 15; 
                if (isNT) gapBarRatio = 15; // Set NT to minimum length (15%) to indicate minimal gap

                const textColor = isNT ? "text-blue-400" : "text-gray-300";
                const bgClass = isNT ? "bg-gradient-to-r from-blue-900/50 to-blue-900/20" : "bg-gray-900/50";
                const msBarColor = isNT ? "bg-green-600" : "bg-purple-600";
                const gapBarColor = getTimeGapColor(data.timeGap);

                return (
                    <motion.div
                        key={data.key} // Using unique key property for map stability
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn( 
                            "flex items-center p-4 transition-all duration-300",
                            bgClass,
                            isNT ? "border-l-4 border-blue-600 hover:bg-blue-900/30" : "hover:bg-gray-900/70"
                        )}
                    >
                        {/* Column 1: Author */}
                        <div className={cn("w-1/4 font-semibold", textColor)}>
                            {/* Ranking on a separate line for visibility */}
                            <span className="text-xs font-medium text-gray-500 block">
                                {isNT 
                                    ? t(trans.rankUnmatched, language)
                                    : t(trans.rankHistorical, language) + (index + 1)
                                }
                            </span>
                            {data.name}
                        </div>

                        {/* Column 2: Manuscript Count (Visualization) */}
                        <div className="w-1/4 flex flex-col items-center gap-1">
                            <span className={cn("text-lg font-bold tabular-nums", isNT ? "text-white" : "text-gray-200")}>
                                {data.manuscripts.toLocaleString()}{isNT && "+"}
                            </span>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${msBarRatio}%` }}
                                    transition={{ duration: 1.0, delay: index * 0.1 + 0.3 }}
                                    className={cn("h-full", msBarColor)}
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                            <span className="text-xs text-gray-500">
                                {isNT 
                                    ? t(trans.scaleCount, language) 
                                    : t(trans.scaleMaxMs, language).replace('{0}', maxManuscripts.toLocaleString()) // Updated to 6000
                                }
                            </span>
                        </div>

                        {/* Column 3: Time Gap (Visualization) */}
                        <div className="w-1/2 flex flex-col pl-4 text-left gap-1">
                            <span className={cn("text-base font-medium", isNT ? "text-white" : "text-gray-300")}>
                                {data.timeGapText}
                            </span>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${gapBarRatio}%` }}
                                    transition={{ duration: 1.0, delay: index * 0.1 + 0.3 }}
                                    className={cn("h-full", gapBarColor)}
                                />
                            </div>
                            <span className="text-xs text-gray-500">
                                {isNT 
                                    ? t(trans.scaleTimeClose, language) 
                                    : t(trans.scaleMaxGap, language).replace('{0}', maxTimeGap.toLocaleString()) // Updated to 1500
                                }
                            </span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
            {t(trans.scaleVisualNote, language)}
        </p>

        <p 
            className="text-gray-300 mt-8 text-lg"
            dangerouslySetInnerHTML={{
                __html: t(trans.manuscriptEvidence.conclusion, language),
            }}
        />
    </div>
  );
  // --- END NEW DATA STRUCTURE AND VISUALIZER COMPONENT LOGIC ---

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote, language),
        source: t(trans.quoteSource, language),
      }}
    >
      {/* Video Section */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
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

      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">
          {t(trans.introHeading, language)}
        </h2>

        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.introPara1, language),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.introPara2, language),
          }}
        />
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 1: Minimal Facts Approach */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.minimalFacts.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.minimalFacts.intro, language),
            }}
          />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.minimalFacts.criterion1,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.minimalFacts.criterion2,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 2: Manuscript Evidence - REPLACED WITH VISUALIZER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.manuscriptEvidence.heading, language)}
        </h2>

        {ManuscriptVisualizer}

      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 3: Who Was Jesus */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.whoWasJesus.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.whoWasJesus.intro, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.whoWasJesus.fact1, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.whoWasJesus.fact2, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.whoWasJesus.fact3, language),
                }}
              />
            </li>
          </ul>

          <p className="mt-6">
            {t(trans.whoWasJesus.divineClaimIntro, language)}
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.whoWasJesus.john858, language)}"
            </p>
            <p className="text-gray-500 mt-2">— John 8:58</p>
          </div>

          <p>{t(trans.whoWasJesus.blasphemy, language)}</p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 4: Four Minimal Facts */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.fourMinimalFacts.heading, language)}
        </h2 >

        <div className="grid md:grid-cols-2 gap-6">
          {minimalFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center border border-purple-800">
                    <item.icon
                      className="text-purple-400"
                      size={24}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-purple-400 font-mono">
                      #{item.number}
                    </span>
                    <h4 className="text-white">{item.fact}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-300 mt-8">
          {t(trans.fourMinimalFacts.support, language)}
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 5: Evaluating Explanations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.evaluatingExplanations.heading, language)}
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          {t(trans.evaluatingExplanations.intro, language)}
        </p>

        {/* Hallucination Hypothesis */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle
              className="text-red-400 flex-shrink-0"
              size={24}
            />
            <h3 className="text-white">
              {t(
                trans.evaluatingExplanations.hallucinationTitle,
                language,
              )}
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            {t(
              trans.evaluatingExplanations.hallucinationIntro,
              language,
            )}
          </p>

          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .hallucinationPoint1,
                    language,
                  ),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .hallucinationPoint2,
                    language,
                  ),
                }}
              />
            </li>
          </ul>
        </div>

        {/* Wrong Tomb */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle
              className="text-red-400 flex-shrink-0"
              size={24}
            />
            <h3 className="text-white">
              {t(
                trans.evaluatingExplanations.wrongTombTitle,
                language,
              )}
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            {t(
              trans.evaluatingExplanations.wrongTombIntro,
              language,
            )}
          </p>

          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .wrongTombPoint1,
                      language,
                  ),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400">
                {t(
                  trans.evaluatingExplanations.wrongTombPoint2,
                  language,
                )}
              </span >
            </li>
          </ul >
        </div >

        {/* Stolen Body */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle
              className="text-red-400 flex-shrink-0"
              size={24}
            />
            <h3 className="text-white">
              {t(
                trans.evaluatingExplanations.stolenBodyTitle,
                language,
              )}
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            {t(
              trans.evaluatingExplanations.stolenBodyIntro,
              language,
            )}
          </p>

          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .stolenBodyPoint1,
                    language,
                  ),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .stolenBodyPoint2,
                    language,
                  ),
                }}
              />
            </li>
          </ul>
        </div>

        {/* Resurrection - Correct */}
        <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <CheckCircle
              className="text-green-400 flex-shrink-0"
              size={24}
            />
            <h3 className="text-white">
              {t(
                trans.evaluatingExplanations.resurrectionTitle,
                language,
              )}
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            {t(
              trans.evaluatingExplanations.resurrectionIntro,
              language,
            )}
          </p>

          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-gray-400">
                {t(
                  trans.evaluatingExplanations
                    .resurrectionPoint1,
                  language,
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.evaluatingExplanations
                      .resurrectionPoint2,
                    language,
                  ),
                }}
              />
            </li>
          </ul>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 6: Rationality */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.rationality.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.rationality.intro, language),
            }}
          />

          <p>
            {t(trans.rationality.hypothesisLabel, language)}
          </p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  {t(trans.rationality.plausible, language)}
                </strong >{" "}
                {t(trans.rationality.plausibleDetail, language)}
              </span >
            </li >
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  {t(trans.rationality.powerful, language)}
                </strong >{" "}
                {t(trans.rationality.powerfulDetail, language)}
              </span >
            </li >
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  {t(trans.rationality.consistent, language)}
                </strong >{" "}
                {t(
                  trans.rationality.consistentDetail,
                  language,
                )}
              </span >
            </li >
          </ul >

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
            <p className="text-gray-300 italic">
              "{t(trans.rationality.craigQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — William Lane Craig
            </p>
          </div>
        </div >
      </motion.section >

      <Separator className="my-16 bg-gray-800" />

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.conclusion.heading, language)}
        </h2 >

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.para1, language),
            }}
          />
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.para2, language),
            }}
          />
        </div >
      </motion.section >

      {/* --- ADDED SECTION --- */}
      <Separator className="my-16 bg-gray-800" />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Z8lkuuhVkOI?start=127"
            title="Additional Video on Resurrection"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.section>
      {/* --- END OF ADDED SECTION --- */}

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <h3 className="text-white mb-4">
          {t(trans.bridge.heading, language)}
        </h3 >
        <p
          className="text-gray-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: t(trans.bridge.para1, language),
          }}
        />
        <p
          className="text-gray-400 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t(trans.bridge.para2, language),
          }}
        />
      </motion.div>
    </TopicLayout>
  );
}