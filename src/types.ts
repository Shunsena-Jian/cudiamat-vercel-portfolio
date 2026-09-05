import React from 'react';

export interface ProjectStack {
    title: string;
    description: string;
    tech: string[];
}

export interface ProjectFeature {
    title: string;
    description: string;
    planned?: boolean;
}

export interface ProjectFeatureGroup {
    title: string;
    items: ProjectFeature[];
}

export interface ProjectDetailsData {
    tagline: string;
    liveUrl?: string;
    stacks: ProjectStack[];
    featureGroups: ProjectFeatureGroup[];
}

export interface Project {
    id: string;
    name: string;
    role?: string;
    description: string;
    techStack: string[];
    status: 'Deployed' | 'In Development' | 'Archived';
    endpoint: string;
    latency: string;
    featured?: boolean;
    details?: ProjectDetailsData;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    highlights: string[];
}

export interface SkillCategory {
    id: string;
    title: string;
    iconName: string;
    summary: string;
    skills: string[];
}

export interface TerminalCommand {
    command: string;
    output: React.ReactNode;
}
