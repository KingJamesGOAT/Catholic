import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import PageSection from './PageSection';

export default function WhatItMeans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageSection>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16 pb-8 border-b border-gray-800"
        >
          <p className="text-gray-300 italic text-lg mb-2">
            "The Church is the pillar and foundation of truth."
          </p>
          <p className="text-gray-500">— 1 Timothy 3:15</p>
        </motion.div>

        <h2 className="text-white mb-12 text-center">What Does It Mean to Be Catholic?</h2>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white mb-4">The Core Identity of Catholicism</h3>
            <p>
              To be Catholic is to be part of a living tradition that extends back to Jesus Christ and His apostles. 
              The word "Catholic" means "universal," reflecting the Church's mission to all peoples, all times, and all places. 
              The Catholic faith is rooted in Scripture, guided by Sacred Tradition, and shepherded by the Magisterium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white mb-4">The Creed: What We Believe</h3>
            <p className="mb-4">
              The Catholic faith is summarized in the Nicene Creed, professed by Catholics worldwide at every Mass:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 italic text-gray-400">
              <p>
                I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.
                I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages...
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-white mb-4">The Seven Sacraments</h3>
            <p className="mb-4">
              Catholic life centers on the seven sacraments, instituted by Christ as channels of grace:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Baptism', desc: 'Entry into new life in Christ' },
                { name: 'Confirmation', desc: 'Strengthening by the Holy Spirit' },
                { name: 'Eucharist', desc: 'Reception of Christ\'s Body and Blood' },
                { name: 'Reconciliation', desc: 'Forgiveness of sins' },
                { name: 'Anointing of the Sick', desc: 'Healing and comfort' },
                { name: 'Holy Orders', desc: 'Ordination to sacred ministry' },
                { name: 'Matrimony', desc: 'Sacred union of man and woman' },
              ].map((sacrament, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 hover:bg-gray-900/50 transition-colors"
                >
                  <h4 className="text-white mb-1">{sacrament.name}</h4>
                  <p className="text-gray-400">{sacrament.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-white mb-4">The Church as the Body of Christ</h3>
            <p>
              The Catholic Church is not merely a human institution but the mystical Body of Christ on earth. 
              Through Baptism, believers are incorporated into this Body, united with Christ as the Head and with 
              one another as members. This unity transcends time and space, connecting the Church on earth with 
              the saints in heaven and the souls in purgatory—what we call the Communion of Saints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-white mb-4">A Life of Faith, Hope, and Love</h3>
            <p>
              To be Catholic is to live out the theological virtues—faith in God's revelation, hope in His promises, 
              and love for God and neighbor. It means participating in the sacramental life of the Church, growing in 
              prayer, studying Sacred Scripture and Tradition, and serving others in imitation of Christ. The Catholic 
              life is one of continuous conversion, ever growing closer to God and His truth.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PageSection>
  );
}
