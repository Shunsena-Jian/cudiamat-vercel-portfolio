import React from 'react';
import { Zap, Target, Globe, ArrowRight } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { PERSONAL, FEATURES, ANIMATION } from '@/config/portfolio';

interface HomeProps {
    onNavigate: (section: string) => void;
}

// Map icon strings to actual components
const iconMap = {
    zap: Zap,
    target: Target,
    globe: Globe,
};

// Map color strings to color classes
const colorMap = {
    blue: 'from-blue-500/20 to-blue-600/5 dark:from-blue-400/20 dark:to-blue-500/5',
    purple: 'from-purple-500/20 to-purple-600/5 dark:from-purple-400/20 dark:to-purple-500/5',
    emerald: 'from-emerald-500/20 to-emerald-600/5 dark:from-emerald-400/20 dark:to-emerald-500/5',
};

const textColorMap = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="space-y-24 pb-32">
            <section className="min-h-[65vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
                <div className="space-y-8 relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {PERSONAL.status}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500 pb-2 pr-2">
                        <TypewriterText text=" Hello, World." speed={ANIMATION.typewriterSpeed} />
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-400 max-w-3xl leading-tight tracking-tight">
                        {PERSONAL.shortBio}
                    </h2>

                    <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                        {PERSONAL.fullBio}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6">
                        <button
                            onClick={() => onNavigate('projects')}
                            className="group px-8 py-4 bg-gray-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:bg-black dark:hover:bg-white hover:shadow-spatial dark:hover:shadow-spatial-dark flex items-center gap-2 border border-transparent dark:border-white/20"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-8 py-4 glass dark:glass-dark text-gray-900 dark:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-spatial dark:hover:shadow-spatial-dark"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
                {FEATURES.map((feature) => {
                    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap;
                    const colorClasses = colorMap[feature.color as keyof typeof colorMap] || colorMap.blue;
                    const textColor = textColorMap[feature.color as keyof typeof textColorMap] || textColorMap.blue;

                    return (
                        <div key={feature.id} className="glass dark:glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark group">
                            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${colorClasses} flex items-center justify-center mb-6 ${textColor} shadow-inner`}>
                                <IconComponent size={26} className="group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight">{feature.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};
