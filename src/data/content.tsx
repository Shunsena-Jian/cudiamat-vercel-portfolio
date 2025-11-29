import React from 'react';
import {
    Database,
    Server,
    Box,
    Layout
} from 'lucide-react';
import { Project, Experience } from '@/types.ts';

export const PROJECTS: Project[] = [
    {
        id: 'p1',
        name: 'cadet_information_system',
        description: 'Centralized cadet lifecycle management core. Handles high-concurrency enrollment transactions, tuition processing, and administrative administrative workflows for the academy.',
        techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        status: 'Deployed',
        endpoint: 'Philippine Military Academy',
        latency: '13ms'
    },
    {
        id: 'p2',
        name: 'intellidocs',
        description: 'Enterprise document automation engine for SLU. Features dynamic template rendering, version control, print spooling, and real-time document editing capabilities.',
        techStack: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        status: 'Deployed',
        endpoint: 'Saint Louis University',
        latency: '15ms'
    },
    {
        id: 'p3',
        name: 'kasalo_kusina_frontend',
        description: 'High-performance frontend interface for a culinary sharing ecosystem. Optimized for user engagement ("vibe-coded") with modular component architecture.',
        techStack: ['ReactJS', 'Tailwind', 'Vite'],
        status: 'In Development',
        endpoint: 'localhost:3001',
        latency: '8ms'
    },
    {
        id: 'p4',
        name: 'kasalo_kusina_backend',
        description: 'Scalable RESTful API service supporting the culinary platform. Implements complex query logic, secure authentication gateways, and optimized data retrieval.',
        techStack: ['NodeJS', 'Express', 'MySQL', 'JWT'],
        status: 'In Development',
        endpoint: 'localhost:3000',
        latency: '5ms'
    }
];

export const EXPERIENCE: Experience[] = [
    {
        id: 'e1',
        role: 'Junior Backend Web Developer',
        company: 'IThinkWeb Corporation',
        period: 'July 2024 - Present',
        logs: [
            '[INFO] Engineered robust backends with Laravel, DynamoDB, and OpenSearch',
            '[SUCCESS] Designed RESTful APIs for seamless system integration',
            '[DEBUG] Optimized legacy code and enhanced system performance',
            '[WARN] Maintained Agile SDLC utilizing Jira, Slack, and Confluence'
        ]
    },
    {
        id: 'e2',
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

export const SKILLS_CATEGORIES = [
    {
        id: 'backend',
        title: 'Backend',
        icon: <Server size={18} />,
        skills: [
            { name: 'PHP Laravel', level: '70%' },
            { name: 'NodeJS', level: '30%' },
            { name: 'Javascript', level: '40%' },
            { name: 'Java', level: '20%' },
            { name: 'Python', level: '15%' }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <Layout size={18} />,
        skills: [
            { name: 'Blade', level: '30%' },
            { name: 'ReactJS', level: '20%' }
        ]
    },
    {
        id: 'database',
        title: 'Database',
        icon: <Database size={18} />,
        skills: [
            { name: 'MySQL', level: '75%' },
            { name: 'MongoDB', level: '75%' },
            { name: 'DynamoDB', level: '35%' }
        ]
    },
    {
        id: 'others',
        title: 'Others',
        icon: <Box size={18} />,
        skills: [
            { name: 'Github', level: '90%' },
            { name: 'RESTful', level: '75%' },
            { name: 'Postman', level: '75%' },
            { name: 'Stripe', level: '50%' },
            { name: 'Agile SDLC', level: '100%' }
        ]
    }
];
