export const personalInfo = {
  name: 'Abioye Gbolahan',
  fullName: 'Abioye Gbolahan Omobonilara',
  title: 'Fullstack Developer',
  tagline: 'Building scalable systems for thousands of users',
  email: 'abioye5678gbolahan@gmail.com',
  phone: '+234 907 270 6879',
  location: 'Lagos, Nigeria',
  summary:
    'Computer Engineering undergraduate with hands-on experience in backend development, cloud deployment, database management, and software engineering. Proficient in building scalable web applications using Django, Django REST Framework, PostgreSQL, and cloud platforms such as Render and Cloudinary.',
  highlight:
    'Architected a Django REST Framework backend with 30+ REST API endpoints, enabling core ASVA platform functionality for 7,000+ university users, and deployed the system on Render for live access.',
}

export const education = [
  {
    degree: 'B.Eng. in Computer Engineering',
    school: 'Afe Babalola University, Ado-Ekiti',
    period: 'Expected 2028',
  },
  {
    degree: 'WASSCE',
    school: 'Ogunlesi Model Secondary School',
    period: '2020 - 2022',
  },
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'ASVA Software Team',
    period: 'November 2025 – June 2026',
    highlights: [
      'Served as a key developer and core contributor to the ASVA Website — a comprehensive all-in-one student academic platform.',
      'Built and maintained RESTful APIs and backend services using Django.',
      'Designed and managed databases with PostgreSQL to support diverse feature requirements.',
      'Handled deployment pipelines via Vercel and Render, ensuring high availability and smooth CI/CD workflows.',
    ],
  },
  {
    role: 'Data Entry & Software Development Intern',
    company: 'HiiT Plc',
    period: 'July 2025 – September 2025',
    highlights: [
      'Maintained and optimized organizational databases, improving data accuracy, consistency, and reliability.',
      'Structured and managed large datasets to enhance data accessibility and reporting efficiency.',
      'Completed intensive hands-on software development training covering programming fundamentals and system logic.',
      'Debugged and resolved 10 distinct software issues during training and development projects.',
    ],
  },
]

export const projects = [
  {
    title: 'ABUAD Salt Valley Associate (ASVA) Website',
    description:
      'Comprehensive all-in-one student academic platform serving 7,000+ university users across the ABUAD ecosystem.',
    tech: ['Django REST Framework', 'PostgreSQL', 'Neon', 'Cloudinary', 'Render'],
    highlights: [
      'Designed and developed 30+ RESTful API endpoints for authentication, content management, and platform operations.',
      'Built scalable backend architecture with PostgreSQL on Neon for 5,000+ users.',
      'Integrated Cloudinary for efficient media storage and optimized content delivery.',
      'Deployed and maintained production backend on Render.',
    ],
    featured: true,
  },
  {
    title: 'ASVA Hub',
    description:
      'Backend platform with secure authentication, payment processing, and administrative tools.',
    tech: ['Django REST Framework', 'JWT', 'PostgreSQL', 'AI Integration'],
    highlights: [
      'Engineered secure authentication, payment processing, and verification systems.',
      'Created administrative tools for user management and platform operations.',
      'Participated in AI feature testing and system validation.',
      'Collaborated with a team of 10 developers on system design and API development.',
    ],
    featured: true,
  },
  {
    title: 'E-Commerce Website',
    description:
      'Full-featured responsive e-commerce platform with product management and order processing.',
    tech: ['Django', 'Django Templates', 'PostgreSQL', 'HTML/CSS'],
    highlights: [
      'Created responsive platform with product listing, detail pages, shopping cart, and order management.',
    ],
    featured: false,
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Professional portfolio showcasing projects and technical skills with interactive UI.',
    tech: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Authored a professional portfolio with responsive layouts and interactive UI components.',
      'Integrated 3D animations and modern frontend patterns.',
    ],
    featured: false,
  },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'SQL', 'C++'],
  Backend: ['Django', 'Django REST Framework', 'REST APIs', 'JWT Authentication', 'Postman'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Neon'],
  'Cloud & Deploy': ['Render', 'Vercel', 'Cloudinary'],
  'Version Control': ['Git', 'GitHub'],
}

export const leadership = [
  {
    role: 'NUESA Welfare Committee Member',
    highlights: [
      'Collaborated with 30+ committee members to address student welfare concerns for 200+ ABUAD Engineering students.',
      'Served as liaison between students and the association on welfare-related matters.',
    ],
  },
  {
    role: 'SRC Mental Health Committee Member',
    highlights: [
      'Contributed to initiatives reducing stigma and encouraging mental health support for 5,000+ ABUAD students.',
      'Organized seminars and outreach with 40+ committee members.',
    ],
  },
  {
    role: 'ASVA Software Development Team',
    highlights: [
      'Led backend development for the ASVA Website, managing APIs, database structures, and system integrations.',
      'Coordinated AI testing and partnered with 10+ developers.',
    ],
  },
  {
    role: 'Campus to Career 2.0 — Volunteer',
    highlights: [
      'Managed registration and coordination for 300+ attending ABUAD students.',
      'Facilitated event logistics and welfare of 10+ guests.',
    ],
  },
  {
    role: 'AFARA Initiative Campus Ambassador',
    highlights: [
      'Backed student recruitment campaigns through social media and physical outreach to 100+ students.',
      'Supported organizing awareness and engagement activities.',
    ],
  },
]

export const certifications = [
  'Python Programming Certification — HiiT Plc',
  'Django Web Development Certification — HiiT Plc',
  'Virtual Assistance Certification — HiiT Plc',
  'Digital Literacy Certification — HiiT Plc',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '30+', label: 'API Endpoints' },
  { value: '7K+', label: 'Platform Users' },
  { value: '10+', label: 'Team Collaborators' },
  { value: '4', label: 'Certifications' },
]
