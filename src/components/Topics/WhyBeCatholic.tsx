import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { BookOpen, Church, Users, Scale, History, Heart } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

export default function WhyBeCatholic() {
  const { language } = useLanguage();
  const trans = translations.whyBeCatholic;

  const keyPoints = [
    {
      icon: Church,
      title: t(trans.keyPoints.notDenomination, language),
      description: t(trans.keyPoints.notDenominationDesc, language)
    },
    {
      icon: BookOpen,
      title: t(trans.keyPoints.fullnessFaith, language),
      description: t(trans.keyPoints.fullnessFaithDesc, language)
    },
    {
      icon: Users,
      title: t(trans.keyPoints.apostolicSuccession, language),
      description: t(trans.keyPoints.apostolicSuccessionDesc, language)
    },
    {
      icon: History,
      title: t(trans.keyPoints.historicalContinuity, language),
      description: t(trans.keyPoints.historicalContinuityDesc, language)
    },
    {
      icon: Scale,
      title: t(trans.keyPoints.faithReason, language),
      description: t(trans.keyPoints.faithReasonDesc, language)
    },
    {
      icon: Heart,
      title: t(trans.keyPoints.sacramentalLife, language),
      description: t(trans.keyPoints.sacramentalLifeDesc, language)
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
      <div className="mb-16 space-y-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JohiCo_z3Ng"
            title="Why Be Catholic?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(trans.introPara1, language) }} />
        <p dangerouslySetInnerHTML={{ __html: t(trans.introPara2, language) }} />
      </div>

      {/* Key Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {keyPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 mb-4">
              <point.icon className="text-blue-400" size={20} />
            </div>
            <h4 className="text-white mb-2">{point.title}</h4>
            <p className="text-gray-500 text-sm">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 1: False Dilemma */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section1.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section1.para1, language) }} />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section1.holdsworthQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— Brian Holdsworth</p>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Fullness of Faith */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section2.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section2.para1, language) }} />

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section2.one, language)}</strong> (John 17:21)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section2.holy, language)}</strong> {t(trans.section2.holyDesc, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section2.catholic, language)}</strong> {t(trans.section2.catholicDesc, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section2.apostolic, language)}</strong> {t(trans.section2.apostolicDesc, language)}</span>
            </li>
          </ul>

          <p dangerouslySetInnerHTML={{ __html: t(trans.section2.para2, language) }} />
        </div>
      </motion.section>

      {/* Section 3: Scripture Alone */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section3.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section3.para1, language) }} />

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section3.point1, language)}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section3.point2, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section3.point3, language)}</strong></span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section3.thessaloniansQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— {t(trans.section3.thessaloniansSource, language)}</p>
          </div>

          <p>{t(trans.section3.para2, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section3.holdsworthQuote2, language)}"
            </p>
            <p className="text-gray-500 mt-2">— Brian Holdsworth</p>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Early Church */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section4.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section4.para1, language) }} />

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section4.point1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section4.point2, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section4.point3, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section4.point4, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section4.point5, language) }} />
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section4.ignatiusQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— {t(trans.section4.ignatiusSource, language)}</p>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Private Judgment */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section5.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section5.para1, language) }} />
          <p>{t(trans.section5.para2, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section5.timothyQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— {t(trans.section5.timothySource, language)}</p>
          </div>

          <p>{t(trans.section5.para3, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section5.magisterium, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section5.tradition, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section5.scripture, language) }} />
            </li>
          </ul>

          <p>{t(trans.section5.para4, language)}</p>
        </div>
      </motion.section>

      {/* Section 6: Apostolic Succession */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section6.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section6.para1, language) }} />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-4">
              "{t(trans.section6.matthewQuote, language)}"
            </p>
            <p className="text-gray-500">— {t(trans.section6.matthewSource, language)}</p>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-4">
              "{t(trans.section6.johnQuote, language)}"
            </p>
            <p className="text-gray-500">— {t(trans.section6.johnSource, language)}</p>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t(trans.section6.para2, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.section6.para3, language) }} />
        </div>
      </motion.section>

      {/* Section 7: Church That Gave the Bible */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section7.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section7.para1, language) }} />

          <div className="space-y-6 my-8">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t(trans.section7.ignatius, language) }} />
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t(trans.section7.irenaeus, language) }} />
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: t(trans.section7.others, language) }} />
            </div>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t(trans.section7.para2, language) }} />
        </div>
      </motion.section>

      {/* Section 8: Historical Continuity */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section8.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section8.para1, language) }} />

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.section8.point1, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.section8.point2, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section8.point3, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.section8.point4, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.section8.point5, language)}</span>
            </li>
          </ul>

          <p className="mt-6" dangerouslySetInnerHTML={{ __html: t(trans.section8.para2, language) }} />
        </div>
      </motion.section>

      {/* Section 9: Holiness, Universality, Unity */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section9.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.section9.para1, language)}</p>
          <p>{t(trans.section9.para2, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section9.doctrinalConsistency, language)}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section9.sacramentalGrace, language)}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section9.moralTeaching, language)}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong className="text-white">{t(trans.section9.globalOutreach, language)}</strong></span>
            </li>
          </ul>

          <p>{t(trans.section9.para3, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section9.matthewQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— {t(trans.section9.matthewSource, language)}</p>
          </div>
        </div>
      </motion.section>

      {/* Section 10: Reason, Faith, Fulfillment */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">{t(trans.section10.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section10.para1, language) }} />
          <p>{t(trans.section10.para2, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section10.point1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section10.point2, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.section10.point3, language) }} />
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section10.quote, language)}"
            </p>
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
          <p className="text-lg">{t(trans.conclusion.intro, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.conclusion.reason1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.conclusion.reason2, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.conclusion.reason3, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.conclusion.reason4, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.conclusion.reason5, language) }} />
            </li>
          </ul>

          <p className="text-lg mt-8" dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para, language) }} />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
            <p className="text-gray-300 italic">
              "{t(trans.conclusion.newmanQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— {t(trans.conclusion.newmanSource, language)}</p>
          </div>
        </div>
      </motion.section>

      {/* Second Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_9Q9on_IYAw"
            title="Why Be Catholic - Additional Resource"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8"
      >
        <h3 className="text-white mb-4">{t(trans.bridge.heading, language)}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{t(trans.bridge.para1, language)}</p>
        <p className="text-gray-400 leading-relaxed">{t(trans.bridge.para2, language)}</p>
      </motion.div>
    </TopicLayout>
  );
}
