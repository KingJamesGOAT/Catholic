import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { Triangle, AlertCircle, XCircle, Scissors, ShuffleIcon as Shuffle, Users, BookOpen, Award, Sparkles } from 'lucide-react';

export default function NoFilioque() {
  const categoriesOfError = [
    {
      title: 'It splits and dismembers the Trinity',
      icon: Scissors,
      color: 'red',
      description: 'The "heresy of the schism" that tears apart the Trinity'
    },
    {
      title: 'It confuses and destroys the unity of the Trinity',
      icon: Shuffle,
      color: 'orange',
      description: 'Annihilates the divine order and relational structure'
    },
    {
      title: 'It mutilates the persons of the Trinity one by one',
      icon: Users,
      color: 'amber',
      description: 'Deforms each divine Person individually'
    }
  ];

  const splitsArguments = [
    {
      number: 1,
      title: 'Denies the direct origin-based union between Son and Holy Spirit',
      quote: 'It tears apart the unity of the immediate and direct union of the Holy Ghost with the Son... and makes the Holy Ghost no longer Spirit of the Son.',
      explanation: 'Without the Filioque, the Spirit cannot be said to proceed from the Son, which undercuts the relational unity taught by many Church Fathers, both East and West.'
    },
    {
      number: 2,
      title: 'Breaks the communion between Father and Son',
      quote: 'It breaks up the unity of the perfect communion between Father and Son, by which the Son must have everything in common with the Father except fatherhood.',
      explanation: 'The Father gives to the Son all that He has — including the power to spirate the Spirit. Denying this makes the Son a lesser reflection of the Father.'
    },
    {
      number: 3,
      title: 'Divides the person of the Father',
      quote: 'It splits the indivisible unity of the Father... suddenly standing alongside his fatherhood must constitute a person just like the latter does.',
      explanation: 'If the Father\'s role as source of the Spirit is unrelated to His role as Father of the Son, then two distinct identities are posited in the Father — a theological absurdity.'
    }
  ];

  const destroysUnityArguments = [
    {
      number: 4,
      title: 'Breaks the divine order',
      quote: 'It annihilates the fixed order and sequence by virtue of which the three persons form a continuous golden chain.',
      explanation: 'Catholic theology upholds a flowing order: the Father begets the Son, and the Father and Son together spirate the Spirit. The Orthodox denial introduces a disordered structure: two persons proceeding directly from one, with no relational link between the Spirit and the Son.'
    },
    {
      number: 5,
      title: 'Severs the interdependence of the processions',
      quote: 'It destroys the organic union of the two trinitarian processions... whereby they are interdependent and mesh, one proceeding from the other.',
      explanation: 'In the Catholic understanding, the Son receives the power to spirate the Spirit in being begotten by the Father. The Orthodox position lacks this interconnection, rendering the processions as parallel and unrelated.'
    },
    {
      number: 6,
      title: 'Destroys the comprehensive relational structure',
      quote: 'It destroys the comprehensive conation of the divine persons... each forming a connecting link for the two others.',
      explanation: 'Catholic theology emphasizes a web of immediate relations among all three Persons. The Father is source of both Son and Spirit; the Son mediates the Father\'s spiration of the Spirit; the Spirit unites Father and Son as the bond of love (vinculum caritatis).',
      additionalQuote: 'The Spirit is the unity of the Father and the Son... the Son is the medium through which the Father spirates the Spirit.'
    }
  ];

  const mutilatesArguments = [
    {
      number: 7,
      title: 'Diminishes the perfection of the Father',
      quote: 'The Father is a perfect Father only when he can and does give the Son everything that he himself possesses... including the fruitfulness compatible with the Son\'s person.',
      explanation: 'If the Father withholds the power to spirate the Spirit from the Son, He is not the generous and fully communicative Father that Catholic theology maintains.'
    },
    {
      number: 8,
      title: 'Undermines the dignity of the Son',
      quote: 'The Son is a perfect Son only when he is similar and equal to the Father in the aspiration also... not merely by essence.',
      explanation: 'In denying the Son the role of spirating the Spirit, the Orthodox theology deprives the Son of full participation in divine fecundity. The Son, then, resembles the Father only in essence, not in hypostatic power.'
    },
    {
      number: 9,
      title: 'Makes the Holy Spirit unintelligible as a distinct Person',
      quote: 'The Holy Ghost is conceivable not only as perfect Spirit but also as a distinct person only because the Son is related to Him as his principle.',
      explanation: 'The Fathers taught that personal distinctions in the Trinity arise from relationships of origin. Without a procession from the Son, the Spirit\'s personal distinction is blurred and collapses into mere sameness.'
    }
  ];

  return (
    <TopicLayout
      title="No Filioque? No Trinity."
      subtitle="Why the Filioque clause is essential to Trinitarian theology"
      quote={{
        text: "When the Advocate comes, whom I will send to you from the Father—the Spirit of truth who goes out from the Father—he will testify about me.",
        source: "John 15:26"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction</h2>

        <p>
          Among the most enduring theological controversies between the Catholic Church and the Eastern Orthodox Church 
          is the doctrine of the <strong className="text-white">Filioque</strong> — the assertion that the Holy Spirit 
          proceeds from the Father <strong className="text-white">and the Son</strong>. While often dismissed as a minor 
          linguistic or political disagreement, deeper study reveals that this doctrine touches the very heart of the 
          mystery of the Trinity.
        </p>

        <p>
          One of the most powerful defenses of the <em>Filioque</em> comes from 19th-century Catholic theologian 
          <strong className="text-white"> Joseph Scheeben</strong>, a representative of the so-called <em>Collegio 
          Romano</em> theologians.
        </p>

        <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
          <p className="text-gray-300">
            In contrast to modern assumptions, Scheeben and his contemporaries were not rigid &quot;logic-choppers&quot; 
            but deeply patristic, historical, and dogmatic thinkers. This exploration presents Scheeben&apos;s nine 
            arguments in defense of the <em>Filioque</em>, grouped into three categories that demonstrate how denying 
            the <em>Filioque</em> leads to a theological rupture within the Trinity itself.
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I3ApIImWI4E"
            title="The Filioque and the Trinity"
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
        <h2 className="text-white mb-6">Joseph Scheeben and 19th-Century Catholic Theology</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Joseph Scheeben (1835–1888) stands out as one of the greatest Catholic dogmatic theologians of the 19th 
            century. Contrary to the common narrative that pre-Vatican II theology ignored the Church Fathers and focused 
            solely on abstract reasoning, Scheeben and his colleagues at the Collegio Romano were renowned for integrating 
            both scholastic precision and patristic depth.
          </p>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="text-purple-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <p className="text-white mb-3">
                  His magnum opus, the <em>Handbook of Dogmatic Theology</em>, offers one of the most compelling accounts 
                  of the <em>Filioque</em> and its necessity for a coherent Trinitarian theology.
                </p>
                <div className="bg-gray-900/50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    &quot;He [Scheeben] draws very much from the Eastern Fathers... and goes on to give nine different 
                    ways in which denying the Filioque actually destroys and tears apart the Trinity&quot;.
                  </p>
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
        <h2 className="text-white mb-6">The Three Categories of Error from Denying the Filioque</h2>

        <p className="text-gray-300 mb-8">
          Scheeben divides the consequences of rejecting the <em>Filioque</em> into three major theological errors:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-red-900/30 to-red-900/10 border border-red-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-red-900/50 flex items-center justify-center border border-red-700 mb-4 mx-auto">
              <Scissors className="text-red-300" size={28} />
            </div>
            <h3 className="text-white text-center mb-3">1. Splits the Trinity</h3>
            <p className="text-gray-400 text-center text-sm">
              It tears apart and splits the Trinity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-orange-900/30 to-orange-900/10 border border-orange-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-orange-900/50 flex items-center justify-center border border-orange-700 mb-4 mx-auto">
              <Shuffle className="text-orange-300" size={28} />
            </div>
            <h3 className="text-white text-center mb-3">2. Destroys Unity</h3>
            <p className="text-gray-400 text-center text-sm">
              It confuses and destroys the unity of the Trinity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-amber-900/30 to-amber-900/10 border border-amber-800 rounded-lg p-6"
          >
            <div className="w-14 h-14 rounded-full bg-amber-900/50 flex items-center justify-center border border-amber-700 mb-4 mx-auto">
              <Users className="text-amber-300" size={28} />
            </div>
            <h3 className="text-white text-center mb-3">3. Mutilates Persons</h3>
            <p className="text-gray-400 text-center text-sm">
              It mutilates the persons of the Trinity one by one
            </p>
          </motion.div>
        </div>

        <p className="text-gray-400 text-center mt-8 italic">
          Each category will be examined in detail below.
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
        <h2 className="text-white mb-6">I. Denying the Filioque Splits the Trinity</h2>

        <p className="text-gray-300 mb-8">
          Scheeben calls this the &quot;heresy of the schism,&quot; which &quot;tears apart and splits the Trinity.&quot;
        </p>

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
                    <span className="text-red-300 font-mono">{arg.number}</span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">&quot;{arg.quote}&quot;</p>
                </div>
                <p className="text-gray-300">{arg.explanation}</p>
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
        <h2 className="text-white mb-6">II. Denying the Filioque Destroys the Unity of the Trinity</h2>

        <p className="text-gray-300 mb-8">
          Scheeben refers to this second category as the way in which the &quot;heresy of the schism confuses and 
          destroys the unity of the Trinity as a whole.&quot;
        </p>

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
                    <span className="text-orange-300 font-mono">{arg.number}</span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">&quot;{arg.quote}&quot;</p>
                </div>
                <p className="text-gray-300 mb-4">{arg.explanation}</p>
                {arg.additionalQuote && (
                  <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-gray-300 italic">&quot;{arg.additionalQuote}&quot;</p>
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
        <h2 className="text-white mb-6">III. Denying the Filioque Mutilates the Trinity</h2>

        <p className="text-gray-300 mb-8">
          Scheeben&apos;s third category reveals how denial of the <em>Filioque</em> deforms each divine Person.
        </p>

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
                    <span className="text-amber-300 font-mono">{arg.number}</span>
                  </div>
                  <div>
                    <h3 className="text-white">{arg.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-amber-600 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-300 italic">&quot;{arg.quote}&quot;</p>
                </div>
                <p className="text-gray-300">{arg.explanation}</p>
              </div>
            </motion.div>
          ))}
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
        <h2 className="text-white mb-6">Theological and Patristic Grounding</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Scheeben&apos;s framework is deeply rooted in the writings of both Eastern and Western Fathers:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <h3 className="text-white">Greek Fathers</h3>
              </div>
              <p className="text-gray-300">
                Speak of the Son as the <em>through whom</em> the Spirit proceeds (cf. St. Gregory of Nyssa, St. Cyril 
                of Alexandria).
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <h3 className="text-white">Latin Fathers</h3>
              </div>
              <p className="text-gray-300">
                Especially St. Augustine, emphasize the Holy Spirit as the mutual love (<em>amor consubstantialis</em>) 
                between Father and Son.
              </p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 mt-6">
            <p className="text-white">
              This dual testimony shows that the <em>Filioque</em> is not a post-scholastic invention, but a legitimate 
              development grounded in the Christian tradition.
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
        <h2 className="text-white mb-6">Conclusion: The Necessity of the Filioque</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Denying the <em>Filioque</em> is not a minor doctrinal variation but a theological rupture with serious 
            consequences. As Scheeben demonstrates:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-white text-lg italic">
              &quot;Where one tries to make personal distinction without origin, the distinction completely collapses&quot;.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Sparkles className="text-blue-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <p className="text-white mb-4">
                  The <em>Filioque</em> safeguards the inner logic, relational integrity, and Trinitarian unity of the 
                  Godhead. Far from being an obstacle to ecumenism, it is a profound testimony to the richness of Catholic 
                  Trinitarian theology — a theology that sees in the eternal procession of the Spirit not division, but 
                  the very bond of love that unites Father and Son.
                </p>
              </div>
            </div>
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
        <h3 className="text-white mb-6">What&apos;s the Debate?</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Triangle className="text-green-400" size={24} />
              <h4 className="text-white">Catholic Position (Filioque)</h4>
            </div>
            <p className="text-gray-300 mb-4 italic">
              &quot;...the Holy Spirit, the Lord and Giver of life, who proceeds from the Father <strong className="text-white">
              and the Son</strong>.&quot;
            </p>
            <p className="text-gray-400">
              The Holy Spirit proceeds from both the Father and the Son as from one principle.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-gray-400" size={24} />
              <h4 className="text-white">Orthodox Position</h4>
            </div>
            <p className="text-gray-300 mb-4 italic">
              &quot;...the Holy Spirit, the Lord and Giver of life, who proceeds from the Father.&quot;
            </p>
            <p className="text-gray-400">
              The Holy Spirit proceeds from the Father alone (though through the Son).
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
        <div className="flex items-start gap-4">
          <Award className="text-purple-400 flex-shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-white mb-4">Congratulations on Completing Your Journey!</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You&apos;ve explored the foundations of Catholic faith—from God&apos;s existence to the finest points of 
              Trinitarian theology. You&apos;ve seen how Scripture, Tradition, and the Magisterium work together to 
              preserve truth across two millennia.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This journey is just the beginning. The Catholic faith is deep, rich, and endlessly rewarding to explore. 
              Whether you&apos;re considering becoming Catholic, defending the faith, or deepening your own understanding, 
              you now have a solid foundation.
            </p>
            <p className="text-white text-lg italic text-center mt-6">
              May the Lord guide you as you continue to seek truth. Ad Majorem Dei Gloriam—for the greater glory of God.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
