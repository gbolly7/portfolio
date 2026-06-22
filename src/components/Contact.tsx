import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/resume'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-container bg-surface-raised/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-subtitle">// contact</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Open to backend development opportunities, collaborations, and interesting projects.
          Reach out and let's build something great together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
              { icon: MapPin, label: 'Location', value: personalInfo.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-200 hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-200">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-gray-400 block mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-gray-400 block mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-gray-400 block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Opening email client...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
