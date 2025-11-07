import TopicLayout from '../Journey/TopicLayout';
import { motion } from 'motion/react';
import { Separator } from '../ui/separator';
import { Key, Crown, BookOpen, Users, CheckCircle, MessageSquare, Award, AlertCircle, ScrollText } from 'lucide-react';

export default function PeterFirstPope() {
  const gospelEvidence = [
    {
      text: 'Peter\'s name is mentioned over 150 times — more than all the other apostles combined.',
      icon: MessageSquare
    },
    {
      text: 'He is always listed first in apostolic lists (e.g., Matthew 10:2).',
      icon: Users
    }
  ];

  const actsLeadership = [
    {
      action: 'Leads the selection of Judas\' replacement',
      reference: 'Acts 1:15–26'
    },
    {
      action: 'Gives the first public sermon at Pentecost',
      reference: 'Acts 2:14–41'
    },
    {
      action: 'Performs the first healing',
      reference: 'Acts 3:1–10'
    },
    {
      action: 'Is the first to preach to Gentiles',
      reference: 'Acts 10'
    },
    {
      action: 'Settles doctrinal dispute at the Council of Jerusalem',
      reference: 'Acts 15'
    }
  ];

  const churchFathers = [
    {
      name: 'St. Irenaeus',
      year: 'c. 180 AD',
      quote: '...the Church founded and organized at Rome by the two most glorious apostles, Peter and Paul...'
    },
    {
      name: 'Tertullian',
      year: 'c. 200 AD',
      quote: 'Refers to the bishop of Rome as the successor of Peter.'
    },
    {
      name: 'St. Cyprian',
      year: 'c. 250 AD',
      quote: 'The primacy is given to Peter...'
    }
  ];

  const objections = [
    {
      objection: 'Peter wasn\'t in Rome.',
      response: 'Historical evidence (e.g., writings of Clement, Ignatius, Irenaeus) strongly affirm Peter\'s Roman ministry and martyrdom.'
    },
    {
      objection: 'Peter never called himself Pope.',
      response: 'Titles develop; the early Church emphasized roles and authority. "Pope" (from Latin papa) was used later to designate his unique pastoral authority.'
    },
    {
      objection: 'All apostles were equal.',
      response: 'All shared in apostolic ministry, but Peter was singled out for specific responsibilities (Luke 22:32; John 21:15–17).'
    }
  ];

  return (
    <TopicLayout
      title="Was Peter the First Pope?"
      subtitle="Examining the biblical and historical evidence for the papacy"
      quote={{
        text: "You are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven.",
        source: "Matthew 16:18-19"
      }}
    >
      {/* Introduction */}
      <div className="space-y-6 text-gray-300 leading-relaxed mb-16">
        <p>
          The Catholic Church teaches that St. Peter was the first Pope — the visible head of the Church on earth, 
          appointed by Christ Himself. This belief is rooted in Scripture, affirmed by early Christian writings, and 
          sustained through an unbroken line of successors in Rome.
        </p>

        <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <p className="text-gray-300 italic mb-3">
            &quot;The Lord made Simon alone, whom he named Peter, the &apos;rock&apos; of his Church. He gave him the 
            keys of his Church and instituted him shepherd of the whole flock.&quot;
          </p>
          <p className="text-gray-500">— Catechism of the Catholic Church 881</p>
        </div>
      </div>

      {/* Videos */}
      <div className="space-y-6 mb-16">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2SzRhqbVPes?start=881"
            title="Was Peter the First Pope?"
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
            src="https://www.youtube.com/embed/ZWMfxDCUbbs"
            title="Peter and the Papacy"
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
            src="https://www.youtube.com/embed/42A632z0dOA"
            title="Biblical Evidence for the Papacy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Separator className="my-16 bg-gray-800" />

      {/* I. Peter's Role in the Gospels */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">I. Peter&apos;s Role in the Gospels</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Peter, originally named Simon, is the most prominent of the apostles in the New Testament:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {gospelEvidence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-800 rounded-lg p-6 flex items-start gap-3"
              >
                <item.icon className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-white mt-8 mb-6">Matthew 16:18–19 – The Foundational Text</h3>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-white text-lg mb-2">
              &quot;You are Peter, and on this rock I will build my Church... I will give you the keys of the kingdom 
              of heaven...&quot;
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 mt-6">
            <h4 className="text-white mb-4">Key elements:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Key className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">&quot;Peter&quot;</strong> (Greek: <em>Petros</em>) means rock.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ScrollText className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    Jesus changes Simon&apos;s name — a biblical act denoting mission (cf. Abram → Abraham).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    The <strong className="text-white">&quot;keys&quot;</strong> symbolize authority (cf. Isaiah 22:22).
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
            <p className="text-gray-300 italic mb-3">
              &quot;Christ, the &apos;living stone,&apos; makes of Peter the rock of his Church. He gave him the keys 
              of the Church and instituted him shepherd of the whole flock.&quot;
            </p>
            <p className="text-gray-500">— Catechism of the Catholic Church 552</p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* II. Peter's Leadership in the Early Church */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">II. Peter&apos;s Leadership in the Early Church</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Acts of the Apostles highlights Peter&apos;s central role:
          </p>

          <div className="space-y-4">
            {actsLeadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-900/20 to-purple-900/5 border border-purple-800 rounded-lg p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center">
                  <span className="text-purple-300 font-mono text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">{item.action}</p>
                  <p className="text-purple-400 text-sm font-mono">{item.reference}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">
            Though others also played major roles (especially Paul), Peter consistently acts with recognized authority.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* III. Early Christian Witness */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">III. Early Christian Witness</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Church Fathers unanimously acknowledged Peter&apos;s unique role:
          </p>

          <div className="space-y-6">
            {churchFathers.map((father, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h4 className="text-white">{father.name}</h4>
                      <span className="text-amber-400 text-sm font-mono">{father.year}</span>
                    </div>
                    <p className="text-gray-300 italic">&quot;{father.quote}&quot;</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6">
            Rome, as the city where Peter was martyred and buried, became the natural seat of his successor.
          </p>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* IV. Apostolic Succession and the Papacy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-6">IV. Apostolic Succession and the Papacy</h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Catholic understanding is not that Peter alone mattered, but that his office continues through apostolic 
            succession:
          </p>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Crown className="text-green-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Each Pope is a successor of Peter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">
                      The office of the Pope is to preserve unity, defend truth, and shepherd the universal Church.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-300 italic mb-3">
              &quot;The Pope, Bishop of Rome and Peter&apos;s successor, is the perpetual and visible source and 
              foundation of the unity both of the bishops and of the whole company of the faithful.&quot;
            </p>
            <p className="text-gray-500">— Catechism of the Catholic Church 882</p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16 bg-gray-800" />

      {/* V. Objections Addressed */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-white mb-8">V. Objections Addressed</h2>

        <div className="space-y-6">
          {objections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-900/30 to-red-900/10 border-b border-gray-800 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                  <p className="text-red-300 text-lg">&quot;{item.objection}&quot;</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">{item.response}</p>
                </div>
              </div>
            </motion.div>
          ))}
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

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Catholic belief that Peter was the first Pope is deeply grounded in Scripture, affirmed by early Church 
            history, and realized in the continuing leadership of the bishops of Rome. The papacy exists not as a personal 
            honor, but as a pastoral office to preserve unity and truth in the Church Christ founded.
          </p>

          <div className="bg-gray-900/50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-white text-xl text-center">
              &quot;Feed my sheep.&quot;
            </p>
            <p className="text-gray-500 text-center mt-2">— John 21:17</p>
          </div>
        </div>
      </motion.section>

      {/* Bridge to Next Topic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-lg p-8"
      >
        <div className="flex items-start gap-4">
          <Users className="text-purple-400 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-white mb-4">The Succession Continues</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Peter&apos;s authority didn&apos;t die with him—it was passed on through apostolic succession to his 
              successors in Rome. This unbroken line continues to the present day with Pope Francis as the 266th 
              successor of Peter.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The papacy isn&apos;t just about one man&apos;s authority—it&apos;s about the Church&apos;s teaching 
              authority as a whole. Let&apos;s explore what that means and how the Magisterium functions.
            </p>
          </div>
        </div>
      </motion.div>
    </TopicLayout>
  );
}
