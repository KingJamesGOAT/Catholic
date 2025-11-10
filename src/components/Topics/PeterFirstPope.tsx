import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Key,
  Crown,
  BookOpen,
  Users,
  CheckCircle,
  MessageSquare,
  Award,
  AlertCircle,
  ScrollText,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function PeterFirstPope() {
  const { language } = useLanguage();
  const trans = translations.peterFirstPope;

  const gospelEvidence = [
    {
      text: t(trans.gospels.evidence.e1, language),
      icon: MessageSquare,
    },
    {
      text: t(trans.gospels.evidence.e2, language),
      icon: Users,
    },
  ];

  const actsLeadership = [
    {
      action: t(trans.acts.points.p1.action, language),
      reference: t(trans.acts.points.p1.ref, language),
    },
    {
      action: t(trans.acts.points.p2.action, language),
      reference: t(trans.acts.points.p2.ref, language),
    },
    {
      action: t(trans.acts.points.p3.action, language),
      reference: t(trans.acts.points.p3.ref, language),
    },
    {
      action: t(trans.acts.points.p4.action, language),
      reference: t(trans.acts.points.p4.ref, language),
    },
    {
      action: t(trans.acts.points.p5.action, language),
      reference: t(trans.acts.points.p5.ref, language),
    },
  ];

  const churchFathers = [
    {
      name: t(trans.fathers.f1.name, language),
      year: t(trans.fathers.f1.year, language),
      quote: t(trans.fathers.f1.quote, language),
    },
    {
      name: t(trans.fathers.f2.name, language),
      year: t(trans.fathers.f2.year, language),
      quote: t(trans.fathers.f2.quote, language),
    },
    {
      name: t(trans.fathers.f3.name, language),
      year: t(trans.fathers.f3.year, language),
      quote: t(trans.fathers.f3.quote, language),
    },
  ];

  const objections = [
    {
      objection: t(trans.objections.o1.obj, language),
      response: t(trans.objections.o1.res, language),
    },
    {
      objection: t(trans.objections.o2.obj, language),
      response: t(trans.objections.o2.res, language),
    },
    {
      objection: t(trans.objections.o3.obj, language),
      response: t(trans.objections.o3.res, language),
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
        <p>{t(trans.intro.p1, language)}</p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic mb-3">
            {t(trans.intro.callout.text, language)}
          </p>
          <p className="text-gray-500">
            — {t(trans.intro.callout.source, language)}
          </p>
        </div>
      </div>

      {/* Videos */}
      <div className="space-y-6 mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2SzRhqbVPes?start=881"
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
            src="https://www.youtube.com/embed/ZWMfxDCUbbs"
            title={t(trans.videos.v2.title, language)}
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
            src="https://www.youtube.com/embed/42A632z0dOA"
            title={t(trans.videos.v3.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* I. Peter's Role in the Gospels */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.gospels.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.gospels.p1, language)}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {gospelEvidence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6 flex items-start gap-3"
              >
                <item.icon
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-white mt-8 mb-6">
            {t(trans.gospels.matthew.h3, language)}
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-white text-lg mb-2">
              {t(trans.gospels.matthew.quote, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mt-6">
            <h4 className="text-white mb-4">
              {t(trans.gospels.matthew.points.h4, language)}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Key
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.gospels.matthew.points.p1,
                        language,
                      ),
                    }}
                  />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ScrollText
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-300">
                    {t(
                      trans.gospels.matthew.points.p2,
                      language,
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.gospels.matthew.points.p3,
                        language,
                      ),
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
            <p className="text-gray-300 italic mb-3">
              {t(trans.gospels.matthew.ccc.text, language)}
            </p>
            <p className="text-gray-500">
              — {t(trans.gospels.matthew.ccc.source, language)}
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. Peter's Leadership in the Early Church */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.acts.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.acts.p1, language)}</p>

          <div className="space-y-4">
            {actsLeadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-r from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center">
                  <span className="text-purple-300 font-mono text-sm">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">
                    {item.action}
                  </p>
                  <p className="text-purple-400 text-sm font-mono">
                    {item.reference}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">{t(trans.acts.p2, language)}</p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Early Christian Witness */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.fathers.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.fathers.p1, language)}</p>

          <div className="space-y-6">
            {churchFathers.map((father, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <BookOpen
                    className="text-amber-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h4 className="text-white">
                        {father.name}
                      </h4>
                      <span className="text-amber-400 text-sm font-mono">
                        {father.year}
                      </span>
                    </div>
                    <p className="text-gray-300 italic">
                      &quot;{father.quote}&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">
            {t(trans.fathers.p2, language)}
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* IV. Apostolic Succession and the Papacy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.succession.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.succession.p1, language)}</p>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Crown
                className="text-green-400 flex-shrink-0 mt-1"
                size={32}
              />
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-300">
                      {t(trans.succession.points.p1, language)}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-300">
                      {t(trans.succession.points.p2, language)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              {t(trans.succession.ccc.text, language)}
            </p>
            <p className="text-gray-500">
              — {t(trans.succession.ccc.source, language)}
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* V. Objections Addressed */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.objections.h2, language)}
        </h2>

        <div className="space-y-6">
          {objections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-900/30 to-red-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-red-300 text-lg">
                    &quot;{item.objection}&quot;
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-gray-300">
                    {item.response}
                  </p>
                </div>
              </div>
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

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.conclusion.p1, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-white text-xl text-center">
              {t(trans.conclusion.callout.text, language)}
            </p>
            <p className="text-gray-500 text-center mt-2">
              — {t(trans.conclusion.callout.source, language)}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <Users
            className="text-purple-400 flex-shrink-0 mt-1"
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