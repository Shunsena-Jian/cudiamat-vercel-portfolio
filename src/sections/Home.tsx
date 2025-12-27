import React from 'react';
import { Terminal, ArrowRight, Zap, Target, Globe } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';

interface HomeProps {
    onNavigate: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="space-y-12 pb-24">
            <section className="min-h-[60vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-gray-800 dark:text-gray-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        System Online
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 drop-shadow-sm pb-2 pr-2">
                        <TypewriterText text=" Hello, World." speed={50} />
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 max-w-2xl leading-tight">
                        I engineer <span className="font-semibold text-gray-900 dark:text-white">scalable systems</span> that power the modern web.
                    </h2>

                    <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Specializing in robust API design, distributed architecture, and high-performance applications. turning complex problems into elegant code.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => onNavigate('projects')}
                            className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-8 py-4 glass text-gray-900 dark:text-white rounded-full transition-all hover:scale-105 hover:bg-white/20 font-medium"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                <div className="glass dark:glass-dark p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Performance First</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Optimized for speed and efficiency. Every millisecond counts in user experience.
                    </p>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                        <Target size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pixel Perfect</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Attention to detail in every component, ensuring a consistent and polished look.
                    </p>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <div className="h-12 w-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Global Scale</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Building systems designed to handle global traffic and diverse user bases.
                    </p>
                </div>
            </section>
        </div>
    );
};