export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: "frontend" | "backend";
  label: string;
  techs: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  image: string | null;
  year: number;
}

export interface ExperienceItem {
  id: number;
  type: "work" | "education";
  title: string;
  institution: string;
  period: string;
  bullets: string[];
  stack: string[];
}
