import React from 'react';
import { ArrowLeft, ExternalLink, Server, Database, Layout, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/constants/motion';

interface KasaloKusinaDetailsProps {
    onBack: () => void;
}

export const KasaloKusinaDetails: React.FC<KasaloKusinaDetailsProps> = ({ onBack }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pb-32 space-y-16"
        >
            <motion.button
                variants={itemVariants}
                onClick={onBack}
                className="group flex items-center gap-3 px-6 py-2.5 glass dark:glass-dark text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full font-medium transition-all duration-300 hover:shadow-sm"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Projects
            </motion.button>

            <motion.header variants={itemVariants} className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 pb-2">
                            Kasalo Kusina
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed font-light mt-4">
                            A comprehensive culinary sharing ecosystem connecting home cooks with food enthusiasts using a modern, scalable full-stack architecture.
                        </p>
                    </div>
                    <a
                        href="https://kasalo-kusina.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-spatial dark:hover:shadow-spatial-dark border border-transparent dark:border-white/20 whitespace-nowrap"
                    >
                        Visit Live Site <ExternalLink size={18} />
                    </a>
                </div>
            </motion.header>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border-t border-l border-white/40 dark:border-white/10 hover:shadow-spatial dark:hover:shadow-spatial-dark transition-shadow duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 dark:from-blue-400/20 dark:to-blue-500/5 text-blue-600 dark:text-blue-400 shadow-inner">
                            <Layout size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Frontend Experience</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light">
                        Optimized for maximum user engagement with a modular component architecture. The interface prioritizes speed, accessibility, and a seamless visual flow.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Typescript', 'ReactJS', 'Tailwind CSS', 'Vite', 'Framer Motion'].map(tech => (
                            <span key={tech} className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border-t border-l border-white/40 dark:border-white/10 hover:shadow-spatial dark:hover:shadow-spatial-dark transition-shadow duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 dark:from-purple-400/20 dark:to-purple-500/5 text-purple-600 dark:text-purple-400 shadow-inner">
                            <Server size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Backend Infrastructure</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light">
                        A scalable RESTful API service implementing complex query logic, secure authentication gateways, and optimized data retrieval strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Typescript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis', 'JWT', 'Socket.io'].map(tech => (
                            <span key={tech} className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border-t border-l border-white/40 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <Globe size={28} className="text-emerald-500" />
                    Current Implemented Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "AI Powered Engine", desc: "Powered by Gemini 3 Flash, Gemini 2.5 Flash, and Gemini 2.5 Flash Lite for intelligent recommendations." },
                        { title: "Slideshow Cooking Presentation", desc: "Immersive slideshow cooking presentation for better user experience." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-inner">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border-t border-l border-white/40 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <Database size={28} className="text-amber-500" />
                    Future Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Dynamic Recipe Searching", desc: "Advanced semantic search capabilities to find recipes based on ingredients, mood, or dietary restrictions." },
                        { title: "Personalized AI Recipes", desc: "Authentic Filipino dishes based on user location and ethnicity." },
                        { title: "Real Time Interactions", desc: "Chat, Notifications, Comments, and etc." },
                        { title: "Subscriptions", desc: "Higher AI Usage Limits." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-white/5 border-dashed hover:border-solid transition-all shadow-inner">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                                {feature.title}
                                <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Planned</span>
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
