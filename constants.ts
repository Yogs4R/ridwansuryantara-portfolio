import { Project, Certification, Education, Tool } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Analytics',
    description: 'A comprehensive dashboard for monitoring sales metrics, inventory levels, and customer insights in real-time.',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    category: 'Web Dev',
    demoUrl: '#',
    codeUrl: '#',
    status: 'Done'
  },
  {
    id: '2',
    title: 'TaskFlow Mobile',
    description: 'Cross-platform mobile application for personal productivity with offline synchronization and team sharing features.',
    tags: ['Flutter', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    category: 'Mobile Apps',
    demoUrl: '#',
    codeUrl: '#',
    status: 'In Progress'
  },
  {
    id: '3',
    title: 'Weather API Wrapper',
    description: 'Lightweight TypeScript wrapper for major weather providers, normalizing data structures for easier integration.',
    tags: ['TypeScript', 'Node'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop',
    category: 'Open Source',
    codeUrl: '#',
    status: 'Done'
  },
  {
    id: '4',
    title: 'SaaS Landing Page',
    description: 'High-conversion landing page template designed for SaaS startups featuring modern animations and clean typography.',
    tags: ['Tailwind', 'HTML5'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    category: 'Web Dev',
    demoUrl: '#',
    codeUrl: '#',
    status: 'Done'
  },
  {
    id: '5',
    title: 'AI Content Gen',
    description: 'Experimental project using OpenAI API to generate marketing copy based on product descriptions.',
    tags: ['Python', 'FastAPI'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    category: 'AI',
    codeUrl: '#',
    status: 'Planning'
  },
  {
    id: '6',
    title: 'Crypto Wallet UI',
    description: 'A pixel-perfect implementation of a modern crypto wallet design with dark mode support.',
    tags: ['Figma', 'CSS Grid'],
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop',
    category: 'Design Systems',
    demoUrl: '#',
    codeUrl: '#',
    status: 'Done'
  },
  {
    id: '7',
    title: 'Fitness Tracker Pro',
    description: 'Mobile app to track workouts, nutrition, and sleep with social sharing features and progress visualization.',
    tags: ['React Native', 'Redux'],
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop',
    category: 'Mobile Apps',
    demoUrl: '#',
    codeUrl: '#',
    status: 'Done'
  },
  {
    id: '8',
    title: 'Rust CLI Tool',
    description: 'A high-performance command line tool for efficient file management and automation tasks.',
    tags: ['Rust', 'CLI'],
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop',
    category: 'Open Source',
    codeUrl: '#',
    status: 'In Progress'
  }
];

export const CERTIFICATIONS: Certification[] = [
  // Professional Certifications
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Issued Jan 2023',
    year: '2023',
    type: 'Professional',
    description: 'Validated expertise in designing distributed systems on AWS.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-orange-400',
    icon: 'cloud',
    hoverColor: 'hover:border-[#FF9900] hover:ring-1 hover:ring-[#FF9900]',
    credentialUrl: '#'
  },
  {
    id: '2',
    title: 'Google Professional Cloud Developer',
    issuer: 'Google',
    date: 'Issued Dec 2022',
    year: '2022',
    type: 'Professional',
    description: 'Demonstrated proficiency in building scalable and highly available applications.',
    imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-blue-500',
    icon: 'dns',
    hoverColor: 'hover:border-[#4285F4] hover:ring-1 hover:ring-[#4285F4]',
    credentialUrl: '#'
  },
  {
    id: 'prof3',
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: 'Issued Nov 2022',
    year: '2022',
    type: 'Professional',
    description: 'Skills regarding the administration of Kubernetes clusters.',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-38663e420360?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-blue-600',
    icon: 'dhcp',
    hoverColor: 'hover:border-[#326CE5] hover:ring-1 hover:ring-[#326CE5]',
    credentialUrl: '#'
  },
  {
    id: 'prof4',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Issued Oct 2022',
    year: '2022',
    type: 'Professional',
    description: 'Foundational knowledge of cloud services and how those services are provided with Azure.',
    imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a2307e68?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-blue-400',
    icon: 'cloud_queue',
    hoverColor: 'hover:border-[#0078D4] hover:ring-1 hover:ring-[#0078D4]',
    credentialUrl: '#'
  },
  {
    id: 'prof5',
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Issued Sep 2022',
    year: '2022',
    type: 'Professional',
    description: 'Infrastructure as Code concepts and Terraform CLI workflow.',
    imageUrl: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-purple-500',
    icon: 'storage',
    hoverColor: 'hover:border-[#7B42BC] hover:ring-1 hover:ring-[#7B42BC]',
    credentialUrl: '#'
  },
  // Course Certifications
  {
    id: '3',
    title: 'Advanced React and Redux',
    issuer: 'Udemy',
    date: 'Completed Mar 2023',
    year: '2023',
    type: 'Course',
    description: 'Mastered modern React patterns, Redux Toolkit, and performance optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-indigo-600',
    icon: 'code',
    hoverColor: 'hover:border-[#61DAFB] hover:ring-1 hover:ring-[#61DAFB]',
    credentialUrl: '#'
  },
  {
    id: '4',
    title: 'Data Structures & Algorithms',
    issuer: 'Coursera',
    date: 'Completed Nov 2021',
    year: '2021',
    type: 'Course',
    description: 'In-depth coverage of algorithmic efficiency, graph theory, and sorting techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-emerald-600',
    icon: 'data_object',
    hoverColor: 'hover:border-emerald-500 hover:ring-1 hover:ring-emerald-500',
    credentialUrl: '#'
  },
  {
    id: 'course3',
    title: 'Vue.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'Completed Aug 2021',
    year: '2021',
    type: 'Course',
    description: 'Building Vue.js applications from scratch.',
    imageUrl: 'https://images.unsplash.com/photo-1655720406100-3f3c2b189736?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-green-500',
    icon: 'view_agenda',
    hoverColor: 'hover:border-[#4FC08D] hover:ring-1 hover:ring-[#4FC08D]',
    credentialUrl: '#'
  },
  {
    id: 'course4',
    title: 'Modern GraphQL with Node.js',
    issuer: 'Udemy',
    date: 'Completed Jul 2021',
    year: '2021',
    type: 'Course',
    description: 'Building scalable APIs with GraphQL.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-pink-600',
    icon: 'api',
    hoverColor: 'hover:border-[#E10098] hover:ring-1 hover:ring-[#E10098]',
    credentialUrl: '#'
  },
  {
    id: 'course5',
    title: 'Complete Python Bootcamp',
    issuer: 'Udemy',
    date: 'Completed Jun 2021',
    year: '2021',
    type: 'Course',
    description: 'From zero to hero in Python.',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-yellow-600',
    icon: 'terminal',
    hoverColor: 'hover:border-[#3776AB] hover:ring-1 hover:ring-[#3776AB]',
    credentialUrl: '#'
  },
  // Project Certifications
  {
    id: 'p1',
    title: 'Web Security Assessment Project',
    issuer: 'OffSec',
    date: 'Oct 2023',
    year: '2023',
    type: 'Project',
    description: 'Completed a full security audit of a distributed web application.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-red-500',
    icon: 'security',
    hoverColor: 'hover:border-red-500 hover:ring-1 hover:ring-red-500',
    credentialUrl: '#'
  },
  {
    id: 'p2',
    title: 'ML Model Deployment Pipeline',
    issuer: 'IBM',
    date: 'Aug 2023',
    year: '2023',
    type: 'Project',
    description: 'Designed and implemented an automated pipeline for ML model retraining.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    categoryColor: 'bg-purple-600',
    icon: 'neurology',
    hoverColor: 'hover:border-purple-600 hover:ring-1 hover:ring-purple-600',
    credentialUrl: '#'
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    school: 'University of Technology',
    degree: 'Master of Computer Science',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=128&h=128&fit=crop&q=80',
    period: '2020 — 2022',
    description: 'Specialized in Artificial Intelligence and Distributed Systems. Graduated with honors (Cum Laude). Thesis on "Optimizing Neural Networks for Edge Devices".',
    color: 'border-primary'
  },
  {
    id: '2',
    school: 'State University',
    degree: 'Bachelor of Informatics Engineering',
    logo: 'https://images.unsplash.com/photo-1592280771884-47732dc85a52?w=128&h=128&fit=crop&q=80',
    period: '2016 — 2020',
    description: 'Focused on Software Engineering and Web Technologies. Active member of the Google Developer Student Club. Led the university hackathon team to 1st place in 2019.',
    color: 'border-border-dark'
  },
  {
    id: '3',
    school: 'Vocational High School 1',
    degree: 'Software Engineering',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=128&h=128&fit=crop&q=80',
    period: '2013 — 2016',
    description: 'Built strong fundamentals in Java, C++, and Database Management. Completed 6-month internship at a local software house building PHP applications.',
    color: 'border-border-dark'
  }
];

export const ALL_TOOLS: Tool[] = [
  // Language
  { name: 'JavaScript', category: 'Language', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg', color: 'hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E] group-hover:text-[#F7DF1E]' },
  { name: 'TypeScript', category: 'Language', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg', color: 'hover:bg-[#3178C6]/10 hover:border-[#3178C6] group-hover:text-[#3178C6]' },
  { name: 'Python', category: 'Language', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg', color: 'hover:bg-[#3776AB]/10 hover:border-[#3776AB] group-hover:text-[#3776AB]' },
  { name: 'Go', category: 'Language', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/go.svg', color: 'hover:bg-[#00ADD8]/10 hover:border-[#00ADD8] group-hover:text-[#00ADD8]' },
  
  // Frontend
  { name: 'React', category: 'Frontend', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg', color: 'hover:bg-[#61DAFB]/10 hover:border-[#61DAFB] group-hover:text-[#61DAFB]' },
  { name: 'Next.js', category: 'Frontend', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg', color: 'hover:bg-white/10 hover:border-white group-hover:text-white' },
  { name: 'Vue.js', category: 'Frontend', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vuedotjs.svg', color: 'hover:bg-[#4FC08D]/10 hover:border-[#4FC08D] group-hover:text-[#4FC08D]' },
  { name: 'Tailwind', category: 'Frontend', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg', color: 'hover:bg-[#06B6D4]/10 hover:border-[#06B6D4] group-hover:text-[#06B6D4]' },
  
  // Backend & DB
  { name: 'Node.js', category: 'Backend & DB', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg', color: 'hover:bg-[#339933]/10 hover:border-[#339933] group-hover:text-[#339933]' },
  { name: 'PostgreSQL', category: 'Backend & DB', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg', color: 'hover:bg-[#4169E1]/10 hover:border-[#4169E1] group-hover:text-[#4169E1]' },
  { name: 'MongoDB', category: 'Backend & DB', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg', color: 'hover:bg-[#47A248]/10 hover:border-[#47A248] group-hover:text-[#47A248]' },
  { name: 'Redis', category: 'Backend & DB', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/redis.svg', color: 'hover:bg-[#DC382D]/10 hover:border-[#DC382D] group-hover:text-[#DC382D]' },

  // Data & Auto
  { name: 'Pandas', category: 'Data & Auto', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg', color: 'hover:bg-[#150458]/10 hover:border-[#150458] group-hover:text-[#150458]' },
  { name: 'TensorFlow', category: 'Data & Auto', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tensorflow.svg', color: 'hover:bg-[#FF6F00]/10 hover:border-[#FF6F00] group-hover:text-[#FF6F00]' },
  { name: 'Selenium', category: 'Data & Auto', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/selenium.svg', color: 'hover:bg-[#43B02A]/10 hover:border-[#43B02A] group-hover:text-[#43B02A]' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonwebservices.svg', color: 'hover:bg-[#FF9900]/10 hover:border-[#FF9900] group-hover:text-[#FF9900]' },
  { name: 'Docker', category: 'Cloud & DevOps', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg', color: 'hover:bg-[#2496ED]/10 hover:border-[#2496ED] group-hover:text-[#2496ED]' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg', color: 'hover:bg-[#326CE5]/10 hover:border-[#326CE5] group-hover:text-[#326CE5]' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg', color: 'hover:bg-[#2088FF]/10 hover:border-[#2088FF] group-hover:text-[#2088FF]' },

  // Design
  { name: 'Figma', category: 'Design', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg', color: 'hover:bg-[#F24E1E]/10 hover:border-[#F24E1E] group-hover:text-[#F24E1E]' },
  { name: 'Adobe XD', category: 'Design', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobexd.svg', color: 'hover:bg-[#FF61F6]/10 hover:border-[#FF61F6] group-hover:text-[#FF61F6]' },

  // IDE & Tools
  { name: 'VS Code', category: 'IDE & Tools', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg', color: 'hover:bg-[#007ACC]/10 hover:border-[#007ACC] group-hover:text-[#007ACC]' },
  { name: 'Postman', category: 'IDE & Tools', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg', color: 'hover:bg-[#FF6C37]/10 hover:border-[#FF6C37] group-hover:text-[#FF6C37]' },
  { name: 'Git', category: 'IDE & Tools', url: '#', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg', color: 'hover:bg-[#F05032]/10 hover:border-[#F05032] group-hover:text-[#F05032]' },
];