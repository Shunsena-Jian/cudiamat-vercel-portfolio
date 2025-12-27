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
            <nav className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 shadow-xl rounded-full px-2 py-2 flex items-center gap-2 transition-all duration-300 scale-100 hover:scale-[1.02]">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            p-3 rounded-full transition-all duration-300 relative group
                            ${currentSection === item.id
                                ? 'bg-white text-black shadow-lg scale-110'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:scale-110'}
                        `}
                        aria-label={item.label}
                    >
                        {item.icon}
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-sm">
                            {item.label}
                        </span>
                    </button>
                ))}

                <div className="w-px h-6 bg-gray-400/50 dark:bg-gray-600/50 mx-1" />

                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all hover:scale-110 hover:rotate-12"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>
        </div>
    );
};