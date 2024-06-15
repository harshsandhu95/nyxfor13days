export interface Education {
  id: number;
  institute: string;
  degree: string;
  gpa?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  title: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  link?: string;
  skills?: string[];
}
