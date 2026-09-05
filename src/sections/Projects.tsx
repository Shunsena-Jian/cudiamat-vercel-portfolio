import React, { useMemo } from 'react';
import { ArrowUpRight, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../config/portfolio';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/constants/motion';
import { SectionHeader } from '../components/SectionHeader';
import type { SectionId } from '../App';
import type { Project } from '@/types';

interface ProjectsProps {
    onNavigate: (section: SectionId, projectId?: string | null) => void;
}

const isLinkableUrl = (str: string): boolean => {
    if (!str || str.includes('localhost')) return false;
    try {
        const url = new URL(str.startsWith('http') ? str : `https://${str}`);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
};

const statusStyles = (status: Project['status']): string => {
    if (status === 'Deployed') return 'text-emerald-700 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (status === 'Archived') return 'text-zinc-500 dark:text-zinc-400 border-zinc-500/30 bg-zinc-500/10';
    return 'text-amber-700 dark:text-amber-400 border-amber-500/30 bg-amber-500/10';
};

const displayHost = (endpoint: string): string => endpoint.replace(/^https?:\/\//, '').replace(/\/$/, '');

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
    const { featuredProjects, otherProjects } = useMemo(() => {
        const featured = PROJECTS.filter(p => p.featured);
        const others = PROJECTS.filter(p => !p.featured);
        return { featuredProjects: featured, otherProjects: others };
    }, []);

    const openDetails = (id: string) => onNavigate('project', id);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-14 pb-8"
        >
            <motion.div variants={itemVariants}>
                <SectionHeader
                    eyebrow="Selected work"
                    title="Projects"
                    description="Systems I have designed, built, and shipped — from academy infrastructure to consumer platforms."
                />
            </motion.div>

            {featuredProjects.length > 0 && (
                <motion.div variants={itemVariants}>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-5">
                        Featured
                    </h3>
                    <div className="space-y-5">
                        {featuredProjects.map((project) => (
                            <article
                                key={project.id}
                                onClick={() => openDetails(project.id)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetails(project.id); } }}
                                tabIndex={0}
                                role="link"
                                aria-label={`Open details for ${project.name}`}
                                className="surface rounded-2xl p-7 sm:p-9 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                                        <Folder size={24} aria-hidden="true" />
                                    </div>
                                    <span className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border ${statusStyles(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                                    {project.name}
                                    <ArrowUpRight size={28} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true" />
                                </h3>

                                {project.role && (
                                    <p className="text-accent font-semibold mb-4 text-sm font-mono">
                                        {project.role}
                                    </p>
                                )}

                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-7 font-light max-w-2xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm pt-6 border-t border-zinc-200/80 dark:border-white/10">
                                    <span className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400 font-mono text-xs">
                                        <span className="relative flex h-2 w-2" aria-hidden="true">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                        </span>
                                        {displayHost(project.endpoint)}
                                    </span>
                                    {isLinkableUrl(project.endpoint) && (
                                        <span
                                            role="link"
                                            tabIndex={0}
                                            aria-label={`Visit ${project.name} live site`}
                                            onClick={(e) => { e.stopPropagation(); window.open(project.endpoint.startsWith('http') ? project.endpoint : `https://${project.endpoint}`, '_blank', 'noopener,noreferrer'); }}
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); window.open(project.endpoint.startsWith('http') ? project.endpoint : `https://${project.endpoint}`, '_blank', 'noopener,noreferrer'); } }}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold hover:opacity-85 transition-opacity text-xs w-fit"
                                        >
                                            Visit Site <ExternalLink size={14} aria-hidden="true" />
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>
            )}

            <motion.div variants={itemVariants}>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-5">
                    All projects
                </h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                    {otherProjects.map((project) => (
                        <article
                            key={project.id}
                            onClick={() => openDetails(project.id)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetails(project.id); } }}
                            tabIndex={0}
                            role="link"
                            aria-label={`Open details for ${project.name}`}
                            className="surface rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col h-full group"
                        >
                            <div className="flex justify-between items-start mb-5">
                                <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-300 flex items-center justify-center">
                                    <Folder size={20} aria-hidden="true" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles(project.status)}`}>
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                                {project.name}
                                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true" />
                            </h3>

                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-grow font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 pt-4 border-t border-zinc-200/80 dark:border-white/10 truncate">
                                {displayHost(project.endpoint) || 'Internal tool'}
                            </p>
                        </article>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
