import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Sparkles,
  Gauge,
  Scale,
  Cross,
  Move, // Ajout de 'Move' pour les Arguments de la Cause
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function ExistenceOfGod() {
  const { language } = useLanguage();
  const trans = translations.existenceOfGod;

  const fiveArguments = [
    {
      icon: Move, // Arguments from Cause (1st, 2nd, 3rd Way)
      title: t(trans.arg1Title, language),
      subtitle: t(trans.arg1Subtitle, language),
      key: "cause",
    },
    {
      icon: Scale, // Argument from Perfection (4th Way)
      title: t(trans.arg2Title, language),
      subtitle: t(trans.arg2Subtitle, language),
      key: "perfection",
    },
    {
      icon: Gauge, // Argument from Purpose (5th Way)
      title: t(trans.arg3Title, language),
      subtitle: t(trans.arg3Subtitle, language),
      key: "purpose",
    },
    {
      icon: Scale, // Moral Argument (Kept)
      title: t(trans.arg4Title, language),
      subtitle: t(trans.arg4Subtitle, language),
      key: "moral",
    },
    // REPLACED Resurrection with Science:
    {
      icon: Sparkles, // Scientific Evidence
      title: t(trans.arg5Title, language),
      subtitle: t(trans.arg5Subtitle, language),
      key: "science",
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
      {/* Video Section: St. Thomas Aquinas' Five Ways Introduction */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/42Eg6UUBqqo"
            title="The Five Ways of St. Thomas Aquinas: An Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Introduction (Updated content in translations) */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p className="text-lg">
          <SmartText>{t(trans.intro1, language).replace(/<[^>]*>?/gm, '')}</SmartText>
        </p>
        <p><SmartText>{t(trans.intro2, language).replace(/<[^>]*>?/gm, '')}</SmartText></p>
        <p><SmartText>{t(trans.intro3, language).replace(/<[^>]*>?/gm, '')}</SmartText></p>
      </div>

      

      {/* Five Arguments Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {fiveArguments.map((arg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 mb-4">
              <arg.icon className="text-blue-400" size={20} />
            </div>
            <h4 className="text-white mb-1">{arg.title}</h4>
            <p className="text-gray-500 text-sm">
              {arg.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      <Separator className="my-16 bg-gray-800" />

      <div className="mb-12">
        <h2 className="text-white mb-8">
          {t(trans.fiveArgumentsHeading, language)}
        </h2>
      </div>

      {/* Argument 1: Arguments from Cause (1st, 2nd, and 3rd Ways) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Move className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.cause.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.cause.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.cause.intro, language),
            }}
          />

          {/* Way 1: From Motion */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cause.way1.title, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.cause.way1.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.cause.way1.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.cause.way1.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
            {/* Video Embed for 1st Way */}
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800 mt-4 border-t">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/34ygkWYlTfU"
                title="The 1st Way: Argument from Motion"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Way 2: From Efficient Causes */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cause.way2.title, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.cause.way2.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.cause.way2.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.cause.way2.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
            {/* Video Embed for 2nd Way */}
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800 mt-4 border-t">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_yi-gwrItDM"
                title="The 2nd Way: Argument from Efficient Causes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Way 3: From Contingency and Necessity */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cause.way3.title, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.cause.way3.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.cause.way3.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.cause.way3.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
            <p className="text-sm pt-2 border-t border-gray-800">
              <strong className="text-white">{t(trans.cause.way3.uniqueNote, language)}</strong>
            </p>
            {/* Video Embed for 3rd Way */}
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800 mt-4 border-t">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dUfkFewZzGg"
                title="The 3rd Way: Argument from Contingency"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.cause.quote1, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — St. Thomas Aquinas (The Summa Theologiae)
            </p>
          </div>
        </div>
      </motion.section>

      {/* Argument 2: Argument from Perfection (4th Way) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Scale className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.perfection.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.perfection.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.perfection.intro, language),
            }}
          />
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.perfection.summaryLabel, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.perfection.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.perfection.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.perfection.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
            {/* Video Embed for 4th Way */}
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800 mt-4 border-t">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ufmYWfGTLus"
                title="The 4th Way: Argument from Perfection"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <p>{t(trans.perfection.explanation, language)}</p>

        </div>
      </motion.section>

      {/* Argument 3: Argument from Purpose (5th Way) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Gauge className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.purpose.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.purpose.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.purpose.intro, language),
            }}
          />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.purpose.summaryLabel, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.purpose.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.purpose.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.purpose.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
            {/* Video Embed for 5th Way */}
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800 mt-4 border-t">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wEvU808lwEA"
                title="The 5th Way: Argument from Purpose"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <p>{t(trans.purpose.explanation, language)}</p>
          
          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.purpose.quote, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — St. Thomas Aquinas (The Summa Theologiae)
            </p>
          </div>
        </div>
      </motion.section>

      {/* Argument 4: Moral (Existing Video Embed Kept) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Scale className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.moral.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.moral.tagline, language)}
            </p>
          </div>
        </div>
        
        {/* Moral Argument Video Added */}
        <div className="mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wlsY5jdLIJ8"
              title="Moral Argument for God's Existence"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        {/* End Moral Argument Video */}

        <div className="space-y-4 text-gray-300 leading-relaxed">
          {/* NEW INTRO PARAGRAPH */}
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.moral.intro, language),
            }}
          />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.moral.summaryLabel, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>{t(trans.moral.premise1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>{t(trans.moral.premise2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.moral.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.moral.explanation, language),
            }}
          />

          {/* Quote without attribution */}
          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.moral.quote, language)}"
            </p>
          </div>
        </div>
      </motion.section>

      

      {/* Argument 5: Scientific Evidence (Replaces Resurrection) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Sparkles className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.science.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.science.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.science.intro, language)}</p>

          {/* Video 1: By Design Panel */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-2 font-semibold">
              {t(trans.science.video1Title, language)}
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              {t(trans.science.video1Desc, language)}
            </p>
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rXexaVsvhCM"
                title="By Design: Behe, Lennox, and Meyer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 2: Stephen Meyer */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-2 font-semibold">
              {t(trans.science.video2Title, language)}
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              {t(trans.science.video2Desc, language)}
            </p>
            <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-900 border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/z_8PPO-cAlA"
                title="Stephen Meyer: Return of the God Hypothesis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* The Three Discoveries */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <h5 className="text-white font-bold flex items-center gap-2">
                <span className="text-blue-400">•</span>
                {t(trans.science.discovery1Title, language)}
              </h5>
              <p className="pl-5 text-gray-400 text-sm mt-1">
                {t(trans.science.discovery1Text, language)}
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold flex items-center gap-2">
                <span className="text-blue-400">•</span>
                {t(trans.science.discovery2Title, language)}
              </h5>
              <p className="pl-5 text-gray-400 text-sm mt-1">
                {t(trans.science.discovery2Text, language)}
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold flex items-center gap-2">
                <span className="text-blue-400">•</span>
                {t(trans.science.discovery3Title, language)}
              </h5>
              <p className="pl-5 text-gray-400 text-sm mt-1">
                {t(trans.science.discovery3Text, language)}
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.science.conclusion, language)}"
            </p>
          </div>
        </div>
      </motion.section>




      

      <Separator className="my-16 bg-gray-800" />

      {/* Answering Objections - Conservé */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.objections.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.objections.intro, language),
            }}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              {t(trans.objections.obj1Title, language)}
            </h4>
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.objections.obj1Response,
                  language,
                ),
              }}
            />
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              {t(trans.objections.obj2Title, language)}
            </h4>
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.objections.obj2Response,
                  language,
                ),
              }}
            />
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              {t(trans.objections.obj3Title, language)}
            </h4>
            <p
              className="text-gray-400"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.objections.obj3Response,
                  language,
                ),
              }}
            />
          </div>
        </div>

        {/* Craig Quote Block Removed */}
      </motion.section>
      
      {/* Vidéo avant la Conclusion */}
      <Separator className="my-16 bg-gray-800" />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.additionalVideo.heading, language)}
        </h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/otrqzITuSqE"
            title="Additional Video on Existence of God"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.section>

      {/* Conclusion (Contenu mis à jour dans translations) */}
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
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.para1, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.para2, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.conclusion.para3, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />
      
      {/* Bridge to Next Topic - Conservé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8"
      >
        <h3 className="text-white mb-4">
          {t(trans.bridge.heading, language)}
        </h3>
        <p
          className="text-gray-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: t(trans.bridge.para1, language),
          }}
        />
        <p
          className="text-gray-400 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t(trans.bridge.para2, language),
          }}
        />
      </motion.div>
    </TopicLayout>
  );
}
