export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string;
}

export interface Project {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  technologies: string;
  liveDemo?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
