import { personalInfo } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-gray-500">
          {'<'} {personalInfo.name.split(' ')[1]} Abioye &copy; {year} {' />'}
        </p>
        <p className="text-gray-600 text-sm">
          Built with React, Three.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
