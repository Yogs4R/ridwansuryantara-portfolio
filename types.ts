export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  category: 'Web Dev' | 'Mobile Apps' | 'Design Systems' | 'Open Source' | 'AI';
  status: 'Done' | 'In Progress' | 'Planning';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  type: 'Professional' | 'Course' | 'Project';
  year: string;
  categoryColor: string;
  icon: string;
  hoverColor?: string; // Add this for colored hover effects
  credentialUrl?: string; // Link to the certificate
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  logo: string;
  period: string;
  description: string;
  color: string;
}

export interface Tool {
  name: string;
  category: 'Language' | 'Frontend' | 'Backend & DB' | 'Data & Auto' | 'Cloud & DevOps' | 'Design' | 'IDE & Tools';
  logo: string;
  url: string;
  color: string; // Tailwind color class or hex for hover
}

export interface NavItem {
  label: string;
  path: string;
}