import React from 'react';
import { Server, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../data/content';

export const Experience: React.FC = () => {
    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                    <Server className="text-yellow-500" />
                    /var/log/career.log
                </h2>
                <p className="text-gray-500 text-sm">Tail output of system logs...</p>
            </header>

            <div className="relative border-l border-gray-800 ml-4 space-y-12">
                {EXPERIENCE.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="relative pl-8"
                    >
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                        </div>
                        <div className="text-green-500 font-mono mb-4">@ {exp.company}</div>

                        <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4 font-mono text-sm overflow-hidden">
                            {exp.logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                                    className="mb-2 last:mb-0"
                                >
                                    <span className="text-gray-600 mr-2">{idx * 100 + i + 1}</span>
                                    <span className={
                                        log.includes('[INFO]') ? 'text-blue-400' :
                                            log.includes('[SUCCESS]') ? 'text-green-400' :
                                                log.includes('[WARN]') ? 'text-yellow-400' :
                                                    log.includes('[DEBUG]') ? 'text-purple-400' : 'text-gray-300'
                                    }>{log}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="mt-16">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <HardDrive className="text-purple-500" />
                    System Resources
                </h3>

                <div className="space-y-8">
                    {SKILLS_CATEGORIES.map((category, catIdx) => (
                        <div key={category.id}>
                            <div className="flex items-center gap-2 mb-4 text-green-400/80 text-sm font-bold uppercase tracking-wider border-b border-gray-800 pb-1 w-max pr-4">
                                {category.icon}
                                {category.title}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: (catIdx * 0.1) + (i * 0.05) }}
                                        className="bg-gray-900/50 border border-gray-800 p-3 rounded flex flex-col gap-2 hover:border-green-500/50 transition-colors group relative overflow-hidden"
                                    >
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="font-bold text-gray-200 text-sm group-hover:text-green-400 transition-colors">{skill.name}</span>
                                            <span className="text-xs text-gray-500 font-mono">{skill.level}</span>
                                        </div>

                                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: (catIdx * 0.1) + 0.3 + (i * 0.1) }}
                                                className={`h-full ${
                                                    category.id === 'backend' ? 'bg-green-600' :
                                                        category.id === 'frontend' ? 'bg-blue-600' :
                                                            category.id === 'database' ? 'bg-yellow-600' : 'bg-purple-600'
                                                }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
