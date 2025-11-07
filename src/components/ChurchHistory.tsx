import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import PageSection from './PageSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollArea } from './ui/scroll-area';

export default function ChurchHistory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);

  const timelineEvents = [
    {
      year: '33 AD',
      title: 'Pentecost',
      description: 'The Holy Spirit descends on the apostles, marking the birth of the Church.',
      details: `On the day of Pentecost, fifty days after the Resurrection, the Holy Spirit descended upon the 
      apostles gathered in the upper room with Mary. Peter preached the first Christian sermon, and about 3,000 
      people were baptized. This event marks the official birthday of the Catholic Church. The apostles, previously 
      fearful, were transformed into bold witnesses who would spread the Gospel to the ends of the earth.`,
    },
    {
      year: '67 AD',
      title: 'Martyrdom of Peter & Paul',
      description: 'The founding apostles give their lives in Rome for Christ.',
      details: `Both St. Peter and St. Paul were martyred in Rome under Emperor Nero's persecution. Peter was 
      crucified upside down at his own request, feeling unworthy to die in the same manner as his Lord. Paul was 
      beheaded. Their witness in blood established Rome as the apostolic see, and their tombs remain beneath 
      St. Peter's Basilica and the Basilica of St. Paul Outside the Walls to this day.`,
    },
    {
      year: '325 AD',
      title: 'Council of Nicaea',
      description: 'The first ecumenical council defines Christ\'s divinity against Arianism.',
      details: `The Council of Nicaea, convened by Emperor Constantine, brought together 318 bishops to address 
      the Arian heresy, which denied Christ's full divinity. The council produced the Nicene Creed, proclaiming 
      that Jesus is "consubstantial with the Father"—of the same divine essence. This creed is still professed 
      at every Catholic Mass today, demonstrating the continuity of faith across 17 centuries.`,
    },
    {
      year: '431 AD',
      title: 'Council of Ephesus',
      description: 'Mary affirmed as Theotokos (Mother of God).',
      details: `The Council of Ephesus condemned Nestorianism and solemnly declared that Mary is truly the 
      Theotokos—the Mother of God—because she gave birth to Jesus Christ, who is one divine Person with two 
      natures. This wasn't mere honor to Mary but crucial Christology: to deny Mary as Mother of God would 
      be to divide Christ's Person. The people of Ephesus celebrated with a torchlight procession through 
      the streets.`,
    },
    {
      year: '1054 AD',
      title: 'East-West Schism',
      description: 'The Orthodox and Catholic Churches divide.',
      details: `Political, cultural, and theological tensions between Rome and Constantinople culminated in 
      mutual excommunications. The primary theological issue was the filioque clause (whether the Holy Spirit 
      proceeds from the Father alone or from the Father "and the Son"). This tragic division separated the 
      Church into Roman Catholic and Eastern Orthodox, though both retain apostolic succession and valid 
      sacraments. Efforts at reunion continue to this day.`,
    },
    {
      year: '1517 AD',
      title: 'Protestant Reformation',
      description: 'Martin Luther\'s theses spark widespread division.',
      details: `Martin Luther posted his 95 Theses challenging indulgence practices, igniting the Protestant 
      Reformation. While Luther initially sought reform within the Church, the movement led to a permanent 
      split. The Catholic Church responded with the Counter-Reformation and Council of Trent, which clarified 
      Catholic doctrine and enacted genuine reforms in clerical education and discipline. The divisions from 
      this era persist, though ecumenical dialogue has made significant progress.`,
    },
    {
      year: '1545-1563',
      title: 'Council of Trent',
      description: 'Catholic doctrine clarified and reforms enacted.',
      details: `In response to the Reformation, the Council of Trent met over 18 years to clarify Catholic 
      teaching on justification, the sacraments, Scripture and Tradition, and other disputed points. It 
      mandated seminaries for proper priestly formation, standardized the Mass, and produced the Roman 
      Catechism. Trent's doctrinal definitions remain authoritative teaching today.`,
    },
    {
      year: '1962-1965',
      title: 'Second Vatican Council',
      description: 'The Church addresses the modern world.',
      details: `Convened by Pope John XXIII and continued under Paul VI, Vatican II sought to renew the Church 
      while maintaining doctrinal continuity. It produced documents on divine revelation, the Church, the 
      liturgy, and the Church's relationship with the modern world. The council promoted active lay 
      participation, ecumenical dialogue, and engagement with contemporary culture. It remains the most 
      recent ecumenical council and continues to shape Catholic life today.`,
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
        <h2 className="text-white mb-8 text-center">Church History</h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          A journey through 2,000 years of faith, witness, and the Holy Spirit's guidance.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer hover:border-gray-700"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="text-gray-400 mb-2">{event.year}</div>
                    <h3 className="text-white mb-3">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                    <p className="text-gray-500 mt-3 text-sm">Click to learn more</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detail Dialog */}
        <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="bg-gray-900 border-gray-800 text-gray-100 max-w-2xl">
            {selectedEvent && (
              <>
                <DialogHeader>
                  <div className="text-gray-400 mb-2">{selectedEvent.year}</div>
                  <DialogTitle className="text-white">{selectedEvent.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-96 pr-4">
                  <p className="text-gray-300 leading-relaxed">{selectedEvent.details}</p>
                </ScrollArea>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </PageSection>
  );
}
