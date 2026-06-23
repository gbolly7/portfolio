import { motion } from 'framer-motion'
import { Download, FileText, Mail, Phone, MapPin } from 'lucide-react'
import {
  personalInfo,
  education,
  experience,
  skills,
  certifications,
} from '../data/resume'
import { generateResumePdf } from '../utils/generateResumePdf'

export default function Resume() {
  return (
    <section id="resume" className="section-container bg-surface-raised/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// resume</p>
        <h2 className="section-title">My Resume</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Preview my professional background below, or download a PDF copy for recruiters and applications.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-72 shrink-0 flex flex-col gap-4"
          >
            <button onClick={generateResumePdf} className="btn-primary justify-center">
              <Download size={18} />
              Download PDF
            </button>
            <p className="text-gray-500 text-sm text-center">
              {/* One-click download — formatted for job applications */}
            </p>

            <div className="glass-card p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                <span className="text-gray-300 break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                <span className="text-gray-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-accent shrink-0" />
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 md:p-10 flex-1"
          >
            <div className="flex items-start gap-4 mb-8 pb-6 border-b border-surface-border">
              <div className="p-3 rounded-xl bg-accent/10">
                <FileText size={28} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{personalInfo.fullName}</h3>
                <p className="text-accent font-medium mt-1">{personalInfo.title}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Professional Summary
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{personalInfo.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Education
                </h4>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="text-white text-sm font-medium">{edu.degree}</p>
                      <p className="text-gray-500 text-sm">
                        {edu.school}
                        {edu.period && ` · ${edu.period}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Experience
                </h4>
                <div className="space-y-5">
                  {experience.map((job) => (
                    <div key={job.company}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <p className="text-white text-sm font-medium">
                          {job.role} — {job.company}
                        </p>
                        <span className="text-xs font-mono text-gray-500">{job.period}</span>
                      </div>
                      <ul className="space-y-1">
                        {job.highlights.slice(0, 2).map((item) => (
                          <li key={item} className="text-gray-500 text-xs flex gap-2">
                            <span className="text-accent shrink-0">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Object.values(skills).flat().map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-400 bg-surface px-2.5 py-1 rounded-md border border-surface-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Certifications
                </h4>
                <ul className="space-y-1">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-gray-500 text-xs flex gap-2">
                      <span className="text-accent shrink-0">▹</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}
