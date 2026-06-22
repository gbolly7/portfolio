import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { personalInfo, education } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.p variants={fadeUp} custom={0} className="section-subtitle">
          // about me
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="section-title">
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 mt-8">
          <motion.div variants={fadeUp} custom={2} className="md:col-span-3 space-y-6">
            <p className="text-gray-400 leading-relaxed text-lg">{personalInfo.summary}</p>
            <p className="text-gray-300 leading-relaxed border-l-2 border-accent pl-4">
              {personalInfo.highlight}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="md:col-span-2">
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <GraduationCap size={20} className="text-accent" />
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="border-l border-surface-border pl-4">
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                  {edu.period && (
                    <p className="text-accent text-xs font-mono mt-1">{edu.period}</p>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-surface-border">
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
