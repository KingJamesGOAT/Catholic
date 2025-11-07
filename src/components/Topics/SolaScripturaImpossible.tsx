import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { XCircle, AlertTriangle, BookOpen, Scale, Lightbulb, Users, CheckCircle, ChevronRight } from 'lucide-react';

export default function SolaScripturaImpossible() {
  const faithElements = [
    { label: 'Principle', description: 'Grace stirred by the Holy Spirit', icon: Lightbulb },
    { label: 'Material Object', description: 'Supernatural truth', icon: BookOpen },
    { label: 'Formal Object', description: 'Believed as revealed by God', icon: Scale }
  ];

  const distinguishedTerms = [
    {
      term: 'Divine Revelation',
      definition: 'God speaking to man, typically through prophets or apostles.',
      color: 'blue'
    },
    {
      term: 'Infallibility',
      definition: 'Freedom from error, either absolute or in a restricted domain.',
      color: 'purple'
    },
    {
      term: 'Inspiration',
      definition: 'The very words are authored by God.',
      color: 'green'
    }
  ];

  return (
    <TopicLayout
      title="Sola Scriptura is Impossible"
      subtitle="A Comprehensive Scholastic Critique"
      quote={{
        text: "Do you understand what you are reading? How can I, unless someone guides me?",
        source: "Acts 8:30-31"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction: The Difficult Task of Protestant-Catholic Apologetics</h2>

        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic">
            "Anytime you make an apologetic argument against Protestantism, you are surrounded by a number of pitfalls 
            that make it an almost impossible task."
          </p>
        </div>

        <p>
          Whenever an apologetic argument is made against Protestantism, a number of pitfalls arise. Oversimplify the 
          argument, and it loses depth. Make it overly complex, and it becomes inaccessible. If the argument is too broad, 
          some Protestants will feel misrepresented. If too narrow, it fails to address Protestantism as a whole.
        </p>

        <p>
          Every decision in this work is made for the good of Protestant listeners and for the salvation of their souls. 
          There is no intent to strawman or misrepresent, and no ignorance of Protestant sources. Charity is requested, 
          and a sincere, open-minded examination.
        </p>
      </div>

      {/* Videos */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5159MqzEUy8"
            title="Sola Scriptura is Impossible"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Summary of Argument */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Summary of the Argument</h2>

        <p className="text-gray-300 mb-6">The argument is simple:</p>

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={28} />
            <div>
              <p className="text-white text-lg mb-4">
                In the Protestant view, there is no consistent way to make an act of faith in the fact that the books 
                of the New Testament are divinely inspired.
              </p>
              <p className="text-gray-300">
                This is because that knowledge must come to us by divine revelation through sacred tradition, proposed 
                authoritatively by the Magisterium—elements rejected by the Protestant rule of faith (<em>Sola Scriptura</em>).
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mt-6">
          Common Protestant objections are anticipated: appeals to tradition, ecclesial authority, motives of credibility, 
          or accusations of circularity. These will be answered clearly and fairly.
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Presumption and State of Question */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Presumption of the Case and State of the Question</h2>

        <p className="text-gray-300 mb-6">
          Two classical rhetorical principles frame the debate:
        </p>

        {/* Presumption */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-white mb-4">Presumption of the Case</h3>
          <p className="text-gray-300">
            Arguments are built on shared assumptions. Papal encyclicals are not cited against Protestants. Instead, 
            Scripture, reason, and Protestant sources are used. Shared axioms on faith and revelation are the foundation.
          </p>
        </div>

        {/* State of Question */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h3 className="text-white mb-4">State of the Question</h3>
          <p className="text-gray-300 mb-4">
            The issue is not proving Catholicism. It is evaluating whether the Protestant doctrine of <em>Sola Scriptura</em> 
            can account for the canon of Scripture. Protestants must:
          </p>
          <ol className="space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">1.</span>
              <span>Prove their doctrine does not fall into contradiction.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">2.</span>
              <span>Or show that the contradiction does not follow.</span>
            </li>
          </ol>
          <p className="text-gray-400 mt-4">
            Too often, Protestant replies do anything but address the actual state of the question.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* What is Sola Scriptura */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">What Is Sola Scriptura?</h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The doctrine under critique is not merely that Scripture is the only <strong className="text-white">
            infallible</strong> rule of faith, but that:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-white text-lg">
              Scripture alone is the rule of faith.
            </p>
          </div>

          <p>This is the classical formulation. Confessions affirm this clearly:</p>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-white">Westminster Confession:</strong> Synods or councils are not to be made 
                the rule of faith.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-white">Westminster Larger Catechism:</strong> Scripture is the only rule of 
                faith and obedience.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-white">Helvetic Consensus:</strong> Scripture is the sole and complete rule.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-white">Formula of Concord:</strong> God's word alone is the guiding principle.
              </p>
            </div>
          </div>

          <p>
            Modern Protestant attempts to add the word <em>infallible</em> shift the meaning. This addition is inconsistent 
            with classical theology. For example:
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Moses Amyraut and Richard Baxter believed infallibility could apply to councils.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Catholics distinguish between fallible and infallible rules of faith.</span>
            </li>
          </ul>

          <p>
            Being a rule of faith means having <strong className="text-white">authenticity</strong>—the authority to 
            bind conscience. Tradition and ecclesial authority may assist in interpretation, but in <em>Sola Scriptura</em> 
            they do not bind.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Nature of Faith */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">The Nature of Faith</h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Understanding <em>faith</em> is key. Dogmatic faith (not fiduciary faith) is distinct from sense perception, 
            self-evident principles, or demonstration. Lude Le Blanc writes:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "We do not properly hold by faith those things which we perceive by sense, nor also those things which 
              have been necessarily and evidently demonstrated to us."
            </p>
            <p className="text-gray-500 mt-2">— Lude Le Blanc</p>
          </div>

          <p className="mb-6">Faith includes:</p>

          <div className="grid md:grid-cols-3 gap-6">
            {faithElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700 flex items-center justify-center mb-4">
                  <element.icon className="text-purple-400" size={24} />
                </div>
                <h4 className="text-white mb-2">{element.label}</h4>
                <p className="text-gray-400 text-sm">{element.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-white mt-8 mb-4">Faith vs Vision</h3>

          <p>
            What is believed by faith now will be known by sight in the beatific vision. When divine truths are seen 
            directly, faith is abolished, not perfected.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Revelation, Infallibility, Inspiration */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Revelation, Infallibility, and Inspiration</h2>

        <p className="text-gray-300 mb-6">
          These three terms must be distinguished:
        </p>

        <div className="space-y-4">
          {distinguishedTerms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-${item.color}-900/10 border border-${item.color}-800 rounded-lg p-6`}
            >
              <h4 className="text-white mb-2">{item.term}</h4>
              <p className="text-gray-300">{item.definition}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mt-8">
          <p className="text-gray-300 mb-4">
            A prophet may communicate revelation, even infallibly, without inspiration. For example, Paul may preach 
            with divine authority without every word being divinely authored.
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Inspiration is mysterious and interior.</strong> It is not publicly verifiable. 
            Therefore, the knowledge that a book is inspired must come through divine revelation. This presents a problem 
            for Protestants.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* The Argument Fully Stated */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Restating the Argument Fully</h2>

        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-8">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">1.</span>
              <span className="text-gray-300"><em>Sola Scriptura</em> claims Scripture is the sole rule of faith.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">2.</span>
              <span className="text-gray-300">The fact that a book is divinely inspired must be believed by faith.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">3.</span>
              <span className="text-gray-300">Faith requires divine revelation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">4.</span>
              <span className="text-gray-300">The inspiration of the New Testament books is not found in Scripture.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 flex-shrink-0 mt-1 font-mono">5.</span>
              <span className="text-gray-300"><strong className="text-white">Therefore</strong>, Protestants must appeal to an extrabiblical source of divine revelation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 flex-shrink-0 mt-1 font-mono">6.</span>
              <span className="text-gray-300"><strong className="text-white">Therefore</strong>, <em>Sola Scriptura</em> cannot consistently account for the canon.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 flex-shrink-0 mt-1 font-mono">7.</span>
              <span className="text-white font-medium">But <em>Sola Scriptura</em> rejects such sources.</span>
            </li>
          </ol>
        </div>

        <p className="text-gray-300 mt-6">
          The Catholic account avoids this problem by appealing to divine revelation transmitted through sacred tradition 
          and authoritatively taught by the Church.
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Tu Quoque */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">The Tu Quoque Objection: Does Catholicism Have the Same Problem?</h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Some Protestants will respond that Catholics have the same problem: if inspiration must be known through 
            divine revelation, doesn't that create an infinite regress? Doesn't Catholicism also fall into circularity?
          </p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">No. The Catholic model avoids these problems:</h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">1.</span>
                <span><strong className="text-white">We do not say</strong> that divine revelation needs a divine revelation to confirm it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">2.</span>
                <span>Rather, we say that <em>inspiration</em> is a revealed fact which must be proposed for belief.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">3.</span>
                <span>The Church is a divine legate, authenticated by Christ, and thus can propose the canon.</span>
              </li>
            </ol>
          </div>

          <p>
            This is not circular because we begin with the historical reliability of the Gospels, establish Christ's 
            authority through motives of credibility, and then proceed to the Church's authority as His appointed legate.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Protestant Counterarguments */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">Addressing Protestant Counterarguments</h2>

        {/* Illumination of Spirit */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">1. Illumination of the Spirit</h3>
          </div>
          <p className="text-gray-300">
            Some Protestants say the Spirit testifies internally to the canon. But this cannot supply the 
            <strong className="text-white"> formal object</strong> of faith—that it is revealed by God. If the Spirit 
            provides this directly, then each Christian receives a private revelation of the canon, which Protestants 
            reject. If it does not, then the formal object is missing.
          </p>
        </div>

        {/* Canon in Scripture */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">2. Canon Contained in Scripture</h3>
          </div>
          <p className="text-gray-300">
            Others say the canon is revealed within Scripture. But not every book identifies itself. Third John, for 
            example, never claims inspiration. Appeals to apostolic authorship also fail because not all books are 
            apostolic, and not all apostolic writings are inspired.
          </p>
        </div>

        {/* Internal Marks */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">3. Internal Marks of Sublimity</h3>
          </div>
          <p className="text-gray-300">
            Some claim the canon can be known by the internal beauty or sublimity of Scripture. But this is a 
            <strong className="text-white"> scientific</strong> judgment, not a judgment of faith. Supernatural truths 
            are not known by natural reasoning. Further, many sublime texts are not canonical, and some canonical books 
            lack apparent sublimity.
          </p>
        </div>

        {/* Historical Witness */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">4. Historical Witness of the Church</h3>
          </div>
          <p className="text-gray-300">
            Some concede that the Church historically testified to the canon. But this raises the question: is belief 
            in the canon an act of human faith or divine faith? If it is human, it cannot ground divine inspiration. If 
            it is divine, then where is the revelation? If it is outside Scripture, <em>Sola Scriptura</em> collapses.
          </p>
        </div>

        {/* Motives of Credibility */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">5. The Appeal to Motives of Credibility Alone</h3>
          </div>
          <p className="text-gray-300">
            Some Protestants attempt to bridge the gap by appealing to motives of credibility—miracles, fulfilled 
            prophecies, or the moral excellence of Scripture—to justify belief in the canon. Yet this approach also fails 
            for the same fundamental reason: it confuses the concepts of divine revelation and inspiration. Motives of 
            credibility can confirm the truthfulness of a messenger or message, but they cannot establish inspiration, 
            which is a supernatural act of God that cannot be inferred solely from external signs.
          </p>
        </div>

        {/* Historical Judgment */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <h3 className="text-white">6. The Canon as a Historical Judgment</h3>
          </div>
          <p className="text-gray-300">
            Another fallback is to treat the canon as a historically reliable tradition—something that emerged organically 
            from the Church's common recognition over time. This too collapses under scrutiny. If belief in the canon is 
            based solely on historical investigation, then the assent to its inspiration is based on human reasoning, not 
            divine faith. But divine inspiration is not a merely historical claim—it is a supernatural truth, and thus it 
            demands a supernatural source of revelation.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Catholic Solution */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">The Catholic Solution: Coherent and Consistent</h2>

        <p className="text-gray-300 mb-8">
          The Catholic position resolves all these difficulties.
        </p>

        <h3 className="text-white mb-6">Step-by-Step Coherence</h3>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
              <span className="text-green-300 font-mono text-sm">1</span>
            </div>
            <p className="text-gray-300">
              Begin with the <strong className="text-white">historical reliability</strong> of the Gospels, using the 
              same critical methods applied to any ancient text.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
              <span className="text-green-300 font-mono text-sm">2</span>
            </div>
            <p className="text-gray-300">
              From there, recognize the <strong className="text-white">motives of credibility</strong> that confirm 
              Christ&apos;s identity as the divine legate: His miracles, His resurrection, His fulfillment of prophecy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
              <span className="text-green-300 font-mono text-sm">3</span>
            </div>
            <p className="text-gray-300">
              Understand that Christ <strong className="text-white">established a Church</strong> with divine authority, 
              promising it the guidance of the Holy Spirit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
              <span className="text-green-300 font-mono text-sm">4</span>
            </div>
            <p className="text-gray-300">
              Acknowledge that this Church, through its <strong className="text-white">apostolic succession</strong> and 
              fidelity to Christ&apos;s command, is a divine legate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
              <span className="text-green-300 font-mono text-sm">5</span>
            </div>
            <p className="text-gray-300">
              Receive the canon of Scripture as proposed by that Church, as a <strong className="text-white">divinely 
              revealed truth</strong>.
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-8">
          <p className="text-gray-300 italic">
            "We do not begin by supposing their inspiration to prove the Church from the Bible and the Bible from the 
            Church. This is a gross mischaracterization."
          </p>
        </div>

        <p className="text-gray-300 mb-4">
          This is not circular. We do not start with an infallible Church and derive an inspired Bible, nor do we start 
          with an inspired Bible to prove the Church. Rather, both are affirmed through a chain of rational credibility 
          leading to supernatural revelation.
        </p>

        <h3 className="text-white mt-8 mb-4">The Role of Sacred Tradition</h3>

        <p className="text-gray-300 mb-4">
          Sacred Tradition is not an inspired text in the same sense as Scripture. It is the <strong className="text-white">
          living transmission</strong> of divine revelation entrusted by Christ to the apostles and their successors. It 
          is authoritative and divine in origin but not reducible to written words.
        </p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
          <p className="text-gray-300 italic mb-3">
            "Sacred Tradition and Sacred Scripture form one sacred deposit of the word of God, committed to the Church."
          </p>
          <p className="text-gray-500">— <em>Dei Verbum</em> §9</p>
        </div>

        <p className="text-gray-300 mb-4">
          Tradition makes known what has been revealed, including the fact of inspiration for the canon. It does not 
          replace revelation; it transmits it faithfully.
        </p>

        <h3 className="text-white mt-8 mb-4">Magisterial Authority</h3>

        <p className="text-gray-300">
          The Magisterium—the Church's teaching office—authentically interprets and proposes what has been revealed. 
          This includes dogmas, moral teachings, and the canon of Scripture. The Church does not create inspiration; it 
          discerns and declares what God has revealed.
        </p>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Conclusion: A Call to Intellectual Honesty and Faith</h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Every Protestant must confront this dilemma:
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Either abandon <em>Sola Scriptura</em>, or</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">Admit there is no consistent basis to believe the Bible is inspired.</span>
              </li>
            </ul>
          </div>

          <p className="text-lg">
            The only coherent path forward is the Catholic one. The canon of Scripture, like all dogmas of faith, must 
            be received through divine revelation—preserved in sacred tradition and taught by the Church.
          </p>
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
          <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">The Path Forward</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Having established that <em>Sola Scriptura</em> is impossible in principle, we can now explore the positive 
              case for the Catholic model of Scripture, Tradition, and Magisterium working together.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The next topics will examine how the Church discerned the canon, why we have 73 books instead of 66, and 
              the role of the Magisterium in preserving and interpreting divine revelation.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
