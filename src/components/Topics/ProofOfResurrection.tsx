import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { BookOpen, Shield, Users, TrendingUp, XCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

export default function ProofOfResurrection() {
  const { language } = useLanguage();
  const trans = translations.proofOfResurrection;

  const minimalFacts = [
    {
      number: '1',
      fact: t(trans.fourMinimalFacts.fact1, language),
      icon: Shield
    },
    {
      number: '2',
      fact: t(trans.fourMinimalFacts.fact2, language),
      icon: BookOpen
    },
    {
      number: '3',
      fact: t(trans.fourMinimalFacts.fact3, language),
      icon: Users
    },
    {
      number: '4',
      fact: t(trans.fourMinimalFacts.fact4, language),
      icon: TrendingUp
    }
  ];

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote, language),
        source: t(trans.quoteSource, language)
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
        <h2 className="text-white">{t(trans.introHeading, language)}</h2>
        
        <p dangerouslySetInnerHTML={{ __html: t(trans.introPara1, language) }} />
        <p dangerouslySetInnerHTML={{ __html: t(trans.introPara2, language) }} />
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 1: Minimal Facts Approach */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.minimalFacts.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.intro, language) }} />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.criterion1, language) }} />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span dangerouslySetInnerHTML={{ __html: t(trans.minimalFacts.criterion2, language) }} />
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Manuscript Evidence */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.manuscriptEvidence.heading, language)}</h2>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.manuscriptEvidence.intro, language) }} />

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="border border-gray-800 p-4 text-left text-white">{t(trans.manuscriptEvidence.tableAuthor, language)}</th>
                  <th className="border border-gray-800 p-4 text-left text-white">{t(trans.manuscriptEvidence.tableTimeGap, language)}</th>
                  <th className="border border-gray-800 p-4 text-left text-white">{t(trans.manuscriptEvidence.tableManuscripts, language)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-900/20">
                  <td className="border border-gray-800 p-4 text-white font-medium">{t(trans.manuscriptEvidence.newTestament, language)}</td>
                  <td className="border border-gray-800 p-4 text-white font-medium">{t(trans.manuscriptEvidence.timeGap25, language)}</td>
                  <td className="border border-gray-800 p-4 text-white font-medium">5,800+</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-gray-300">Homer</td>
                  <td className="border border-gray-800 p-4 text-gray-400">{t(trans.manuscriptEvidence.timeGap400, language)}</td>
                  <td className="border border-gray-800 p-4 text-gray-400">1,800</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-gray-300">Plato</td>
                  <td className="border border-gray-800 p-4 text-gray-400">{t(trans.manuscriptEvidence.timeGap1400, language)}</td>
                  <td className="border border-gray-800 p-4 text-gray-400">7</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-gray-300">Caesar</td>
                  <td className="border border-gray-800 p-4 text-gray-400">{t(trans.manuscriptEvidence.timeGap1000, language)}</td>
                  <td className="border border-gray-800 p-4 text-gray-400">10</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-gray-300">Tacitus</td>
                  <td className="border border-gray-800 p-4 text-gray-400">{t(trans.manuscriptEvidence.timeGap1200, language)}</td>
                  <td className="border border-gray-800 p-4 text-gray-400">20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(trans.manuscriptEvidence.conclusion, language) }} />
        </div>
      </motion.section>

      {/* Section 3: Who Was Jesus */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.whoWasJesus.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.whoWasJesus.intro, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.fact1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.fact2, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.whoWasJesus.fact3, language) }} />
            </li>
          </ul>

          <p className="mt-6">{t(trans.whoWasJesus.divineClaimIntro, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.whoWasJesus.john858, language)}"
            </p>
            <p className="text-gray-500 mt-2">— John 8:58</p>
          </div>

          <p>{t(trans.whoWasJesus.blasphemy, language)}</p>
        </div>
      </motion.section>

      {/* Section 4: Four Minimal Facts */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.fourMinimalFacts.heading, language)}</h2>
        
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
                    <item.icon className="text-purple-400" size={24} />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-purple-400 font-mono">#{item.number}</span>
                    <h4 className="text-white">{item.fact}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-300 mt-8">{t(trans.fourMinimalFacts.support, language)}</p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 5: Evaluating Explanations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">{t(trans.evaluatingExplanations.heading, language)}</h2>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          {t(trans.evaluatingExplanations.intro, language)}
        </p>

        {/* Hallucination Hypothesis */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0" size={24} />
            <h3 className="text-white">{t(trans.evaluatingExplanations.hallucinationTitle, language)}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{t(trans.evaluatingExplanations.hallucinationIntro, language)}</p>
          
          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.hallucinationPoint1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.hallucinationPoint2, language) }} />
            </li>
          </ul>
        </div>

        {/* Wrong Tomb */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0" size={24} />
            <h3 className="text-white">{t(trans.evaluatingExplanations.wrongTombTitle, language)}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{t(trans.evaluatingExplanations.wrongTombIntro, language)}</p>
          
          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.wrongTombPoint1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400">{t(trans.evaluatingExplanations.wrongTombPoint2, language)}</span>
            </li>
          </ul>
        </div>

        {/* Stolen Body */}
        <div className="mb-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0" size={24} />
            <h3 className="text-white">{t(trans.evaluatingExplanations.stolenBodyTitle, language)}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{t(trans.evaluatingExplanations.stolenBodyIntro, language)}</p>
          
          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.stolenBodyPoint1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.stolenBodyPoint2, language) }} />
            </li>
          </ul>
        </div>

        {/* Resurrection - Correct */}
        <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
            <h3 className="text-white">{t(trans.evaluatingExplanations.resurrectionTitle, language)}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{t(trans.evaluatingExplanations.resurrectionIntro, language)}</p>
          
          <ul className="list-none space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-gray-400">{t(trans.evaluatingExplanations.resurrectionPoint1, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t(trans.evaluatingExplanations.resurrectionPoint2, language) }} />
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Section 6: Rationality */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.rationality.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.rationality.intro, language) }} />

          <p>{t(trans.rationality.hypothesisLabel, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.rationality.plausible, language)}</strong> {t(trans.rationality.plausibleDetail, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.rationality.powerful, language)}</strong> {t(trans.rationality.powerfulDetail, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.rationality.consistent, language)}</strong> {t(trans.rationality.consistentDetail, language)}</span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
            <p className="text-gray-300 italic">
              "{t(trans.rationality.craigQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— William Lane Craig</p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.conclusion.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para1, language) }} />
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para2, language) }} />
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <h3 className="text-white mb-4">{t(trans.bridge.heading, language)}</h3>
        <p className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t(trans.bridge.para1, language) }} />
        <p className="text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(trans.bridge.para2, language) }} />
      </motion.div>
    </TopicLayout>
  );
}
