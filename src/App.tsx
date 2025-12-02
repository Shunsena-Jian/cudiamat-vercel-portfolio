import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        setMounted(true);

        // Initialize dark mode class on HTML element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-terminal-black text-gray-900 dark:text-gray-300 font-mono pb-20 selection:bg-green-200 dark:selection:bg-green-900 dark:selection:text-white transition-colors duration-300">
            <NavBar
                currentSection={activeSection}
                onNavigate={setActiveSection}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
            />

            <main className="container mx-auto px-4 pt-24 max-w-5xl">
                {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
                {activeSection === 'projects' && <Projects />}
                {activeSection === 'experience' && <Experience />}
                {activeSection === 'contact' && <Contact />}
            </main>

            {/* Footer Status Bar */}
            <footer className="fixed bottom-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-500 dark:text-gray-600 py-1 px-4 flex justify-between z-50 transition-colors duration-300">
                <div className="flex gap-4">
                    <span>STATUS: <span className="text-green-600 dark:text-green-500">ONLINE</span></span>
                    <span className="hidden md:inline">UPTIME: 99.99%</span>
                </div>
                <div className="flex gap-4">
                    <span>BUILD: v2.4.0</span>
                    <span className="hidden md:inline">REACT_KERNEL</span>
                </div>
            </footer>
        </div>
    );
}
