import { resumeFileName } from '../data/resume'

export async function generateResumePdf(): Promise<void> {
  const resumeUrl = `/${resumeFileName}`
  try {
    const resp = await fetch(resumeUrl)
    if (!resp.ok) throw new Error('Failed to fetch resume')
    const blob = await resp.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = resumeFileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download failed, opening in new tab', err)
    window.open(resumeUrl, '_blank')
  }
}
