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

import { Experience, Project, SkillCategory } from '@/types';

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
// PRINCIPLES (Home page feature cards)
// ============================================================
export const FEATURES = [
    {
        id: "performance",
        title: "Performance First",
        description: "Optimized for speed and efficiency. Every millisecond counts in user experience.",
        icon: "zap",
    },
    {
        id: "pixel-perfect",
        title: "Pixel Perfect",
        description: "Attention to detail in every component, ensuring a consistent and polished look.",
        icon: "target",
    },
    {
        id: "global-scale",
        title: "Global Scale",
        description: "Building systems designed to handle global traffic and diverse user bases.",
        icon: "globe",
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
        id: 'kasalo-kusina',
        name: 'Kasalo Kusina',
        description: 'A culinary sharing ecosystem connecting home cooks with food enthusiasts, built on a modern full-stack architecture with a modular frontend and a scalable RESTful API.',
        techStack: ['ReactJS', 'Tailwind', 'Vite', 'NodeJS', 'Express', 'MySQL'],
        status: 'In Development',
        endpoint: 'https://kasalo-kusina.vercel.app',
        latency: '8ms',
        details: {
            tagline: 'A comprehensive culinary sharing ecosystem connecting home cooks with food enthusiasts using a modern, scalable full-stack architecture.',
            liveUrl: 'https://kasalo-kusina.vercel.app/',
            stacks: [
                {
                    title: 'Frontend Experience',
                    description: 'Optimized for maximum user engagement with a modular component architecture. The interface prioritizes speed, accessibility, and a seamless visual flow.',
                    tech: ['Typescript', 'ReactJS', 'Tailwind CSS', 'Vite', 'Framer Motion']
                },
                {
                    title: 'Backend Infrastructure',
                    description: 'A scalable RESTful API service implementing complex query logic, secure authentication gateways, and optimized data retrieval strategies.',
                    tech: ['Typescript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis', 'JWT', 'Socket.io']
                }
            ],
            featureGroups: [
                {
                    title: 'Current Features',
                    items: [
                        { title: 'AI Powered Engine', description: 'Powered by Gemini 3 Flash, Gemini 2.5 Flash, and Gemini 2.5 Flash Lite for intelligent recommendations.' },
                        { title: 'Slideshow Cooking Presentation', description: 'Immersive slideshow cooking presentation for better user experience.' }
                    ]
                },
                {
                    title: 'On the Roadmap',
                    items: [
                        { title: 'Dynamic Recipe Searching', description: 'Advanced semantic search capabilities to find recipes based on ingredients, mood, or dietary restrictions.', planned: true },
                        { title: 'Personalized AI Recipes', description: 'Authentic Filipino dishes based on user location and ethnicity.', planned: true },
                        { title: 'Real Time Interactions', description: 'Chat, Notifications, Comments, and etc.', planned: true },
                        { title: 'Subscriptions', description: 'Higher AI Usage Limits.', planned: true }
                    ]
                }
            ]
        }
    },
    {
        id: 'p5',
        name: 'EShareMo',
        role: 'Founding Technical Engineer',
        description: 'An event photo and video collection platform where guests upload through invite links or a shared QR code, with originals organized in the host\'s Google Drive.',
        techStack: ['NextJS', 'Supabase', 'Serverless', 'Google Drive API'],
        status: 'In Development',
        endpoint: 'https://www.esharemo.com',
        latency: 'n/a',
        featured: true
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
        highlights: [
            'Triaged support tickets and routed issues to the right teams',
            'Responded to clients through email with clear, timely updates',
            'Handled client calls and documented follow-up actions',
            'Supported day-to-day service operations across multiple channels'
        ]
    },
    {
        id: 'e2',
        role: 'Junior Backend Web Developer',
        company: 'Qualitytrade Asia',
        period: 'July 2024 - March 2026',
        highlights: [
            'Engineered robust backends with Laravel, DynamoDB, and OpenSearch',
            'Designed RESTful APIs for seamless system integration',
            'Optimized legacy code and enhanced system performance',
            'Maintained Agile SDLC utilizing Jira, Slack, and Confluence'
        ]
    },
    {
        id: 'e3',
        role: '(Intern) Computer Programmer',
        company: 'Philippine Military Academy',
        period: 'January 2024 - May 2024',
        highlights: [
            'Architected scalable system components using the PHP Laravel framework',
            'Developed web portal for academy operations management',
            'Collaborated with cross-functional teams to ensure timely delivery'
        ]
    }
];

// ============================================================
// SKILLS (using string icon names - mapping done in Experience.tsx)
// ============================================================
export const SKILLS_CATEGORIES: SkillCategory[] = [
    {
        id: 'backend',
        title: 'Backend',
        iconName: 'server',
        summary: 'APIs, services, and integrations I ship with.',
        skills: ['PHP Laravel', 'Node.js', 'RESTful APIs', 'JavaScript', 'Python', 'Java']
    },
    {
        id: 'frontend',
        title: 'Frontend',
        iconName: 'layout',
        summary: 'Interfaces I build to sit on top of those APIs.',
        skills: ['React', 'Blade', 'Tailwind CSS', 'TypeScript']
    },
    {
        id: 'database',
        title: 'Data',
        iconName: 'database',
        summary: 'Stores I model, query, and keep fast.',
        skills: ['MySQL', 'MongoDB', 'DynamoDB', 'OpenSearch']
    },
    {
        id: 'others',
        title: 'Delivery',
        iconName: 'cloud',
        summary: 'How the work gets tested, paid for, and shipped.',
        skills: ['GitHub', 'Postman', 'Stripe', 'Agile SDLC']
    }
];


