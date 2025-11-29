import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-terminal-black text-gray-300 font-mono pb-20 selection:bg-green-900 selection:text-white">
            <NavBar currentSection={activeSection} onNavigate={setActiveSection} />

            <main className="container mx-auto px-4 pt-24 max-w-5xl">
                {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
                {activeSection === 'projects' && <Projects />}
                {activeSection === 'experience' && <Experience />}
                {activeSection === 'contact' && <Contact />}
            </main>

            {/* Footer Status Bar */}
            <footer className="fixed bottom-0 w-full bg-black border-t border-gray-800 text-xs font-mono text-gray-600 py-1 px-4 flex justify-between z-50">
                <div className="flex gap-4">
                    <span>STATUS: <span className="text-green-500">ONLINE</span></span>
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
