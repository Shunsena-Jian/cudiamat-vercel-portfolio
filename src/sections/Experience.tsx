import React from 'react';
import { Briefcase, Database, Globe, Server, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../data/content';

export const Experience: React.FC = () => {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24">
            <header className="mb-12">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block">
                    Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                    My professional journey and technical expertise.
                </p>
            </header>

            <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-12">
                {EXPERIENCE.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-gray-50 dark:border-[#0F0F0F]" />

                        <div className="glass dark:glass-dark p-6 rounded-3xl hover:bg-white/20 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <div className="text-blue-600 dark:text-blue-400 font-medium text-lg">{exp.company}</div>
                                </div>
                                <span className="mt-2 md:mt-0 px-4 py-1.5 bg-white/10 dark:bg-black/20 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 backdrop-blur-sm">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.logs.map((log, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                                        <span>{log.replace(/\[.*?\]\s*/, '')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Cloud className="text-blue-500" />
                    Technical Arsenal
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS_CATEGORIES.map((category, catIdx) => (
                        <div key={category.id} className="glass dark:glass-dark p-6 rounded-3xl hover:-translate-y-1 transition-transform duration-300 h-full">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className={`p-2 rounded-xl bg-white/10 dark:bg-white/5 ${category.id === 'backend' ? 'text-green-500' :
                                    category.id === 'frontend' ? 'text-blue-500' :
                                        category.id === 'database' ? 'text-yellow-500' : 'text-purple-500'
                                    }`}>
                                    {category.id === 'backend' ? <Server size={20} /> :
                                        category.id === 'frontend' ? <Globe size={20} /> :
                                            category.id === 'database' ? <Database size={20} /> :
                                                <Cloud size={20} />}
                                </div>
                                <span className="font-bold text-gray-900 dark:text-white text-lg capitalize">{category.title}</span>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1.5">
                                            <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                                            <span className="text-gray-500 dark:text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`h-full rounded-full ${category.id === 'backend' ? 'bg-green-500' :
                                                    category.id === 'frontend' ? 'bg-blue-500' :
                                                        category.id === 'database' ? 'bg-yellow-500' : 'bg-purple-500'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
