import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  BookOpen,
  Church,
  Scale,
  AlertCircle,
  Check,
  X,
  Users,
  BookMarked,
  Scroll,
} from "lucide-react";

import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function AuthorityDilemmaFallacy() {
  const { language } = useLanguage();
  const trans = translations.authorityDilemma;

  const authorityModels = [
    {
      count: "3",
      title: t(trans.models.model3.title, language),
      tradition: t(trans.models.model3.tradition, language),
      color: "blue",
      items: [
        {
          icon: BookOpen,
          text: t(
            trans.models.model3.items.scripture,
            language,
          ),
        },
        {
          icon: Scroll,
          text: t(
            trans.models.model3.items.tradition,
            language,
          ),
        },
        {
          icon: Church,
          text: t(
            trans.models.model3.items.magisterium,
            language,
          ),
        },
      ],
    },
    {
      count: "2",
      title: t(trans.models.model2.title, language),
      tradition: t(trans.models.model2.tradition, language),
      color: "purple",
      items: [
        {
          icon: BookOpen,
          text: t(trans.models.model2.items.eq, language),
        },
        {
          icon: X,
          text: t(
            trans.models.model2.items.noCentralMag,
            language,
          ),
        },
      ],
    },
    {
      count: "1",
      title: t(trans.models.model1.title, language),
      tradition: t(trans.models.model1.tradition, language),
      color: "green",
      items: [
        {
          icon: BookOpen,
          text: t(
            trans.models.model1.items.solaScriptura,
            language,
          ),
        },
      ],
    },
    {
      count: "0",
      title: t(trans.models.model0.title, language),
      tradition: t(trans.models.model0.tradition, language),
      color: "gray",
      items: [
        {
          icon: Users,
          text: t(trans.models.model0.items.evolving, language),
        },
        {
          icon: Scale,
          text: t(
            trans.models.model0.items.altAuthority,
            language,
          ),
        },
      ],
    },
  ];

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote, language),
        source: t(trans.quoteSource, language),
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p className="text-lg"><SmartText>{t(trans.intro.p1, language)}</SmartText></p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-white text-lg">
            {t(trans.intro.q, language)}
          </p>
        </div>

        <p>{t(trans.intro.p2, language)}</p>
        <p>{t(trans.intro.p3, language)}</p>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section I: Competing Models */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.section1.heading, language)}
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          {t(trans.section1.p1, language)}
        </p>

        <div className="space-y-6">
          {authorityModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r from-${model.color}-900/20 to-${model.color}-900/5 border border-${model.color}-800/50 rounded-lg p-6`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full bg-${model.color}-900/50 border border-${model.color}-700 flex items-center justify-center`}
                >
                  <span
                    className={`text-${model.color}-300 text-xl font-bold`}
                  >
                    {model.count}
                  </span>
                </div>
                <div>
                  <h3 className="text-white mb-1">
                    {model.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    ({model.tradition})
                  </p>
                </div>
              </div>

              <ul className="space-y-3 pl-16">
                {model.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <item.icon
                      className={`text-${model.color}-400 flex-shrink-0 mt-1`}
                      size={18}
                    />
                    <span className="text-gray-300">
                      <SmartText>{item.text}</SmartText>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-white text-lg">
            {t(trans.section1.callout, language)}
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section II: Collapse of Sola Scriptura */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.section2.heading, language)}
        </h2>

        {/* 1. Self-Refuting */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section2.p1.title, language)}
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{t(trans.section2.p1.lead, language)}</p>

            <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-300">
                    {t(trans.section2.p1.b1, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-300">
                    {t(trans.section2.p1.b2, language)}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-300 italic">
                {t(trans.section2.p1.madridQuote, language)}
              </p>
              <p className="text-gray-500 mt-2">
                {t(trans.section2.p1.madridSource, language)}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Problem of Interpretation */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section2.p2.title, language)}
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{t(trans.section2.p2.lead, language)}</p>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>
                    {t(trans.section2.p2.b1, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>
                    {t(trans.section2.p2.b2, language)}
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-4">
              {t(trans.section2.p2.tail, language)}
            </p>
          </div>
        </div>

        {/* 3. Scripture Was Never Alone */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section2.p3.title, language)}
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <ul className="list-none space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{t(trans.section2.p3.b1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{t(trans.section2.p3.b2, language)}</span>
              </li>
            </ul>

            <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-300 italic mb-3">
                "{t(trans.section2.p3.papiasQuote, language)}"
              </p>
              <p className="text-gray-500">
                {t(trans.section2.p3.papiasSource, language)}
              </p>
            </div>
          </div>
        </div>

        {/* Link to deeper content */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <BookMarked
              className="text-blue-400 flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h4 className="text-white mb-2">
                {t(trans.section2.link.heading, language)}
              </h4>
              <p className="text-gray-400">
                {t(trans.section2.link.text, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section III: Canon Dilemma */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.section3.heading, language)}
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {t(trans.section3.lead, language)}
        </p>

        {/* 1. Scripture Does Not List Its Own Books */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section3.p1.title, language)}
          </h3>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span className="text-gray-300">
                  {t(trans.section3.p1.b1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span className="text-gray-300">
                  {t(trans.section3.p1.b2, language)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Who Finalized the Canon */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section3.p2.title, language)}
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{t(trans.section3.p2.through, language)}</p>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    {t(trans.section3.p2.l1, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    {t(trans.section3.p2.l2, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    {t(trans.section3.p2.l3, language)}
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-6">
              <strong className="text-white">
                {t(trans.section3.p2.councilsLabel, language)}
              </strong>
            </p>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    {t(trans.section3.p2.councils1, language)}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    {t(trans.section3.p2.councils2, language)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Protestant Inconsistency */}
        <div className="mb-8">
          <h3 className="text-white mb-4">
            {t(trans.section3.p3.title, language)}
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    {t(trans.section3.p3.b1, language)}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="text-red-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    {t(trans.section3.p3.b2, language)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Link to deeper content */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <BookMarked
              className="text-blue-400 flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h4 className="text-white mb-2">
                {t(trans.section3.link.heading, language)}
              </h4>
              <p className="text-gray-400">
                {t(trans.section3.link.text, language)}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section IV: Catholic Resolution */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.section4.heading, language)}
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          {t(trans.section4.lead, language)}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700 mb-4 mx-auto">
              <BookOpen className="text-blue-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.section4.card1.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.section4.card1.text, language)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700 mb-4 mx-auto">
              <Scroll className="text-purple-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.section4.card2.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.section4.card2.text, language)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-green-900/30 to-green-900/10 border border-green-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center border border-green-700 mb-4 mx-auto">
              <Church className="text-green-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">
              {t(trans.section4.card3.title, language)}
            </h4>
            <p className="text-gray-400 text-center text-sm">
              {t(trans.section4.card3.text, language)}
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic mb-3">
            "{t(trans.section4.quote, language)}"
          </p>
          <p className="text-gray-500">
            {t(trans.section4.quoteSource, language)}
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section V: Early Church Fathers */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">
          {t(trans.section5.heading, language)}
        </h2>

        {/* Scripture and Tradition */}
        <div className="mb-8">
          <h3 className="text-white mb-6">
            {t(trans.section5.st.heading, language)}
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section5.st.irenaeusLabel, language)}
                </strong>
              </p>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    "{t(trans.section5.st.irenaeusQ1, language)}
                    "
                  </p>
                </div>
                <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    "{t(trans.section5.st.irenaeusQ2, language)}
                    "
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apostolic Succession */}
        <div className="mb-8">
          <h3 className="text-white mb-6">
            {t(trans.section5.as.heading, language)}
          </h3>

          <div className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section5.as.clementLabel, language)}
                </strong>
              </p>
              <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic">
                  "{t(trans.section5.as.clementQ, language)}"
                </p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section5.as.ignatiusLabel, language)}
                </strong>
              </p>
              <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                <p className="text-gray-300 italic">
                  "{t(trans.section5.as.ignatiusQ, language)}"
                </p>
              </div>
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

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.conclusion.lead1, language)}</p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>{t(trans.conclusion.q1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>{t(trans.conclusion.q2, language)}</span>
              </li>
            </ul>
          </div>

          <p>{t(trans.conclusion.lead2, language)}</p>

          {/* Key Conclusions */}
          <div className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
            <h3 className="text-white mb-6">
              {t(trans.conclusion.keys.heading, language)}
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <strong className="text-white">
                    {t(trans.conclusion.keys.k1Title, language)}
                  </strong>
                  <span className="text-gray-300">
                    {" "}
                    {t(trans.conclusion.keys.k1Text, language)}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <strong className="text-white">
                    {t(trans.conclusion.keys.k2Title, language)}
                  </strong>
                  <span className="text-gray-300">
                    {" "}
                    {t(trans.conclusion.keys.k2Text, language)}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <strong className="text-white">
                    {t(trans.conclusion.keys.k3Title, language)}
                  </strong>
                  <span className="text-gray-300">
                    {" "}
                    {t(trans.conclusion.keys.k3Text, language)}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <strong className="text-white">
                    {t(trans.conclusion.keys.k4Title, language)}
                  </strong>
                  <span className="text-gray-300">
                    {" "}
                    {t(trans.conclusion.keys.k4Text, language)}
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-center italic">
                {t(trans.conclusion.tail1, language)}
              </p>
              <p className="text-gray-300 text-center italic mt-2">
                {t(trans.conclusion.tail2, language)}
              </p>
            </div>
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
        <h3 className="text-white mb-4">
          {t(trans.bridge.heading, language)}
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(trans.bridge.para1, language)}
        </p>
        <p className="text-gray-400 leading-relaxed">
          {t(trans.bridge.para2, language)}
        </p>
      </motion.div>
    </TopicLayout>
  );
}