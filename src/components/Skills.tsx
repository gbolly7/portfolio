import { motion } from 'framer-motion'
import { skills } from '../data/resume'

const categoryColors: Record<string, string> = {
  Languages: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
  Backend: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  Frontend: 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
  Databases: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  'Cloud & Deploy': 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
  'Version Control': 'from-slate-500/20 to-gray-500/20 border-slate-500/30',
}

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-surface-raised/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// skills</p>
        <h2 className="section-title">Tech Stack</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`glass-card p-6 bg-gradient-to-br ${categoryColors[category] || 'from-surface-card to-surface-raised'}`}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-gray-300 bg-surface/60 px-3 py-1.5 rounded-lg border border-surface-border hover:border-accent/50 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
