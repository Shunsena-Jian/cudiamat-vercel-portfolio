import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { KasaloKusinaDetails } from './sections/KasaloKusinaDetails';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [accentTheme, setAccentTheme] = useState<'emerald' | 'blue' | 'purple' | 'amber'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accentTheme');
            if (saved === 'emerald' || saved === 'blue' || saved === 'purple' || saved === 'amber') {
                return saved;
            }
        }
        return 'emerald';
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);

        // Initialize dark mode class on HTML element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('accentTheme', accentTheme);
    }, [accentTheme]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    if (!mounted) return null;

    return (
        <div className={`min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative overflow-hidden bg-[#fafafa] dark:bg-[#050505] theme-${accentTheme}`}>
            {/* Dynamic Scroll Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 shadow-[0_0_10px_rgb(var(--accent))]" 
                style={{ scaleX }} 
            />

            {/* Background Layer: Gradient Mesh - Optimized with translate3d and will-change */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40 opacity-50 dark:opacity-40 will-change-transform">
                <div 
                  className="absolute inset-[-50%] bg-mesh-light dark:bg-mesh-dark animate-mesh opacity-80 mix-blend-normal blur-[100px] transition-colors duration-1000"
                  style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
                />
            </div>

            {/* Optimized Noise Texture: Simplified and non-blending if possible */}
            <div className="fixed inset-0 opacity-[0.012] dark:opacity-[0.025] pointer-events-none -z-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            <NavBar
                currentSection={activeSection}
                onNavigate={setActiveSection}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                accentTheme={accentTheme}
                onChangeAccent={setAccentTheme}
            />

            <main className="container mx-auto px-4 pt-32 pb-24 max-w-5xl relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
                        {activeSection === 'projects' && <Projects />}
                        {activeSection === 'kasalo-kusina' && <KasaloKusinaDetails onBack={() => setActiveSection('projects')} />}
                        {activeSection === 'experience' && <Experience />}
                        {activeSection === 'contact' && <Contact />}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
