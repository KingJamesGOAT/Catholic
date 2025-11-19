import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  AlertCircle,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Puzzle,
  XCircle,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function CanonDilemma() {
  const { language } = useLanguage();
  const trans = translations.canonDilemma;

  const disputedBooks = [
    t(trans.problem.disputed.books.b1, language),
    t(trans.problem.disputed.books.b2, language),
    t(trans.problem.disputed.books.b3, language),
    t(trans.problem.disputed.books.b4, language),
    t(trans.problem.disputed.books.b5, language),
  ];

  const excludedBooks = [
    t(trans.problem.excluded.books.b1, language),
    t(trans.problem.excluded.books.b2, language),
    t(trans.problem.excluded.books.b3, language),
  ];

  const attempts = [
    {
      title: t(trans.attempts.a1.title, language),
      p1: t(trans.attempts.a1.p1, language),
      p2: t(trans.attempts.a1.p2, language),
      quote: {
        text: t(trans.attempts.a1.quote.text, language),
        source: t(trans.attempts.a1.quote.source, language),
      },
    },
    {
      title: t(trans.attempts.a2.title, language),
      p1: t(trans.attempts.a2.p1, language),
      p2: t(trans.attempts.a2.p2, language),
    },
    {
      title: t(trans.attempts.a3.title, language),
      p1: t(trans.attempts.a3.p1, language),
      p2: t(trans.attempts.a3.p2, language),
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
        <p>
          <SmartText ignore={["Canon"]}>{t(trans.intro.p1, language).replace(/<[^>]*>?/gm, '')}</SmartText>
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro.p2, language),
          }}
        />
        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic">
            {t(trans.intro.callout.text, language)}
          </p>
        </div>
      </div>

      {/* Videos */}
      <div className="space-y-6 mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KOqJTRtbgtM"
            title={t(trans.videos.v1.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/takITjFO8Q8"
            title={t(trans.videos.v2.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* I. The Historical Problem */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.problem.h2, language)}
        </h2>
        <p className="text-gray-300 mb-8">
          {t(trans.problem.p1, language)}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Disputed Books */}
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle
                className="text-amber-400 flex-shrink-0 mt-1"
                size={24}
              />
              <h3 className="text-white">
                {t(trans.problem.disputed.h3, language)}
              </h3>
            </div>
            <ul className="space-y-2">
              {disputedBooks.map((book, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <BookOpen
                    className="text-amber-400/70"
                    size={16}
                  />
                  <span className="text-gray-300">{book}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded Books */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <XCircle
                className="text-gray-400 flex-shrink-0 mt-1"
                size={24}
              />
              <h3 className="text-white">
                {t(trans.problem.excluded.h3, language)}
              </h3>
            </div>
            <ul className="space-y-2">
              {excludedBooks.map((book, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <BookOpen
                    className="text-gray-500"
                    size={16}
                  />
                  <span className="text-gray-400">{book}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-300">
          {t(trans.problem.p2, language)}
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. The Sola Scriptura Dilemma */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.dilemma.h2, language)}
        </h2>
        <p
          className="text-gray-300 mb-6"
          dangerouslySetInnerHTML={{
            __html: t(trans.dilemma.p1, language),
          }}
        />

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-8 my-8">
          <div className="flex items-start gap-4">
            <Puzzle
              className="text-red-400 flex-shrink-0 mt-1"
              size={28}
            />
            <div>
              <h4 className="text-white mb-3">
                {t(trans.dilemma.callout.h4, language)}
              </h4>
              <p className="text-white text-lg italic">
                {t(trans.dilemma.callout.q, language)}
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-gray-300"
          dangerouslySetInnerHTML={{
            __html: t(trans.dilemma.p2, language),
          }}
        />
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Protestant Attempts */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.attempts.h2, language)}
        </h2>
        <p className="text-gray-300 mb-8">
          {t(trans.attempts.p1, language)}
        </p>

        <div className="space-y-8">
          {attempts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <h3
                    className="text-white"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                </div>
                <p className="text-gray-300 mb-4">
                  <SmartText>{item.p1.replace(/<[^>]*>?/gm, '')}</SmartText>
                </p>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item.p2 }}
                />
              </div>

              {item.quote && (
                <div className="bg-gray-900/50 border-t border-gray-800 p-6">
                  <div className="bg-gray-800 border-l-4 border-amber-600 p-4 rounded-r-lg">
                    <p className="text-gray-300 italic mb-2">
                      &quot;{item.quote.text}&quot;
                    </p>
                    <p className="text-gray-500">
                      — {item.quote.source}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
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
        <p className="text-gray-300 mb-6">
          {t(trans.conclusion.p1, language)}
        </p>

        <div className="bg-green-900/10 border border-green-800 rounded-lg p-8 my-8">
          <div className="flex items-start gap-4">
            <CheckCircle
              className="text-green-400 flex-shrink-0 mt-1"
              size={28}
            />
            <div>
              <p className="text-white text-lg italic">
                {t(trans.conclusion.callout.text, language)}
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-gray-300"
          dangerouslySetInnerHTML={{
            __html: t(trans.conclusion.p2, language),
          }}
        />
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <Lightbulb
            className="text-blue-400 flex-shrink-0 mt-1"
            size={28}
          />
          <div>
            <h3 className="text-white mb-4">
              {t(trans.bridge.h3, language)}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t(trans.bridge.p1, language)}
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}