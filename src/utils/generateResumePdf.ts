import { jsPDF } from 'jspdf'
import {
  personalInfo,
  education,
  experience,
  projects,
  skills,
  leadership,
  certifications,
  resumeFileName,
} from '../data/resume'

const MARGIN = 20
const PAGE_WIDTH = 210
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
const LINE_HEIGHT = 5.5

function addSectionTitle(doc: jsPDF, title: string, y: number): number {
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(6, 182, 212)
  doc.text(title.toUpperCase(), MARGIN, y)
  doc.setDrawColor(6, 182, 212)
  doc.line(MARGIN, y + 2, PAGE_WIDTH - MARGIN, y + 2)
  doc.setTextColor(30, 30, 30)
  return y + 8
}

function addWrappedText(doc: jsPDF, text: string, y: number, fontSize = 9): number {
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(fontSize)
  const lines = doc.splitTextToSize(text, CONTENT_WIDTH)
  doc.text(lines, MARGIN, y)
  return y + lines.length * LINE_HEIGHT
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > 280) {
    doc.addPage()
    return MARGIN
  }
  return y
}

export function generateResumePdf(): void {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.setTextColor(20, 20, 20)
  doc.text(personalInfo.fullName, MARGIN, y)
  y += 8

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(80, 80, 80)
  doc.text(
    `${personalInfo.email}  |  ${personalInfo.phone}  |  ${personalInfo.location}`,
    MARGIN,
    y,
  )
  y += 6
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(6, 120, 140)
  doc.text(personalInfo.title, MARGIN, y)
  y += 10

  y = addSectionTitle(doc, 'Professional Summary', y)
  y = addWrappedText(doc, personalInfo.summary, y)
  y += 3
  y = addWrappedText(doc, personalInfo.highlight, y, 8.5)
  y += 6

  y = ensureSpace(doc, y, 30)
  y = addSectionTitle(doc, 'Education', y)
  for (const edu of education) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(edu.degree, MARGIN, y)
    y += LINE_HEIGHT
    doc.setFont('helvetica', 'normal')
    doc.text(`${edu.school}${edu.period ? ` — ${edu.period}` : ''}`, MARGIN, y)
    y += LINE_HEIGHT + 2
  }
  y += 2

  y = ensureSpace(doc, y, 40)
  y = addSectionTitle(doc, 'Experience', y)
  for (const job of experience) {
    y = ensureSpace(doc, y, 25)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(`${job.role} — ${job.company}`, MARGIN, y)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    doc.text(job.period, PAGE_WIDTH - MARGIN, y, { align: 'right' })
    doc.setTextColor(30, 30, 30)
    y += LINE_HEIGHT
    for (const item of job.highlights) {
      y = ensureSpace(doc, y, 10)
      y = addWrappedText(doc, `• ${item}`, y, 8.5)
      y += 1
    }
    y += 3
  }

  y = ensureSpace(doc, y, 40)
  y = addSectionTitle(doc, 'Projects', y)
  for (const project of projects.slice(0, 3)) {
    y = ensureSpace(doc, y, 20)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(project.title, MARGIN, y)
    y += LINE_HEIGHT
    for (const item of project.highlights.slice(0, 2)) {
      y = addWrappedText(doc, `• ${item}`, y, 8.5)
      y += 1
    }
    y += 2
  }

  y = ensureSpace(doc, y, 35)
  y = addSectionTitle(doc, 'Technical Skills', y)
  for (const [category, items] of Object.entries(skills)) {
    y = ensureSpace(doc, y, 10)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.text(`${category}:`, MARGIN, y)
    doc.setFont('helvetica', 'normal')
    const lines = doc.splitTextToSize(items.join(', '), CONTENT_WIDTH - 28)
    doc.text(lines, MARGIN + 28, y)
    y += lines.length * LINE_HEIGHT + 2
  }

  y = ensureSpace(doc, y, 30)
  y = addSectionTitle(doc, 'Leadership & Volunteering', y)
  for (const item of leadership.slice(0, 3)) {
    y = ensureSpace(doc, y, 12)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.text(item.role, MARGIN, y)
    y += LINE_HEIGHT
    y = addWrappedText(doc, `• ${item.highlights[0]}`, y, 8.5)
    y += 3
  }

  y = ensureSpace(doc, y, 20)
  y = addSectionTitle(doc, 'Certifications', y)
  for (const cert of certifications) {
    y = addWrappedText(doc, `• ${cert}`, y, 8.5)
    y += 1
  }

  doc.save(resumeFileName)
}
