import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-surface-raised/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// experience</p>
        <h2 className="section-title">Where I've Worked</h2>

        <div className="relative mt-12">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-surface" />

                <div className="glass-card p-6 md:p-8 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Briefcase size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                        <p className="text-accent text-sm">{job.company}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-gray-500 md:text-right">{job.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li key={item} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
