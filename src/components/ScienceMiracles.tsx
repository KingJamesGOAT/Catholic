import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import PageSection from './PageSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { ExternalLink } from 'lucide-react';

export default function ScienceMiracles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMiracle, setSelectedMiracle] = useState<typeof miracles[0] | null>(null);

  const miracles = [
    {
      title: 'Eucharistic Miracle of Lanciano',
      location: 'Lanciano, Italy (8th Century)',
      summary: 'Host and wine transformed into visible flesh and blood.',
      details: `In the 8th century, a priest doubting the Real Presence witnessed the host transform into 
      flesh and wine into blood during Mass. Scientific analysis in 1970-1971 and 1981 confirmed the flesh 
      is cardiac tissue and the blood is type AB, the same type found on the Shroud of Turin. The proteins 
      in the blood are in the same proportions as fresh blood, despite being over 1,200 years old. The 
      tissue shows no signs of preservation or mummification.`,
      sources: 'Scientific analysis by Prof. Odoardo Linoli (1971); confirmed by WHO (1976)',
    },
    {
      title: 'Our Lady of Guadalupe',
      location: 'Mexico City, Mexico (1531)',
      summary: 'Miraculous image appears on peasant\'s cloak, defying scientific explanation.',
      details: `The image of Our Lady appeared miraculously on Juan Diego's tilma (cloak made of cactus 
      fibers) in 1531. The tilma should have deteriorated within 20 years but remains intact nearly 500 
      years later. Studies show the image has no brush strokes and the pigments cannot be identified. 
      The stars on Mary's mantle match the constellation pattern over Mexico City on December 12, 1531. 
      Ophthalmologists have identified what appears to be human figures reflected in the eyes of the image, 
      consistent with the Purkinje-Sanson effect in living eyes.`,
      sources: 'Scientific studies by Dr. Philip Callahan (1979), Dr. José Aste Tönsmann (ophthalmology)',
    },
    {
      title: 'Incorruptible Saints',
      location: 'Various',
      summary: 'Bodies of holy men and women remain preserved without embalming.',
      details: `Numerous saints' bodies have been found incorrupt years or centuries after death, without 
      any embalming. St. Bernadette Soubirous (died 1879) remains incorrupt in Nevers, France. St. Catherine 
      Labouré (died 1876) shows no signs of decay. While some natural explanations exist for certain cases, 
      many display characteristics that defy natural preservation. These signs often accompany lives of 
      heroic virtue and serve as a reminder that sanctity affects not just the soul but the whole person.`,
      sources: 'Vatican documentation, medical examinations during beatification processes',
    },
    {
      title: 'Miracle of the Sun at Fatima',
      location: 'Fatima, Portugal (1917)',
      summary: '70,000 witnesses observe solar phenomenon after Marian apparition.',
      details: `On October 13, 1917, after the Virgin Mary appeared to three shepherd children, a crowd of 
      70,000 people—including skeptics and journalists—witnessed the sun appear to dance, spin, and plunge 
      toward earth before returning to normal. Witnesses included secular newspaper reporters who documented 
      the event. People's rain-soaked clothes instantly dried. The phenomenon was visible for miles but not 
      observed by astronomers elsewhere, suggesting a localized miracle rather than a solar event. Newspaper 
      reports from atheist journalists confirmed the occurrence.`,
      sources: 'Contemporary newspaper accounts (O Século, October 15, 1917); eyewitness testimonies',
    },
    {
      title: 'Miracle of Calanda',
      location: 'Calanda, Spain (1640)',
      summary: 'Amputated leg restored instantaneously after prayer to Our Lady of the Pillar.',
      details: `Miguel Juan Pellicer had his leg amputated above the knee in 1637 and the limb was buried. 
      He continued to pray to Our Lady of the Pillar and anoint his stump with oil from her shrine's lamp. 
      On March 29, 1640, his leg was fully restored overnight while he slept. Multiple witnesses testified 
      to seeing him earlier without the leg. The Church conducted a thorough investigation, including 
      exhuming the originally buried leg to confirm it was still present. King Philip IV of Spain personally 
      investigated and verified the miracle.`,
      sources: 'Ecclesiastical investigation (1641); verified by Spanish Crown; multiple witness testimonies',
    },
    {
      title: 'Lourdes Healings',
      location: 'Lourdes, France (1858-Present)',
      summary: 'Thousands of medically verified healings at Marian apparition site.',
      details: `Since the apparitions of Our Lady to St. Bernadette in 1858, millions have visited Lourdes 
      seeking healing. While 70 cases have been officially recognized as miraculous by the Church, thousands 
      more medically inexplicable healings have been documented. Each claimed miracle undergoes rigorous 
      examination by the Lourdes Medical Bureau—an international committee of doctors of all faiths and none. 
      Only cases that are instantaneous, complete, lasting, and without medical explanation are considered. 
      Even cases with alternative explanations are not declared miraculous.`,
      sources: 'Lourdes International Medical Committee; documented case files',
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
        <h2 className="text-white mb-8 text-center">Science & Miracles</h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Faith and reason are not opposed. The Church embraces both, and throughout history, 
          extraordinary signs have pointed to supernatural realities.
        </p>

        {/* Grid of Miracles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miracles.map((miracle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedMiracle(miracle)}
            >
              <h3 className="text-white mb-2 group-hover:text-gray-100">{miracle.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{miracle.location}</p>
              <p className="text-gray-400 mb-4">{miracle.summary}</p>
              <div className="flex items-center text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                <span>View details</span>
                <ExternalLink size={14} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Faith and Reason */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto bg-gray-900/30 border border-gray-800 rounded-lg p-8"
        >
          <h3 className="text-white mb-4 text-center">Faith and Reason</h3>
          <p className="text-gray-300 leading-relaxed text-center">
            The Catholic Church has never feared scientific inquiry. Many foundational scientists were 
            Catholic priests and religious: Gregor Mendel (genetics), Georges Lemaître (Big Bang theory), 
            and countless others. Faith and reason are complementary paths to truth. Miracles don't violate 
            natural law—they reveal that the Author of natural law can act beyond it when He chooses.
          </p>
        </motion.div>

        {/* Detail Dialog */}
        <Dialog open={selectedMiracle !== null} onOpenChange={() => setSelectedMiracle(null)}>
          <DialogContent className="bg-gray-900 border-gray-800 text-gray-100 max-w-2xl">
            {selectedMiracle && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-white">{selectedMiracle.title}</DialogTitle>
                  <p className="text-gray-400">{selectedMiracle.location}</p>
                </DialogHeader>
                <ScrollArea className="max-h-96 pr-4">
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{selectedMiracle.details}</p>
                    <div className="pt-4 border-t border-gray-800">
                      <p className="text-gray-500 text-sm">
                        <strong className="text-gray-400">Sources:</strong> {selectedMiracle.sources}
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </PageSection>
  );
}
