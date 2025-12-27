import React from 'react';
import { ArrowLeft, ExternalLink, Code, Server, Database, Layout, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface KasaloKusinaDetailsProps {
    onBack: () => void;
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const KasaloKusinaDetails: React.FC<KasaloKusinaDetailsProps> = ({ onBack }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pb-24"
        >
            <motion.button
                variants={itemVariants}
                onClick={onBack}
                className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 mb-8 transition-colors"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </motion.button>

            <motion.header variants={itemVariants} className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        Kasalo Kusina
                    </h1>
                    <a
                        href="https://kasalo-kusina.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        Visit Live Site <ExternalLink size={18} />
                    </a>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                    A comprehensive culinary sharing ecosystem connecting home cooks with food enthusiasts using a modern, scalable full-stack architecture.
                </p>
            </motion.header>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border border-white/20">
                    <div className="flex items-center gap-3 mb-6 text-blue-600 dark:text-blue-400">
                        <Layout size={32} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend Experience</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Optimized for maximum user engagement with a modular component architecture. The interface prioritizes speed, accessibility, and a seamless visual flow.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Typescript', 'ReactJS', 'Tailwind CSS', 'Vite', 'Framer Motion'].map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border border-white/20">
                    <div className="flex items-center gap-3 mb-6 text-purple-600 dark:text-purple-400">
                        <Server size={32} />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Backend Infrastructure</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        A scalable RESTful API service implementing complex query logic, secure authentication gateways, and optimized data retrieval strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Typescript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis', 'JWT', 'Socket.io'].map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Current Features */}
            <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Globe size={28} className="text-green-500" />
                    Current Implemented Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "AI Powered Engine", desc: "Powered by Gemini 3 Flash, Gemini 2.5 Flash, and Gemini 2.5 Flash Lite for intelligent recommendations." },
                        { title: "Slideshow Cooking Presentation", desc: "Immersive slideshow cooking presentation for better user experience." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Future Roadmap */}
            <motion.div variants={itemVariants} className="glass dark:glass-dark rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Database size={28} className="text-orange-500" />
                    Future Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Dynamic Recipe Searching", desc: "Advanced semantic search capabilities to find recipes based on ingredients, mood, or dietary restrictions." },
                        { title: "Personalized AI Recipes", desc: "Authentic Filipino dishes based on user location and ethnicity." },
                        { title: "Real Time Interactions", desc: "Chat, Notifications, Comments, and etc." },
                        { title: "Subscriptions", desc: "Higher AI Usage Limits." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/10 border-dashed hover:border-solid transition-all">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                {feature.title}
                                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">Planned</span>
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
