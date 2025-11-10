import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Shield,
  BookOpen,
  Users,
  Lightbulb,
  Scale,
  CheckCircle,
  AlertCircle,
  Crown,
  Sparkles,
  ScrollText,
  Award,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function Magisterium() {
  const { language } = useLanguage();
  const trans = translations.magisterium;

  const revelationPoints = [
    {
      title: t(
        trans.scholastic.revelation.points.p1.title,
        language,
      ),
      description: t(
        trans.scholastic.revelation.points.p1.desc,
        language,
      ),
      icon: Lightbulb,
    },
    {
      title: t(
        trans.scholastic.revelation.points.p2.title,
        language,
      ),
      description: t(
        trans.scholastic.revelation.points.p2.desc,
        language,
      ),
      icon: Shield,
    },
    {
      title: t(
        trans.scholastic.revelation.points.p3.title,
        language,
      ),
      description: t(
        trans.scholastic.revelation.points.p3.desc,
        language,
      ),
      icon: Award,
    },
  ];

  const threefoldMission = [
    {
      type: t(
        trans.scholastic.mission.cards.c1.title,
        language,
      ),
      analogy: t(
        trans.scholastic.mission.cards.c1.analogy,
        language,
      ),
      function: t(
        trans.scholastic.mission.cards.c1.funcDesc,
        language,
      ),
      office: t(
        trans.scholastic.mission.cards.c1.officeDesc,
        language,
      ),
      icon: Users,
      color: "blue",
    },
    {
      type: t(
        trans.scholastic.mission.cards.c2.title,
        language,
      ),
      analogy: t(
        trans.scholastic.mission.cards.c2.analogy,
        language,
      ),
      function: t(
        trans.scholastic.mission.cards.c2.funcDesc,
        language,
      ),
      office: t(
        trans.scholastic.mission.cards.c2.officeDesc,
        language,
      ),
      icon: ScrollText,
      color: "purple",
    },
    {
      type: t(
        trans.scholastic.mission.cards.c3.title,
        language,
      ),
      analogy: t(
        trans.scholastic.mission.cards.c3.analogy,
        language,
      ),
      function: t(
        trans.scholastic.mission.cards.c3.funcDesc,
        language,
      ),
      office: t(
        trans.scholastic.mission.cards.c3.officeDesc,
        language,
      ),
      icon: Scale,
      color: "amber",
    },
  ];

  const divineCooperation = [
    {
      title: t(
        trans.scholastic.cooperation.cards.c1.title,
        language,
      ),
      description: t(
        trans.scholastic.cooperation.cards.c1.desc,
        language,
      ),
    },
    {
      title: t(
        trans.scholastic.cooperation.cards.c2.title,
        language,
      ),
      description: t(
        trans.scholastic.cooperation.cards.c2.desc,
        language,
      ),
    },
    {
      title: t(
        trans.scholastic.cooperation.cards.c3.title,
        language,
      ),
      description: t(
        trans.scholastic.cooperation.cards.c3.desc,
        language,
      ),
    },
  ];

  const scriptureFoundations = [
    {
      title: t(trans.dogmatic.cards.c1.title, language),
      reference: t(trans.dogmatic.cards.c1.ref, language),
      quote: t(trans.dogmatic.cards.c1.quote, language),
      points: [
        t(trans.dogmatic.cards.c1.points.p1, language),
        t(trans.dogmatic.cards.c1.points.p2, language),
        t(trans.dogmatic.cards.c1.points.p3, language),
      ],
    },
    {
      title: t(trans.dogmatic.cards.c2.title, language),
      reference: t(trans.dogmatic.cards.c2.ref, language),
      quote: t(trans.dogmatic.cards.c2.quote, language),
      points: [
        t(trans.dogmatic.cards.c2.points.p1, language),
        t(trans.dogmatic.cards.c2.points.p2, language),
      ],
    },
    {
      title: t(trans.dogmatic.cards.c3.title, language),
      reference: t(trans.dogmatic.cards.c3.ref, language),
      quote: t(trans.dogmatic.cards.c3.quote, language),
      points: [
        t(trans.dogmatic.cards.c3.points.p1, language),
        t(trans.dogmatic.cards.c3.points.p2, language),
      ],
    },
    {
      title: t(trans.dogmatic.cards.c4.title, language),
      reference: t(trans.dogmatic.cards.c4.ref, language),
      quote: t(trans.dogmatic.cards.c4.quote, language),
      points: [
        t(trans.dogmatic.cards.c4.points.p1, language),
        t(trans.dogmatic.cards.c4.points.p2, language),
      ],
    },
    {
      title: t(trans.dogmatic.cards.c5.title, language),
      reference: t(trans.dogmatic.cards.c5.ref, language),
      quote: t(trans.dogmatic.cards.c5.quote, language),
      points: [
        t(trans.dogmatic.cards.c5.points.p1, language),
        t(trans.dogmatic.cards.c5.points.p2, language),
      ],
    },
  ];

  const supportingTexts = [
    {
      reference: t(trans.dogmatic.supporting.t1.ref, language),
      text: t(trans.dogmatic.supporting.t1.text, language),
    },
    {
      reference: t(trans.dogmatic.supporting.t2.ref, language),
      text: t(trans.dogmatic.supporting.t2.text, language),
    },
    {
      reference: t(trans.dogmatic.supporting.t3.ref, language),
      text: t(trans.dogmatic.supporting.t3.text, language),
    },
  ];

  const continuityArguments = [
    {
      title: t(trans.continuity.cards.c1.title, language),
      description: t(trans.continuity.cards.c1.desc, language),
      icon: CheckCircle,
    },
    {
      title: t(trans.continuity.cards.c2.title, language),
      description: t(trans.continuity.cards.c2.desc, language),
      icon: Shield,
    },
    {
      title: t(trans.continuity.cards.c3.title, language),
      description: t(trans.continuity.cards.c3.desc, language),
      icon: Award,
    },
  ];

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote.text, language),
        source: t(trans.quote.source, language),
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">
          {t(trans.intro.h2, language)}
        </h2>

        <p>{t(trans.intro.p1, language)}</p>

        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p2, language),
          }}
        />

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800 rounded-lg p-6">
          <h3 className="text-white mb-4">
            {t(trans.intro.callout.h3, language)}
          </h3>
          <ol className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-mono mt-1">
                1.
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.intro.callout.li1, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-1">
                2.
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.intro.callout.li2, language),
                }}
              />
            </li>
          </ol>
        </div>
      </div>

      {/* Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bOfdtjHojo4"
            title={t(trans.video.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* I. Scholastic Theology */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.scholastic.h2, language)}
        </h2>

        {/* 1. The Nature of Revelation */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">
            {t(trans.scholastic.revelation.h3, language)}
          </h3>

          <p>{t(trans.scholastic.revelation.p1, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p
              className="text-gray-300 italic mb-3"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.scholastic.revelation.ottQuote,
                  language,
                ),
              }}
            />
            <p className="text-gray-500">
              —{" "}
              {t(
                trans.scholastic.revelation.ottSource,
                language,
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {revelationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center mb-4">
                  <point.icon
                    className="text-blue-400"
                    size={24}
                  />
                </div>
                <h4 className="text-white mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. The End Determines the Means */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">
            {t(trans.scholastic.means.h3, language)}
          </h3>

          <p>{t(trans.scholastic.means.p1, language)}</p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6">
              <h4 className="text-white mb-3">
                {t(
                  trans.scholastic.means.cards.c1.title,
                  language,
                )}
              </h4>
              <p className="text-gray-300 mb-2">
                {t(
                  trans.scholastic.means.cards.c1.p1,
                  language,
                )}
              </p>
              <p className="text-gray-500 text-sm italic">
                {t(
                  trans.scholastic.means.cards.c1.p2,
                  language,
                )}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6">
              <h4 className="text-white mb-3">
                {t(
                  trans.scholastic.means.cards.c2.title,
                  language,
                )}
              </h4>
              <p className="text-gray-300 mb-2">
                {t(
                  trans.scholastic.means.cards.c2.p1,
                  language,
                )}
              </p>
              <p className="text-gray-500 text-sm italic">
                {t(
                  trans.scholastic.means.cards.c2.p2,
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <p
              className="text-white mb-3"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.scholastic.means.callout.p1,
                  language,
                ),
              }}
            />
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p
                className="text-gray-300 italic"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.scholastic.means.callout.quote,
                    language,
                  ),
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. The Threefold Mission */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">
            {t(trans.scholastic.mission.h3, language)}
          </h3>

          <p>{t(trans.scholastic.mission.p1, language)}</p>

          <div className="space-y-4 mt-6">
            {threefoldMission.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`bg-gradient-to-r from-${mission.color}-900/20 to-${mission.color}-900/5 border border-${mission.color}-800 rounded-lg p-6`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-${mission.color}-900/50 border border-${mission.color}-700 flex items-center justify-center flex-shrink-0`}
                  >
                    <mission.icon
                      className={`text-${mission.color}-400`}
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="grid md:grid-cols-3 gap-4 mb-2">
                      <div>
                        <h4 className="text-white mb-1">
                          {mission.type}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {mission.analogy}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">
                          {t(
                            trans.scholastic.mission.cards.c1
                              .func,
                            language,
                          )}
                        </p>
                        <p className="text-gray-300">
                          {mission.function}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">
                          {t(
                            trans.scholastic.mission.cards.c1
                              .office,
                            language,
                          )}
                        </p>
                        <p className="text-white">
                          {mission.office}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Divine Cooperation */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">
            {t(trans.scholastic.cooperation.h3, language)}
          </h3>

          <p>{t(trans.scholastic.cooperation.p1, language)}</p>

          <div className="grid md:grid-cols-3 gap-6 my-6">
            {divineCooperation.map((coop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-800 rounded-lg p-6"
              >
                <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700 mb-4 mx-auto">
                  <Sparkles
                    className="text-purple-300"
                    size={28}
                  />
                </div>
                <h4 className="text-white text-center mb-3">
                  {coop.title}
                </h4>
                <p className="text-gray-400 text-center text-sm">
                  {coop.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p
              className="text-gray-300 italic"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.scholastic.cooperation.quote,
                  language,
                ),
              }}
            />
            <p className="text-gray-500 mt-2">
              —{" "}
              {t(trans.scholastic.cooperation.source, language)}
            </p>
          </div>
        </div>

        {/* 5. The Essence of Infallibility */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h3 className="text-white">
            {t(trans.scholastic.essence.h3, language)}
          </h3>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <p
              className="text-white mb-3"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.scholastic.essence.callout.p1,
                  language,
                ),
              }}
            />
            <p className="text-gray-300">
              {t(trans.scholastic.essence.callout.p2, language)}
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. Dogmatic Theology */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.dogmatic.h2, language)}
        </h2>

        <p className="text-gray-300 mb-8">
          {t(trans.dogmatic.p1, language)}
        </p>

        <div className="space-y-8">
          {scriptureFoundations.map((foundation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300 font-mono">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">
                      {foundation.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-mono">
                      {foundation.reference}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                  <p className="text-gray-300 italic">
                    &quot;{foundation.quote}&quot;
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 text-sm mb-3">
                    {t(
                      trans.dogmatic.cards.c1.points.title,
                      language,
                    )}
                  </p>
                  {foundation.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-green-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Texts */}
        <div className="mt-12">
          <h3 className="text-white mb-6">
            {t(trans.dogmatic.supporting.h3, language)}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {supportingTexts.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6"
              >
                <BookOpen
                  className="text-purple-400 mb-3"
                  size={24}
                />
                <p className="text-purple-400 text-sm font-mono mb-3">
                  {text.reference}
                </p>
                <p className="text-gray-300 text-sm italic">
                  &quot;{text.text}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Continuity Beyond the Apostles */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.continuity.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.continuity.p1, language)}</p>

          <div className="space-y-4 mt-6">
            {continuityArguments.map((arg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6 flex items-start gap-4"
              >
                <arg.icon
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-white mb-2">
                    {arg.title}
                  </h4>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: arg.description,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">
            {t(trans.continuity.p2, language)}
          </p>
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
        <h2 className="text-white mb-6">
          {t(trans.conclusion.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.conclusion.p1, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p
              className="text-gray-300 italic mb-3"
              dangerouslySetInnerHTML={{
                __html: t(trans.conclusion.quote, language),
              }}
            />
            <p className="text-gray-500">
              — {t(trans.conclusion.source, language)}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
            <p className="text-white text-lg">
              {t(trans.conclusion.callout.p1, language)}
            </p>
          </div>

          <p className="text-center text-gray-500 italic text-lg">
            {t(trans.conclusion.final, language)}
          </p>
        </div>
      </motion.section>

      {/* Visual Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.visual.h3, language)}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700 mb-4 mx-auto">
              <Shield className="text-blue-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.visual.c1.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.visual.c1.desc, language)}
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700 mb-4 mx-auto">
              <BookOpen className="text-purple-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.visual.c2.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.visual.c2.desc, language)}
            </p>
          </div>

          <div className="bg-gradient-to-b from-green-900/30 to-green-900/10 border border-green-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center border border-green-700 mb-4 mx-auto">
              <Users className="text-green-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.visual.c3.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.visual.c3.desc, language)}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <AlertCircle
            className="text-amber-400 flex-shrink-0 mt-1"
            size={28}
          />
          <div>
            <h3 className="text-white mb-4">
              {t(trans.bridge.h3, language)}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t(trans.bridge.p1, language)}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t(trans.bridge.p2, language)}
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}