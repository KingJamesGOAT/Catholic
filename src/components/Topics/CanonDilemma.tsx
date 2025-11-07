import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { BookMarked, HelpCircle, AlertTriangle, XCircle, CheckCircle, Users, Scale } from 'lucide-react';

export default function CanonDilemma() {
  const disputedBooksIncluded = [
    {
      book: 'Second Peter',
      issue: 'Rejected by some early Fathers, considered uncanonical by others.'
    },
    {
      book: 'Hebrews',
      issue: 'Its authorship was questioned; even the Roman Church once denied it was written by Paul.'
    },
    {
      book: 'Revelation',
      issue: 'Some considered it too obscure or symbolic to be Scripture.'
    },
    {
      book: 'James, Jude, 2 and 3 John',
      issue: 'Disputed in various regions for centuries.'
    }
  ];

  const influentialBooksExcluded = [
    {
      book: 'First Clement',
      details: [
        'Written by a bishop of Rome, possibly ordained by Peter himself.',
        'Read in liturgies across the early Church.',
        'Included in Codex Alexandrinus—one of the oldest complete Bibles.'
      ]
    },
    {
      book: 'The Shepherd of Hermas',
      details: [
        'Used for instruction and worship.',
        'Quoted by early Fathers such as Irenaeus.',
        'Thought by some to have apostolic connections (Hermas of Romans 16:14).'
      ]
    }
  ];

  const protestantAnswers = [
    {
      answer: 'The Holy Spirit Guided the Process',
      refutation: 'This sounds pious, but it mirrors how Mormons defend their own scriptures. Without a visible, authoritative body to interpret that guidance, the process becomes subjective.',
      icon: XCircle,
      color: 'red'
    },
    {
      answer: 'Apostolic Authorship',
      refutation: 'Many New Testament books (e.g., Mark, Luke, Acts, Hebrews) were not written by apostles. Meanwhile, apostolic associates like Clement are excluded.',
      icon: XCircle,
      color: 'red'
    },
    {
      answer: 'Proximity to the Apostles',
      refutation: 'If nearness to apostolic witness justifies inclusion, then why exclude First Clement, written by a disciple of Peter?',
      icon: XCircle,
      color: 'red'
    },
    {
      answer: 'Consistency with Christian Orthodoxy',
      refutation: 'This answer is circular. One cannot define orthodoxy apart from the canon, and one cannot judge the canon based on orthodoxy without already having a canon.',
      icon: XCircle,
      color: 'red'
    },
    {
      answer: 'Faith that God Guided the Church',
      refutation: 'If one believes God guided the Church in the canonization process, then the Church\'s authority must be trustworthy. But this undermines sola scriptura by placing trust in an extra-scriptural authority.',
      icon: XCircle,
      color: 'red'
    }
  ];

  return (
    <TopicLayout
      title="The Canon Dilemma"
      subtitle="A Foundational Challenge to Sola Scriptura"
      quote={{
        text: "How do we know which books belong in the Bible?",
        source: "The fundamental question"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Introduction</h2>

        <p>
          The Protestant principle of <em>sola scriptura</em>—that Scripture alone is the final authority in Christian 
          faith—faces a critical and often overlooked problem: <strong className="text-white">How do we know which 
          books belong in the Bible?</strong>
        </p>

        <p>
          This is not a trivial question. It goes to the very core of what it means to trust the Bible as the word of 
          God. If the Bible does not define its own boundaries, then <em>sola scriptura</em> rests on an external process 
          that cannot itself be justified by Scripture alone.
        </p>
      </div>

      {/* Videos */}
      <div className="space-y-6 mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KOqJTRtbgtM"
            title="The Canon Dilemma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/takITjFO8Q8"
            title="The Canon Dilemma - Part 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* The Historical Problem */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">II. The Historical Problem: Disputed and Excluded Books</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Contrary to popular belief, the early Church did not inherit a neatly bound New Testament of 27 universally 
            accepted books.
          </p>

          {/* Disputed Books Included */}
          <div className="mt-8">
            <h3 className="text-white mb-6">Disputed Books That Were Included</h3>

            <div className="space-y-4">
              {disputedBooksIncluded.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-yellow-900/10 border border-yellow-800 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white mb-2">{item.book}</h4>
                      <p className="text-gray-300">{item.issue}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Influential Books Excluded */}
          <div className="mt-12">
            <h3 className="text-white mb-6">Influential Books That Were Excluded</h3>

            <div className="space-y-6">
              {influentialBooksExcluded.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-900/10 border border-blue-800 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <BookMarked className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="text-white mb-4">{item.book}</h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-8">
            <p className="text-gray-300 italic">
              If apostolic connection, orthodoxy, and Church use were the standard, why were these texts excluded, 
              while others with less clear origins were accepted?
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* The Core Question */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">III. The Core Question: Who Had the Authority to Decide?</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            This leads to the real dilemma: <strong className="text-white">How do Protestants—who deny any infallible 
            authority outside of Scripture—justify trusting the canon of Scripture?</strong>
          </p>

          <p>
            Several possible answers are often given, each of which breaks down under scrutiny:
          </p>

          <div className="space-y-6 mt-8">
            {protestantAnswers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border-b border-gray-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-${item.color}-900/30 border border-${item.color}-800 flex items-center justify-center`}>
                      <span className={`text-${item.color}-400 font-mono`}>{index + 1}</span>
                    </div>
                    <h4 className="text-white">{item.answer}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <item.icon className={`text-${item.color}-400 flex-shrink-0 mt-1`} size={24} />
                    <p className="text-gray-300">{item.refutation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* The Inescapable Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">IV. The Inescapable Conclusion</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Protestant model of <em>sola scriptura</em> requires a complete and trustworthy canon. But the canon 
            was not revealed in Scripture, nor universally recognized until it was defined by the <strong className="text-white">
            Catholic Church</strong> in the 4th century at the Councils of Hippo and Carthage.
          </p>

          <div className="bg-red-900/10 border border-red-800 rounded-lg p-8 my-8">
            <h3 className="text-white mb-6">This creates a contradiction:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-300 font-mono text-sm">1</span>
                </div>
                <p className="text-gray-300 mt-1">
                  <em>Sola scriptura</em> claims Scripture alone is authoritative.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-300 font-mono text-sm">2</span>
                </div>
                <p className="text-gray-300 mt-1">
                  But Protestants depend on the Church to define what &quot;Scripture&quot; even is.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-300 font-mono text-sm">∴</span>
                </div>
                <p className="text-white font-medium mt-1">
                  Therefore, the foundation of <em>sola scriptura</em> is based on <strong>trusting an authority it 
                  formally rejects</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Councils */}
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6 mt-8">
            <h4 className="text-white mb-4 flex items-center gap-3">
              <Users className="text-green-400" size={24} />
              <span>The Catholic Church Defined the Canon</span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Council of Rome (382 AD)</strong>
                  <p className="text-gray-400 text-sm mt-1">Pope Damasus I listed the canon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Council of Hippo (393 AD)</strong>
                  <p className="text-gray-400 text-sm mt-1">Affirmed the full canon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Council of Carthage (397 AD)</strong>
                  <p className="text-gray-400 text-sm mt-1">Confirmed the canon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Council of Trent (1546 AD)</strong>
                  <p className="text-gray-400 text-sm mt-1">Definitively declared the canon</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Final Reflection */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">V. Final Reflection</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The canon is not self-evident. It was not revealed all at once. It was discerned, debated, and ultimately 
            <strong className="text-white"> defined by the Church</strong>.
          </p>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Scale className="text-purple-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <p className="text-gray-300 mb-4">
                  If the Church could err in defining the canon, then Protestants have no way to be sure which books 
                  are truly Scripture.
                </p>
                <p className="text-gray-300">
                  But if the Church did not err, then its authority in defining doctrine cannot be so easily dismissed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-8">
            <p className="text-white text-lg mb-2">
              This is the Canon Dilemma
            </p>
            <p className="text-gray-300">
              —a fundamental tension at the heart of Protestant theology. And it demands a serious answer.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-900/20 to-green-900/20 border border-blue-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <HelpCircle className="text-blue-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">The Next Question</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Having established that the Church had the authority to define the canon, we must ask: which books did 
              the Church include?
            </p>
            <p className="text-gray-400 leading-relaxed">
              The Catholic Bible contains 73 books, while Protestant Bibles contain only 66. What happened to those 
              7 books? Let&apos;s explore this crucial difference.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
