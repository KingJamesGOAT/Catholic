import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Book,
  AlertCircle,
  XCircle,
  CheckCircle,
  Users,
  BookOpen,
  Award,
  ScrollText,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function SeventyThreeBooks() {
  const { language } = useLanguage();
  const trans = translations.seventyThreeBooks;

  const deuterocanonicalBooks = [
    t(trans.dispute.books.b1, language),
    t(trans.dispute.books.b2, language),
    t(trans.dispute.books.b3, language),
    t(trans.dispute.books.b4, language),
    t(trans.dispute.books.b5, language),
    t(trans.dispute.books.b6, language),
    t(trans.dispute.books.b7, language),
  ];

  const protestantObjections = [
    {
      objection: t(trans.arguments.o1.obj, language),
      response: [
        t(trans.arguments.o1.res1, language),
        t(trans.arguments.o1.res2, language),
      ],
      quote: {
        text: t(trans.arguments.o1.quote.text, language),
        source: t(trans.arguments.o1.quote.source, language),
      },
    },
    {
      objection: t(trans.arguments.o2.obj, language),
      response: [
        t(trans.arguments.o2.res1, language),
        t(trans.arguments.o2.res2, language),
      ],
      quote: {
        text: t(trans.arguments.o2.quote.text, language),
        source: t(trans.arguments.o2.quote.source, language),
      },
    },
    {
      objection: t(trans.arguments.o3.obj, language),
      response: [
        t(trans.arguments.o3.res1, language),
        t(trans.arguments.o3.res2, language),
      ],
      quote: {
        text: t(trans.arguments.o3.quote.text, language),
        source: t(trans.arguments.o3.quote.source, language),
      },
    },
    {
      objection: t(trans.arguments.o4.obj, language),
      response: [
        t(trans.arguments.o4.res1, language),
        t(trans.arguments.o4.res2, language),
      ],
      quote: {
        text: t(trans.arguments.o4.quote.text, language),
        source: t(trans.arguments.o4.quote.source, language),
      },
    },
  ];

  const historicalCouncils = [
    {
      name: t(trans.trent.councils.c1.name, language),
      year: t(trans.trent.councils.c1.year, language),
      description: t(trans.trent.councils.c1.desc, language),
    },
    {
      name: t(trans.trent.councils.c2.name, language),
      year: t(trans.trent.councils.c2.year, language),
      description: t(trans.trent.councils.c2.desc, language),
    },
    {
      name: t(trans.trent.councils.c3.name, language),
      year: t(trans.trent.councils.c3.year, language),
      description: t(trans.trent.councils.c3.desc, language),
    },
    {
      name: t(trans.trent.councils.c4.name, language),
      year: t(trans.trent.councils.c4.year, language),
      description: t(trans.trent.councils.c4.desc, language),
    },
    {
      name: t(trans.trent.councils.c5.name, language),
      year: t(trans.trent.councils.c5.year, language),
      description: t(trans.trent.councils.c5.desc, language),
    },
  ];

  const reasonsFor73 = [
    t(trans.conclusion.reasons.r1, language),
    t(trans.conclusion.reasons.r2, language),
    t(trans.conclusion.reasons.r3, language),
    t(trans.conclusion.reasons.r4, language),
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

        <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
          <p className="text-white text-lg">
            {t(trans.intro.callout, language)}
          </p>
        </div>
      </div>

      {/* Video 1 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QK0r6pkDlq0"
            title={t(trans.video1.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* The Seven Disputed Books */}
      <motion.section
        // ...
      >
        <h2 className="text-white mb-6">
          {t(trans.dispute.h2, language)}
        </h2>

        <p className="text-gray-300 mb-6">
          <SmartText ignore={["Deuterocanonical"]}>{t(trans.dispute.p1, language).replace(/<[^>]*>?/gm, '')}</SmartText>
        </p>

        

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {deuterocanonicalBooks.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-4 flex items-center gap-3"
            >
              <BookOpen
                className="text-blue-400 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-300">{book}</span>
            </motion.div>
          ))}
        </div>

        <p
          className="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{
            __html: t(trans.dispute.p2, language),
          }}
        />

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.dispute.callout, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Protestant Arguments and Responses */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.arguments.h2, language)}
        </h2>

        <div className="space-y-8">
          {protestantObjections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              {/* Objection Header */}
              <div className="bg-gradient-to-r from-red-900/30 to-red-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-900/30 border border-red-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-300 font-mono">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">
                      {
                        t(trans.arguments.h2, language).split(
                          "—",
                        )[0]
                      }{" "}
                      {index + 1}
                    </h3>
                    <p className="text-red-300 text-lg">
                      &quot;{item.objection}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Response */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h4 className="text-white mb-4">
                      {
                        t(trans.arguments.h2, language).split(
                          "—",
                        )[1]
                      }
                      :
                    </h4>
                    <div className="space-y-4">
                      {item.response.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-gray-300"
                          dangerouslySetInnerHTML={{
                            __html: para,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                {item.quote && (
                  <div className="bg-gray-900/50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <p className="text-gray-300 italic mb-2">
                      &quot;{item.quote.text}&quot;
                    </p>
                    <p className="text-gray-500">
                      — {item.quote.source}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* What the Reformers Did */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.reformers.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.reformers.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p
              className="text-gray-300 italic"
              dangerouslySetInnerHTML={{
                __html: t(trans.reformers.q1, language),
              }}
            />
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.reformers.p2, language),
            }}
          />

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6 mt-6">
            <p
              className="text-gray-300 mb-4"
              dangerouslySetInnerHTML={{
                __html: t(trans.reformers.callout.p1, language),
              }}
            />
            <p
              className="text-gray-400 italic"
              dangerouslySetInnerHTML={{
                __html: t(trans.reformers.callout.q1, language),
              }}
            />
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Video 2 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_YOjaOgtQ0U"
            title={t(trans.video2.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Was the Catholic Church Adding Books */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.trent.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <p className="text-white text-lg mb-4">
              {t(trans.trent.callout.p1, language)}
            </p>
            <p className="text-gray-300">
              {t(trans.trent.callout.p2, language)}
            </p>
          </div>

          <h3 className="text-white mt-8 mb-6">
            {t(trans.trent.councils.h3, language)}
          </h3>

          <div className="space-y-4">
            {historicalCouncils.map((council, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-r from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700 flex items-center justify-center">
                      <Users
                        className="text-purple-400"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h4 className="text-white">
                        {council.name}
                      </h4>
                      <span className="text-purple-400 text-sm font-mono">
                        {council.year}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {council.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-8">
            <p
              className="text-gray-300 italic"
              dangerouslySetInnerHTML={{
                __html: t(trans.trent.q1, language),
              }}
            />
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Video 3 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kKNlnW6V3yo"
            title={t(trans.video3.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Council of Carthage Details */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.carthage.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.carthage.p1, language)}</p>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ScrollText
                  className="text-amber-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-white mb-2">
                    {t(
                      trans.carthage.points.p1.title,
                      language,
                    )}
                  </h4>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.carthage.points.p1.desc,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-white mb-2">
                    {t(
                      trans.carthage.points.p2.title,
                      language,
                    )}
                  </h4>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.carthage.points.p2.desc,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award
                  className="text-purple-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-white mb-2">
                    {t(
                      trans.carthage.points.p3.title,
                      language,
                    )}
                  </h4>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.carthage.points.p3.desc,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-white mb-2">
                    {t(
                      trans.carthage.points.p4.title,
                      language,
                    )}
                  </h4>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.carthage.points.p4.desc,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              {t(trans.carthage.others.h4, language)}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {t(trans.carthage.others.li1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {t(trans.carthage.others.li2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {t(trans.carthage.others.li3, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {t(trans.carthage.others.li4, language)}
                </span>
              </li>
            </ul>
          </div>

          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.carthage.p2, language),
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
          <p>{t(trans.conclusion.p1, language)}</p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {reasonsFor73.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6 flex items-start gap-3"
              >
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8">
            <p className="text-white text-lg mb-4">
              {t(trans.conclusion.callout.p1, language)}
            </p>
            <p
              className="text-gray-300 italic"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.callout.q1,
                  language,
                ),
              }}
            />
          </div>

          <p
            className="text-white text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.p2, language),
            }}
          />
        </div>
      </motion.section>

      {/* Visual Comparison */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.visual.h3, language)}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-8">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Book className="text-green-400" size={24} />
              {t(trans.visual.catholic.title, language)}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.catholic.l1, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.catholic.l2, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.catholic.l3, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.catholic.l4, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.catholic.l5, language)}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Book className="text-gray-400" size={24} />
              {t(trans.visual.protestant.title, language)}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>
                  {t(trans.visual.protestant.l1, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-400"
                  size={16}
                />
                <span>
                  {t(trans.visual.protestant.l2, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>
                  {t(trans.visual.protestant.l3, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>
                  {t(trans.visual.protestant.l4, language)}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>
                  {t(trans.visual.protestant.l5, language)}
                </span>
              </li>
            </ul>
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
          <AlertCircle
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
            <p
              className="text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t(trans.bridge.p2, language),
              }}
            />
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}