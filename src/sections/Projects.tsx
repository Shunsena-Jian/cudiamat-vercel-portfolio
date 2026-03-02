import React from 'react';
import { Folder, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { motion } from 'framer-motion';

interface ProjectsProps {
    onNavigate: (section: string) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const isUrl = (str: string) => {
    try {
        const url = new URL(str);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return str.startsWith('http://') || str.startsWith('https://') || str.includes('.vercel.app') || str.includes('localhost:');
    }
};

const VisitButton: React.FC<{ url: string }> = ({ url }) => {
    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
    return (
        <a
            href={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-gray-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md text-sm border border-transparent dark:border-white/20 hover:bg-black dark:hover:bg-white"
        >
            Visit Site <ExternalLink size={16} />
        </a>
    );
};

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
    const featuredProjects = PROJECTS.filter(p => p.id === 'p3' || p.id === 'p4');
    const otherProjects = PROJECTS.filter(p => p.id !== 'p3' && p.id !== 'p4');

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16 pb-24"
        >
            <motion.header variants={itemVariants} className="mb-12">
                <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block pb-2">
                    Projects
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                    A collection of work demonstrating robust architecture and sleek user interfaces.
                </p>
            </motion.header>

            {featuredProjects.length > 0 && (
                <motion.div variants={itemVariants} className="mb-20">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                        Featured Project
                    </h3>
                    <div className="grid md:grid-cols-1 gap-8">
                        <div className="group glass dark:glass-dark rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark flex flex-col md:flex-row gap-10 border-t border-l border-white/40 dark:border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                <Folder size={240} />
                            </div>

                            <div className="flex-1 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/5 dark:from-blue-400/20 dark:to-blue-500/5 rounded-2xl text-blue-600 dark:text-blue-400 shadow-inner">
                                        <Folder size={32} />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full text-xs font-semibold glass dark:glass-dark text-emerald-700 dark:text-emerald-400 shadow-sm border border-emerald-200/50 dark:border-emerald-800/30">
                                        Deployed
                                    </div>
                                </div>

                                <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    Kasalo Kusina
                                </h3>

                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-light">
                                    A comprehensive culinary sharing ecosystem connecting home cooks with food enthusiasts.
                                    Featuring a high-performance frontend and a scalable microservices-ready backend.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Node.js', 'MySQL', 'Tailwind', 'WebSockets', 'MongoDB', 'Redis', 'Typescript'].map(tech => (
                                            <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <hr className="border-gray-200/50 dark:border-white/10" />

                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm font-medium">
                                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                            </span>
                                            kasalo-kusina.vercel.app
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <VisitButton url="https://kasalo-kusina.vercel.app" />
                                            <button
                                                onClick={() => onNavigate('kasalo-kusina')}
                                                className="flex items-center gap-2 px-6 py-2.5 glass dark:glass-dark text-gray-900 dark:text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-sm"
                                            >
                                                Details <ArrowUpRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-400 rounded-full"></span>
                    Other Works
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {otherProjects.map((project) => (
                        <div key={project.id} className="group glass dark:glass-dark rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark flex flex-col h-full border-t border-l border-white/40 dark:border-white/10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 rounded-2xl text-gray-600 dark:text-gray-300 shadow-inner">
                                    <Folder size={24} />
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-semibold glass dark:glass-dark shadow-sm border ${project.status === 'Deployed'
                                    ? 'text-emerald-700 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/30'
                                    : 'text-amber-700 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/30'
                                    }`}>
                                    {project.status}
                                </div>
                            </div>

                            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {project.name}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow font-light">
                                {project.description}
                            </p>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <hr className="border-gray-200/50 dark:border-white/10" />

                                <div className="flex justify-between items-center text-sm font-medium">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <span className={`w-2 h-2 rounded-full ${project.endpoint ? 'bg-blue-500' : 'bg-gray-400'}`}></span>
                                        <span className="truncate max-w-[150px]">{project.endpoint || 'Internal Tool'}</span>
                                    </div>
                                    {project.endpoint && isUrl(project.endpoint) && (
                                        <VisitButton url={project.endpoint} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};