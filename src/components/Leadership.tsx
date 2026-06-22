import { motion } from 'framer-motion'
import { Users, Award } from 'lucide-react'
import { leadership, certifications } from '../data/resume'

export default function Leadership() {
  return (
    <section id="leadership" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// leadership</p>
        <h2 className="section-title">Community & Impact</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users size={18} className="text-accent" />
                <h3 className="text-white font-medium">{item.role}</h3>
              </div>
              <ul className="space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-accent shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award size={22} className="text-accent" />
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="glass-card px-4 py-2.5 text-sm text-gray-300 hover:text-accent hover:border-accent/40 transition-all"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
