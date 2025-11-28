import React from 'react';

export interface Project {
    id: string;
    name: string;
    description: string;
    techStack: string[];
    status: 'Deployed' | 'In Development' | 'Archived';
    endpoint: string;
    latency: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    logs: string[];
}

export interface TerminalCommand {
    command: string;
    output: React.ReactNode;
}