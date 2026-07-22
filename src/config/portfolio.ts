/**
 * Centralized Portfolio Configuration
 * 
 * This file contains all configurable portfolio data including personal info,
 * social links, projects, experience, skills, and metadata.
 * 
 * To customize this portfolio for yourself:
 * 1. Update the values in this file
 * 2. Update .env with your EmailJS credentials
 * 3. Update metadata in index.html if needed
 */

import { Experience, Project } from '@/types';

// ============================================================
// PERSONAL INFORMATION
// ============================================================
export const PERSONAL = {
    name: "Jian Raphael Cudiamat",
    title: "Backend Engineer",
    shortBio: "I engineer scalable systems that power the modern web.",
    fullBio: "Specializing in robust API design, distributed architecture, and high-performance applications. Turning complex problems into elegant code.",
    status: "System Online",
} as const;

// ============================================================
// SOCIAL LINKS
// ============================================================
export const SOCIAL = {
    github: "https://github.com/Shunsena-Jian",
    linkedin: "https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/",
    email: "jian.r.cudiamat@gmail.com",
    emailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=jian.r.cudiamat@gmail.com",
} as const;

// ============================================================
// SITE METADATA
// ============================================================
export const METADATA = {
    title: "Cudiamat Portfolio",
    description: "A high-tech, terminal-themed portfolio designed for backend engineers.",
    keywords: ["backend", "portfolio", "web developer", "API", "engineering"],
} as const;

// ============================================================
// CONTACT SETTINGS
// ============================================================
export const CONTACT = {
    defaultStatusMessage: "Have a project in mind or just want to say hi? I'd love to hear from you.",
    formPlaceholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Tell me about your project...",
    },
} as const;

// ============================================================
// FEATURES/SKILLS HIGHLIGHTS (Home page feature cards)
// ============================================================
export const FEATURES = [
    {
        id: "performance",
        title: "Performance First",
        description: "Optimized for speed and efficiency. Every millisecond counts in user experience.",
        icon: "zap",
        color: "blue",
    },
    {
        id: "pixel-perfect",
        title: "Pixel Perfect",
        description: "Attention to detail in every component, ensuring a consistent and polished look.",
        icon: "target",
        color: "purple",
    },
    {
        id: "global-scale",
        title: "Global Scale",
        description: "Building systems designed to handle global traffic and diverse user bases.",
        icon: "globe",
        color: "emerald",
    },
] as const;

// ============================================================
// PROJECTS
// ============================================================
export const PROJECTS: Project[] = [
    {
        id: 'p1',
        name: 'Cadet Information System',
        description: 'Centralized cadet lifecycle management core. Handles high-concurrency enrollment transactions, tuition processing, and administrative workflows for the academy.',
        techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        status: 'Deployed',
        endpoint: 'Philippine Military Academy',
        latency: '13ms'
    },
    {
        id: 'p2',
        name: 'Intellidocs',
        description: 'Enterprise document automation engine for SLU. Features dynamic template rendering, version control, print spooling, and real-time document editing capabilities.',
        techStack: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        status: 'Deployed',
        endpoint: 'Saint Louis University',
        latency: '15ms'
    },
    {
        id: 'p3',
        name: 'Kasalo Kusina (Frontend)',
        description: 'High-performance frontend interface for a culinary sharing ecosystem. Optimized for user engagement with modular component architecture.',
        techStack: ['ReactJS', 'Tailwind', 'Vite'],
        status: 'In Development',
        endpoint: 'localhost:3001',
        latency: '8ms'
    },
    {
        id: 'p4',
        name: 'Kasalo Kusina (Backend)',
        description: 'Scalable RESTful API service supporting the culinary platform. Implements complex query logic, secure authentication gateways, and optimized data retrieval.',
        techStack: ['NodeJS', 'Express', 'MySQL', 'JWT'],
        status: 'In Development',
        endpoint: 'localhost:3000',
        latency: '5ms'
    },
    {
        id: 'p5',
        name: 'EShareMo',
        role: 'Founding Technical Engineer',
        description: 'An event photo and video collection platform where guests upload through invite links or a shared QR code, with originals organized in the host\'s Google Drive.',
        techStack: ['NextJS', 'Supabase', 'Serverless', 'Google Drive API'],
        status: 'In Development',
        endpoint: 'https://www.esharemo.com',
        latency: 'n/a'
    }
];

// ============================================================
// EXPERIENCE
// ============================================================
export const EXPERIENCE: Experience[] = [
    {
        id: 'e1',
        role: 'Junior Process Associate',
        company: 'ThoughtFocus',
        period: 'July 2026 - Present',
        logs: [
            '[INFO] Triaged support tickets and routed issues to the right teams',
            '[SUCCESS] Responded to clients through email with clear, timely updates',
            '[DEBUG] Handled client calls and documented follow-up actions',
            '[WARN] Supported day-to-day service operations across multiple channels'
        ]
    },
    {
        id: 'e2',
        role: 'Junior Backend Web Developer',
        company: 'Qualitytrade Asia',
        period: 'July 2024 - March 2026',
        logs: [
            '[INFO] Engineered robust backends with Laravel, DynamoDB, and OpenSearch',
            '[SUCCESS] Designed RESTful APIs for seamless system integration',
            '[DEBUG] Optimized legacy code and enhanced system performance',
            '[WARN] Maintained Agile SDLC utilizing Jira, Slack, and Confluence'
        ]
    },
    {
        id: 'e3',
        role: '(Intern) Computer Programmer',
        company: 'Philippine Military Academy',
        period: 'January 2024 - May 2024',
        logs: [
            '[INFO] Architected scalable system components using PHP Laravel framework',
            '[SUCCESS] Developed web portal for academy operations management',
            '[WARN] Collaborated with cross-functional teams to ensure timely delivery'
        ]
    }
];

// ============================================================
// SKILLS (using string icon names - mapping done in Experience.tsx)
// ============================================================
export const SKILLS_CATEGORIES = [
    {
        id: 'backend',
        title: 'Backend',
        iconName: 'server',
        skills: [
            { name: 'PHP Laravel', level: '70' },
            { name: 'NodeJS', level: '30' },
            { name: 'Javascript', level: '40' },
            { name: 'Java', level: '20' },
            { name: 'Python', level: '15' }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend',
        iconName: 'layout',
        skills: [
            { name: 'Blade', level: '30' },
            { name: 'ReactJS', level: '20' }
        ]
    },
    {
        id: 'database',
        title: 'Database',
        iconName: 'database',
        skills: [
            { name: 'MySQL', level: '75' },
            { name: 'MongoDB', level: '75' },
            { name: 'DynamoDB', level: '35' }
        ]
    },
    {
        id: 'others',
        title: 'Others',
        iconName: 'cloud',
        skills: [
            { name: 'Github', level: '90' },
            { name: 'RESTful', level: '75' },
            { name: 'Postman', level: '75' },
            { name: 'Stripe', level: '50' },
            { name: 'Agile SDLC', level: '100' }
        ]
    }
];

// ============================================================
// ANIMATION SETTINGS
// ============================================================
export const ANIMATION = {
    typewriterSpeed: 50,
    staggerChildren: 0.1,
    itemTransitionDuration: 0.6,
    pageTransitionDuration: 0.3,
} as const;

// ============================================================
// THEME COLORS (Terminal Theme)
// ============================================================
export const THEME = {
    terminal: {
        black: '#0c0c0c',
        green: '#22c55e',
        dim: '#15803d',
        cursor: '#4ade80',
        gray: '#1f2937'
    },
    light: {
        background: '#fafafa',
        text: '#111827'
    },
    dark: {
        background: '#050505',
        text: '#e5e7eb'
    }
} as const;
