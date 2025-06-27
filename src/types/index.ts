export interface Skill {
    name: string;
    icon: string;
    color: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export interface Service {
    id: number;
    title: string;
    icon: string;
    items: string[];
}

export interface ContactMethod {
    icon: string;
    text: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
