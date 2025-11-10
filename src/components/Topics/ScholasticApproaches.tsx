import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  BookOpen,
  Scale,
  Brain,
  CheckCircle,
  XCircle,
  Lightbulb,
  Users,
  Shield,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function ScholasticApproaches() {
  const { language } = useLanguage();
  const trans = translations.scholasticApproaches;

  const cognitionModes = [
    {
      title: t(trans.section6.modes.m1.title, language),
      description: t(trans.section6.modes.m1.desc, language),
      applicable: false,
      icon: Brain,
    },
    {
      title: t(trans.section6.modes.m2.title, language),
      description: t(trans.section6.modes.m2.desc, language),
      applicable: false,
      icon: Lightbulb,
    },
    {
      title: t(trans.section6.modes.m3.title, language),
      description: t(trans.section6.modes.m3.desc, language),
      applicable: true,
      icon: BookOpen,
    },
  ];

  const logicSteps = [
    t(trans.section7.logic.l1, language),
    t(trans.section7.logic.l2, language),
    t(trans.section7.logic.l3, language),
    t(trans.section7.logic.l4, language),
    t(trans.section7.logic.l5, language),
    t(trans.section7.logic.l6, language),
    t(trans.section7.logic.l7, language),
    t(trans.section7.logic.l8, language),
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
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p1, language),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p2, language),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p3, language),
          }}
        />
      </div>

      <Separator className="my-16 bg-gray-800" />


      {/* --- ADD THIS NEW SECTION --- */}
      {/* Videos */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EJhTnA0oAY4"
            title="Sola Scriptura is Impossible"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      {/* --- END OF ADDED SECTION --- */}

      {/* I. Conceptual Confusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section1.h2, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.p1, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.p2, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.p3, language),
            }}
          />
          <p>{t(trans.section1.p4, language)}</p>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.section1.callout.h3, language)}
            </h3>
            <p
              className="text-gray-300"
              dangerouslySetInnerHTML={{
                __html: t(trans.section1.callout.p1, language),
              }}
            />
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />


      {/* II. Inaccessibility of Inspiration */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section2.h2, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section2.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;
              {t(trans.section2.franzelin.quote, language)}
              &quot;
            </p>
            <p className="text-gray-500">
              — {t(trans.section2.franzelin.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section2.p2, language),
            }}
          />
          <p>{t(trans.section2.p3, language)}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section2.p4, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. The Protestant Dilemma */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section3.h2, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;
              {t(trans.section3.westminster.quote, language)}
              &quot;
            </p>
            <p className="text-gray-500">
              — {t(trans.section3.westminster.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3.p2, language),
            }}
          />
          <p>{t(trans.section3.p3, language)}</p>
          <p>{t(trans.section3.p4, language)}</p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* IV. Protestant Canonical Methodologies */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section4.h2, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.section4.p1, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.section4.callout.h3, language)}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.section4.callout.li1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.section4.callout.li2,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
          </div>

          <p>{t(trans.section4.p2, language)}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section4.p3, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* V. The Catholic Solution */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section5.h2, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section5.p1, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section5.p2, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;
              {t(trans.section5.augustine.quote, language)}
              &quot;
            </p>
            <p className="text-gray-500">
              —{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.section5.augustine.source,
                    language,
                  ),
                }}
              />
            </p>
          </div>

          <p>{t(trans.section5.p3, language)}</p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.section5.callout.h3, language)}
            </h3>
            <p className="text-gray-300">
              {t(trans.section5.callout.p1, language)}
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* VI. Modes of Cognition */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section6.h2, language)}
        </h2>
        <p className="text-gray-300 mb-8">
          {t(trans.section6.p1, language)}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cognitionModes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-gray-900/50 to-gray-900/30 border ${mode.applicable ? "border-green-800" : "border-gray-800"} rounded-lg p-6`}
            >
              <div
                className={`w-12 h-12 rounded-full ${mode.applicable ? "bg-green-900/30 border-green-700" : "bg-gray-800 border-gray-700"} border flex items-center justify-center mb-4`}
              >
                <mode.icon
                  className={
                    mode.applicable
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                  size={24}
                />
              </div>
              <h4 className="text-white mb-2">{mode.title}</h4>
              <p className="text-gray-400 text-sm mb-4">
                {mode.description}
              </p>
              {mode.applicable ? (
                <span className="text-green-400 text-xs font-medium">
                  {t(trans.section6.p2, language)}
                </span>
              ) : (
                <span className="text-red-400 text-xs font-medium">
                  {t(trans.section6.p3, language)}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6 mt-8">
          <h3 className="text-white mb-4">
            {t(trans.section6.callout1.h3, language)}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle
                className="text-blue-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.section6.callout1.li1,
                    language,
                  ),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="text-blue-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.section6.callout1.li2,
                    language,
                  ),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                className="text-blue-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.section6.callout1.li3,
                    language,
                  ),
                }}
              />
            </li>
          </ul>
        </div>

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 mt-6">
          <h3 className="text-white mb-4">
            {t(trans.section6.callout2.h3, language)}
          </h3>
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.section6.callout2.p1, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* VII. Formal Logical Refutation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section7.h2, language)}
        </h2>
        <p className="text-gray-300 mb-8">
          {t(trans.section7.p1, language)}
        </p>

        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-8">
          <ol className="space-y-4">
            {logicSteps.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span
                  className={`flex-shrink-0 mt-1 font-mono ${index < 4 ? "text-red-400" : "text-orange-400"}`}
                >
                  {index + 1}.
                </span>
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 mt-6">
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.section7.callout.p1, language),
            }}
          />
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
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.p1, language),
            }}
          />
          <p>{t(trans.conclusion.p2, language)}</p>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8">
            <h3 className="text-white mb-4">
              {t(trans.conclusion.callout.h3, language)}
            </h3>
            <p
              className="text-gray-300 mb-6"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.callout.p1,
                  language,
                ),
              }}
            />
            <div className="flex items-center justify-center space-x-4 text-white">
              <span className="font-medium">
                {t(
                  trans.conclusion.callout.scripture,
                  language,
                )}
              </span>
              <span className="text-gray-400">+</span>
              <span className="font-medium">
                {t(
                  trans.conclusion.callout.tradition,
                  language,
                )}
              </span>
              <span className="text-gray-400">+</span>
              <span className="font-medium">
                {t(
                  trans.conclusion.callout.magisterium,
                  language,
                )}
              </span>
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.p3, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-2">
              &quot;
              {t(trans.conclusion.lukeQuote.text, language)}
              &quot;
            </p>
            <p className="text-gray-500">
              — {t(trans.conclusion.lukeQuote.source, language)}
            </p>
          </div>
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-2">
              &quot;
              {t(trans.conclusion.timothyQuote.text, language)}
              &quot;
            </p>
            <p className="text-gray-500">
              —{" "}
              {t(
                trans.conclusion.timothyQuote.source,
                language,
              )}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <Shield
            className="text-blue-400 flex-shrink-0 mt-1"
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