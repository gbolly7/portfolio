# Gbolahan Abioye — Portfolio

A modern, interactive portfolio website built with React, Three.js 3D animations, and Tailwind CSS. Showcases backend development experience, projects, and technical skills.

## Features

- **3D Hero Scene** — Floating geometric shapes, particle field, and starfield using React Three Fiber
- **Smooth Animations** — Scroll-triggered reveals and micro-interactions via Framer Motion
- **Responsive Design** — Mobile-first layout with glass-morphism cards
- **Full Resume Content** — Experience, projects, skills, leadership, certifications, and contact

## Tech Stack

- React 18 + TypeScript
- Vite
- Three.js / @react-three/fiber / @react-three/drei
- Framer Motion
- Tailwind CSS
- Lucide React icons

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later).

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [Render](https://render.com).

## Customization

- **Resume data**: Edit `src/data/resume.ts` to update content
- **Colors & theme**: Adjust `tailwind.config.js` and `src/index.css`
- **3D scene**: Modify `src/components/HeroScene.tsx`
- **Social links**: Update GitHub/LinkedIn URLs in `src/components/Hero.tsx`

## License

MIT
