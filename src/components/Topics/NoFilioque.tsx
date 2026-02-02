import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  Triangle,
  AlertCircle,
  XCircle,
  Scissors,
  ShuffleIcon as Shuffle,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";
import { Button } from "../ui/button";

// Add props interface
interface NoFilioqueProps {
  onComplete?: () => void;
}

export default function NoFilioque({ onComplete }: NoFilioqueProps) {
  const { language } = useLanguage();
  const trans = translations.noFilioque;

  const categoriesOfError = [
    {
      title: t(trans.categories.c1.title, language),
      icon: Scissors,
      color: "red",
      description: t(trans.categories.c1.desc, language),
    },
    {
      title: t(trans.categories.c2.title, language),
      icon: Shuffle,
      color: "orange",
      description: t(trans.categories.c2.desc, language),
    },
    {
      title: t(trans.categories.c3.title, language),
      icon: Users,
      color: "amber",
      description: t(trans.categories.c3.desc, language),
    },
  ];

  const splitsArguments = [
    {
      number: 1,
      title: t(trans.splits.arg1.title, language),
      quote: t(trans.splits.arg1.quote, language),
      explanation: t(trans.splits.arg1.explanation, language),
    },
    {
      number: 2,
      title: t(trans.splits.arg2.title, language),
      quote: t(trans.splits.arg2.quote, language),
      explanation: t(trans.splits.arg2.explanation, language),
    },
    {
      number: 3,
      title: t(trans.splits.arg3.title, language),
      quote: t(trans.splits.arg3.quote, language),
      explanation: t(trans.splits.arg3.explanation, language),
    },
  ];

  const destroysUnityArguments = [
    {
      number: 4,
      title: t(trans.destroysUnity.arg4.title, language),
      quote: t(trans.destroysUnity.arg4.quote, language),
      explanation: t(
        trans.destroysUnity.arg4.explanation,
        language,
      ),
    },
    {
      number: 5,
      title: t(trans.destroysUnity.arg5.title, language),
      quote: t(trans.destroysUnity.arg5.quote, language),
      explanation: t(
        trans.destroysUnity.arg5.explanation,
        language,
      ),
    },
    {
      number: 6,
      title: t(trans.destroysUnity.arg6.title, language),
      quote: t(trans.destroysUnity.arg6.quote, language),
      explanation: t(
        trans.destroysUnity.arg6.explanation,
        language,
      ),
      additionalQuote: t(
        trans.destroysUnity.arg6.additionalQuote,
        language,
      ),
    },
  ];

  const mutilatesArguments = [
    {
      number: 7,
      title: t(trans.mutilates.arg7.title, language),
      quote: t(trans.mutilates.arg7.quote, language),
      explanation: t(
        trans.mutilates.arg7.explanation,
        language,
      ),
    },
    {
      number: 8,
      title: t(trans.mutilates.arg8.title, language),
      quote: t(trans.mutilates.arg8.quote, language),
      explanation: t(
        trans.mutilates.arg8.explanation,
        language,
      ),
    },
    {
      number: 9,
      title: t(trans.mutilates.arg9.title, language),
      quote: t(trans.mutilates.arg9.quote, language),
      explanation: t(
        trans.mutilates.arg9.explanation,
        language,
      ),
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
          <SmartText ignore={["Filioque"]}>{t(trans.intro.p1, language).replace(/<[^>]*>?/gm, '')}</SmartText>
        </p>
        <p>
          <SmartText ignore={["Filioque"]}>{t(trans.intro.p2, language).replace(/<[^>]*>?/gm, '')}</SmartText>
        </p>

        <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: t(trans.intro.callout.p1, language),
            }}
          />
        </div>
      </div>

      {/* Video */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original Video: No Filioque No Trinity */}
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl hover:border-gray-700 transition-all duration-300">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I3ApIImWI4E"
            title={t(trans.video.title, language)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Second Video: Filioque History */}
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl hover:border-gray-700 transition-all duration-300">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ni-WEF7i5F8"
            title="History of the Filioque Controversy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Joseph Scheeben */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.scheeben.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.scheeben.p1, language)}</p>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <BookOpen
                className="text-purple-400 flex-shrink-0 mt-1"
                size={32}
              />
              <div>
                <p
                  className="text-white mb-3"
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.scheeben.callout.p1,
                      language,
                    ),
                  }}
                />
                <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                  <p
                    className="text-gray-300 italic"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        trans.scheeben.callout.quote,
                        language,
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Three Categories of Error */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.categories.h2, language)}
        </h2>

        <p
          className="text-gray-300 mb-8"
          dangerouslySetInnerHTML={{
            __html: t(trans.categories.p1, language),
          }}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {categoriesOfError.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-b from-${category.color}-900/30 to-${category.color}-900/10 border border-${category.color}-800 rounded-lg p-6`}
            >
              <div
                className={`w-14 h-14 rounded-full bg-${category.color}-900/50 flex items-center justify-center border border-${category.color}-700 mb-4 mx-auto`}
              >
                <category.icon
                  className={`text-${category.color}-300`}
                  size={28}
                />
              </div>
              <h3 className="text-white text-center mb-3">
                {category.title}
              </h3>
              <p className="text-gray-400 text-center text-sm">
                <SmartText>{category.description}</SmartText>
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-400 text-center mt-8 italic">
          {t(trans.categories.note, language)}
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* I. Denying the Filioque Splits the Trinity */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.splits.h2, language)}
        </h2>

        <p
          className="text-gray-300 mb-8"
          dangerouslySetInnerHTML={{
            __html: t(trans.splits.p1, language),
          }}
        />

        <div className="space-y-6">
          {splitsArguments.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-900/30 to-red-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-900/50 border border-red-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-300 font-mono">
                      {arg.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">
                    &quot;{arg.quote}&quot;
                  </p>
                </div>
                <p className="text-gray-300">
                  {arg.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. Denying the Filioque Destroys the Unity of the Trinity */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.destroysUnity.h2, language)}
        </h2>

        <p
          className="text-gray-300 mb-8"
          dangerouslySetInnerHTML={{
            __html: t(trans.destroysUnity.p1, language),
          }}
        />

        <div className="space-y-6">
          {destroysUnityArguments.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-900/30 to-orange-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-900/50 border border-orange-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-300 font-mono">
                      {arg.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">
                    &quot;{arg.quote}&quot;
                  </p>
                </div>
                <p className="text-gray-300 mb-4">
                  {arg.explanation}
                </p>
                {arg.additionalQuote && (
                  <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-gray-300 italic">
                      &quot;{arg.additionalQuote}&quot;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Denying the Filioque Mutilates the Trinity */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.mutilates.h2, language)}
        </h2>

        <p
          className="text-gray-300 mb-8"
          dangerouslySetInnerHTML={{
            __html: t(trans.mutilates.p1, language),
          }}
        />

        <div className="space-y-6">
          {mutilatesArguments.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-900/30 to-amber-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/50 border border-amber-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-300 font-mono">
                      {arg.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-amber-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">
                    &quot;{arg.quote}&quot;
                  </p>
                </div>
                <p className="text-gray-300">
                  {arg.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />


    {/* NEW SECTION: Biblical Evidence */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.biblical.h2, language)}
        </h2>

        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed">
            {t(trans.biblical.intro, language)}
          </p>

          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/f72aNg7JhqQ"
              title={t(trans.biblical.videoTitle, language)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="grid gap-6">
            {[1, 2, 3].map((num) => {
              // @ts-ignore - Dynamic access to translations
              const arg = trans.biblical.args[`arg${num}`];
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: num * 0.1 }}
                  className="bg-blue-950/20 border border-blue-900/50 rounded-lg p-6"
                >
                  {/* REMOVED THE DIV WITH PLAYCIRCLE AND THE FLEX WRAPPER */}
                  <div>
                    <h3 className="text-xl text-white mb-2">{t(arg.title, language)}</h3>
                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-3 my-3 rounded-r">
                      <p className="text-blue-200 italic text-sm">"{t(arg.verse, language)}"</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t(arg.explanation, language)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />



      

      {/* Theological and Patristic Grounding */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.grounding.h2, language)}
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.grounding.p1, language),
            }}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <h3 className="text-white">
                  {t(trans.grounding.greek.title, language)}
                </h3>
              </div>
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.grounding.greek.desc,
                    language,
                  ),
                }}
              />
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen
                  className="text-purple-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <h3 className="text-white">
                  {t(trans.grounding.latin.title, language)}
                </h3>
              </div>
              <p
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t(
                    trans.grounding.latin.desc,
                    language,
                  ),
                }}
              />
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 mt-6">
            <p
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: t(trans.grounding.p2, language),
              }}
            />
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Conclusion - SPARKLES REMOVED FROM HERE */}
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

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p
              className="text-white text-lg italic"
              dangerouslySetInnerHTML={{
                __html: t(trans.conclusion.quote, language),
              }}
            />
          </div>

          {/* Removed the Sparkles Icon and simplified the container */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
            <p
              className="text-white mb-0"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.conclusion.callout.p1,
                  language,
                ),
              }}
            />
          </div>
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
            <div className="flex items-center gap-3 mb-4">
              <Triangle className="text-green-400" size={24} />
              <h4 className="text-white">
                {t(trans.visual.catholic.title, language)}
              </h4>
            </div>
            <p
              className="text-gray-300 mb-4 italic"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.visual.catholic.quote,
                  language,
                ),
              }}
            />
            <p className="text-gray-400">
              {t(trans.visual.catholic.desc, language)}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-gray-400" size={24} />
              <h4 className="text-white">
                {t(trans.visual.orthodox.title, language)}
              </h4>
            </div>
            <p
              className="text-gray-300 mb-4 italic"
              dangerouslySetInnerHTML={{
                __html: t(
                  trans.visual.orthodox.quote,
                  language,
                ),
              }}
            />
            <p className="text-gray-400">
              {t(trans.visual.orthodox.desc, language)}
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Journey Completion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <div className="flex flex-col items-center text-center gap-6">
          <Award
            className="text-purple-400"
            size={48}
          />
          <div>
            <h3 className="text-white text-2xl mb-4">
              {t(trans.bridge.h3, language)}
            </h3>
            <p
              className="text-gray-300 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: t(trans.bridge.p1, language),
              }}
            />
            <p
              className="text-gray-400 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: t(trans.bridge.p2, language),
              }}
            />
            <p
              className="text-white text-lg italic mt-6 mb-8"
              dangerouslySetInnerHTML={{
                __html: t(trans.bridge.p3, language),
              }}
            />
            
            {/* COMPLETE JOURNEY BUTTON */}
            {onComplete && (
              <Button 
                onClick={onComplete}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg hover:shadow-green-900/50 transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle className="mr-2 w-6 h-6" />
                Complete Journey
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
