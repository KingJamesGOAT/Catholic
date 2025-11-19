import SmartText from "../SmartText";
import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  AlertTriangle,
  X,
  Check,
  Shield,
  BookOpen,
  Scale,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { translations, t } from "../../lib/i18n/translations";

export default function YouLoseSoIWinFallacy() {
  const { language } = useLanguage();
  const trans = translations.youLoseSoIWinFallacy;

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
        <p className="text-lg">
          <SmartText>{t(trans.introPara1, language)}</SmartText>
        </p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-white text-lg">
            {t(trans.canonQuestion, language)}
          </p>
        </div>

        <p
          dangerouslySetInnerHTML={{
            __html: t(trans.introPara2, language),
          }}
        />

        <ul className="list-none space-y-3 pl-6">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">1.</span>
            <span>
              <em>{t(trans.response1, language)}</em>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">2.</span>
            <span>
              <em>{t(trans.response2, language)}</em>
            </span>
          </li>
        </ul>

        <p>{t(trans.introPara3, language)}</p>
        <p>{t(trans.introPara4, language)}</p>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <ul className="list-none space-y-3 pl-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">1.</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.issue1, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">2.</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.issue2, language),
                }}
              />
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 1: The Fallacy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section1.heading, language)}
        </h2>

        {/* Video */}
        <div className="mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/KHjYP3WlZCc?start=485"
              title="You Lose So I Win Fallacy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.para1, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.para2, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section1.kreeftQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— Peter Kreeft</p>
          </div>

          <p>{t(trans.section1.para3, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <X
                className="text-red-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <p className="text-gray-300 italic mb-3">
                  "{t(trans.section1.atheistExample, language)}"
                </p>
                
                <div className="bg-black/30 rounded p-4 text-gray-400 text-sm">
                  <p className="mb-2">
                    <SmartText>{t(trans.section1.atheistLogic1, language)}</SmartText>
                  </p>

                  
                  <p className="mb-2">
                    {t(trans.section1.atheistLogic2, language)}
                  </p>
                  <p>
                    {t(trans.section1.atheistLogic3, language)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.para4, language),
            }}
          />
          <p>{t(trans.section1.para5, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <X
                className="text-red-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <p className="text-gray-300 italic mb-3">
                  "
                  {t(
                    trans.section1.protestantExample,
                    language,
                  )}
                  "
                </p>
                <div className="bg-black/30 rounded p-4 text-gray-400 text-sm">
                  <p className="mb-2">
                    {t(
                      trans.section1.protestantLogic1,
                      language,
                    )}
                  </p>
                  <p className="mb-2">
                    {t(
                      trans.section1.protestantLogic2,
                      language,
                    )}
                  </p>
                  <p>
                    {t(
                      trans.section1.protestantLogic3,
                      language,
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section1.para6, language),
            }}
          />
        </div>
      </motion.section>

      {/* Real-Life Analogy: Bridges */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.bridgeAnalogy.heading, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.bridgeAnalogy.para1, language)}</p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.bridgeAnalogy.personA,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.bridgeAnalogy.personB,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.bridgeAnalogy.para2, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.bridgeAnalogy.para3, language),
            }}
          />
        </div>
      </motion.section>

      {/* Parallel from Science */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.scienceParallel.heading, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.scienceParallel.para1, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                {t(trans.scienceParallel.point1, language)}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                {t(trans.scienceParallel.point2, language)}
              </span>
            </li>
          </ul>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.scienceParallel.para2, language),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 2: Can Science/History Determine Canon */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section2.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section2.para1, language),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section2.para2, language),
            }}
          />
        </div>
      </motion.section>

      {/* What This Method Assumes */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.methodAssumptions.heading, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.methodAssumptions.para1,
                language,
              ),
            }}
          />

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.methodAssumptions.assumption1,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.methodAssumptions.assumption2,
                      language,
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.methodAssumptions.assumption3,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.methodAssumptions.para2,
                language,
              ),
            }}
          />
        </div>
      </motion.section>

      {/* Early Church */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.earlyChurchSection.heading, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.earlyChurchSection.para1, language)}</p>

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.earlyChurchSection.para2,
                language,
              ),
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.earlyChurchSection.para3,
                language,
              ),
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: t(
                trans.earlyChurchSection.para4,
                language,
              ),
            }}
          />
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section 3: Does Recognizing Infallible Truth Require Infallibility */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          {t(trans.section3.heading, language)}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.section3.para1, language)}</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section3.protestantResponse, language)}"
            </p>
          </div>

          <p>{t(trans.section3.para2, language)}</p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {t(trans.section3.distinction1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      trans.section3.distinction2,
                      language,
                    ),
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Recognizing vs Defining Truth - CORRECTED SECTION (Section 3A in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3A.h3, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3A.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3A.quote.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3A.quote.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3A.p2, language),
            }}
          />
        </div>
      </motion.section>

      {/* The Problem of Certainty in a Fallible Process - CORRECTED SECTION (Section 3B in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3B.h3, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3B.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3B.quote.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3B.quote.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3B.p2, language),
            }}
          />
        </div>
      </motion.section>

      {/* Biblical and Patristic Support for an Infallible Church - CORRECTED SECTION (Section 3C in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3C.h3, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3C.p1, language),
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3C.p2, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3C.quote1.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3C.quote1.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3C.p3, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3C.quote2.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3C.quote2.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3C.p4, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3C.quote3.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3C.quote3.source, language)}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Recognizing the Need for Authority: Protestant Voices - CORRECTED SECTION (Section 3D in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3D.h3, language)}
        </h3>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t(trans.section3D.p1, language)}</p>

          <div className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section3D.scholar1.name, language)}
                </strong>
                , {t(trans.section3D.scholar1.p1, language)}:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "
                  {t(
                    trans.section3D.scholar1.quote.text,
                    language,
                  )}
                  "
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  —{" "}
                  {t(
                    trans.section3D.scholar1.quote.source,
                    language,
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section3D.scholar2.name, language)}
                </strong>
                , {t(trans.section3D.scholar2.p1, language)}:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "
                  {t(
                    trans.section3D.scholar2.quote.text,
                    language,
                  )}
                  "
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  —{" "}
                  {t(
                    trans.section3D.scholar2.quote.source,
                    language,
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">
                  {t(trans.section3D.scholar3.name, language)}
                </strong>{" "}
                {t(trans.section3D.scholar3.p1, language)}:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "
                  {t(
                    trans.section3D.scholar3.quote.text,
                    language,
                  )}
                  "
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  —{" "}
                  {t(
                    trans.section3D.scholar3.quote.source,
                    language,
                  )}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6">
            {t(trans.section3D.p2, language)}
          </p>
        </div>
      </motion.section>

      {/* Philosophical Considerations on Authority and Infallibility - CORRECTED SECTION (Section 3E in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3E.h3, language)}
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3E.p1, language),
            }}
          />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "{t(trans.section3E.quote.text, language)}"
            </p>
            <p className="text-gray-500 mt-2">
              — {t(trans.section3E.quote.source, language)}
            </p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t(trans.section3E.p2, language),
            }}
          />
        </div>
      </motion.section>

      {/* Summary: Why Infallibility Is Necessary to Recognize Infallible Truth - CORRECTED SECTION (Section 3F in translations) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">
          {t(trans.section3F.h3, language)}
        </h3>

        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
          <ul className="list-none space-y-3 pl-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Check
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span>{t(trans.section3F.li1, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <Check
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.section3F.li2, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <Check
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.section3F.li3, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <Check
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.section3F.li4, language),
                }}
              />
            </li>
            <li className="flex items-start gap-3">
              <Check
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(trans.section3F.li5, language),
                }}
              />
            </li>
          </ul>
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

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8 my-8">
            <h4 className="text-white mb-4">
              {t(trans.conclusion.solutionHeading, language)}
            </h4>
            <p className="text-gray-300 mb-4">
              {t(trans.conclusion.solutionIntro, language)}
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">
                  {t(trans.conclusion.solution1, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">
                  {t(trans.conclusion.solution2, language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">
                  {t(trans.conclusion.solution3, language)}
                </span>
              </li>
            </ul>
          </div>

          <p
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: t(
                trans.conclusion.finalStatement,
                language,
              ),
            }}
          />
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
          <Lightbulb
            className="text-blue-400 flex-shrink-0 mt-1"
            size={28}
          />
          <div>
            <h3 className="text-white mb-4">
              {t(trans.bridge.heading, language)}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t(trans.bridge.para1, language)}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t(trans.bridge.para2, language)}
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}