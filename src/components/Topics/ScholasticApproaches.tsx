import TopicLayout from "../Journey/TopicLayout";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import {
  GraduationCap,
  BookOpen,
  Scale,
  AlertTriangle,
  Lightbulb,
  Brain,
  Award,
} from "lucide-react";

export default function ScholasticApproaches() {
  const modesOfCognition = [
    {
      icon: Brain,
      title: "Scientific Demonstration (episteme)",
      description:
        "Conclusions deduced from self-evident principles and entail necessary truth.",
      applicable: false,
    },
    {
      icon: Scale,
      title: "Probable Opinion (doxa)",
      description:
        "Judgments formed on the basis of fallible but persuasive reasoning.",
      applicable: false,
    },
    {
      icon: Award,
      title: "Faith (pistis)",
      description:
        "Assent given to a proposition based on the testimony of a credible authority.",
      applicable: true,
    },
  ];

  return (
    <TopicLayout
      title="Scholastic Approaches to Sola Scriptura"
      subtitle="The Ultimate Refutation of 'Scripture Alone'"
      quote={{
        text: "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.",
        source: "Pope John Paul II, Fides et Ratio",
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction</h2>

        <p>
          For over five centuries, adherents of Protestantism
          have advanced the thesis of <em>Sola Scriptura</em> —
          the assertion that Sacred Scripture alone constitutes
          the sole infallible norm of Christian faith and
          practice. While this claim purports to safeguard the
          primacy and sufficiency of the biblical witness and to
          guard against ecclesiastical error, it suffers from
          critical philosophical, theological, historical, and
          epistemological deficiencies.
        </p>

        <p>
          As this essay shall argue,{" "}
          <strong className="text-white">
            Sola Scriptura is not merely a problematic
            theological construct, but one that is, upon closer
            analysis, self-defeating and internally incoherent
          </strong>
          .
        </p>

        <p>
          This extended critique will demonstrate that the
          Protestant reliance on Scripture as the exclusive and
          self-authenticating source of divine revelation fails
          to account for the epistemic foundations necessary to
          justify belief in the very canon it seeks to uphold.
          Drawing from classical Catholic apologetics, patristic
          sources, the scholastic tradition, and contemporary
          philosophical analysis, we will explore how the
          Catholic understanding of the relationship between
          Scripture, Tradition, and the Magisterium offers a
          more coherent, stable, and historically rooted
          epistemology for the recognition and interpretation of
          divine revelation.
        </p>
      </div>

      {/* Videos */}
      <div className="space-y-6 mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EJhTnA0oAY4"
            title="Scholastic Approaches to Sola Scriptura"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Section I */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          I. The Conceptual Confusion of a "Fallible List of
          Infallible Books"
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Among the more prominent critiques of Protestantism
            is its reliance on{" "}
            <strong className="text-white">
              fallible ecclesial or individual discernment to
              identify an allegedly infallible canon of
              Scripture
            </strong>
            . At first glance, this appears to be a manageable
            paradox, but upon closer examination, it reveals a
            foundational epistemic contradiction.
          </p>

          <p>
            The Protestant claim essentially affirms that
            fallible human beings, lacking any infallible
            interpretive authority, can nonetheless arrive at a
            definitive and binding recognition of the scriptural
            canon. This move not only conflates subjective
            apprehension with objective certainty, but also
            elides the metaphysical distinction between the{" "}
            <em>actus credentis</em> (act of believing) and the{" "}
            <em>motiva credibilitatis</em>
            (motives of credibility).
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <p className="text-gray-300 mb-4">
              While some Catholic apologists have articulated
              this argument in simplistic or rhetorical terms,
              its more robust formulation—found in the writings
              of{" "}
              <strong className="text-white">Stapleton</strong>,
              <strong className="text-white"> Franzelin</strong>
              , <strong className="text-white">Schaben</strong>,
              and modern apologists such as{" "}
              <strong className="text-white">
                Gary Michuta
              </strong>
              —exposes the problem with far greater precision.
            </p>
          </div>

          <p>
            The equivocation arises from conflating the
            fallibility of the knower (the subject) with the
            fallibility of the known (the object). A fallible
            agent may indeed assent to an infallible
            proposition, but only if that proposition is made
            known via an infallible source.
          </p>

          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <AlertTriangle
                className="text-blue-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h4 className="text-white mb-3">
                  The Central Issue
                </h4>
                <p className="text-gray-300">
                  The central issue is not whether individuals
                  are fallible, but whether the identification
                  of the canon can, in principle, be known
                  without an act of divine revelation. Since
                  inspiration is by nature a supernatural
                  datum—a gratuitous intervention of God within
                  the human psyche—it cannot be apprehended
                  through empirical investigation or
                  philosophical reasoning alone. Its recognition
                  necessarily demands supernatural testimony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section II */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          II. The Inaccessibility of Inspiration to Natural
          Reason
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The Catholic theological tradition has consistently
            held that divine inspiration is an
            <strong className="text-white">
              {" "}
              intrinsically supernatural act
            </strong>
            , one that occurs within the psychological
            interiority of the sacred author and is known
            immediately only to God and to the inspired writer.
          </p>

          <p>As Cardinal Franzelin famously articulated:</p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "Inspiration is a supernatural psychological fact
              in the mind of a man which, like other internal
              facts immediately known to God, is known only to
              the inspired person. Therefore, inspiration cannot
              be made known to other men except through its
              external effects or by testimony worthy of faith."
            </p>
            <p className="text-gray-500">
              — Cardinal Franzelin
            </p>
          </div>

          <p>
            While certain external indicators—such as doctrinal
            orthodoxy, literary loftiness, or profound spiritual
            efficacy—may be characteristic of inspired texts,{" "}
            <strong className="text-white">
              they are not exclusive to them
            </strong>
            . Countless theological and patristic writings
            display these qualities without thereby qualifying
            as divinely inspired Scripture.
          </p>

          <p>
            Thus, inspiration cannot be inferred merely from
            observable attributes; its recognition must be
            grounded in a divinely sanctioned epistemological
            framework.
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <p className="text-gray-300">
              In essence, inspiration constitutes what the
              scholastic tradition terms a
              <strong className="text-white">
                {" "}
                supernaturale quoad substantiam
              </strong>
              : a truth that, due to its origin and nature, lies
              beyond the competence of natural reason to
              ascertain. Consequently, the identification of
              inspired texts requires the mediation of
              Revelation, either through an inspired biblical
              assertion or through the authoritative witness of
              Apostolic Tradition.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section III */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          III. The Protestant Dilemma: Where Is the Revelation
          of the Canon?
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            According to the principle of{" "}
            <em>Sola Scriptura</em>, all doctrines requisite for
            salvation must be found in Scripture either
            explicitly or implicitly by logical consequence.
            This is clearly articulated in the Westminster
            Confession of Faith:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic">
              "The whole counsel of God concerning all things
              necessary for His own glory, man's salvation,
              faith and life, is either expressly set down in
              Scripture, or by good and necessary consequence
              may be deduced from Scripture."
            </p>
            <p className="text-gray-500 mt-2">
              — Westminster Confession of Faith
            </p>
          </div>

          <p>
            However,{" "}
            <strong className="text-white">
              Scripture itself provides no divinely inspired
              table of contents
            </strong>
            . The identification of the Canon is not established
            by Scripture; rather, it is tacitly presupposed.
          </p>

          <p>
            Protestant attempts to reconstruct the Canon through
            internal criteria—such as apostolic authorship,
            conformity with orthodoxy, or spiritual
            efficacy—inevitably fail because these criteria are
            neither necessary nor sufficient for inspiration.
            Moreover, they rest on subjective interpretive
            judgments, which are susceptible to error and
            disagreement.
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6 my-6">
            <p className="text-gray-300">
              Even if a text demonstrates profound theological
              coherence and ecclesial utility, such features
              cannot constitute conclusive proof of its inspired
              status. Countless non-canonical works—from the
              <em> Shepherd of Hermas</em> to the epistles of
              St. Ignatius of Antioch—possess such qualities and
              were venerated in early Christianity, yet were
              ultimately excluded from the Canon.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section IV */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          IV. Protestant Canonical Methodologies Critically
          Evaluated
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Reformed theologians such as David Preuss have
            argued that Scripture testifies to its own
            inspiration, citing passages like 2 Timothy 3:16
            ("All Scripture is God-breathed"). Yet such appeals
            are deeply problematic.
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-6">
            <h4 className="text-white mb-4">
              Problems with Self-Testimony:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">1.</span>
                <span>
                  The verse offers no specific list of which
                  texts are included under the rubric of
                  "Scripture."
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">2.</span>
                <span>
                  More importantly, the claim is{" "}
                  <strong className="text-white">
                    circular
                  </strong>
                  : it uses Scripture to prove Scripture.
                </span>
              </li>
            </ul>
          </div>

          <p>
            Moreover, Protestant reliance on canonical titles
            (e.g., "The Gospel According to Matthew") or
            apostolic authorship as proofs of inspiration is
            historically and logically flawed. These titles are
            not part of the inspired text but later
            ecclesiastical attributions.
          </p>

          <p>
            Furthermore, the assumption that apostolic
            authorship entails inspiration fails to appreciate
            the distinction between the{" "}
            <em>charisma veritatis</em> (habitual infallibility)
            and <em>inspiratio divina</em> (transitory divine
            motion). Not every apostolic utterance is inspired
            Scripture, just as not every papal allocution is an{" "}
            <em>ex cathedra</em> definition.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section V */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          V. The Catholic Solution: Revelation Mediated through
          Sacred Tradition
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The Catholic Church offers a coherent alternative:{" "}
            <strong className="text-white">
              the Canon is known and affirmed through divine
              Revelation mediated by Sacred Tradition and
              preserved infallibly by the Church's Magisterium
            </strong>
            .
          </p>

          <p>
            The recognition of the Canon is not an act of human
            deduction, but an act of <em>fides divina</em> —
            faith in the authority of God who reveals, and in
            the ecclesial organ that transmits that revelation.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
            <p className="text-gray-300 italic mb-3">
              "I would not believe in the Gospel myself if the
              authority of the Catholic Church did not influence
              me to do so."
            </p>
            <p className="text-gray-500">
              — St. Augustine,{" "}
              <em>Contra Epistolam Manichaei</em>, 5,6
            </p>
          </div>

          <p>
            This principle reflects the Catholic understanding
            that Revelation is historically transmitted through
            the Apostolic deposit of faith. The Church, guided
            by the Holy Spirit, functions as the divinely
            instituted interpreter and guardian of this
            Revelation.
          </p>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <Lightbulb
                className="text-green-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h4 className="text-white mb-3">
                  The Catholic Epistemology
                </h4>
                <p className="text-gray-300">
                  The Magisterium, through ecumenical councils
                  and the ordinary and universal magisterial
                  teaching, articulates and safeguards the
                  Canon. Without such an authoritative
                  interpreter, one is left with no principled
                  means of determining which books belong to
                  Scripture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section VI */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          VI. Modes of Cognition: Demonstration, Probability,
          and Faith
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Philosophically, there are three principal modes of
            cognition through which a proposition may be known:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {modesOfCognition.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`bg-gradient-to-br ${
                  mode.applicable
                    ? "from-green-900/30 to-green-900/10 border-green-800"
                    : "from-gray-900/50 to-gray-900/30 border-gray-800"
                } border rounded-lg p-6`}
              >
                <div className="w-12 h-12 rounded-full bg-gray-900/50 flex items-center justify-center border border-gray-700 mb-4">
                  <mode.icon
                    className={
                      mode.applicable
                        ? "text-green-400"
                        : "text-gray-400"
                    }
                    size={24}
                  />
                </div>
                <h4 className="text-white mb-3">
                  {mode.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {mode.description}
                </p>
                {mode.applicable && (
                  <div className="text-green-400 text-sm font-medium">
                    ✓ Applicable to Canon Recognition
                  </div>
                )}
                {!mode.applicable && (
                  <div className="text-red-400 text-sm font-medium">
                    ✗ Not Applicable
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 my-8">
            <h4 className="text-white mb-4">
              Why Faith Is the Only Sufficient Mode
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  The fact of inspiration{" "}
                  <strong className="text-white">
                    cannot be known through scientific
                    demonstration
                  </strong>{" "}
                  because inspiration, as a supernatural
                  reality, is not derivable from first
                  principles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  Nor can it be known by{" "}
                  <strong className="text-white">
                    probable opinion
                  </strong>
                  , since the criteria used (e.g., literary
                  beauty, moral instruction, apostolic
                  proximity) are not exclusive to inspired
                  texts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  Therefore, the only sufficient epistemological
                  category by which the inspiration of Scripture
                  can be known is{" "}
                  <strong className="text-white">faith</strong>
                  —specifically, <em>divine faith</em> grounded
                  in God's own testimony as mediated through
                  Revelation.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
            <h4 className="text-white mb-3">
              The Protestant Trap
            </h4>
            <p className="text-gray-300">
              However, <em>Sola Scriptura</em> eliminates the
              very means by which this faith could be justified.
              By denying the binding authority of Tradition and
              the Church, Protestantism undermines its own
              access to the very Revelation it claims to uphold.
              Thus, it is epistemologically trapped: it cannot
              justify the Canon without resorting to either
              circularity or a fallible, probabilistic mode of
              assent.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Section VII */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">
          VII. Formal Logical Refutation
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The internal incoherence of <em>Sola Scriptura</em>{" "}
            may be formalized as follows:
          </p>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8 my-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1 font-mono">
                  1.
                </span>
                <span>
                  Whatever is to be believed with divine faith
                  must be revealed by God.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1 font-mono">
                  2.
                </span>
                <span>
                  The inspiration of each canonical book must be
                  believed with divine faith.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1 font-mono">
                  3.
                </span>
                <span>
                  <strong className="text-white">
                    Therefore
                  </strong>
                  , the inspiration of each canonical book must
                  be revealed by God.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-mono">
                  4.
                </span>
                <span>
                  The revelation of the canon is not contained
                  in Scripture alone.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 flex-shrink-0 mt-1 font-mono">
                  5.
                </span>
                <span>
                  <strong className="text-white">
                    Therefore
                  </strong>
                  , it must be contained in Sacred Tradition.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                  6.
                </span>
                <span>
                  Protestantism rejects the authority of Sacred
                  Tradition.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                  7.
                </span>
                <span>
                  <strong className="text-white">
                    Therefore
                  </strong>
                  , Protestantism cannot affirm the inspiration
                  of each canonical book as an article of divine
                  faith.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 flex-shrink-0 mt-1 font-mono">
                  8.
                </span>
                <span className="text-white font-medium">
                  Hence, Protestantism is internally incoherent.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              This logical demonstration exposes the fundamental
              contradiction at the heart of{" "}
              <em>Sola Scriptura</em>: it requires a source of
              divine revelation that it simultaneously denies.
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
            <em>Sola Scriptura</em> is not merely a novel
            post-Reformation construct; it is, upon rigorous
            analysis, an{" "}
            <strong className="text-white">
              epistemologically untenable doctrine
            </strong>{" "}
            that ultimately undermines the very authority it
            seeks to defend. It offers no coherent account of
            how the Canon was determined or can be known with
            certainty.
          </p>

          <p>
            In denying the constitutive role of Tradition and
            the Magisterium, it saws off the branch upon which
            it sits.
          </p>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8 my-8">
            <h3 className="text-white mb-4">
              The Catholic Alternative
            </h3>
            <p className="text-gray-300 mb-4">
              In contrast, Catholicism offers a coherent and
              theologically integrated vision: the Word of God
              is transmitted through both Scripture and
              Tradition, interpreted authentically by the Church
              established by Christ. This triadic structure—
              <strong className="text-white">
                Scripture, Tradition, and Magisterium
              </strong>
              — provides the epistemic foundation for certitude
              in divine Revelation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center">
                <BookOpen
                  className="text-blue-400 mx-auto mb-2"
                  size={32}
                />
                <p className="text-white font-medium">
                  Scripture
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center">
                <GraduationCap
                  className="text-purple-400 mx-auto mb-2"
                  size={32}
                />
                <p className="text-white font-medium">
                  Tradition
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center">
                <Scale
                  className="text-green-400 mx-auto mb-2"
                  size={32}
                />
                <p className="text-white font-medium">
                  Magisterium
                </p>
              </div>
            </div>
          </div>

          <p>
            The Protestant commitment to <em>Sola Scriptura</em>{" "}
            results either in a fideistic individualism or an
            endless fragmentation of competing interpretations.
            Only within the visible, historical, and
            Spirit-guided communion of the Catholic Church can
            the faithful say with certainty and conviction:
            <strong className="text-white">
              {" "}
              This is the Word of the Lord.
            </strong>
          </p>
        </div>

        {/* Scripture Quotes */}
        <div className="space-y-4 mt-8">
          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-2">
              "He who hears you hears Me; he who rejects you
              rejects Me."
            </p>
            <p className="text-gray-500">— Luke 10:16</p>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-2">
              "The Church... is the pillar and foundation of
              truth."
            </p>
            <p className="text-gray-500">— 1 Timothy 3:15</p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <GraduationCap
            className="text-amber-400 flex-shrink-0 mt-1"
            size={32}
          />
          <div>
            <h3 className="text-white mb-4">
              The Scholastic Tradition
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The scholastic theologians—including Thomas
              Aquinas, Bonaventure, and Duns Scotus—developed
              sophisticated philosophical frameworks for
              understanding divine revelation. Their approaches
              consistently affirmed that Scripture must be
              interpreted within the context of the Church's
              living Tradition and teaching authority.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Having examined the rigorous philosophical and
              theological case against <em>Sola Scriptura</em>,
              we can now explore the positive case for Catholic
              authority and the role of the Magisterium.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}