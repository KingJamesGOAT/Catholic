import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  BookOpen,
  AlertCircle,
  CheckCircle,
  XCircle,
  Users,
  Scale,
  Anchor,
  Milestone,
  History,
  GitBranch,
  ArrowRight,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";
import React from "react";

export default function WhyNotSolaScriptura() {
  const { language } = useLanguage();
  const trans = translations.whyNotSolaScriptura;

  const keyQuestions = [
    t(trans.intro.keyQuestions.q1, language),
    t(trans.intro.keyQuestions.q2, language),
    t(trans.intro.keyQuestions.q3, language),
    t(trans.intro.keyQuestions.q4, language),
    t(trans.intro.keyQuestions.q5, language),
  ];

  const nineArguments = [
    { title: t(trans.args.arg9Title, language), id: "arg9" },
    { title: t(trans.args.arg8Title, language), id: "arg8" },
    { title: t(trans.args.arg7Title, language), id: "arg7" },
    { title: t(trans.args.arg6Title, language), id: "arg6" },
    { title: t(trans.args.arg5Title, language), id: "arg5" },
    { title: t(trans.args.arg4Title, language), id: "arg4" },
    { title: t(trans.args.arg3Title, language), id: "arg3" },
    { title: t(trans.args.arg2Title, language), id: "arg2" },
    { title: t(trans.args.arg1Title, language), id: "arg1" },
  ];

  const arg9Evidence = [
    t(trans.arg9.evidence.e1, language),
    t(trans.arg9.evidence.e2, language),
    t(trans.arg9.evidence.e3, language),
  ];

  const arg9Summary = [
    t(trans.arg9.summary.s1, language),
    t(trans.arg9.summary.s2, language),
    t(trans.arg9.summary.s3, language),
    t(trans.arg9.summary.s4, language),
  ];

  const arg8Conflicts = [
    t(trans.arg8.conflicts.c1, language),
    t(trans.arg8.conflicts.c2, language),
    t(trans.arg8.conflicts.c3, language),
    t(trans.arg8.conflicts.c4, language),
  ];

  const arg8RootCause = [
    t(trans.arg8.rootCause.b1, language),
    t(trans.arg8.rootCause.b2, language),
    t(trans.arg8.rootCause.b3, language),
  ];

  const arg8Consequences = [
    t(trans.arg8.consequences.c1, language),
    t(trans.arg8.consequences.c2, language),
    t(trans.arg8.consequences.c3, language),
  ];

  const arg7Court = [
    t(trans.arg7.court.b1, language),
    t(trans.arg7.court.b2, language),
    t(trans.arg7.court.b3, language),
  ];

  const arg6OralTradition = [
    t(trans.arg6.oralTradition.b1, language),
    t(trans.arg6.oralTradition.b2, language),
    t(trans.arg6.oralTradition.b3, language),
    t(trans.arg6.oralTradition.b4, language),
  ];

  const arg5Attempts = [
    t(trans.arg5.attempts.a1, language),
    t(trans.arg5.attempts.a2, language),
    t(trans.arg5.attempts.a3, language),
    t(trans.arg5.attempts.a4, language),
  ];

  const arg4Problems = [
    t(trans.arg4.historicalProblem.b1, language),
    t(trans.arg4.historicalProblem.b2, language),
    t(trans.arg4.historicalProblem.b3, language),
  ];

  const arg3Text = [
    t(trans.arg3.perfectText.b1, language),
    t(trans.arg3.perfectText.b2, language),
    t(trans.arg3.perfectText.b3, language),
  ];

  const arg3STM = [
    {
      element: t(trans.arg3.stm.table.row1_1, language),
      role: t(trans.arg3.stm.table.row1_2, language),
    },
    {
      element: t(trans.arg3.stm.table.row2_1, language),
      role: t(trans.arg3.stm.table.row2_2, language),
    },
    {
      element: t(trans.arg3.stm.table.row3_1, language),
      role: t(trans.arg3.stm.table.row3_2, language),
    },
  ];

  const arg3ScriptureSupports = [
    t(trans.arg3.scriptureSupports.b1, language),
    t(trans.arg3.scriptureSupports.b2, language),
    t(trans.arg3.scriptureSupports.b3, language),
  ];

  const arg2Tradition = [
    {
      quote: t(trans.arg2.a.quote, language),
      source: t(trans.arg2.a.source, language),
      points: [
        t(trans.arg2.a.b1, language),
        t(trans.arg2.a.b2, language),
        t(trans.arg2.a.b3, language),
      ],
    },
    {
      quote: t(trans.arg2.b.quote, language),
      source: t(trans.arg2.b.source, language),
      points: [
        t(trans.arg2.b.p1, language),
        t(trans.arg2.b.b1, language),
        t(trans.arg2.b.b2, language),
        t(trans.arg2.b.b3, language),
        t(trans.arg2.b.p2, language),
      ],
    },
  ];

  const arg2Authority = [
    {
      quote: t(trans.arg2.c.quote, language),
      source: t(trans.arg2.c.source, language),
      p1: t(trans.arg2.c.p1, language),
    },
    {
      quote: t(trans.arg2.c.quote2, language),
      source: t(trans.arg2.c.source2, language),
      p1: t(trans.arg2.c.b1, language),
    },
    {
      quote: t(trans.arg2.d.quote, language),
      source: t(trans.arg2.d.source, language),
      p1: t(trans.arg2.d.p1, language),
    },
  ];

  const arg2Interpretation = [
    {
      quote: t(trans.arg2.f.quote1, language),
      source: t(trans.arg2.f.source1, language),
      points: [
        t(trans.arg2.f.b1, language),
        t(trans.arg2.f.b2, language),
      ],
    },
    {
      quote: t(trans.arg2.f.quote2, language),
      source: t(trans.arg2.f.source2, language),
      points: [t(trans.arg2.f.p2, language)],
    },
  ];

  const arg2Incompleteness = [
    {
      quote: t(trans.arg2.g.quote1, language),
      source: t(trans.arg2.g.source1, language),
    },
    {
      quote: t(trans.arg2.g.quote2, language),
      source: t(trans.arg2.g.source2, language),
    },
  ];

  const arg1Arbitrary = [
    t(trans.arg1.arbitrary.b1, language),
    t(trans.arg1.arbitrary.b2, language),
    t(trans.arg1.arbitrary.b3, language),
  ];

  const conclusionVerdict = [
    t(trans.conclusion.verdict.v1, language),
    t(trans.conclusion.verdict.v2, language),
    t(trans.conclusion.verdict.v3, language),
    t(trans.conclusion.verdict.v4, language),
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
          {t(trans.intro.heading, language)}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p1, language),
          }}
        />
        <p>{t(trans.intro.p2, language)}</p>
        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic">
            {t(trans.intro.ortlandQuote, language)}
          </p>
        </div>
        <p>{t(trans.intro.p3, language)}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p4, language),
          }}
        />

        <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
          <h3 className="text-white mb-4">
            {t(trans.intro.keyQuestions.heading, language)}
          </h3>
          <ul className="space-y-2">
            {keyQuestions.map((q, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <AlertCircle
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nHzFP9sSAI0"
            title="Against Sola Scriptura"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      {/* Argument List */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.nineArguments.heading, language)}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {nineArguments.map((arg, index) => (
            <motion.a
              key={arg.id}
              href={`#${arg.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-gray-300 hover:bg-gray-800/50 hover:border-blue-700 transition-all flex items-center gap-4"
            >
              <span className="text-blue-400 font-mono text-lg">
                {9 - index}.
              </span>
              <span>{arg.title}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 8 */}{" "}
      <motion.section
        id="arg8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        {" "}
        <h2 className="text-white mb-6">
          {" "}
          {t(trans.arg8.heading, language)}{" "}
        </h2>{" "}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {" "}
          <p>{t(trans.arg8.p1, language)}</p>{" "}
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            {" "}
            <p className="text-gray-300 italic">
              {" "}
              {t(trans.arg8.quote1, language)}{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            {" "}
            <h3 className="text-white mt-8 mb-4">
              {t(trans.arg8.stats.heading, language)}
            </h3>
            <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
              <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(trans.arg8.stats.s1, language),
                    }}
                  />
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(trans.arg8.stats.s2, language),
                    }}
                  />
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(trans.arg8.stats.s3, language),
                    }}
                  />
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(trans.arg8.stats.s4, language),
                    }}
                  />
                </li>
              </ul>

              <p className="text-gray-400 mt-4 italic text-sm md:text-base text-center">
                {t(trans.arg8.stats.s4, language)}
              </p>
            </div>
          </div>
          <p>{t(trans.arg8.p2, language)}</p>{" "}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            {" "}
            <h3 className="text-white mb-4">
              {" "}
              {t(trans.arg8.conflicts.heading, language)}{" "}
            </h3>{" "}
            <ul className="space-y-3">
              {" "}
              {arg8Conflicts.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  {" "}
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />{" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />{" "}
                </li>
              ))}{" "}
            </ul>{" "}
            <p className="mt-4">
              {" "}
              {t(trans.arg8.conflicts.p, language)}{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            {" "}
            <h3 className="text-white mb-4">
              {" "}
              {t(trans.arg8.rootCause.heading, language)}{" "}
            </h3>{" "}
            <p>{t(trans.arg8.rootCause.p1, language)}</p>{" "}
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              {" "}
              <p className="text-gray-300 italic">
                {" "}
                {t(trans.arg8.rootCause.quote1, language)}{" "}
              </p>{" "}
            </div>{" "}
            <p>{t(trans.arg8.rootCause.p2, language)}</p>{" "}
            <ul className="space-y-2 mt-3">
              {" "}
              {arg8RootCause.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  {" "}
                  <ArrowRight
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />{" "}
                  <span>{item}</span>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              {" "}
              <p className="text-gray-300 italic">
                {" "}
                {t(trans.arg8.rootCause.quote2, language)}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            {" "}
            <h3 className="text-white mb-4">
              {" "}
              {t(
                trans.arg8.consequences.heading,
                language,
              )}{" "}
            </h3>{" "}
            <ul className="space-y-3">
              {" "}
              {arg8Consequences.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  {" "}
                  <AlertCircle
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={20}
                  />{" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />{" "}
                </li>
              ))}{" "}
            </ul>{" "}
            <div className="bg-gray-900/50 border-l-4 border-amber-600 p-4 rounded-r-lg mt-4">
              {" "}
              <p className="text-gray-300 italic">
                {" "}
                {t(
                  trans.arg8.consequences.quote,
                  language,
                )}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </motion.section>{" "}
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 7 */}
      <motion.section
        id="arg7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg7.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.arg7.p1, language)}</p>
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.arg7.quote1, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg7.court.heading, language)}
            </h3>
            <p>{t(trans.arg7.court.p1, language)}</p>
            <ul className="space-y-3 mt-3">
              {arg7Court.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Scale
                    className="text-blue-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg7.court.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg7.scholars.heading, language)}
            </h3>
            <p>{t(trans.arg7.scholars.p1, language)}</p>
            <ul className="space-y-3 mt-3">
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg7.scholars.b1, language),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg7.scholars.b2, language),
                  }}
                />
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg7.scholars.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg7.contrast.heading, language)}
            </h3>
            <p>{t(trans.arg7.contrast.p1, language)}</p>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(trans.arg7.contrast.quote1, language)}
              </p>
            </div>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(trans.arg7.contrast.quote2, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 6 */}
      <motion.section
        id="arg6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg6.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.arg6.p1, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg6.prooftext.heading, language)}
            </h3>
            <p>{t(trans.arg6.prooftext.p1, language)}</p>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                &quot;{t(trans.arg6.prooftext.quote, language)}
                &quot;
              </p>
              <p className="text-gray-500 text-right mt-2">
                — {t(trans.arg6.prooftext.source, language)}
              </p>
            </div>
            <p>{t(trans.arg6.prooftext.p2, language)}</p>
            <h4 className="text-white mt-4 mb-3">
              {t(
                trans.arg6.prooftext.observations.heading,
                language,
              )}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.arg6.prooftext.observations.o1,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.arg6.prooftext.observations.o2,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.arg6.prooftext.observations.o3,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg6.prooftext.quote2, language)}
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg6.oralTradition.heading, language)}
            </h3>
            <p>{t(trans.arg6.oralTradition.p1, language)}</p>
            <ul className="space-y-3 mt-3">
              {arg6OralTradition.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg6.oralTradition.quote, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 5 */}
      <motion.section
        id="arg5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg5.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg5.p1, language),
            }}
          />
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.arg5.quote1, language)}
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg5.p2, language),
            }}
          />

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg5.attempts.heading, language)}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {arg5Attempts.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 p-4 rounded-lg border border-gray-800"
                >
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg5.solution.heading, language)}
            </h3>
            <p>{t(trans.arg5.solution.p1, language)}</p>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg5.solution.quote, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 4 */}
      <motion.section
        id="arg4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg4.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.arg4.p1, language)}</p>
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-white text-lg italic">
              {t(trans.arg4.q1, language)}
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg4.p2, language),
            }}
          />
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.arg4.quote1, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(
                trans.arg4.historicalProblem.heading,
                language,
              )}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.arg4.historicalProblem.p1,
                  language,
                ),
              }}
            />
            <ul className="space-y-2 mt-3">
              {arg4Problems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(
                  trans.arg4.historicalProblem.quote1,
                  language,
                )}
              </p>
            </div>
            <p>
              {t(trans.arg4.historicalProblem.p2, language)}
            </p>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(
                  trans.arg4.historicalProblem.quote2,
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg4.options.heading, language)}
            </h3>
            <p>{t(trans.arg4.options.p1, language)}</p>

            <div className="mt-4">
              <h4 className="text-white mb-2">
                {t(trans.arg4.options.a.heading, language)}
              </h4>
              <p>{t(trans.arg4.options.a.p1, language)}</p>
              <ul className="space-y-1 mt-2 pl-5">
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.arg4.options.a.b1,
                        language,
                      ),
                    }}
                  />
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>
                    {t(trans.arg4.options.a.b2, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.arg4.options.a.b3,
                        language,
                      ),
                    }}
                  />
                </li>
              </ul>
              <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-3">
                <p className="text-gray-300 italic">
                  {t(trans.arg4.options.a.quote, language)}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white mb-2">
                {t(trans.arg4.options.b.heading, language)}
              </h4>
              <p>{t(trans.arg4.options.b.p1, language)}</p>
              <ul className="space-y-1 mt-2 pl-5">
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>
                    {t(trans.arg4.options.b.b1, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>
                    {t(trans.arg4.options.b.b2, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.arg4.options.b.b3,
                        language,
                      ),
                    }}
                  />
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-white mb-2">
                {t(trans.arg4.options.c.heading, language)}
              </h4>
              <p>{t(trans.arg4.options.c.p1, language)}</p>
              <ul className="space-y-1 mt-2 pl-5">
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.arg4.options.c.b1,
                        language,
                      ),
                    }}
                  />
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>
                    {t(trans.arg4.options.c.b2, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>
                    {t(trans.arg4.options.c.b3, language)}
                  </span>
                </li>
              </ul>
              <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-3">
                <p className="text-gray-300 italic">
                  {t(trans.arg4.options.c.quote, language)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg4.analogy.heading, language)}
            </h3>
            <p className="italic">
              {t(trans.arg4.analogy.p1, language)}
            </p>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(trans.arg4.analogy.quote1, language)}
              </p>
            </div>
            <ul className="space-y-1 mt-3">
              <li
                dangerouslySetInnerHTML={{
                  __html: t(trans.arg4.analogy.b1, language),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t(trans.arg4.analogy.b2, language),
                }}
              />
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg4.analogy.quote2, language)}
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg4.conclusion.heading, language)}
            </h3>
            <p>{t(trans.arg4.conclusion.p1, language)}</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg4.conclusion.b1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg4.conclusion.b2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg4.conclusion.b3, language)}
                </span>
              </li>
            </ul>
            <p className="mt-3">
              {t(trans.arg4.conclusion.p2, language)}
            </p>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg4.conclusion.quote, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 3 */}
      <motion.section
        id="arg3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg3.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg3.p1, language),
            }}
          />
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.arg3.quote1, language)}
            </p>
          </div>
          <p>{t(trans.arg3.p2, language)}</p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.perfectText.heading, language)}
            </h3>
            <p>{t(trans.arg3.perfectText.p1, language)}</p>
            <ul className="space-y-2 mt-3">
              {arg3Text.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.perfectText.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.fear.heading, language)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg3.fear.p1, language),
              }}
            />
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>{t(trans.arg3.fear.b1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>{t(trans.arg3.fear.b2, language)}</span>
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.fear.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.stm.heading, language)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg3.stm.p1, language),
              }}
            />
            <p>{t(trans.arg3.stm.p2, language)}</p>
            <div className="my-4">
              <div className="grid grid-cols-2 border-b border-gray-700 pb-2 mb-2">
                <h4 className="font-semibold text-white">
                  {t(trans.arg3.stm.table.header1, language)}
                </h4>
                <h4 className="font-semibold text-white">
                  {t(trans.arg3.stm.table.header2, language)}
                </h4>
              </div>
              {arg3STM.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 py-2 border-b border-gray-800"
                >
                  <span className="text-blue-400">
                    {item.element}
                  </span>
                  <span className="text-gray-300">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg3.stm.p3, language),
              }}
            />
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.stm.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.trinity.heading, language)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg3.trinity.p1, language),
              }}
            />
            <p className="mt-3">
              {t(trans.arg3.trinity.p2, language)}
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg3.trinity.b1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg3.trinity.b2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle
                  className="text-amber-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg3.trinity.b3, language)}
                </span>
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.trinity.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(
                trans.arg3.scriptureSupports.heading,
                language,
              )}
            </h3>
            <ul className="space-y-3">
              {arg3ScriptureSupports.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(
                  trans.arg3.scriptureSupports.quote,
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.objection.heading, language)}
            </h3>
            <p>{t(trans.arg3.objection.p1, language)}</p>
            <p>{t(trans.arg3.objection.p2, language)}</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <AlertCircle
                  className="text-amber-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.arg3.objection.b1,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.objection.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg3.finalAnalysis.heading, language)}
            </h3>
            <p>{t(trans.arg3.finalAnalysis.p1, language)}</p>
            <ul className="space-y-1 mt-2 pl-5">
              <li>
                {t(trans.arg3.finalAnalysis.b1, language)}
              </li>
              <li>
                {t(trans.arg3.finalAnalysis.b2, language)}
              </li>
            </ul>
            <p
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.arg3.finalAnalysis.p2,
                  language,
                ),
              }}
            />
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg3.finalAnalysis.quote, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 2 */}
      <motion.section
        id="arg2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg2.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg2.p1, language),
            }}
          />
          <p>{t(trans.arg2.p2, language)}</p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.a.heading, language)}
            </h3>
            {arg2Tradition.map((item, index) => (
              <React.Fragment key={index}>
                <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-gray-500 text-right mt-2">
                    — {item.source}
                  </p>
                </div>
                <ul className="space-y-2 my-3 pl-5">
                  {item.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-green-400 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: point,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.c.heading, language)}
            </h3>
            {arg2Authority.map((item, index) => (
              <React.Fragment key={index}>
                <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-gray-500 text-right mt-2">
                    — {item.source}
                  </p>
                </div>
                <p
                  className="my-3"
                  dangerouslySetInnerHTML={{ __html: item.p1 }}
                />
              </React.Fragment>
            ))}
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.e.heading, language)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg2.e.p1, language),
              }}
            />
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                &quot;{t(trans.arg2.e.quote, language)}&quot;
              </p>
              <p className="text-gray-500 text-right mt-2">
                — {t(trans.arg2.e.source, language)}
              </p>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg2.e.p2, language),
              }}
            />
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.f.heading, language)}
            </h3>
            {arg2Interpretation.map((item, index) => (
              <React.Fragment key={index}>
                <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-gray-500 text-right mt-2">
                    — {item.source}
                  </p>
                </div>
                <ul className="space-y-2 my-3 pl-5">
                  {item.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-3"
                    >
                      <XCircle
                        className="text-red-400 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: point,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.g.heading, language)}
            </h3>
            {arg2Incompleteness.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg mb-4"
              >
                <p className="text-gray-300 italic">
                  &quot;{item.quote}&quot;
                </p>
                <p className="text-gray-500 text-right mt-2">
                  — {item.source}
                </p>
              </div>
            ))}
            <p>{t(trans.arg2.g.p1, language)}</p>
          </div>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg2.finalReflection.heading, language)}
            </h3>
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="text-gray-300 italic">
                {t(trans.arg2.finalReflection.quote, language)}
              </p>
            </div>
            <p className="mt-4 text-white font-semibold">
              {t(trans.arg2.finalReflection.p1, language)}
            </p>
          </div>
        </div>
      </motion.section>
      <Separator className="my-16 bg-gray-800" />
      {/* Argument 1 */}
      <motion.section
        id="arg1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.arg1.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.arg1.p1, language),
            }}
          />
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.arg1.quote1, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.arbitrary.heading, language)}
            </h3>
            <p>{t(trans.arg1.arbitrary.p1, language)}</p>
            <ul className="space-y-2 my-3 pl-5">
              {arg1Arbitrary.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <ThumbsDown
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>{t(trans.arg1.arbitrary.p2, language)}</p>
            <ul className="space-y-2 mt-3 pl-5">
              <li className="flex items-start gap-3">
                <AlertCircle
                  className="text-amber-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.arg1.arbitrary.b4,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle
                  className="text-amber-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>
                  {t(trans.arg1.arbitrary.b5, language)}
                </span>
              </li>
            </ul>
            <p className="text-white font-semibold text-lg mt-4">
              {t(trans.arg1.arbitrary.q1, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.analogy.heading, language)}
            </h3>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg">
              <p className="text-gray-300 italic">
                {t(trans.arg1.analogy.quote1, language)}
              </p>
            </div>
            <p className="my-3">
              {t(trans.arg1.analogy.p1, language)}
            </p>
            <ul className="space-y-1 pl-5">
              <li>{t(trans.arg1.analogy.b1, language)}</li>
              <li>{t(trans.arg1.analogy.b2, language)}</li>
            </ul>
            <p className="my-3">
              {t(trans.arg1.analogy.p2, language)}
            </p>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg">
              <p className="text-gray-300 italic">
                {t(trans.arg1.analogy.quote2, language)}
              </p>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.nature.heading, language)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg1.nature.p1, language),
              }}
            />
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <XCircle
                  className="text-red-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg1.nature.b1, language),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg1.nature.b2, language),
                  }}
                />
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(trans.arg1.nature.quote, language)}
              </p>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg1.nature.p2, language),
              }}
            />
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.purpose.heading, language)}
            </h3>
            <p>{t(trans.arg1.purpose.p1, language)}</p>
            <p>{t(trans.arg1.purpose.p2, language)}</p>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="text-white">
                  {t(trans.arg1.purpose.a.heading, language)}
                </h4>
                <p className="pl-5">
                  {t(trans.arg1.purpose.a.p1, language)}
                </p>
                <ul className="space-y-1 mt-2 pl-10">
                  <li className="flex items-start gap-3">
                    <XCircle
                      className="text-red-400 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t(
                          trans.arg1.purpose.a.b1,
                          language,
                        ),
                      }}
                    />
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle
                      className="text-red-400 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      {t(trans.arg1.purpose.a.b2, language)}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white">
                  {t(trans.arg1.purpose.b.heading, language)}
                </h4>
                <p className="pl-5">
                  {t(trans.arg1.purpose.b.p1, language)}
                </p>
                <ul className="space-y-1 mt-2 pl-10">
                  <li className="flex items-start gap-3">
                    <XCircle
                      className="text-red-400 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      {t(trans.arg1.purpose.b.b1, language)}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      {t(trans.arg1.purpose.b.b2, language)}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white">
                  {t(trans.arg1.purpose.c.heading, language)}
                </h4>
                <p className="pl-5">
                  {t(trans.arg1.purpose.c.p1, language)}
                </p>
                <ul className="space-y-1 mt-2 pl-10">
                  <li className="flex items-start gap-3">
                    <XCircle
                      className="text-red-400 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t(
                          trans.arg1.purpose.c.b1,
                          language,
                        ),
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.limit.heading, language)}
            </h3>
            <p>{t(trans.arg1.limit.p1, language)}</p>
            <div className="bg-gray-900/50 border-l-4 border-gray-600 p-4 rounded-r-lg my-4">
              <p className="text-gray-300 italic">
                {t(trans.arg1.limit.quote, language)}
              </p>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t(trans.arg1.limit.p2, language),
              }}
            />
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.pattern.heading, language)}
            </h3>
            <p>{t(trans.arg1.pattern.p1, language)}</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg1.pattern.b1, language),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg1.pattern.b2, language),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(trans.arg1.pattern.b3, language),
                  }}
                />
              </li>
            </ul>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg1.pattern.quote, language)}
              </p>
            </div>
          </div>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.arg1.summary.heading, language)}
            </h3>
            <p>{t(trans.arg1.summary.p1, language)}</p>
            <ul className="space-y-1 mt-2 pl-5">
              <li>{t(trans.arg1.summary.b1, language)}</li>
              <li>{t(trans.arg1.summary.b2, language)}</li>
              <li>{t(trans.arg1.summary.b3, language)}</li>
              <li>{t(trans.arg1.summary.b4, language)}</li>
              <li>{t(trans.arg1.summary.b5, language)}</li>
            </ul>
            <p
              className="mt-3"
              dangerouslySetInnerHTML={{
                __html: t(trans.arg1.summary.p2, language),
              }}
            />
            <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                {t(trans.arg1.summary.quote, language)}
              </p>
            </div>
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
        <h2 className="text-white mb-6">
          {t(trans.conclusion.heading, language)}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.p1, language),
            }}
          />

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h3 className="text-white mb-4">
              {t(trans.conclusion.verdict.heading, language)}
            </h3>
            <ul className="space-y-2">
              {conclusionVerdict.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <XCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.conclusion.quote1, language)}
            </p>
          </div>
          <p>{t(trans.conclusion.p2, language)}</p>
          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              {t(trans.conclusion.quote2, language)}
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
          <Anchor
            className="text-blue-400 flex-shrink-0 mt-1"
            size={28}
          />
          <div>
            <h3 className="text-white mb-4">
              {t(trans.bridge.heading, language)}
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