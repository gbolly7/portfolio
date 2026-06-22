import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// projects</p>
        <h2 className="section-title">Featured Work</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-6 md:p-8 group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FolderGit2 size={24} className="text-accent" />
                </div>
                {project.featured && (
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="text-gray-500 text-xs flex gap-2">
                    <span className="text-accent shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-gray-400 bg-surface-raised px-2.5 py-1 rounded-md border border-surface-border"
                  >
                    {t}
                  </span>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-light ml-auto px-2.5 py-1 rounded-md border border-accent/30 hover:border-accent transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live Site
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
