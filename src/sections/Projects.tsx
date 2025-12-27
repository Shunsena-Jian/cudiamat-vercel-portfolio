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

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
    // Filter projects for Featured vs Others
    // IDs p3 and p4 correspond to "kasalo_kusina_frontend" and "kasalo_kusina_backend"
    const featuredProjects = PROJECTS.filter(p => p.id === 'p3' || p.id === 'p4');
    const otherProjects = PROJECTS.filter(p => p.id !== 'p3' && p.id !== 'p4');

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 pb-24"
        >
            <motion.header variants={itemVariants} className="mb-12">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block">
                    Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                    A collection of work demonstrating robust architecture and sleek user interfaces.
                </p>
            </motion.header>

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
                <motion.div variants={itemVariants} className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center gap-2">
                        <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                        Featured Project
                    </h3>
                    <div className="grid md:grid-cols-1 gap-8">
                        {/* Custom Card for Combined Kasalo Kusina */}
                        <div className="group glass dark:glass-dark rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col md:flex-row gap-8 border border-blue-500/30 dark:border-blue-400/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Folder size={180} />
                            </div>

                            <div className="flex-1 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-500/10 dark:bg-white/10 rounded-2xl text-blue-600 dark:text-white">
                                        <Folder size={32} />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full text-sm font-medium border bg-green-100 border-green-200 text-green-700">
                                        Deployed
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                                    Kasalo Kusina
                                </h3>

                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    A comprehensive culinary sharing ecosystem connecting home cooks with food enthusiasts.
                                    Featuring a high-performance frontend and a scalable microservices-ready backend.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Node.js', 'MySQL', 'Tailwind', 'WebSockets', 'MongoDB', 'Redis', 'Typescript'].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-transparent hover:border-white/20 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <hr className="border-gray-200 dark:border-white/10" />

                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                            kasalo-kusina.vercel.app
                                        </div>
                                        <button
                                            onClick={() => onNavigate('kasalo-kusina')}
                                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                                        >
                                            View Details <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Other Projects Section */}
            <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8 flex items-center gap-2">
                    Other Works
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {otherProjects.map((project) => (
                        <div key={project.id} className="group glass dark:glass-dark rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full border border-white/20">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-500/10 dark:bg-white/10 rounded-2xl text-blue-600 dark:text-white">
                                    <Folder size={24} />
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${project.status === 'Deployed'
                                    ? 'bg-green-100 border-green-200 text-green-700'
                                    : 'bg-yellow-100 border-yellow-200 text-yellow-700'
                                    }`}>
                                    {project.status}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                                {project.name}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-transparent hover:border-white/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <hr className="border-gray-200 dark:border-white/10" />

                                <div className="flex justify-between items-center text-sm font-medium">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        {project.endpoint || 'Internal Tool'}
                                    </div>
                                    {/* Removed Details button for other projects as requested */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
