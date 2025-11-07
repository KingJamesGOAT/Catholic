import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  BookX,
  Users,
  Scale,
  AlertTriangle,
  Calendar,
  Puzzle,
  Ban,
  Target,
  Shuffle,
} from "lucide-react";

export default function WhyNotSolaScriptura() {
  const nineArguments = [
    {
      number: 9,
      icon: Calendar,
      title: "Not Taught or Practiced in the Early Church",
      color: "red",
    },
    {
      number: 8,
      icon: Shuffle,
      title: "Results in Doctrinal Fragmentation",
      color: "orange",
    },
    {
      number: 7,
      icon: Users,
      title: "Makes Every Believer the Final Authority",
      color: "yellow",
    },
    {
      number: 6,
      icon: BookX,
      title: "The Bible Does Not Teach Sola Scriptura",
      color: "green",
    },
    {
      number: 5,
      icon: AlertTriangle,
      title: "The Canon Problem",
      color: "blue",
    },
    {
      number: 4,
      icon: Target,
      title: "No Historical Moment for Its Inception",
      color: "indigo",
    },
    {
      number: 3,
      icon: Puzzle,
      title: "An Incomplete and Imperfect System",
      color: "purple",
    },
    {
      number: 2,
      icon: Ban,
      title: "Scripture Contradicts Sola Scriptura",
      color: "pink",
    },
    {
      number: 1,
      icon: Scale,
      title: "Arbitrary and Theologically Groundless",
      color: "red",
    },
  ];

  return (
    <TopicLayout
      title="Against Sola Scriptura"
      subtitle="Nine Fatal Flaws in the 'Scripture Alone' Doctrine"
      quote={{
        text: "How can I understand, unless someone guides me?",
        source: "Acts 8:31",
      }}
    >
      {/* Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nHzFP9sSAI0"
            title="Against Sola Scriptura"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction</h2>

        <p>
          <strong className="text-white">Sola Scriptura</strong>{" "}
          is the Protestant doctrine asserting that Scripture
          alone is the only infallible rule of faith and
          practice. It claims that while other sources like
          Church councils, creeds, and traditions might be
          useful, they are ultimately fallible and must be
          judged by Scripture alone.
        </p>

        <p>As Protestant scholar Gavin Ortland summarized:</p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic">
            "Sola Scriptura means that Scripture is the church's
            only infallible rule. It doesn't mean that Scripture
            is the only authority. Creeds, catechisms,
            confessions, and councils function authoritatively,
            but according to Sola Scriptura, they are fallible,
            meaning capable of error and thus reformable in
            light of Scripture."
          </p>
        </div>

        <p>
          This doctrine has become the cornerstone of many
          Protestant denominations, yet it lacks both historical
          and biblical foundation. It proposes a model of divine
          guidance restricted to a closed set of texts without a
          clearly instituted interpretive authority. As this
          article will argue, such a model is deeply flawed on
          theological, historical, and philosophical grounds.
        </p>

        <p>
          We will examine{" "}
          <strong className="text-white">
            nine core arguments against Sola Scriptura
          </strong>
          . These are not simply reiterations of common
          apologetic points but are built on close examination
          of Scripture, Church history, doctrinal development,
          and internal contradictions within the Protestant
          model.
        </p>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h4 className="text-white mb-4">
            Key Questions That Will Be Addressed:
          </h4>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Was Sola Scriptura taught by the early Church?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Does Scripture itself teach Sola Scriptura?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                How can the Bible be the only infallible
                authority if the Bible doesn't define itself?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Why did the Protestant Reformers reject the
                authority that gave them the canon of Scripture?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                What are the consequences of every Christian
                being their own doctrinal judge?
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Nine Arguments Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8 text-center">
          The Nine Arguments
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {nineArguments.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center">
                  <span className="text-purple-300 text-sm font-mono">
                    #{arg.number}
                  </span>
                </div>
                <arg.icon className="text-gray-400" size={20} />
              </div>
              <h4 className="text-white text-sm leading-tight">
                {arg.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 9 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-900/30 border border-red-800 flex items-center justify-center">
            <Calendar className="text-red-400" size={24} />
          </div>
          <h2 className="text-white">
            9. Sola Scriptura Was Not Taught or Practiced in the
            Early Church
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            If Scripture alone were the infallible guide for the
            Church, we would expect the earliest Christians—
            including the Apostles and their successors—to have
            taught and practiced this model. However, the
            historical record shows no such development.
            Instead, the early Church clearly operated with a
            model that combined Scripture, oral tradition, and
            authoritative Church teaching.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "When we look at history, that's simply not what
              we find. Instead, the early Church consistently
              appealed to oral tradition, apostolic succession,
              and authoritative Church councils alongside
              Scripture."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Evidence from Early Church Practice:
          </h3>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  Clement of Rome
                </strong>{" "}
                speaks of the "canon of our tradition," which
                some Protestants misinterpret as referring to
                Scripture. In reality, the Greek word "canon"
                simply means "rule," and Clement's usage points
                to a broader rule of faith, not a closed
                biblical canon.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                The New Testament itself had not yet been
                compiled or universally recognized in Clement's
                time. Therefore, appealing to a fixed canon was
                impossible for him.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                The early Church fathers did not reduce
                authority to Scripture alone.{" "}
                <strong className="text-white">
                  Ignatius of Antioch
                </strong>
                ,{" "}
                <strong className="text-white">Irenaeus</strong>
                , and others emphasized apostolic authority and
                tradition.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">Summary Points:</h4>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  There is no evidence that the early Church
                  operated under a Sola Scriptura model.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  No statement from early Christian sources
                  claims that Scripture alone is the sole
                  infallible authority.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Church councils and the episcopacy were
                  already functioning as interpretive and
                  doctrinal authorities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Even the definition of which books belonged in
                  Scripture (the canon) was decided by Church
                  authority centuries later.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              "The absence of explicit and widespread early
              support for Sola Scriptura is actually pretty
              telling. In other words, Sola Scriptura is missing
              precisely where we'd most expect to find it—at the
              very foundations of Christianity itself."
            </p>
          </div>

          <p className="mt-6">
            The implication is critical: a doctrine that claims
            to be essential cannot be retroactively inserted
            into history. The early Church's reliance on
            apostolic tradition and ecclesial teaching
            authorities strongly undermines any claim that
            Scripture was ever meant to stand alone.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 8 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-900/30 border border-orange-800 flex items-center justify-center">
            <Shuffle className="text-orange-400" size={24} />
          </div>
          <h2 className="text-white">
            8. Sola Scriptura Results in Doctrinal Fragmentation
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            If Sola Scriptura were truly God's plan for His
            Church, we would expect it to result in clarity,
            unity, and a consistent transmission of essential
            doctrine. However, the actual fruits of Sola
            Scriptura are radically different. The doctrine has
            led to widespread and persistent fragmentation
            across the Christian world, particularly within
            Protestantism.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If Scripture alone was meant by God as the sole
              infallible rule of faith for the Church, we'd
              expect it to unify believers around clear
              doctrines. But instead, it has reliably produced a
              staggering degree of doctrinal fragmentation."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Statistical Overview of Denominational Chaos:
          </h3>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  In{" "}
                  <strong className="text-white">2023</strong>,
                  there were{" "}
                  <strong className="text-white">47,300</strong>{" "}
                  Christian denominations or rites.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  By{" "}
                  <strong className="text-white">2025</strong>,
                  it is projected to rise to{" "}
                  <strong className="text-white">49,000</strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  By{" "}
                  <strong className="text-white">2050</strong>,
                  it may reach{" "}
                  <strong className="text-white">64,000</strong>
                  .
                </span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4 italic">
              "And of course, the vast majority of these
              denominations are Protestant or evangelical."
            </p>
          </div>

          <p className="mt-6">
            This fragmentation isn't over minor disagreements.
            Rather, it touches the heart of the Christian
            message:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">
              Examples of Doctrinal Conflicts:
            </h4>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Infant baptism
                  </strong>{" "}
                  vs.{" "}
                  <strong className="text-white">
                    believer's baptism
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Symbolic view
                  </strong>{" "}
                  vs.{" "}
                  <strong className="text-white">
                    Real Presence
                  </strong>{" "}
                  in the Eucharist
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Once saved, always saved
                  </strong>{" "}
                  vs.{" "}
                  <strong className="text-white">
                    possibility of falling from grace
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Justification by faith alone
                  </strong>{" "}
                  vs.{" "}
                  <strong className="text-white">
                    faith working through love
                  </strong>
                </span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              These are not peripheral topics. They involve
              salvation, the sacraments, and the very structure
              of Christian life and worship.
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Root Cause: The Structural Problem of Sola Scriptura
          </h3>

          <p>
            The fragmentation is not merely a result of sin or
            misunderstanding; it flows directly from the
            principle of Sola Scriptura itself:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "By placing the final interpretive authority in
              the hands of every believer or pastor, the
              doctrine essentially guarantees a steady
              multiplication of competing interpretations."
            </p>
          </div>

          <p>
            Without a central authority to resolve disputes:
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Every disagreement becomes a potential schism.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                New movements constantly arise, claiming to be
                more faithful to "the Bible alone."
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                There is no final word on doctrine, only endless
                interpretation.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Each doctrinal dispute inevitably results in new
              denominational splits. This pattern of
              fragmentation isn't simply due to human
              imperfection—it's precisely what we would predict
              given Sola Scriptura's fundamental premise."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Theological and Missional Consequences:
          </h3>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  Doctrinal confusion:
                </strong>{" "}
                The average believer is left uncertain about
                what is true.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  Pastoral instability:
                </strong>{" "}
                Pastors may feel free to revise doctrine
                according to personal interpretation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  Evangelistic scandal:
                </strong>{" "}
                The divided witness of Christianity undermines
                the Gospel message. Jesus prayed, "that they may
                be one... so that the world may believe" (John
                17:21).
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If God's intention were really Sola Scriptura,
              why would the fruit of that intention be a
              landscape of perpetual doctrinal chaos and
              uncertainty—the very opposite of the unity Christ
              prayed for?"
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 7 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-yellow-900/30 border border-yellow-800 flex items-center justify-center">
            <Users className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-white">
            7. It Makes Every Believer the Final Authority
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            One of the most problematic implications of Sola
            Scriptura is that it renders every believer the
            final arbiter of divine truth. If the Bible is the
            only infallible authority, and there is no
            infallible interpreter, then each person is left to
            judge Scripture for themselves.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If the Bible alone is your only infallible guide,
              the responsibility falls squarely on you, a
              limited fallible human, to get doctrine right. You
              can't appeal to an infallible church or an
              authoritative tradition."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            The Individual Becomes the Doctrinal Court of Last
            Resort
          </h3>

          <p>Under Sola Scriptura:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>
                Each believer must determine essential doctrines
                like baptism, Eucharist, salvation,
                predestination, etc.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>
                One must{" "}
                <strong className="text-white">
                  privately judge
                </strong>{" "}
                between conflicting theologians or pastors—none
                of whom are infallible.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">•</span>
              <span>
                There is no living, visible Church authority to
                settle disagreements with finality.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Ultimately, everything from baptism to salvation
              to the Eucharist depends entirely on your personal
              judgment. And that is daunting."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            The Role of Protestant Scholars
          </h3>

          <p>
            Some Protestants attempt to mitigate this problem by
            deferring to expert theologians or biblical
            scholars. However, this response fails for two
            reasons:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">1.</span>
                <div>
                  <strong className="text-white">
                    Scholars are fallible:
                  </strong>
                  <span className="text-gray-400">
                    {" "}
                    They are "susceptible to errors and biases,"
                    just like lay believers.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">2.</span>
                <div>
                  <strong className="text-white">
                    They profoundly disagree:
                  </strong>
                  <span className="text-gray-400">
                    {" "}
                    Even renowned figures like Luther and Calvin
                    disagreed over fundamental doctrines such as
                    the nature of the Eucharist.
                  </span>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "You're forced back into deciding who's correct…
              based on your own fallible judgment."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Catholic Contrast: One Foundational Judgment
          </h3>

          <p>
            Catholics also exercise private judgment—but once. A
            Catholic makes a single foundational decision: to
            trust the Church established by Christ. After that,
            doctrinal and moral questions are answered with
            consistency.
          </p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
            <p className="text-gray-300 mb-3 italic">
              "Catholics make one foundational judgment. Okay,
              they identify Christ's true Church. It's like
              carefully choosing a reliable GPS only once. After
              that, difficult doctrinal questions are
              authoritatively clarified."
            </p>
            <p className="text-gray-300 italic">
              "Protestants… face ongoing judgment. Every
              doctrinal dispute remains open, requiring
              perpetual reevaluation."
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 6 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-900/30 border border-green-800 flex items-center justify-center">
            <BookX className="text-green-400" size={24} />
          </div>
          <h2 className="text-white">
            6. The Bible Does Not Teach Sola Scriptura
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Perhaps the most foundational challenge to Sola
            Scriptura is this: the doctrine is not taught
            anywhere in the Bible. If Scripture alone is to be
            our sole infallible authority, the Bible should say
            so—clearly and unambiguously. Yet no such passage
            exists.
          </p>

          <h3 className="text-white mt-8 mb-4">
            A Misused Prooftext: 2 Timothy 3:16–17
          </h3>

          <p>
            This is the most commonly cited passage to defend
            Sola Scriptura:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "All Scripture is breathed out by God and
              profitable for teaching, for reproof, for
              correction, and for training in righteousness,
              that the man of God may be complete, equipped for
              every good work."
            </p>
            <p className="text-gray-500">— 2 Timothy 3:16–17</p>
          </div>

          <p>
            At first glance, this might seem to affirm the
            sufficiency of Scripture. But a closer reading
            reveals otherwise.
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">
              Key Observations:
            </h4>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Paul does not say Scripture{" "}
                  <strong className="text-white">alone</strong>{" "}
                  is sufficient.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  He instructs Timothy, two chapters earlier, to
                  "follow the pattern of sound words you have
                  heard from me" and to "guard the good deposit
                  entrusted to you" (2 Tim 1:13–14), referring
                  to oral tradition.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  The Scriptures Timothy knew were the{" "}
                  <strong className="text-white">
                    Old Testament
                  </strong>
                  , including the{" "}
                  <strong className="text-white">
                    Deuterocanonical books
                  </strong>
                  , which Protestants later rejected.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If Paul genuinely meant that Scripture alone is
              our only infallible authority, he would not have
              emphasized oral teaching or entrusted Timothy with
              an apostolic deposit to guard."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Scripture Affirms Oral Tradition and Living
            Authority
          </h3>

          <p>
            Numerous biblical passages uphold the value and
            authority of oral tradition:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <ul className="space-y-4">
              <li>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">
                    2 Thessalonians 2:15
                  </strong>{" "}
                  – "Stand firm and hold to the traditions that
                  you were taught by us, either by our spoken
                  word or by our letter."
                </p>
              </li>
              <li>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">
                    2 Timothy 2:2
                  </strong>{" "}
                  – "What you have heard from me… entrust to
                  faithful men who will be able to teach others
                  also."
                </p>
              </li>
              <li>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">
                    1 Corinthians 11:2
                  </strong>{" "}
                  – "Maintain the traditions… delivered to you."
                </p>
              </li>
              <li>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">
                    Acts 15
                  </strong>{" "}
                  – The Jerusalem Council settles the
                  circumcision debate with authority—not by
                  appealing to Scripture alone, but through
                  apostolic decision-making.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "When you let Scripture speak for itself, it
              consistently leads beyond the idea of Scripture
              alone."
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 5 - Canon Problem (condensed due to length) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center">
            <AlertTriangle
              className="text-blue-400"
              size={24}
            />
          </div>
          <h2 className="text-white">5. The Canon Problem</h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Sola Scriptura claims that Scripture is the only
            infallible authority for Christians. But that leads
            to a foundational dilemma:{" "}
            <strong className="text-white">
              how do you know what belongs in Scripture in the
              first place?
            </strong>
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If Sola Scriptura is true, then Protestants
              should have a reliable and principled method for
              identifying which books are Scripture—without
              appealing to any outside infallible authority."
            </p>
          </div>

          <p>
            Yet every attempt to define the canon{" "}
            <strong className="text-white">
              without an infallible Church
            </strong>
            results in contradiction and circular reasoning.
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">
              Protestant Attempts (All Fail):
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">A.</span>
                <div>
                  <strong className="text-white">
                    Apostolic Authorship
                  </strong>
                  <p className="text-gray-400">
                    Problem: Inconsistently applied. First
                    Clement was apostolic but excluded; Hebrews
                    is included but anonymous.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">B.</span>
                <div>
                  <strong className="text-white">
                    Internal Marks of Inspiration
                  </strong>
                  <p className="text-gray-400">
                    Problem: Early Christians debated for
                    centuries over which books were inspired (2
                    Peter, Revelation, etc.).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">C.</span>
                <div>
                  <strong className="text-white">
                    Witness of the Holy Spirit
                  </strong>
                  <p className="text-gray-400">
                    Problem: Different Protestant groups have
                    different canons. History flatly denies
                    unanimous Spirit confirmation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">D.</span>
                <div>
                  <strong className="text-white">
                    Church Councils?
                  </strong>
                  <p className="text-gray-400">
                    Problem: If you trust the Church to define
                    the NT canon, why reject its definition of
                    the OT canon (with Deuterocanonicals)?
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              The Catholic Solution:
            </h4>
            <p className="text-gray-300 mb-3">
              Christ established a Church with divine authority.
              That Church, guided by the Holy Spirit, discerned
              the canon over time through councils (Rome AD 382,
              Hippo 393, Carthage 397, Trent 1546).
            </p>
            <p className="text-gray-300 italic">
              "Once you identify that Church, the canon question
              is easy. It comes with the package."
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 4 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-900/30 border border-indigo-800 flex items-center justify-center">
            <Target className="text-indigo-400" size={24} />
          </div>
          <h2 className="text-white">
            4. No Historical Moment for Its Inception
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            This argument builds on the previous historical
            critiques by posing a devastating question:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-white text-lg">
              When did Sola Scriptura become true?
            </p>
          </div>

          <p>
            If the early Church didn't teach it, if the canon
            wasn't established yet, and if Christ did not
            command it—
            <strong className="text-white">
              then at what point did this doctrine become
              binding on Christians?
            </strong>
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Sola Scriptura wasn't practiced in the early
              Church… There was a point during the life of the
              Church that the New Testament hadn't even been
              written yet."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            This Raises a Major Historical Problem
          </h3>

          <p>
            Doctrinal truths—especially core ones—don't just
            "fade in." They are{" "}
            <strong className="text-white">taught</strong>,{" "}
            <strong className="text-white">instituted</strong>,
            or <strong className="text-white">revealed</strong>.
            Yet Sola Scriptura lacks:
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>A divine institution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>A historical origin</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>
                A transitional moment of doctrinal change
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "A fundamental shift in authority like this can't
              just gradually occur. It's not the kind of thing
              that just fades in like a sunrise."
            </p>
          </div>

          <p>
            If the Church once had authoritative teachers and
            apostolic tradition, when did that stop? At what
            point did the Church supposedly lose its magisterial
            authority and become subject to private
            interpretation?
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Either the Church had a living authoritative
              teaching office or it didn't. Either Christians
              were bound to follow that authority or they
              weren't."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Suggested Protestant Options—And Why They Fail
          </h3>

          <p>
            Let's consider when Protestants might say Sola
            Scriptura started:
          </p>

          {/* Option A */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              A. After the Last Apostolic Writing (Revelation)
            </h4>

            <p className="mb-3">But this fails because:</p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  There's{" "}
                  <strong className="text-white">
                    no evidence
                  </strong>{" "}
                  the Apostles taught Scripture would be the
                  only authority.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  The Apostles continued teaching orally after
                  writing Scripture.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Oral tradition{" "}
                  <strong className="text-white">
                    continued alongside Scripture
                  </strong>{" "}
                  for generations.
                </span>
              </li>
            </ul>

            <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic text-sm">
                "Did the Apostles wake up the next morning and
                say, 'Well, I guess oral tradition and Church
                authority no longer matter'? Of course not."
              </p>
            </div>
          </div>

          {/* Option B */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              B. When the Canon Was Finalized
            </h4>

            <p className="mb-3">
              Again, this makes no sense. The canon wasn't
              formally settled for centuries, and:
            </p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>The Church still claimed authority.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Tradition and councils remained central.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  There's{" "}
                  <strong className="text-white">
                    no doctrinal decree
                  </strong>{" "}
                  saying, "From now on, only Scripture is
                  infallible."
                </span>
              </li>
            </ul>
          </div>

          {/* Option C */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              C. At the Reformation?
            </h4>

            <p className="mb-3">
              Even worse. If Sola Scriptura began with Luther:
            </p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Then it would be a{" "}
                  <strong className="text-white">
                    novel doctrine
                  </strong>{" "}
                  invented 1,500 years after Christ.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  It would contradict its own premise of being
                  rooted in the Bible.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Protestants themselves claim Sola Scriptura
                  existed long before Luther.
                </span>
              </li>
            </ul>

            <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic text-sm">
                "If Sola Scriptura was true, it must have been
                true far longer. The fact is, there is no
                historical moment where Sola Scriptura is
                clearly taking effect—and that should make us
                very suspicious."
              </p>
            </div>
          </div>

          <h3 className="text-white mt-8 mb-4">
            The False Analogy: Beards and Doctrine
          </h3>

          <p>
            Some Protestants claim, "Just because we don't know
            when it started doesn't mean it's not true. Like a
            beard—you don't know the moment stubble becomes a
            beard."
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <p className="text-gray-300 mb-4 italic">
              "This sounds reasonable until you realize that
              doctrinal principles don't work like beards."
            </p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  A beard is{" "}
                  <strong className="text-white">
                    gradual
                  </strong>
                  ,{" "}
                  <strong className="text-white">vague</strong>,
                  and{" "}
                  <strong className="text-white">
                    subjective
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Authority is{" "}
                  <strong className="text-white">binary</strong>
                  : either it exists or it doesn't.
                </span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4 italic">
              "You can't just fade out of being an authority.
              You either are in authority or you're not."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Conclusion: Sola Scriptura Has No Origin
          </h3>

          <p>If there is:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>No origin in Scripture,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>No moment in history,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">•</span>
              <span>No theological reason for its rise,</span>
            </li>
          </ul>

          <p>
            Then we must conclude that it never was part of the
            Christian deposit of faith.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "The fact that no one can say when Sola Scriptura
              became true suggests it was never true to begin
              with."
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 3 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-800 flex items-center justify-center">
            <Puzzle className="text-purple-400" size={24} />
          </div>
          <h2 className="text-white">
            3. It Is an Incomplete and Imperfect System
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Even if we were to assume that Scripture is perfect
            and divinely inspired,{" "}
            <strong className="text-white">
              Sola Scriptura is still an imperfect system
            </strong>
            —because it is incomplete. Scripture alone, though
            sufficient in content, cannot operate in a vacuum.
            It requires interpretation, and interpretation
            requires authority.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Think of Scripture like the engine of a perfect
              car. It might be flawless—powerful, precisely
              engineered. But what happens if you have that
              perfect engine sitting in your driveway without
              wheels or a steering wheel? It's not going
              anywhere."
            </p>
          </div>

          <p>
            Scripture is an engine without wheels. Without a
            living interpretive authority and a stable
            tradition, Scripture cannot function as God intended
            it to.
          </p>

          <h3 className="text-white mt-8 mb-4">
            Why a Perfect Text Isn't Enough
          </h3>

          <p>A divinely inspired text:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Still needs a human interpreter.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                Can be misunderstood, twisted, or taken out of
                context.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                Cannot enforce its own meaning or resolve
                disagreements.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "A text, no matter how perfect, doesn't interpret
              itself. It requires readers, and readers
              inevitably bring misunderstandings, biases, and
              disagreements."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            The Protestant Fear of Human Error
          </h3>

          <p>
            Many Protestants reject the Church's Magisterium or
            Tradition out of fear that these human institutions
            introduce error. But that fear leads to a worse
            result:{" "}
            <strong className="text-white">
              chaos and theological relativism
            </strong>
            . In trying to avoid human authority, Sola Scriptura
            leaves each believer with no authority but
            themselves.
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Instead of one trusted interpreter, Protestants
                now face tens of thousands.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Instead of resolving disputes, disagreements
                multiply.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "That's precisely why Protestantism splintered
              into thousands of denominations, as we've already
              shown."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            STM: A Principled System of Authority
          </h3>

          <p>
            The Catholic model—
            <strong className="text-white">
              Scripture, Tradition, and the Magisterium (STM)
            </strong>
            — is not only historically and theologically
            grounded but is{" "}
            <strong className="text-white">
              structurally superior
            </strong>
            .
          </p>

          <p className="mb-4">Let's break it down:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="border border-gray-800 p-4 text-left text-white">
                    Element
                  </th>
                  <th className="border border-gray-800 p-4 text-left text-white">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-800 p-4 text-white font-medium">
                    Scripture
                  </td>
                  <td className="border border-gray-800 p-4 text-gray-300">
                    The inspired, inerrant Word of God
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-white font-medium">
                    Tradition
                  </td>
                  <td className="border border-gray-800 p-4 text-gray-300">
                    The lived and preserved teaching of the
                    Apostles
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 text-white font-medium">
                    Magisterium
                  </td>
                  <td className="border border-gray-800 p-4 text-gray-300">
                    The Church's teaching authority, guided by
                    the Holy Spirit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            This system is{" "}
            <strong className="text-white">
              self-consistent, coherent, and incapable of
              improvement
            </strong>
            .
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Together, these three form a system that's
              self-sufficient, coherent, and incapable of
              improvement— precisely what we expect a perfect
              God to institute for his Church."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            The Theological Analogy: The Trinity
          </h3>

          <p>
            Some scholars, like Richard Swinburne, argue that
            the Trinity is the{" "}
            <strong className="text-white">
              minimal perfect structure
            </strong>{" "}
            necessary to express divine love. One person cannot
            love; two can only love each other. Three persons
            make communal love possible.
          </p>

          <p>Likewise:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                STM is the minimal perfect structure for
                doctrinal authority.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                Remove one part (e.g., Tradition or the
                Magisterium), and the system collapses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                Add something else, and it becomes redundant.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "STM works exactly the same way. Take away
              Scripture, Tradition, or the Magisterium and you
              lose something vital. Add something else and
              you're just piling on redundancies."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Scripture Itself Supports STM, Not Sola Scriptura
          </h3>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                <strong className="text-white">
                  1 Timothy 3:15
                </strong>
                : "The Church of the living God, the pillar and
                foundation of truth"—not Scripture alone.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                In{" "}
                <strong className="text-white">
                  John 16:13
                </strong>
                , Jesus promises the Spirit will guide the
                Apostles into all truth.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                In both{" "}
                <strong className="text-white">
                  Old and New Testaments
                </strong>
                , God uses living human authority—prophets,
                priests, apostles—to shepherd His people.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Even in the Old Testament, God never left his
              people with Scripture alone. He always guided them
              through living authorities."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Objection: "God Permitted Imperfection in the Old
            Covenant—Why Not Now?"
          </h3>

          <p>
            Some might argue: if God allowed imperfect authority
            in the Old Testament, He could do the same in the
            New.
          </p>

          <p>
            But this misunderstands the nature of the
            Incarnation and the New Covenant:
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                God also permitted{" "}
                <strong className="text-white">polygamy</strong>
                ,{" "}
                <strong className="text-white">slavery</strong>,
                and{" "}
                <strong className="text-white">idolatry</strong>{" "}
                in the Old Testament. But Christ came not to
                preserve imperfection but to{" "}
                <strong className="text-white">
                  fulfill and perfect
                </strong>
                .
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Jesus didn't just hand out Bibles. He built a
              Church. He appointed living authorities and
              promised the Holy Spirit would guide them into all
              truth."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Final Analysis
          </h3>

          <p>Sola Scriptura is not only:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Theologically weak</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Historically unfounded</span>
            </li>
          </ul>

          <p>
            It is also structurally{" "}
            <strong className="text-white">imperfect</strong>{" "}
            and{" "}
            <strong className="text-white">incapable</strong> of
            fulfilling what it claims.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Sola Scriptura isn't just imperfect. It's
              incomplete by design—which is exactly the kind of
              system a perfect God wouldn't give us."
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 2 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-pink-900/30 border border-pink-800 flex items-center justify-center">
            <Ban className="text-pink-400" size={24} />
          </div>
          <h2 className="text-white">
            2. Scripture Contradicts Sola Scriptura
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            If Sola Scriptura were truly biblical, we would
            expect the Bible to say so. But not only is that not
            the case—the Bible actually{" "}
            <strong className="text-white">
              teaches the opposite
            </strong>
            . It affirms oral tradition, apostolic authority,
            and a visible Church with teaching power.
          </p>

          <p>Let's walk through the evidence.</p>

          <h3 className="text-white mt-8 mb-4">
            A. Scripture Commands Believers to Hold Fast to
            Tradition
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "So then, brothers, stand firm and hold to the
              traditions that you were taught by us, either by
              our spoken word or by our letter."
            </p>
            <p className="text-gray-500">
              — 2 Thessalonians 2:15
            </p>
          </div>

          <ul className="space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>
                The verse explicitly affirms{" "}
                <strong className="text-white">both</strong>{" "}
                oral and written teaching.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>
                There is no hierarchy implied—Paul commands
                adherence to both equally.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>
                The early Church received the Gospel as a{" "}
                <strong className="text-white">
                  living tradition
                </strong>
                , not just a written text.
              </span>
            </li>
          </ul>

          <h3 className="text-white mt-8 mb-4">
            B. Apostolic Teaching Was Transmitted Orally
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "What you have heard from me in the presence of
              many witnesses entrust to faithful men who will be
              able to teach others also."
            </p>
            <p className="text-gray-500">— 2 Timothy 2:2</p>
          </div>

          <p>
            This passage reveals a clear pattern of oral
            transmission:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <ol className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">1.</span>
                <span>Paul teaches Timothy orally.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">2.</span>
                <span>
                  Timothy is to teach others the same orally.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">3.</span>
                <span>They will teach others in turn.</span>
              </li>
            </ol>
          </div>

          <p>
            This multi-generational teaching model is entirely{" "}
            <strong className="text-white">
              non-scriptural
            </strong>
            in form, yet completely{" "}
            <strong className="text-white">apostolic</strong> in
            content.
          </p>

          <h3 className="text-white mt-8 mb-4">
            C. Apostolic Authority Is Binding
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "He who hears you hears me."
            </p>
            <p className="text-gray-500">— Luke 10:16</p>
          </div>

          <p>
            Jesus does not say, "He who reads Scripture hears
            me." He ties His own voice to that of the Apostles,
            whose authority is personal and oral.
          </p>

          <p>Similarly:</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "When you received the word of God, which you
              heard from us, you accepted it not as the word of
              men, but as what it really is—the word of God."
            </p>
            <p className="text-gray-500">
              — 1 Thessalonians 2:13
            </p>
          </div>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>
                The Thessalonians received the{" "}
                <strong className="text-white">
                  word of God orally
                </strong>
                , and it was considered equally authoritative.
              </span>
            </li>
          </ul>

          <h3 className="text-white mt-8 mb-4">
            D. The Church Is the Pillar of Truth—Not the Bible
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "The Church of the living God, the pillar and
              foundation of truth."
            </p>
            <p className="text-gray-500">— 1 Timothy 3:15</p>
          </div>

          <p>
            Nowhere in the Bible is Scripture referred to as
            "the foundation of truth." That role is given to the
            <strong className="text-white"> Church</strong>,
            which interprets and transmits the Word with
            authority.
          </p>

          <h3 className="text-white mt-8 mb-4">
            E. The Jerusalem Council: An Authoritative,
            Extra-Scriptural Decision
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 mb-3">
              <strong className="text-white">Acts 15:</strong>{" "}
              The apostles and elders come together to settle
              the circumcision debate. They do not say "let's go
              search the Scriptures"—they deliberate, pray, and
              proclaim a decision.
            </p>
            <p className="text-gray-300 italic">
              "They delivered to them for observance the
              decisions that had been reached by the apostles
              and elders who were in Jerusalem."
            </p>
            <p className="text-gray-500 mt-2">— Acts 16:4</p>
          </div>

          <p>
            This is the clearest picture in the Bible of a{" "}
            <strong className="text-white">
              magisterial council
            </strong>
            issuing binding doctrinal rulings—centuries before
            any complete New Testament existed.
          </p>

          <h3 className="text-white mt-8 mb-4">
            F. Interpretation Requires a Guide
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "How can I [understand] unless someone guides me?"
            </p>
            <p className="text-gray-500">
              — Acts 8:31 (Ethiopian eunuch)
            </p>
          </div>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>Scripture cannot interpret itself.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>
                Even inspired texts need inspired interpreters.
              </span>
            </li>
          </ul>

          <p>As Peter himself writes:</p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "[Paul's letters] contain some things that are
              hard to understand, which the ignorant and
              unstable twist to their own destruction."
            </p>
            <p className="text-gray-500">— 2 Peter 3:16</p>
          </div>

          <p>
            This directly contradicts the idea that every
            believer, guided by the Spirit, will come to the
            same interpretation.
          </p>

          <h3 className="text-white mt-8 mb-4">
            G. Scripture Acknowledges Its Own Incompleteness
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "There are many other things that Jesus did; if
              every one of them were written down… the world
              itself could not contain the books."
            </p>
            <p className="text-gray-500">— John 21:25</p>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "Though I have much to write to you, I would
              rather not use paper and ink. Instead, I hope to
              come to you and talk face to face."
            </p>
            <p className="text-gray-500">— 2 John 12</p>
          </div>

          <p>
            The Apostles did not view writing as the only means
            of transmission. They preferred direct communication
            when possible—and saw oral teaching as both reliable
            and essential.
          </p>

          <h3 className="text-white mt-8 mb-4">
            Final Reflection
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "When you let Scripture speak for itself, it
              consistently leads beyond the idea of Scripture
              alone. It pushes us toward an authoritative
              tradition, safeguarded by a living magisterium,
              guided by the Holy Spirit, and entrusted to the
              Church."
            </p>
          </div>

          <p>
            Sola Scriptura is not just unsupported by
            Scripture—it is flatly contradicted by it.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Argument 1 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-900/30 border border-red-800 flex items-center justify-center">
            <Scale className="text-red-400" size={24} />
          </div>
          <h2 className="text-white">
            1. Sola Scriptura Is Arbitrary and Theologically
            Groundless
          </h2>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            All of the previous arguments point to doctrinal
            instability, historical rupture, biblical
            inconsistency, and theological inadequacy. But
            behind all of this lies a more fundamental issue:{" "}
            <strong className="text-white">
              Sola Scriptura is arbitrary.
            </strong>
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "It imposes an unexplained and unjustified limit
              on how God guides his people."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            What Do We Mean by "Arbitrary"?
          </h3>

          <p>To call something "arbitrary" is to say:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                It lacks a sufficient reason or justification.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                It imposes a boundary or rule without any
                internal logic.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                It cannot be grounded in God's nature or divine
                revelation.
              </span>
            </li>
          </ul>

          <p>Sola Scriptura claims that:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                God's{" "}
                <strong className="text-white">only</strong>{" "}
                infallible communication to mankind is contained
                in{" "}
                <strong className="text-white">66 books</strong>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Anything outside of these books—Sacred
                Tradition, Church Councils, Magisterial
                Teaching—is not divinely protected from error.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-white text-lg">
              But the natural question is: Why?
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Analogy from Science and Theology
          </h3>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If a scientist claimed that gravity only applies
              in 10% of the universe, the immediate question
              would be why only 10%? Why not 11%? Why not 100%?"
            </p>
          </div>

          <p>Similarly, if Protestants say:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                "God speaks infallibly in Scripture—but not in
                Tradition,"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                or, "The Bible is divinely protected from
                error—but not the Church,"
              </span>
            </li>
          </ul>

          <p>
            …we must ask: what principle or reason justifies
            that restriction?
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If no good reason can be given, the claim starts
              to look arbitrary—a limit imposed without
              justification."
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Does God's Nature Require This Limitation?
          </h3>

          <p>
            <strong className="text-white">No.</strong>
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Nothing in God's nature necessitates that He
                communicate <em>only</em> in writing.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                God is{" "}
                <strong className="text-white">
                  relational
                </strong>
                ,{" "}
                <strong className="text-white">
                  incarnational
                </strong>
                , and has often spoken{" "}
                <strong className="text-white">orally</strong>,{" "}
                <strong className="text-white">
                  through prophets
                </strong>
                ,{" "}
                <strong className="text-white">
                  through the Church
                </strong>
                , and{" "}
                <strong className="text-white">
                  through the Spirit
                </strong>
                .
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Nothing about God's love… explains why he would
              only speak in 66 books but not 67."
            </p>
          </div>

          <p>
            If God can communicate clearly and infallibly in
            Scripture, He can do the same through other means.
            Limiting infallibility to a fixed written text
            appears{" "}
            <strong className="text-white">
              philosophically groundless
            </strong>
            .
          </p>

          <h3 className="text-white mt-8 mb-4">
            Is There a Theological Purpose for Limiting
            Revelation to Scripture Alone?
          </h3>

          <p>Still no.</p>

          <p>
            Let's explore possible Protestant justifications and
            why they fail:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              A. "To Ensure Clarity"
            </h4>

            <p className="text-gray-300 mb-2">But:</p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  As previously shown, Sola Scriptura has led to{" "}
                  <strong className="text-white">
                    massive fragmentation
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Doctrinal clarity is undermined, not enhanced,
                  when every person is their own authority.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              B. "To Promote Personal Responsibility and
              Engagement"
            </h4>

            <p className="text-gray-300 mb-2">But:</p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Engagement does not require fragmentation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Catholics engage deeply with Scripture, but
                  within a guided and safeguarded framework.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-3">
              C. "To Avoid Abuse by Human Authorities"
            </h4>

            <p className="text-gray-300 mb-2">But:</p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>
                  Scripture must still be interpreted, and{" "}
                  <strong className="text-white">
                    interpretation without accountability
                  </strong>{" "}
                  leads to even more abuse.
                </span>
              </li>
            </ul>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Contrast With Other Doctrinal "Limits"
          </h3>

          <p>
            Some theological limits do have strong internal
            logic.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "Richard Swinburne has argued that the doctrine of
              the Trinity… is explained by the nature of love. A
              single person can't love another. Two persons only
              love each other. But three allows for communal
              love to exist eternally."
            </p>
          </div>

          <p>
            This is a doctrinal limit with{" "}
            <strong className="text-white">
              rational and theological justification
            </strong>
            . But there is{" "}
            <strong className="text-white">
              no equivalent explanation
            </strong>{" "}
            for the sharp boundary Sola Scriptura creates.
          </p>

          <h3 className="text-white mt-8 mb-4">
            Scripture, History, and Tradition Suggest the
            Opposite
          </h3>

          <p>If you examine God's historical pattern:</p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                He has always revealed Himself{" "}
                <strong className="text-white">
                  through people
                </strong>
                ,{" "}
                <strong className="text-white">prophets</strong>
                , and{" "}
                <strong className="text-white">
                  living authorities
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                The early Church lived and taught{" "}
                <strong className="text-white">
                  before the New Testament existed
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>
                Jesus founded a{" "}
                <strong className="text-white">Church</strong>,
                not just a book.
              </span>
            </li>
          </ul>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If 66 books are compatible with God's loving
              nature, why not 73? Why not a combination of
              written and oral guidance—as we see in Scripture
              itself?"
            </p>
          </div>

          <h3 className="text-white mt-8 mb-4">
            Summary of the Argument
          </h3>

          <p>
            Sola Scriptura imposes a restriction on divine
            communication that cannot be explained by:
          </p>

          <ul className="space-y-2 pl-6 my-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>God's nature</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Christ's teaching</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>The Bible itself</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Church history</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>The pattern of salvation history</span>
            </li>
          </ul>

          <p>
            It is a{" "}
            <strong className="text-white">
              man-made doctrine
            </strong>
            , designed to limit divine authority to the written
            word, without any divine warrant.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "If the limit isn't found in God's nature… or in
              God's purposes… then it is merely arbitrary—a
              human construct."
            </p>
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
        <h2 className="text-white mb-6">Conclusion</h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Having examined the nine key arguments, the
            conclusion is inescapable:{" "}
            <strong className="text-white">
              Sola Scriptura is not the divinely instituted
              model for Christian authority
            </strong>
            . It fails every major test—biblical, historical,
            theological, and practical.
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-8 my-8">
            <h3 className="text-white mb-4">The Verdict:</h3>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Not taught by Christ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Not practiced by the Apostles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Not lived by the early Church</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>
                  Not sufficient to maintain unity, clarity, or
                  doctrinal integrity
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "The Bible never teaches that the Bible alone is
              sufficient. But it does point us to a Church
              guided by the Spirit, safeguarded by tradition,
              and governed by authority."
            </p>
          </div>

          <p className="text-lg">
            Sola Scriptura collapses under its own weight. The
            Catholic model, rooted in Scripture, Tradition, and
            the Magisterium, stands as the only coherent,
            complete, and Christ-founded framework for knowing
            the truth.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-white text-lg italic">
              "Christ did not give us a book to replace His
              voice. He gave us His Church—'the pillar and
              foundation of truth.'"
            </p>
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
        <h3 className="text-white mb-4">
          What We Find Instead
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Across Scripture, Tradition, and the life of the
          Church, we find a threefold structure that is
          biblically grounded, historically continuous,
          philosophically sound, and pastorally fruitful.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Having dismantled Sola Scriptura, we can now explore
          what the Catholic Church teaches about authority,
          tradition, and the Magisterium—and how this model
          better reflects God's plan for preserving truth.
        </p>
      </motion.div>
    </TopicLayout>
  );
}