import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Book, Video, FileText, ExternalLink } from 'lucide-react';
import PageSection from './PageSection';
import { Button } from './ui/button';

export default function LearnMore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const books = [
    {
      title: 'Catechism of the Catholic Church',
      author: 'Catholic Church',
      description: 'The definitive summary of Catholic doctrine and teaching.',
    },
    {
      title: 'Mere Christianity',
      author: 'C.S. Lewis',
      description: 'A brilliant defense of the Christian faith and its core beliefs.',
    },
    {
      title: 'The Case for Catholicism',
      author: 'Trent Horn',
      description: 'Answers to classic and contemporary Protestant objections.',
    },
    {
      title: 'Theology and Sanity',
      author: 'Frank Sheed',
      description: 'Clear explanations of complex theological concepts.',
    },
    {
      title: 'The Spirit of Catholicism',
      author: 'Karl Adam',
      description: 'A beautiful portrait of what makes Catholicism unique.',
    },
    {
      title: 'Rome Sweet Home',
      author: 'Scott & Kimberly Hahn',
      description: 'A Protestant minister\'s journey to the Catholic Church.',
    },
  ];

  const videos = [
    {
      title: 'Bishop Robert Barron',
      description: 'Word on Fire - Engaging Catholic teaching for the modern world',
    },
    {
      title: 'The Counsel of Trent',
      description: 'Trent Horn - Apologetics and answers to tough questions',
    },
    {
      title: 'Pints with Aquinas',
      description: 'Matt Fradd - Theology, philosophy, and conversation',
    },
    {
      title: 'Ascension Presents',
      description: 'Fr. Mike Schmitz - Short, powerful explanations of the faith',
    },
  ];

  const studyGuides = [
    'Introduction to Catholic Doctrine',
    'Scripture and Tradition Study Guide',
    'The Seven Sacraments Explained',
    'Church History Timeline',
    'Prayer Guide for Beginners',
  ];

  return (
    <PageSection>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-white mb-8 text-center">Learn More</h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Continue your journey with these carefully selected resources for deeper understanding of the Catholic faith.
        </p>

        {/* Recommended Books */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Book className="text-gray-400" size={28} />
            <h3 className="text-white">Recommended Books</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300"
              >
                <h4 className="text-white mb-2">{book.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{book.author}</p>
                <p className="text-gray-500">{book.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Series */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Video className="text-gray-400" size={28} />
            <h3 className="text-white">Video Resources</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white mb-2">{video.title}</h4>
                    <p className="text-gray-400">{video.description}</p>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-gray-400 transition-colors ml-4 flex-shrink-0" size={20} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Study Guides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-gray-400" size={28} />
            <h3 className="text-white">Downloadable Study Guides</h3>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {studyGuides.map((guide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-colors cursor-pointer group"
                >
                  <span className="text-gray-300">{guide}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-300 group-hover:text-gray-300"
                  >
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm text-center">
              Note: These are example study guides. In a live site, these would link to actual PDF resources.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-b from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-12"
        >
          <h3 className="text-white mb-4">Ready to Take the Next Step?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If you're interested in learning more about the Catholic faith or exploring the possibility 
            of becoming Catholic, reach out to your local parish to inquire about RCIA (Rite of Christian 
            Initiation of Adults).
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Find a Parish Near You
          </Button>
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
