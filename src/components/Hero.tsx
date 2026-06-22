import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo, stats } from '../data/resume'
import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-accent text-sm mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {personalInfo.name.split(' ')[1]}{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-6"
          >
            {personalInfo.title} &middot; Computer Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {personalInfo.tagline}. Specializing in Django, REST APIs, PostgreSQL, and cloud deployment
            for production-scale applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-gray-500 hover:text-accent transition-colors animate-bounce inline-block">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:flex flex-col gap-4 z-10">
        {[
          { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          { icon: Github, href: 'https://github.com', label: 'GitHub' },
          { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="p-3 glass-card text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
