import React from 'react';
import { Database, Layout, Server, Cloud, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../config/portfolio';
import { SectionHeader } from '../components/SectionHeader';

const categoryIcons: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
    backend: Server,
    frontend: Layout,
    database: Database,
    others: Cloud,
};

export const Experience: React.FC = () => {
    return (
        <div className="space-y-16 sm:space-y-20 pb-8">
            <SectionHeader
                eyebrow="Career"
                title="Experience"
                description="Where I have worked, what I delivered, and the tools I reach for."
            />

            <ol className="relative ml-2 sm:ml-3 space-y-6 border-l-2 border-zinc-200 dark:border-white/10">
                {EXPERIENCE.map((exp, idx) => (
                    <motion.li
                        key={exp.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="relative pl-7 sm:pl-9"
                    >
                        <span
                            aria-hidden="true"
                            className="absolute -left-[7px] top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-paper dark:ring-ink"
                        />
                        <article className="surface rounded-2xl p-7 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <p className="text-accent font-semibold mt-1">{exp.company}</p>
                                </div>
                                <span className="w-fit shrink-0 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-2.5">
                                {exp.highlights.map((highlight) => (
                                    <li key={highlight} className="flex items-start gap-2.5 text-[15px] text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                                        <Check size={16} className="text-accent shrink-0 mt-1" aria-hidden="true" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </motion.li>
                ))}
            </ol>

            <section className="pt-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
                    Technical toolkit
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-light mb-8 max-w-xl">
                    Grouped by where each tool earns its keep. No proficiency percentages — ask me in an interview.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {SKILLS_CATEGORIES.map((category) => {
                        const Icon = categoryIcons[category.iconName] ?? Cloud;
                        return (
                            <div key={category.id} className="surface rounded-2xl p-7">
                                <div className="flex items-center gap-3.5 mb-2">
                                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                        <Icon size={20} aria-hidden="true" />
                                    </div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg tracking-tight">
                                        {category.title}
                                    </h4>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light mb-5">
                                    {category.summary}
                                </p>
                                <ul className="flex flex-wrap gap-1.5" aria-label={`${category.title} skills`}>
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
