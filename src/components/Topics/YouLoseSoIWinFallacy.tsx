import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { AlertTriangle, X, Check, Shield, BookOpen, Scale, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { translations, t } from '../../lib/i18n/translations';

export default function YouLoseSoIWinFallacy() {
  const { language } = useLanguage();
  const trans = translations.youLoseSoIWinFallacy;

  return (
    <TopicLayout
      title={t(trans.title, language)}
      subtitle={t(trans.subtitle, language)}
      quote={{
        text: t(trans.quote, language),
        source: t(trans.quoteSource, language)
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p className="text-lg">
          {t(trans.introPara1, language)}
        </p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-white text-lg">
            {t(trans.canonQuestion, language)}
          </p>
        </div>

        <p dangerouslySetInnerHTML={{ __html: t(trans.introPara2, language) }} />

        <ul className="list-none space-y-3 pl-6">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">1.</span>
            <span><em>{t(trans.response1, language)}</em></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">2.</span>
            <span><em>{t(trans.response2, language)}</em></span>
          </li>
        </ul>

        <p>{t(trans.introPara3, language)}</p>
        <p>{t(trans.introPara4, language)}</p>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <ul className="list-none space-y-3 pl-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">1.</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.issue1, language) }} />
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">2.</span>
              <span dangerouslySetInnerHTML={{ __html: t(trans.issue2, language) }} />
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
        <h2 className="text-white mb-6">{t(trans.section1.heading, language)}</h2>

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
          <p dangerouslySetInnerHTML={{ __html: t(trans.section1.para1, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.section1.para2, language) }} />

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "{t(trans.section1.kreeftQuote, language)}"
            </p>
            <p className="text-gray-500 mt-2">— Peter Kreeft</p>
          </div>

          <p>{t(trans.section1.para3, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <X className="text-red-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-300 italic mb-3">
                  "{t(trans.section1.atheistExample, language)}"
                </p>
                <div className="bg-black/30 rounded p-4 text-gray-400 text-sm">
                  <p className="mb-2">{t(trans.section1.atheistLogic1, language)}</p>
                  <p className="mb-2">{t(trans.section1.atheistLogic2, language)}</p>
                  <p>{t(trans.section1.atheistLogic3, language)}</p>
                </div>
              </div>
            </div>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t(trans.section1.para4, language) }} />
          <p>{t(trans.section1.para5, language)}</p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <X className="text-red-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-300 italic mb-3">
                  "{t(trans.section1.protestantExample, language)}"
                </p>
                <div className="bg-black/30 rounded p-4 text-gray-400 text-sm">
                  <p className="mb-2">{t(trans.section1.protestantLogic1, language)}</p>
                  <p className="mb-2">{t(trans.section1.protestantLogic2, language)}</p>
                  <p>{t(trans.section1.protestantLogic3, language)}</p>
                </div>
              </div>
            </div>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t(trans.section1.para6, language) }} />
        </div>
      </motion.section>

      {/* Real-Life Analogy: Bridges */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">{t(trans.bridgeAnalogy.heading, language)}</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.bridgeAnalogy.para1, language)}</p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: t(trans.bridgeAnalogy.personA, language) }} />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: t(trans.bridgeAnalogy.personB, language) }} />
              </li>
            </ul>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t(trans.bridgeAnalogy.para2, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.bridgeAnalogy.para3, language) }} />
        </div>
      </motion.section>

      {/* Parallel from Science */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">{t(trans.scienceParallel.heading, language)}</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>{t(trans.scienceParallel.para1, language)}</p>

          <ul className="list-none space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.scienceParallel.point1, language)}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>{t(trans.scienceParallel.point2, language)}</span>
            </li>
          </ul>

          <p dangerouslySetInnerHTML={{ __html: t(trans.scienceParallel.para2, language) }} />
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
        <h2 className="text-white mb-6">{t(trans.section2.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.section2.para1, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.section2.para2, language) }} />
        </div>
      </motion.section>

      {/* What This Method Assumes */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">What This Method Assumes</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            This historical approach depends on several <strong className="text-white">assumptions</strong>:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>That we can objectively determine which books are "apostolic" and "orthodox."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>That we know which documents "contradict Scripture"—even though that assumes we already have a stable canon.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>That widespread early use is enough to determine divine inspiration.</span>
              </li>
            </ul>
          </div>

          <p>
            But this creates a <strong className="text-white">circular problem</strong>: we're using a standard 
            ("Scripture") to judge whether a book belongs in Scripture. And we're relying on 
            <strong className="text-white"> fallible, human investigation</strong> to reach infallible conclusions.
          </p>
        </div>
      </motion.section>

      {/* Early Church */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">What About the Early Church?</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Some claim that the early Church recognized the canon based purely on these criteria—age, apostolicity, 
            orthodoxy, usage. But this isn't how the early Church actually functioned.
          </p>

          <p>
            The councils of <strong className="text-white">Hippo (393)</strong>, <strong className="text-white">
            Carthage (397)</strong>, and later Florence and Trent didn't canonize books based on historical science. 
            They did so through the <strong className="text-white">apostolic authority of the Church</strong>, 
            trusting that the Holy Spirit was guiding their decision (cf. John 16:13).
          </p>

          <p>
            Even if certain books were believed to be apostolic, that belief wasn't based on archaeology—it was 
            based on <strong className="text-white">faith in the Church's living tradition</strong>.
          </p>

          <p>
            Historical research can support the faith. It can help us understand what the early Christians believed. 
            But it can't <strong className="text-white">guarantee</strong> which writings are 
            <strong className="text-white"> theopneustos</strong> (God-breathed). That requires 
            <strong className="text-white"> divine authority</strong>, not just historical consensus.
          </p>
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
        <h2 className="text-white mb-6">{t(trans.section3.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            A common Protestant response to the Catholic claim of an infallible Church guiding the biblical canon 
            is this:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "I don't need to be infallible to know that God is infallible. Why then do we need an infallible 
              Church to recognize which books belong in the Bible?"
            </p>
          </div>

          <p>
            At first glance, this sounds reasonable—after all, we often accept truths that transcend our own 
            fallibility. But this response conflates two very different concepts that need to be carefully distinguished:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <ul className="list-none space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>The capacity of a fallible individual to recognize or assent to truth, and</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>The requirement of an infallible mechanism or authority to <em>preserve</em> and <em>define</em> a body of infallible truth for the entire Church.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Recognizing vs Defining Truth */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">Recognizing Truth vs. Defining and Preserving Truth</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Philosophically, the distinction is critical. It is one thing for a person, despite their own fallibility, 
            to <em>believe</em> or <em>recognize</em> that a truth is true. It is quite another for a community to 
            <em>establish with certainty</em> which propositions constitute that truth, especially when those 
            propositions form the basis of faith and practice for millions across centuries.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "Infallibility is the absence of error, not merely the possession of a true belief. While fallible 
              persons can have true beliefs, reliably identifying a complete, inerrant canon requires a reliable, 
              authoritative process."
            </p>
            <p className="text-gray-500">— Alvin Plantinga, <em>Warranted Christian Belief</em>, 2000</p>
          </div>
        </div>
      </motion.section>

      {/* Problem of Certainty */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">The Problem of Certainty in a Fallible Process</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            If the process by which the biblical canon was recognized was itself fallible—subject to error, 
            disagreement, or human weakness—then the end result is only <em>probable</em> certainty about the 
            canon, not absolute certainty. This introduces what philosophers call <strong className="text-white">
            epistemic uncertainty</strong>.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "Religious truths require a high standard of evidence; anything less than near certainty diminishes 
              their authority and reliability."
            </p>
            <p className="text-gray-500">— Richard Swinburne, <em>The Existence of God</em>, 2004</p>
          </div>

          <p>
            This uncertainty has real consequences: if the Church's recognition of the canon is fallible, then 
            the foundation of Christian faith—the Word of God—is on shaky ground. Faith, in the Catholic understanding, 
            is not a leap into the unknown but an assent to revealed truth, guaranteed by divine authority.
          </p>
        </div>
      </motion.section>

      {/* Biblical and Patristic Support */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">Biblical and Patristic Support for an Infallible Church</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Catholic theology holds that God, who inspired Scripture, did not abandon His people to human fallibility 
            when it came to preserving His Word. Rather, He established a <strong className="text-white">living, 
            Spirit-guided Church</strong> to guard and define the canon of Scripture with infallible authority.
          </p>

          <p>
            This is explicitly stated in Scripture itself. Consider Paul's instruction to Timothy:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "If you put these things before the brothers, you will be a good servant of Christ Jesus, being 
              trained in the words of the faith and of the good doctrine that you have followed. By the Holy 
              Spirit who dwells within us, guard the good deposit entrusted to you."
            </p>
            <p className="text-gray-500">— 2 Timothy 1:13-14</p>
          </div>

          <p>
            Similarly, Jesus promises in Matthew 18:17-18 that the Church has binding authority:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "If he refuses to listen even to the church, let him be to you as a Gentile and a tax collector. 
              Truly, I say to you, whatever you bind on earth shall be bound in heaven, and whatever you loose 
              on earth shall be loosed in heaven."
            </p>
            <p className="text-gray-500">— Matthew 18:17-18</p>
          </div>

          <p>
            The Fathers of the Church echoed this understanding. St. Augustine wrote:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "The Church is not built on the shifting sands of human judgment, but upon the rock of Peter and 
              the promise of Christ, where the Spirit of truth presides to keep her from error."
            </p>
            <p className="text-gray-500">— St. Augustine, <em>On the Unity of the Church</em>, 401 A.D.</p>
          </div>
        </div>
      </motion.section>

      {/* Protestant Voices */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">Recognizing the Need for Authority: Protestant Voices</h3>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Notably, some Protestant scholars have acknowledged difficulties with sola scriptura and the necessity 
            for authoritative structures:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">R.C. Sproul</strong>, a well-known Reformed theologian, admitted:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "While the Bible is the ultimate authority, the church plays a crucial role in discerning and 
                  interpreting Scripture. We cannot simply ignore the church's historical role in defining the canon."
                </p>
                <p className="text-gray-500 text-sm mt-2">— R.C. Sproul, <em>Scripture Alone</em>, 1995</p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Michael J. Kruger</strong>, a Protestant expert on the canon, writes:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "The formation of the canon was not a matter of private judgment but a corporate, ecclesial 
                  decision—showing that the church's authority was indispensable."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Michael J. Kruger, <em>The Question of Canon</em>, 2003</p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Darrell L. Bock</strong> concedes:
              </p>
              <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-400 italic">
                  "There was a recognized process, guided by the Spirit, that ensured the church did not err in 
                  its recognition of Scripture."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Darrell L. Bock, <em>The Canon of Scripture</em>, 2007</p>
              </div>
            </div>
          </div>

          <p className="mt-6">
            These acknowledgments highlight that even Protestant scholarship sees the necessity of a reliable, 
            Spirit-led authority in establishing the canon.
          </p>
        </div>
      </motion.section>

      {/* Philosophical Considerations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">Philosophical Considerations on Authority and Infallibility</h3>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            From a philosophical standpoint, consider the epistemological challenge of <strong className="text-white">
            foundationalism</strong>—the view that knowledge rests on certain basic, self-evident truths or reliable 
            authorities. If the Church's authority to define the canon is not infallible, the entire foundation of 
            Scripture becomes suspect.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "An infallible Scripture requires an infallible interpreter. Without a stable, authoritative custodian, 
              the Bible becomes a source of endless dispute and confusion."
            </p>
            <p className="text-gray-500">— Peter Kreeft, <em>Catholic Christianity</em>, 1987</p>
          </div>

          <p>
            This leads to a regress problem: if the canon is identified by fallible historical investigation or 
            individual judgment alone, who then determines the correctness of that investigation or judgment? 
            Without an infallible arbiter, the process is unstable.
          </p>
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">Summary: Why Infallibility Is Necessary to Recognize Infallible Truth</h3>
        
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
          <ul className="list-none space-y-3 pl-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <span>Recognizing infallible truth as an individual is possible despite personal fallibility.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <span>Defining and preserving an infallible corpus of truth (the canon) for the entire Church requires a mechanism immune from error.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <span>A fallible Church can only produce probable, not certain, recognition of the canon, undermining the authority of Scripture.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <span>Catholic doctrine affirms that God instituted an infallible Church, guided by the Holy Spirit, to define and protect the biblical canon.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <span>This divine guarantee ensures that the Bible we hold is truly the inspired, inerrant Word of God, providing a secure foundation for faith.</span>
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
        <h2 className="text-white mb-6">{t(trans.conclusion.heading, language)}</h2>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para1, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para2, language) }} />
          <p dangerouslySetInnerHTML={{ __html: t(trans.conclusion.para3, language) }} />

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8 my-8">
            <h4 className="text-white mb-4">{t(trans.conclusion.solutionHeading, language)}</h4>
            <p className="text-gray-300 mb-4">{t(trans.conclusion.solutionIntro, language)}</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">{t(trans.conclusion.solution1, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">{t(trans.conclusion.solution2, language)}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300">{t(trans.conclusion.solution3, language)}</span>
              </li>
            </ul>
          </div>

          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(trans.conclusion.finalStatement, language) }} />
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
          <Lightbulb className="text-blue-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">{t(trans.bridge.heading, language)}</h3>
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
