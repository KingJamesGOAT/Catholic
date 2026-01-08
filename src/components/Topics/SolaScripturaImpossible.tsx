import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  XCircle,
  AlertTriangle,
  BookOpen,
  Scale,
  Lightbulb,
  Users,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function SolaScripturaImpossible() {
  const { language } = useLanguage();
  const trans = translations.solaScripturaImpossible;

  const faithElements = [
    {
      label: t(trans.natureOfFaith.elements.e1.label, language),
      description: t(
        trans.natureOfFaith.elements.e1.desc,
        language,
      ),
      icon: Lightbulb,
    },
    {
      label: t(trans.natureOfFaith.elements.e2.label, language),
      description: t(
        trans.natureOfFaith.elements.e2.desc,
        language,
      ),
      icon: BookOpen,
    },
    {
      label: t(trans.natureOfFaith.elements.e3.label, language),
      description: t(
        trans.natureOfFaith.elements.e3.desc,
        language,
      ),
      icon: Scale,
    },
  ];

  const distinguishedTerms = [
    {
      term: t(trans.definitions.terms.t1.term, language),
      definition: t(trans.definitions.terms.t1.def, language),
      color: "blue",
    },
    {
      term: t(trans.definitions.terms.t2.term, language),
      definition: t(trans.definitions.terms.t2.def, language),
      color: "purple",
    },
    {
      term: t(trans.definitions.terms.t3.term, language),
      definition: t(trans.definitions.terms.t3.def, language),
      color: "green",
    },
  ];

  const counterArgs = [
    trans.counterarguments.c1,
    trans.counterarguments.c2,
    trans.counterarguments.c3,
    trans.counterarguments.c4,
    trans.counterarguments.c5,
    trans.counterarguments.c6,
  ];

  const solutionSteps = [
    trans.solution.steps.s1,
    trans.solution.steps.s2,
    trans.solution.steps.s3,
    trans.solution.steps.s4,
    trans.solution.steps.s5,
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

        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic">
            &quot;{t(trans.intro.quote, language)}&quot;
          </p>
        </div>

        <p><SmartText>{t(trans.intro.p1, language)}</SmartText></p>

        <p><SmartText>{t(trans.intro.p2, language)}</SmartText></p>
      </div>

      {/* Videos */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5159MqzEUy8"
            title={t(trans.video.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Summary of Argument */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.summary.h2, language)}
        </h2>

        <p className="text-gray-300 mb-6">
          {t(trans.summary.p1, language)}
        </p>

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <XCircle
              className="text-red-400 flex-shrink-0 mt-1"
              size={28}
            />
            <div>
              <p className="text-white text-lg mb-4">
                {t(trans.summary.callout.p1, language)}
              </p>
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.summary.callout.p2, language),
                }}
              />
            </div>
          </div>
        </div>

        <p className="text-gray-300 mt-6">
          {t(trans.summary.p2, language)}
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Presumption and State of Question */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.presumption.h2, language)}
        </h2>

        <p className="text-gray-300 mb-6">
          {t(trans.presumption.p1, language)}
        </p>

        {/* Presumption */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-white mb-4">
            {t(trans.presumption.presumptionCase.h3, language)}
          </h3>
          <p className="text-gray-300">
            {t(trans.presumption.presumptionCase.p1, language)}
          </p>
        </div>

        {/* State of Question */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h3 className="text-white mb-4">
            {t(trans.presumption.stateQuestion.h3, language)}
          </h3>
          <p
            className="text-gray-300 mb-4"
            dangerouslySetInnerHTML={{
              __html: t(
                trans.presumption.stateQuestion.p1,
                language,
              ),
            }}
          />
          <ol className="space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">1.</span>
              <span>
                {t(
                  trans.presumption.stateQuestion.li1,
                  language,
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">2.</span>
              <span>
                {t(
                  trans.presumption.stateQuestion.li2,
                  language,
                )}
              </span>
            </li>
          </ol>
          <p className="text-gray-400 mt-4">
            {t(trans.presumption.stateQuestion.p2, language)}
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* What is Sola Scriptura */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.whatIsSS.h2, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.whatIsSS.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-white text-lg">
              {t(trans.whatIsSS.callout, language)}
            </p>
          </div>

          <p>{t(trans.whatIsSS.p2, language)}</p>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.whatIsSS.confessions.c1,
                    language,
                  ),
                }}
              />
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.whatIsSS.confessions.c2,
                    language,
                  ),
                }}
              />
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.whatIsSS.confessions.c3,
                    language,
                  ),
                }}
              />
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.whatIsSS.confessions.c4,
                    language,
                  ),
                }}
              />
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.whatIsSS.p3, language),
            }}
          />

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.whatIsSS.li1, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.whatIsSS.li2, language)}</span>
            </li>
          </ul>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.whatIsSS.p4, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Nature of Faith */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.natureOfFaith.h2, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.natureOfFaith.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              &quot;{t(trans.natureOfFaith.quote, language)}
              &quot;
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.natureOfFaith.source, language)}
            </p>
          </div>

          <p className="mb-6">
            {t(trans.natureOfFaith.p2, language)}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {faithElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700 flex items-center justify-center mb-4">
                  <element.icon
                    className="text-purple-400"
                    size={24}
                  />
                </div>
                <h4 className="text-white mb-2">
                  {element.label}
                </h4>
                <p className="text-gray-400 text-sm">
                  <SmartText>{element.description}</SmartText>
                </p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-white mt-8 mb-4">
            {t(trans.natureOfFaith.faithVsVision.h3, language)}
          </h3>

          <p>
            {t(trans.natureOfFaith.faithVsVision.p1, language)}
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Revelation, Infallibility, Inspiration */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.definitions.h2, language)}
        </h2>

        <p className="text-gray-300 mb-6">
          {t(trans.definitions.p1, language)}
        </p>

        <div className="space-y-4">
          {distinguishedTerms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-${item.color}-900/10 border border-${item.color}-800 rounded-lg p-6`}
            >
              <h4 className="text-white mb-2">{item.term}</h4>
              <p className="text-gray-300">{item.definition}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mt-8">
          <p className="text-gray-300 mb-4">
            {t(trans.definitions.callout.p1, language)}
          </p>
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.definitions.callout.p2, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* The Argument Fully Stated */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.argument.h2, language)}
        </h2>

        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-8">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                1.
              </span>
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.argument.li1, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                2.
              </span>
              <span className="text-gray-300">
                {t(trans.argument.li2, language)}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                3.
              </span>
              <span className="text-gray-300">
                {t(trans.argument.li3, language)}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                4.
              </span>
              <span className="text-gray-300">
                {t(trans.argument.li4, language)}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 flex-shrink-0 mt-1 font-mono">
                5.
              </span>
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.argument.li5, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 flex-shrink-0 mt-1 font-mono">
                6.
              </span>
              <span
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(trans.argument.li6, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                7.
              </span>
              <span
                className="text-white font-medium"
                dangerouslySetInnerHTML={{
                  __html: t(trans.argument.li7, language),
                }}
              />
            </li>
          </ol>
        </div>

        <p className="text-gray-300 mt-6">
          {t(trans.argument.p1, language)}
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Tu Quoque */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.tuQuoque.h2, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.tuQuoque.p1, language)}</p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">
              {t(trans.tuQuoque.callout.h4, language)}
            </h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">1.</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.tuQuoque.callout.li1,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">2.</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.tuQuoque.callout.li2,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">3.</span>
                <span>
                  {t(trans.tuQuoque.callout.li3, language)}
                </span>
              </li>
            </ol>
          </div>

          <p>{t(trans.tuQuoque.p2, language)}</p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Protestant Counterarguments */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.counterarguments.h2, language)}
        </h2>

        {counterArgs.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <XCircle
                className="text-red-400 flex-shrink-0 mt-1"
                size={24}
              />
              <h3 className="text-white">
                {t(item.h3, language)}
              </h3>
            </div>
            <p
              className="text-gray-300"
              dangerouslySetInnerHTML={{
                __html: t(item.p1, language),
              }}
            />
          </div>
        ))}
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Catholic Solution */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.solution.h2, language)}
        </h2>

        <p className="text-gray-300 mb-8">
          {t(trans.solution.p1, language)}
        </p>

        <h3 className="text-white mb-6">
          {t(trans.solution.h3, language)}
        </h3>

        <div className="space-y-4">
          {solutionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
                <span className="text-green-300 font-mono text-sm">
                  {index + 1}
                </span>
              </div>
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(step, language),
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-8">
          <p className="text-gray-300 italic">
            &quot;{t(trans.solution.quote1, language)}&quot;
          </p>
        </div>

        <p className="text-gray-300 mb-4">
          {t(trans.solution.p2, language)}
        </p>

        <h3 className="text-white mt-8 mb-4">
          {t(trans.solution.h3tradition, language)}
        </h3>

        <p
          className="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{
            __html: t(trans.solution.p3, language),
          }}
        />

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
          <p className="text-gray-300 italic mb-3">
            &quot;{t(trans.solution.quote2.text, language)}
            &quot;
          </p>
          <p className="text-gray-500">
            — {t(trans.solution.quote2.source, language)}
          </p>
        </div>

        <p className="text-gray-300 mb-4">
          {t(trans.solution.p4, language)}
        </p>

        <h3 className="text-white mt-8 mb-4">
          {t(trans.solution.h3magisterium, language)}
        </h3>

        <p className="text-gray-300">
          {t(trans.solution.p5, language)}
        </p>
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

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.conclusion.p1, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: t(trans.conclusion.li1, language),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-300">
                  {t(trans.conclusion.li2, language)}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg">
            {t(trans.conclusion.p2, language)}
          </p>
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
          <CheckCircle
            className="text-blue-400 flex-shrink-0 mt-1"
            size={28}
          />
          <div>
            <h3 className="text-white mb-4">
              {t(trans.bridge.h3, language)}
            </h3>
            <p
              className="text-gray-300 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: t(trans.bridge.p1, language),
              }}
            />
            <p className="text-gray-400 leading-relaxed">
              {t(trans.bridge.p2, language)}
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
