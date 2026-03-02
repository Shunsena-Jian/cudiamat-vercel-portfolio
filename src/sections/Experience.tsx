import React from 'react';
import { Database, Globe, Server, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../data/content';

export const Experience: React.FC = () => {
    return (
        <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-32">
            <header className="mb-16">
                <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block pb-2">
                    Experience
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                    My professional journey and technical expertise.
                </p>
            </header>

            <div className="relative border-l-2 border-gray-200/50 dark:border-white/10 ml-4 md:ml-6 space-y-16">
                {EXPERIENCE.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#fafafa] dark:border-[#050505] shadow-sm" />

                        <div className="glass dark:glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark border-t border-l border-white/40 dark:border-white/10 group">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                                    <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{exp.company}</div>
                                </div>
                                <span className="mt-4 md:mt-0 px-4 py-1.5 glass dark:glass-dark rounded-full text-xs font-semibold text-gray-600 dark:text-gray-400 shadow-sm whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.logs.map((log, i) => (
                                    <li key={i} className="flex gap-4 text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                                        <span>{log.replace(/\[.*?\]\s*/, '')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3 tracking-tight">
                    <Cloud className="text-blue-500" />
                    Technical Arsenal
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS_CATEGORIES.map((category) => (
                        <div key={category.id} className="glass dark:glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark h-full border-t border-l border-white/40 dark:border-white/10 group">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/50 dark:border-white/10">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br shadow-inner ${category.id === 'backend' ? 'from-emerald-500/20 to-emerald-600/5 text-emerald-600 dark:from-emerald-400/20 dark:to-emerald-500/5 dark:text-emerald-400' :
                                    category.id === 'frontend' ? 'from-blue-500/20 to-blue-600/5 text-blue-600 dark:from-blue-400/20 dark:to-blue-500/5 dark:text-blue-400' :
                                        category.id === 'database' ? 'from-amber-500/20 to-amber-600/5 text-amber-600 dark:from-amber-400/20 dark:to-amber-500/5 dark:text-amber-400' : 'from-purple-500/20 to-purple-600/5 text-purple-600 dark:from-purple-400/20 dark:to-purple-500/5 dark:text-purple-400'
                                    }`}>
                                    {category.id === 'backend' ? <Server size={22} className="group-hover:scale-110 transition-transform" /> :
                                        category.id === 'frontend' ? <Globe size={22} className="group-hover:scale-110 transition-transform" /> :
                                            category.id === 'database' ? <Database size={22} className="group-hover:scale-110 transition-transform" /> :
                                                <Cloud size={22} className="group-hover:scale-110 transition-transform" />}
                                </div>
                                <span className="font-extrabold text-gray-900 dark:text-white text-lg capitalize tracking-tight">{category.title}</span>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400 dark:text-gray-500 font-mono text-xs">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200/50 dark:bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`h-full rounded-full ${category.id === 'backend' ? 'bg-emerald-500' :
                                                    category.id === 'frontend' ? 'bg-blue-500' :
                                                        category.id === 'database' ? 'bg-amber-500' : 'bg-purple-500'
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
