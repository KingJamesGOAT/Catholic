import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { Book, AlertCircle, XCircle, CheckCircle, Users, BookOpen, Award, ScrollText } from 'lucide-react';

export default function SeventyThreeBooks() {
  const deuterocanonicalBooks = [
    'Tobit',
    'Judith',
    'Wisdom',
    'Sirach (Ecclesiasticus)',
    'Baruch (including the Letter of Jeremiah)',
    '1 Maccabees',
    '2 Maccabees'
  ];

  const protestantObjections = [
    {
      objection: 'The Jews didn\'t accept these books',
      response: [
        'There was **no single, universally accepted Jewish canon** in the time of Jesus. Scholars identify at least **five different Jewish canons** in use during the 1st century: the Pharisaic, Sadducean, Samaritan, Qumran, and the Septuagint tradition.',
        'The **Septuagint**—a Greek translation of the Hebrew Scriptures that **included the Deuterocanonical books**—was the version most often quoted by the **New Testament authors**.'
      ],
      quote: {
        text: 'The New Testament authors almost always use the Septuagint to access the Jewish scriptures.',
        source: 'Timothy Michael Law, Oxford Handbook of the Septuagint'
      }
    },
    {
      objection: 'The early Christians rejected these books',
      response: [
        'That\'s demonstrably false. **The Councils of Hippo (393 AD) and Carthage (397 AD)** both produced lists of canonical books identical to today\'s Catholic Bible. These councils **included** the Deuterocanonicals.',
        'Church Fathers like **Augustine** passionately defended the Deuterocanonical books as inspired Scripture.'
      ],
      quote: {
        text: 'The whole Church throughout the world maintains this canon.',
        source: 'St. Augustine, De Doctrina Christiana'
      }
    },
    {
      objection: 'They\'re not quoted in the New Testament',
      response: [
        'Neither are many **undisputed books** in Protestant Bibles. Books like **Judges, Ezra, Esther, Obadiah, Nahum,** and **Zephaniah** are never explicitly cited in the New Testament either.',
        'The Deuterocanonicals are often referenced or echoed: **Hebrews 11** alludes to 2 Maccabees 6–7; **Wisdom 2** prophesies about the righteous man being killed—fulfilled in Christ; Jesus celebrates **Hanukkah** in John 10:22–23, a feast only described in **1 Maccabees**.'
      ],
      quote: {
        text: 'Wisdom 2… is really explicitly Christological in a way that would be very hard to predict.',
        source: 'Biblical Scholars'
      }
    },
    {
      objection: 'St. Jerome rejected the Deuterocanonical books',
      response: [
        'Jerome, influenced by the rabbinic canon, **initially expressed doubts** about these books. However, **Jerome ultimately submitted to the judgment of the Church**—and **translated all the Deuterocanonical books into Latin** for inclusion in the Vulgate.',
        'Despite his initial reservations, **Jerome quoted from the Deuterocanonical books as Scripture in his later works**. Most importantly, Jerome\'s early private opinion was **not binding**—the consistent canon affirmed by councils and tradition was.'
      ],
      quote: {
        text: 'What I have written, I have written under obedience.',
        source: 'St. Jerome, Preface to Tobit and Judith'
      }
    }
  ];

  const historicalCouncils = [
    {
      name: 'Council of Rome',
      year: '382 AD',
      description: 'Under Pope Damasus I, this council issued a list of canonical books that included the Deuterocanon.'
    },
    {
      name: 'Council of Hippo',
      year: '393 AD',
      description: 'Local North African council that first listed and confirmed the full Christian biblical canon, including the Old and New Testament books, and sent it to Rome for approval.'
    },
    {
      name: 'Council of Carthage',
      year: '397 AD',
      description: 'Confirmed Canon 36, listing the 73 books of the Bible used in the Catholic Church today—46 Old Testament (including the Deuterocanonical books) and 27 New Testament books. Acts signed by St. Augustine.'
    },
    {
      name: 'Council of Florence',
      year: '1442 AD',
      description: 'Formally reaffirmed the same canon for both East and West.'
    },
    {
      name: 'Council of Trent',
      year: '1546 AD',
      description: 'In response to Protestant reformers rejecting the Deuterocanon, Trent definitively reaffirmed the traditional canon. It did not "add" books—it preserved what had already been held for over 1,100 years.'
    }
  ];

  const reasonsFor73 = [
    'It reflects the Bible used by the Apostles and early Church.',
    'It was confirmed by multiple authoritative councils.',
    'It is consistent with the Septuagint, the version most used by early Christians.',
    'It was the Christian Bible for over 1,000 years.'
  ];

  return (
    <TopicLayout
      title="73 Books?"
      subtitle="Why the Catholic Bible has more books than the Protestant Bible"
      quote={{
        text: "Your word is a lamp to my feet and a light to my path.",
        source: "Psalm 119:105"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <h2 className="text-white">Why This Matters</h2>

        <p>
          The difference between the <strong className="text-white">Catholic Bible</strong> (73 books) and the 
          <strong className="text-white"> Protestant Bible</strong> (66 books) is one of the most common—and most 
          misunderstood—issues in Christian theology. Protestants often accuse Catholics of &quot;adding books&quot; 
          at the Council of Trent. But history, scholarship, and early Church authority all tell a very different story.
        </p>

        <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
          <p className="text-white text-lg">
            The Catholic Church never added books—it preserved the full canon received from the early Church.
          </p>
        </div>
      </div>

      {/* Video 1 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QK0r6pkDlq0"
            title="How were the books of The Bible decided?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* The Seven Disputed Books */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">The Root of the Dispute: The Seven Disputed Books</h2>

        <p className="text-gray-300 mb-6">
          The <strong className="text-white">Deuterocanonical Books</strong> (called &quot;Apocrypha&quot; by Protestants) 
          include:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {deuterocanonicalBooks.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-4 flex items-center gap-3"
            >
              <BookOpen className="text-blue-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">{book}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-300 mb-4">
          Plus longer versions of <strong className="text-white">Daniel</strong> and <strong className="text-white">
          Esther</strong>.
        </p>

        <div className="bg-red-900/10 border border-red-800 rounded-lg p-6">
          <p className="text-gray-300">
            These books were accepted in Christian Bibles for over a millennium until <strong className="text-white">
            Martin Luther</strong> removed them in the 16th century—not based on historical consensus, but on 
            theological grounds.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Protestant Arguments and Responses */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">Protestant Arguments—and the Catholic Response</h2>

        <div className="space-y-8">
          {protestantObjections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              {/* Objection Header */}
              <div className="bg-gradient-to-r from-red-900/30 to-red-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-900/30 border border-red-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-300 font-mono">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Objection {index + 1}</h3>
                    <p className="text-red-300 text-lg">&quot;{item.objection}&quot;</p>
                  </div>
                </div>
              </div>

              {/* Response */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white mb-4">Response:</h4>
                    <div className="space-y-4">
                      {item.response.map((para, idx) => (
                        <p 
                          key={idx} 
                          className="text-gray-300"
                          dangerouslySetInnerHTML={{ 
                            __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                {item.quote && (
                  <div className="bg-gray-900/50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <p className="text-gray-300 italic mb-2">&quot;{item.quote.text}&quot;</p>
                    <p className="text-gray-500">— {item.quote.source}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* What the Reformers Did */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">What the Reformers Actually Did</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            While some argue that the books were merely &quot;moved,&quot; <strong className="text-white">early 
            Protestants removed them from the canon</strong>, first putting them in an appendix, then omitting them 
            entirely.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              &quot;The early Protestant reformers moved these books to appendices with notes denying that they were 
              canonical, and then later Protestants dropped the appendices and removed the books altogether.&quot;
            </p>
          </div>

          <p>
            This was <strong className="text-white">not</strong> the position of the early Church.
          </p>

          <div className="bg-blue-900/10 border border-blue-800 rounded-lg p-6 mt-6">
            <p className="text-gray-300 mb-4">
              Even <strong className="text-white">Protestant historian Aaron Clay Denlinger</strong> (Reformation Bible 
              College) admits:
            </p>
            <p className="text-gray-400 italic">
              &quot;The books in question were denied canonical status by Palestinian Jews, but afforded canonical 
              status by Hellenistic Jews… [and] the New Testament authors almost always quote the Septuagint, which 
              included the Deuterocanonical books.&quot;
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Video 2 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_YOjaOgtQ0U"
            title="Adding or Deleting Books from the Bible?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Was the Catholic Church Adding Books */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Was the Catholic Church &quot;Adding&quot; Books at Trent?</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-6">
            <p className="text-white text-lg mb-4">
              No. The Council of Trent (1546) did not add books—it confirmed infallibly what had always been taught.
            </p>
            <p className="text-gray-300">
              The same canon was already affirmed at multiple earlier councils.
            </p>
          </div>

          <h3 className="text-white mt-8 mb-6">Historical Councils That Affirmed the Canon</h3>

          <div className="space-y-4">
            {historicalCouncils.map((council, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700 flex items-center justify-center">
                      <Users className="text-purple-400" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h4 className="text-white">{council.name}</h4>
                      <span className="text-purple-400 text-sm font-mono">{council.year}</span>
                    </div>
                    <p className="text-gray-300">{council.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-8">
            <p className="text-gray-300 italic">
              &quot;This wasn&apos;t adding to scripture—it was infallibly reasserting what had already been taught.&quot;
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* Video 3 */}
      <div className="mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kKNlnW6V3yo"
            title="Wes Huff gets THIS wrong about the Bible"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* Council of Carthage Details */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">Council of Carthage (397 AD) - Key Details</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Council of Carthage was a pivotal moment in the history of the biblical canon. Here are the key facts:
          </p>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ScrollText className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">Main Goal</h4>
                  <p className="text-gray-300">
                    To <strong className="text-white">standardize Church discipline</strong> and <strong className="text-white">
                    approve the canon of Scripture</strong> for public reading in church.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">Canon 36</h4>
                  <p className="text-gray-300">
                    Confirmed listing the <strong className="text-white">73 books</strong> of the Bible used in the 
                    Catholic Church today—<strong className="text-white">46 Old Testament</strong> (including the 
                    Deuterocanonical books) and <strong className="text-white">27 New Testament</strong> books.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">Authority</h4>
                  <p className="text-gray-300">
                    The decisions were <strong className="text-white">administrative</strong>, not claiming divine 
                    authority independently, and Rome was to be consulted for final confirmation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">Signatories</h4>
                  <p className="text-gray-300">
                    The acts were signed by numerous bishops, including <strong className="text-white">St. Augustine</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h4 className="text-white mb-3">Additional Canons Addressed:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Clergy discipline and moral conduct</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Rules for ordination, Eucharistic practice, and church governance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>The handling of heretics (e.g., Donatists)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Liturgical customs (e.g., fasting before Mass, annual councils, proper celebration of Easter)</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300">
            This council laid the <strong className="text-white">foundation for Western canon law</strong> and helped 
            preserve <strong className="text-white">unity and orthodoxy</strong> in the early Church.
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
        <h2 className="text-white mb-6">Conclusion: Why 73 Books?</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Catholics affirm the 73-book canon because:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {reasonsFor73.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-800 rounded-lg p-6 flex items-start gap-3"
              >
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8">
            <p className="text-white text-lg mb-4">
              If the Holy Spirit guided the Church to affirm the New Testament canon, why would we not also trust Him 
              to guide the Old Testament canon?
            </p>
            <p className="text-gray-300 italic">
              &quot;We either trust that the Holy Spirit guided that process—or we don&apos;t.&quot;
            </p>
          </div>

          <p className="text-white text-lg mt-8">
            The Catholic Bible stands not on late innovation, but on <strong>ancient fidelity</strong>.
          </p>
        </div>
      </motion.section>

      {/* Visual Comparison */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/10 border border-green-800 rounded-lg p-8">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Book className="text-green-400" size={24} />
              Catholic Bible (73 Books)
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>46 Old Testament books</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>27 New Testament books</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>Includes deuterocanonical books</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>Used by the early Church</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>Maintained for 2,000 years</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Book className="text-gray-400" size={24} />
              Protestant Bible (66 Books)
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>39 Old Testament books</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400" size={16} />
                <span>27 New Testament books</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>Removed deuterocanonical books</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>Changed in 16th century</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-400" size={16} />
                <span>Based on later Jewish canon</span>
              </li>
            </ul>
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
        <div className="flex items-start gap-4">
          <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">The Authority Question Returns</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              This brings us back to the fundamental question: <em>Who has the authority to determine what is Scripture?</em>
            </p>
            <p className="text-gray-400 leading-relaxed">
              If you accept the Catholic Church&apos;s authority in determining the New Testament canon, why reject 
              its authority regarding the Old Testament? And if you reject the Church&apos;s authority entirely, on 
              what basis do you know which books are inspired? This question of authority is central to everything—
              and it leads us to explore the role of the Magisterium.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
