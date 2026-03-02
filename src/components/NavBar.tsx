import React from 'react';
import { Home, Folder, Briefcase, Mail, Sun, Moon } from 'lucide-react';

interface NavBarProps {
    currentSection: string;
    onNavigate: (section: string) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentSection, onNavigate, isDarkMode, toggleTheme }) => {
    const items = [
        { id: 'home', icon: <Home size={20} />, label: 'Home' },
        { id: 'projects', icon: <Folder size={20} />, label: 'Projects' },
        { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience' },
        { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="glass dark:glass-dark rounded-full px-2 py-2 flex items-center gap-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            p-3 rounded-full transition-all duration-300 relative group
                            ${currentSection === item.id
                                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white shadow-sm scale-105'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100'}
                        `}
                        aria-label={item.label}
                    >
                        {item.icon}
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 glass dark:glass-dark text-gray-900 dark:text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-spatial">
                            {item.label}
                        </span>
                    </button>
                ))}

                <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-2" />

                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>
        </div>
    );
};