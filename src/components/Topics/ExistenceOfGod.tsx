import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Sparkles,
  Gauge,
  Scale,
  Cross,
  Brain,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function ExistenceOfGod() {
  const { language } = useLanguage();
  const trans = translations.existenceOfGod;

  const fiveArguments = [
    {
      icon: Sparkles,
      title: t(trans.arg1Title, language),
      subtitle: t(trans.arg1Subtitle, language),
      key: "cosmological",
    },
    {
      icon: Gauge,
      title: t(trans.arg2Title, language),
      subtitle: t(trans.arg2Subtitle, language),
      key: "finetuning",
    },
    {
      icon: Scale,
      title: t(trans.arg3Title, language),
      subtitle: t(trans.arg3Subtitle, language),
      key: "moral",
    },
    {
      icon: Cross,
      title: t(trans.arg4Title, language),
      subtitle: t(trans.arg4Subtitle, language),
      key: "resurrection",
    },
    {
      icon: Brain,
      title: t(trans.arg5Title, language),
      subtitle: t(trans.arg5Subtitle, language),
      key: "ontological",
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
      {/* Video Section */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TtSXyrEzXs4?start=97"
            title="Five Reasons Why You Can Believe God Exists"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: t(trans.intro1, language),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro2, language),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.intro3, language),
          }}
        />
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

      {/* Argument 1: Cosmological */}
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
              {t(trans.cosmological.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.cosmological.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cosmological.summaryLabel, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>
                  {t(trans.cosmological.premise1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>
                  {t(trans.cosmological.premise2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.cosmological.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.cosmological.explanation1,
                language,
              ),
            }}
          />

          <p>
            <strong className="text-white">
              {t(
                trans.cosmological.scientificSupport,
                language,
              )}
            </strong>{" "}
            {t(trans.cosmological.explanation2, language)}
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.cosmological.quote1, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — William Lane Craig
            </p>
          </div>
        </div>
      </motion.section>

      {/* Argument 2: Fine-Tuning */}
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
              {t(trans.fineTuning.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.fineTuning.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cosmological.summaryLabel, language)}
              </strong>
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>
                  {t(trans.fineTuning.premise1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>
                  {t(trans.fineTuning.premise2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  {t(trans.fineTuning.premise3, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">4.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.fineTuning.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <p>{t(trans.fineTuning.explanation, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.fineTuning.quote, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — William Lane Craig
            </p>
          </div>
        </div>
      </motion.section>

      {/* Argument 3: Moral */}
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

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <p className="mb-3">
              <strong className="text-white">
                {t(trans.cosmological.summaryLabel, language)}
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

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.moral.quote, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — William Lane Craig
            </p>
          </div>
        </div>
      </motion.section>

      {/* Argument 4: Resurrection */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Cross className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.resurrection.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.resurrection.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.resurrection.intro, language),
            }}
          />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    {t(trans.resurrection.fact1, language)}
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    {t(trans.resurrection.fact2, language)}
                  </strong>{" "}
                  {t(trans.resurrection.fact2Detail, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    {t(trans.resurrection.fact3, language)}
                  </strong>{" "}
                  {t(trans.resurrection.fact3Detail, language)}
                </span>
              </li>
            </ul>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.resurrection.explanation,
                language,
              ),
            }}
          />
        </div>
      </motion.section>

      {/* Argument 5: Ontological */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-800 flex-shrink-0">
            <Brain className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-white mb-2">
              {t(trans.ontological.heading, language)}
            </h3>
            <p className="text-blue-400 italic">
              {t(trans.ontological.tagline, language)}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.ontological.intro, language),
            }}
          />

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">1.</span>
                <span>
                  {t(trans.ontological.premise1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2.</span>
                <span>
                  {t(trans.ontological.premise2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">3.</span>
                <span>
                  {t(trans.ontological.premise3, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">4.</span>
                <span>
                  {t(trans.ontological.premise4, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">5.</span>
                <span>
                  <strong className="text-white">
                    {t(trans.ontological.conclusion, language)}
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <p>{t(trans.ontological.explanation, language)}</p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Answering Objections */}
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

        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-8">
          <p className="text-gray-300 italic">
            "{t(trans.objections.craigQuote, language)}"
          </p>
          <p className="text-gray-500 mt-2">
            — William Lane Craig
          </p>
        </div>
      </motion.section>

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

      {/* --- ADDED SECTION --- */}
      <Separator className="my-16 bg-gray-800" />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
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
      {/* --- END OF ADDED SECTION --- */}

      {/* Bridge to Next Topic */}
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