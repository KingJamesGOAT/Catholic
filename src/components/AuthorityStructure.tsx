import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Book, Users, Church } from 'lucide-react';
import PageSection from './PageSection';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function AuthorityStructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Book,
      title: 'Sacred Scripture',
      description: 'The written Word of God, inspired by the Holy Spirit and collected in the Bible.',
      details: 'The 73 books of the Catholic Bible (46 Old Testament, 27 New Testament) contain divine revelation. Scripture is inerrant in matters of faith and morals, and must be interpreted within the living Tradition of the Church.',
    },
    {
      icon: Users,
      title: 'Sacred Tradition',
      description: 'The living transmission of the Gospel, handed down from the apostles.',
      details: 'Sacred Tradition includes the teachings, practices, and customs passed down through generations, preserved by the Holy Spirit. It is not separate from Scripture but works in unity with it to convey the fullness of divine revelation.',
    },
    {
      icon: Church,
      title: 'Magisterium',
      description: 'The teaching authority of the Church, guided by the Holy Spirit.',
      details: 'The Magisterium consists of the Pope and bishops in communion with him. They authentically interpret Scripture and Tradition, ensuring the faithful transmission of Christ\'s teachings across all ages.',
    },
  ];

  const expandableSections = [
    {
      title: 'The Papacy and Apostolic Succession',
      content: `Jesus established Peter as the rock upon which He would build His Church (Matthew 16:18-19), 
      entrusting him with the keys of the kingdom. This authority has been passed down through an unbroken 
      line of succession to the current Pope. Apostolic succession ensures that the bishops of the Church 
      today stand in direct continuity with the apostles, preserving the authentic teaching of Christ.`,
    },
    {
      title: 'Ecumenical Councils',
      content: `Throughout history, the Church has convened Ecumenical Councils to address doctrinal questions 
      and heresies. From the Council of Nicaea (325 AD) which affirmed Christ's divinity, to the Second 
      Vatican Council (1962-1965) which addressed the Church's relationship with the modern world, these 
      gatherings of bishops in union with the Pope have guided the Church through changing times while 
      preserving unchanging truth.`,
    },
    {
      title: 'Infallibility and Ordinary Magisterium',
      content: `The Church teaches that the Pope, when speaking ex cathedra on matters of faith and morals, 
      is preserved from error by the Holy Spirit. This charism of infallibility also extends to the bishops 
      teaching in union with the Pope. The Ordinary Magisterium—the day-to-day teaching of the Church—also 
      carries authority and demands religious assent from the faithful.`,
    },
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
        <h2 className="text-white mb-8 text-center">Authority Structure</h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          The Catholic Church's authority rests on three pillars that work in harmony to preserve 
          and transmit divine revelation.
        </p>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                  <pillar.icon className="text-gray-300" size={32} />
                </div>
              </div>
              <h3 className="text-white text-center mb-4">{pillar.title}</h3>
              <p className="text-gray-400 text-center mb-4">{pillar.description}</p>
              <p className="text-gray-500">{pillar.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Reference */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-12 text-gray-500 italic"
        >
          Sources: Catechism of the Catholic Church (CCC 80-95)
        </motion.div>

        {/* Expandable Sections */}
        <div className="max-w-4xl mx-auto space-y-4">
          {expandableSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <Collapsible>
                <CollapsibleTrigger className="w-full bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 flex items-center justify-between group">
                  <h3 className="text-white text-left">{section.title}</h3>
                  <ChevronDown className="text-gray-400 group-hover:text-gray-300 transition-transform group-data-[state=open]:rotate-180" size={24} />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-gray-900/30 border border-t-0 border-gray-800 rounded-b-lg p-6">
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageSection>
  );
}
