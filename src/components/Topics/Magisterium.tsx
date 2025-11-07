import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { Shield, BookOpen, Users, Lightbulb, Scale, CheckCircle, AlertCircle, Crown, Sparkles, ScrollText, Award } from 'lucide-react';

export default function Magisterium() {
  const revelationPoints = [
    {
      title: 'Divine Communication',
      description: 'Revelation is the communication of divine truths by God to man—truths necessary for salvation.',
      icon: Lightbulb
    },
    {
      title: 'Demands Obedience',
      description: 'Revelation demands the "obedience of faith" (Rom 16:26), presupposing a trustworthy means of communication.',
      icon: Shield
    },
    {
      title: 'Requires Infallibility',
      description: 'This necessitates an infallible teacher: a Magisterium.',
      icon: Award
    }
  ];

  const threefoldMission = [
    {
      type: 'Official Proclamation',
      analogy: 'heralds',
      function: 'Public communication',
      office: 'Priests and deacons',
      icon: Users,
      color: 'blue'
    },
    {
      type: 'Authentic Proclamation',
      analogy: 'notaries',
      function: 'Trustworthy witnesses',
      office: 'Bishops',
      icon: ScrollText,
      color: 'purple'
    },
    {
      type: 'Authoritative Proclamation',
      analogy: 'judges',
      function: 'Binding enforcement with sanctions',
      office: 'Diocesan bishops and the Pope',
      icon: Scale,
      color: 'amber'
    }
  ];

  const divineCooperation = [
    {
      title: 'Infallibility',
      description: 'Internal protection from error in definitive teachings'
    },
    {
      title: 'Motives of Credibility',
      description: 'External signs (miracles, holiness, etc.) that confirm divine authority'
    },
    {
      title: 'Sanctions',
      description: 'Spiritual rewards and punishments (cf. Luke 10:16)'
    }
  ];

  const scriptureFoundations = [
    {
      title: 'The Great Commission',
      reference: 'Matthew 28:18–20',
      quote: 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations... teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      points: [
        'A divine source of authority',
        'A universal mission',
        'A promise of Christ\'s ongoing presence (assistance and permanence)'
      ]
    },
    {
      title: 'Preaching with Divine Signs',
      reference: 'Mark 16:15–20',
      quote: 'They went forth and preached everywhere, while the Lord worked with them and confirmed the message by signs that attended it.',
      points: [
        'Not only official preaching',
        'External divine confirmation—motives of credibility'
      ]
    },
    {
      title: 'Apostolic Authority to Forgive Sins',
      reference: 'John 20:21–23',
      quote: 'As the Father has sent me, even so I send you... Whose sins you forgive are forgiven them.',
      points: [
        'The Apostles receive Christ\'s mission and authority',
        'This entails authentic and authoritative teaching'
      ]
    },
    {
      title: 'The Petrine Office',
      reference: 'John 21:15–17',
      quote: 'Jesus commands Peter to "feed my sheep" three times',
      points: [
        'Written in the 90s A.D. to a Church already governed by bishops',
        'Why mention Peter? Unless the office continues, the text is irrelevant'
      ]
    },
    {
      title: 'The Charism of Infallibility',
      reference: 'John 14:26; 16:13',
      quote: 'The Holy Spirit... will teach you all things, and bring to your remembrance all that I have said to you... He will guide you into all truth.',
      points: [
        'Perpetual promise tied to the Church\'s mission',
        'The Spirit ensures preservation of Christ\'s word in purity'
      ]
    }
  ];

  const supportingTexts = [
    {
      reference: 'Luke 10:16',
      text: 'He who hears you hears me.'
    },
    {
      reference: '1 Timothy 3:15',
      text: 'The Church of the living God, the pillar and foundation of truth.'
    },
    {
      reference: '2 Thessalonians 2:15',
      text: 'Hold fast to the traditions you were taught by us, whether by word of mouth or by letter.'
    }
  ];

  const continuityArguments = [
    {
      title: 'Presumption of Continuity',
      description: 'Essential features of the Church do not expire unless explicitly revoked.',
      icon: CheckCircle
    },
    {
      title: 'Perpetual Need',
      description: 'The Church will always need authoritative teaching and internal preservation.',
      icon: Shield
    },
    {
      title: 'St. Thomas Aquinas\' Principle',
      description: '"If the reason for a gift is perpetual, the gift itself must be perpetual." (Contra Gentiles IV)',
      icon: Award
    }
  ];

  return (
    <TopicLayout
      title="The Magisterium"
      subtitle="Jesus Christ and the Catholic Teaching Authority: A Complete Defense"
      quote={{
        text: "Whoever listens to you listens to me. Whoever rejects you rejects me.",
        source: "Luke 10:16"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction: The Crisis of Inadequate Apologetics</h2>

        <p>
          Many Christians often hear the claim that Jesus Christ established the Catholic Church. Yet, how often is 
          this claim truly demonstrated with clarity, coherence, and theological depth? Too often, Catholics present 
          vague assertions of historical continuity or incomplete logical arguments.
        </p>

        <p>
          This exploration aims to change that by offering a full scholastic and dogmatic treatment of the Catholic 
          Magisterium, showing that it is not merely an optional structure but a <strong className="text-white">
          necessary consequence of divine revelation</strong>.
        </p>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800 rounded-lg p-6">
          <h3 className="text-white mb-4">The argument unfolds in two parts:</h3>
          <ol className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-mono mt-1">1.</span>
              <span><strong className="text-white">The Scholastic Section</strong> – defining the Magisterium and 
              its necessity from first principles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-1">2.</span>
              <span><strong className="text-white">The Dogmatic Section</strong> – showing that Scripture explicitly 
              reveals and supports this Magisterium</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Video */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bOfdtjHojo4"
            title="The Magisterium"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* I. Scholastic Theology */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">I. Scholastic Theology: The Nature and Necessity of the Magisterium</h2>

        {/* 1. The Nature of Revelation */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">1. The Nature of Revelation</h3>

          <p>
            Revelation is the communication of divine truths by God to man—truths necessary for salvation. As Ludwig 
            Ott explains:
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;Revelation is a fruitful principle of supernatural knowledge and life... a supreme law of faith, 
              thought and action for all men... through which they are to be united in one kingdom of truth and 
              holiness.&quot;
            </p>
            <p className="text-gray-500">— Ludwig Ott, Fundamentals of Catholic Dogma</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {revelationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center mb-4">
                  <point.icon className="text-blue-400" size={24} />
                </div>
                <h4 className="text-white mb-2">{point.title}</h4>
                <p className="text-gray-400 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. The End Determines the Means */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">2. The End Determines the Means</h3>

          <p>
            If Revelation is meant to reach all people in all times, then the means to transmit it must be proportionate 
            to that universal goal. This leads to a distinction:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6">
              <h4 className="text-white mb-3">Physically Necessary Means</h4>
              <p className="text-gray-300 mb-2">Without which the end is impossible</p>
              <p className="text-gray-500 text-sm italic">(e.g., flying across the Atlantic)</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6">
              <h4 className="text-white mb-3">Morally Necessary Means</h4>
              <p className="text-gray-300 mb-2">Without which the end is not ordinarily or reliably achievable</p>
              <p className="text-gray-500 text-sm italic">(The Catholic claim about the Church)</p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <p className="text-white mb-3">
              The Catholic claim is not that divine truth <em>cannot</em> be known without the Church, but that God, 
              in His perfection, has willed to provide the <strong>morally necessary</strong> means to ensure its 
              authentic transmission.
            </p>
            <div className="bg-gray-900/50 border-l-4 border-green-600 p-4 rounded-r-lg mt-4">
              <p className="text-gray-300 italic">
                &quot;Christ does not lack... He is not impoverished in His ability to provide the means... He provides 
                all morally necessary means for the Church to carry out the end of Revelation.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Threefold Mission */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">3. The Threefold Mission of the Magisterium</h3>

          <p>
            Just as a government has officials who explain, testify, and enforce the law, so the Church has three 
            forms of teaching:
          </p>

          <div className="space-y-4 mt-6">
            {/* Official Proclamation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <h4 className="text-white mb-1">Official Proclamation</h4>
                      <p className="text-gray-500 text-sm">e.g., heralds</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Function:</p>
                      <p className="text-gray-300">Public communication</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Office:</p>
                      <p className="text-white">Priests and deacons</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Authentic Proclamation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center flex-shrink-0">
                  <ScrollText className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <h4 className="text-white mb-1">Authentic Proclamation</h4>
                      <p className="text-gray-500 text-sm">e.g., notaries</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Function:</p>
                      <p className="text-gray-300">Trustworthy witnesses</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Office:</p>
                      <p className="text-white">Bishops</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Authoritative Proclamation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-amber-900/20 to-amber-900/5 border border-amber-800 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-900/50 border border-amber-700 flex items-center justify-center flex-shrink-0">
                  <Scale className="text-amber-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <h4 className="text-white mb-1">Authoritative Proclamation</h4>
                      <p className="text-gray-500 text-sm">e.g., judges</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Function:</p>
                      <p className="text-gray-300">Binding enforcement with sanctions</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Office:</p>
                      <p className="text-white">Diocesan bishops and the Pope</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. Divine Cooperation */}
        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <h3 className="text-white">4. Divine Cooperation with the Magisterium</h3>

          <p>
            To ensure the message is preserved and received, God provides:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-6">
            {divineCooperation.map((coop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-800 rounded-lg p-6"
              >
                <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700 mb-4 mx-auto">
                  <Sparkles className="text-purple-300" size={28} />
                </div>
                <h4 className="text-white text-center mb-3">{coop.title}</h4>
                <p className="text-gray-400 text-center text-sm">{coop.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              &quot;If the authentic and authoritative proclamation could propose error, God would appear to be the 
              direct author of inevitable and universal error... and be the promoter of intellectual idolatry.&quot;
            </p>
            <p className="text-gray-500 mt-2">— Fr. Michael Schmaus (paraphrased by Fulton Sheen)</p>
          </div>
        </div>

        {/* 5. The Essence of Infallibility */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h3 className="text-white">5. The Essence of Infallibility</h3>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6">
            <p className="text-white mb-3">
              Infallibility is not the <em>essence</em> of the Magisterium, but a <em>property</em> that flows from 
              its authoritative mission.
            </p>
            <p className="text-gray-300">
              Therefore, one must begin not with infallibility itself, but with the nature of revelation and the 
              offices entrusted with proclaiming it.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. Dogmatic Theology */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">II. Dogmatic Theology: The Scriptural Foundation for the Magisterium</h2>

        <p className="text-gray-300 mb-8">
          Once the nature and necessity of the Magisterium are understood, we turn to Scripture to see if these roles 
          and promises were established by Christ.
        </p>

        <div className="space-y-8">
          {scriptureFoundations.map((foundation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300 font-mono">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{foundation.title}</h3>
                    <p className="text-blue-400 text-sm font-mono">{foundation.reference}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900/50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                  <p className="text-gray-300 italic">&quot;{foundation.quote}&quot;</p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 text-sm mb-3">Here we see:</p>
                  {foundation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={16} />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Texts */}
        <div className="mt-12">
          <h3 className="text-white mb-6">Supporting Texts</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {supportingTexts.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6"
              >
                <BookOpen className="text-purple-400 mb-3" size={24} />
                <p className="text-purple-400 text-sm font-mono mb-3">{text.reference}</p>
                <p className="text-gray-300 text-sm italic">&quot;{text.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Continuity Beyond the Apostles */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">III. Continuity Beyond the Apostles</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Some argue that these charisms were unique to the Apostles. However, this objection fails on three grounds:
          </p>

          <div className="space-y-4 mt-6">
            {continuityArguments.map((arg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6 flex items-start gap-4"
              >
                <arg.icon className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">{arg.title}</h4>
                  <p className="text-gray-300">{arg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">
            Thus, offices like the Papacy, Episcopal authority, and infallibility are perpetual because the mission of 
            revelation endures.
          </p>
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
        <h2 className="text-white mb-6">Conclusion: The Catholic Magisterium is Scriptural, Rational, and Necessary</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Having examined both the theological necessity and scriptural foundation of the Magisterium, we conclude 
            that only the Catholic Church possesses all three levels of proclamation, all three forms of divine 
            cooperation, and the structural unity necessary for universal, authoritative, and infallible teaching.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;This concept is true because... it is objectively Catholic as the one perfectly adequate expression 
              of the effective catholicity of Revelation itself.&quot;
            </p>
            <p className="text-gray-500">— Fulton Sheen</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-8">
            <p className="text-white text-lg">
              The Catholic Church alone corresponds to the vitality and catholicity of the word of God. In her 
              Magisterium, the Word of Christ continues to speak—not as a dead letter or private interpretation—but 
              through living ambassadors of truth.
            </p>
          </div>

          <p className="text-center text-gray-500 italic text-lg">
            Soli Deo gloria.
          </p>
        </div>
      </motion.section>

      {/* Visual Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-white mb-6">The Magisterium: A Visual Summary</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700 mb-4 mx-auto">
              <Shield className="text-blue-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">Preserves Truth</h4>
            <p className="text-gray-400 text-center text-sm">
              Guards the deposit of faith from error and corruption across all ages and cultures.
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700 mb-4 mx-auto">
              <BookOpen className="text-purple-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">Interprets Scripture</h4>
            <p className="text-gray-400 text-center text-sm">
              Provides authoritative interpretation of Sacred Scripture and Tradition.
            </p>
          </div>

          <div className="bg-gradient-to-b from-green-900/30 to-green-900/10 border border-green-800 rounded-lg p-6">
            <div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center border border-green-700 mb-4 mx-auto">
              <Users className="text-green-300" size={28} />
            </div>
            <h4 className="text-white text-center mb-3">Maintains Unity</h4>
            <p className="text-gray-400 text-center text-sm">
              Settles disputes and prevents the Church from splintering into factions.
            </p>
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
          <AlertCircle className="text-amber-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">Defining the Faith</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Throughout history, the Magisterium has defined and defended essential Christian doctrines. From the 
              nature of the Trinity to the divinity of Christ, from the canon of Scripture to moral teachings, the 
              Church&apos;s teaching authority has kept the faith pure.
            </p>
            <p className="text-gray-400 leading-relaxed">
              One of the most important doctrines the Magisterium has preserved is the full doctrine of the Trinity—
              including a clause that some Orthodox Christians reject. Let&apos;s see why this matters.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
