import React, { useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, Layout, Server, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/constants/motion';
import { PROJECTS } from '@/config/portfolio';
import type { SectionId } from '../App';

interface ProjectDetailsProps {
    projectId: string | null;
    onBack: () => void;
    onNavigate: (section: SectionId, projectId?: string | null) => void;
}

const stackIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('front')) return Layout;
    if (t.includes('back')) return Server;
    return Globe;
};

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onBack, onNavigate }) => {
    const project = useMemo(
        () => PROJECTS.find(p => p.id === projectId) ?? null,
        [projectId]
    );

    if (!project) {
        return (
            <div className="pb-24 space-y-8 max-w-xl">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2.5 px-5 py-2.5 surface rounded-full font-semibold text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    Back to Projects
                </button>
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    Project not found
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    The project you are looking for does not exist. It may have been renamed or removed.
                </p>
                <button
                    onClick={() => onNavigate('projects')}
                    className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors text-sm"
                >
                    Browse all projects
                </button>
            </div>
        );
    }

    const details = project.details;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pb-16 space-y-10 sm:space-y-12"
        >
            <motion.button
                variants={itemVariants}
                onClick={onBack}
                className="group flex items-center gap-2.5 px-5 py-2.5 surface rounded-full font-semibold text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                Back to Projects
            </motion.button>

            <motion.header variants={itemVariants}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3">
                    <span aria-hidden="true" className="inline-block h-px w-8 bg-accent" />
                    {project.status}
                    {project.role ? ` · ${project.role}` : ''}
                </p>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">
                            {project.name}
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-4">
                            {details?.tagline ?? project.description}
                        </p>
                    </div>
                    {details?.liveUrl && (
                        <a
                            href={details.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold transition-opacity hover:opacity-85 whitespace-nowrap text-sm"
                        >
                            Visit Live Site <ExternalLink size={16} aria-hidden="true" />
                        </a>
                    )}
                </div>
                <div className="flex flex-wrap gap-2 mt-7">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.header>

            {details && details.stacks.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                    {details.stacks.map((stack) => {
                        const Icon = stackIcon(stack.title);
                        return (
                            <motion.div key={stack.title} variants={itemVariants} className="surface rounded-2xl p-7 sm:p-8">
                                <div className="flex items-center gap-3.5 mb-4">
                                    <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                        <Icon size={22} aria-hidden="true" />
                                    </div>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{stack.title}</h2>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed font-light text-[15px]">
                                    {stack.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {stack.tech.map(tech => (
                                        <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {details && details.featureGroups.map((group) => (
                <motion.section key={group.title} variants={itemVariants} className="surface rounded-2xl p-7 sm:p-8">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        {group.title}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {group.items.map((feature) => (
                            <div key={feature.title} className="p-5 rounded-xl bg-zinc-50 dark:bg-black/20 border border-zinc-200/70 dark:border-white/10">
                                <h3 className="font-bold text-zinc-900 dark:text-white mb-1.5 flex items-center gap-2.5 flex-wrap text-[15px]">
                                    {feature.title}
                                    {feature.planned && (
                                        <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                                            Planned
                                        </span>
                                    )}
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>
            ))}

            {!details && (
                <motion.div variants={itemVariants} className="surface rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-1.5">
                        <p>Endpoint — {project.endpoint}</p>
                        <p>Latency — {project.latency}</p>
                    </div>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors text-sm w-fit"
                    >
                        Ask me about this <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
};
