import React from 'react';
import { Zap, Target, Globe, ArrowRight } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { SectionHeader } from '@/components/SectionHeader';
import { PERSONAL, FEATURES } from '@/config/portfolio';
import { TerminalShell } from '@/components/TerminalShell';
import type { SectionId } from '../App';

interface HomeProps {
    onNavigate: (section: SectionId) => void;
}

// Map icon strings to actual components
const iconMap = {
    zap: Zap,
    target: Target,
    globe: Globe,
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="space-y-20 sm:space-y-28 pb-8">
            <section aria-labelledby="home-heading" className="pt-4 sm:pt-10 max-w-3xl">
                <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full surface text-xs font-mono font-medium text-zinc-600 dark:text-zinc-300 mb-7">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {PERSONAL.status}
                </p>

                <h1 id="home-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-white leading-[1.02] mb-5">
                    {PERSONAL.name}
                </h1>

                <p className="font-mono text-base sm:text-lg text-accent font-semibold mb-5" aria-label={`Role: ${PERSONAL.title}`}>
                    <TypewriterText text={PERSONAL.title} speed={60} />
                </p>

                <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-300 leading-snug tracking-tight mb-4">
                    {PERSONAL.shortBio}
                </p>

                <p className="max-w-xl text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-9">
                    {PERSONAL.fullBio}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                        onClick={() => onNavigate('projects')}
                        className="group px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors duration-300 flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="px-7 py-3.5 surface rounded-full font-semibold text-zinc-900 dark:text-white transition-transform duration-300 hover:-translate-y-0.5"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

            <section aria-labelledby="principles-heading" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <h2 id="principles-heading" className="sr-only">Engineering principles</h2>
                {FEATURES.map((feature, i) => {
                    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap;
                    return (
                        <div key={feature.id} className="surface rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                                    <IconComponent size={22} aria-hidden="true" />
                                </div>
                                <span className="font-mono text-xs text-zinc-300 dark:text-zinc-600" aria-hidden="true">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white tracking-tight">{feature.title}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </section>

            <section className="space-y-6">
                <SectionHeader
                    eyebrow="Playground"
                    title="Query my profile"
                    description="A small interactive shell wired to the same data as this site. No terminal nostalgia required."
                />
                <TerminalShell />
            </section>
        </div>
    );
};
