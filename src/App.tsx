import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { KasaloKusinaDetails } from './sections/KasaloKusinaDetails';

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
        <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative overflow-hidden">
            {/* Background Layer 1: Solid Color */}
            <div className="fixed inset-0 bg-white dark:bg-[#050505] -z-50" />

            {/* Background Layer 2: Animated Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/40 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/40 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-pink-500/40 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/40 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
            </div>

            <NavBar
                currentSection={activeSection}
                onNavigate={setActiveSection}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
            />

            <main className="container mx-auto px-4 pt-32 pb-24 max-w-5xl relative z-10">
                {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
                {activeSection === 'projects' && <Projects onNavigate={setActiveSection} />}
                {activeSection === 'kasalo-kusina' && <KasaloKusinaDetails onBack={() => setActiveSection('projects')} />}
                {activeSection === 'experience' && <Experience />}
                {activeSection === 'contact' && <Contact />}
            </main>
        </div>
    );
}
