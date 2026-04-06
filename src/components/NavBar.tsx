import React, { useCallback } from 'react';
import { Home, Folder, Briefcase, Mail, Sun, Moon } from 'lucide-react';

interface NavBarProps {
    currentSection: string;
    onNavigate: (section: string) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Move nav items outside component to prevent recreation on every render
const NAV_ITEMS = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
] as const;

export const NavBar: React.FC<NavBarProps> = ({ currentSection, onNavigate, isDarkMode, toggleTheme }) => {
    const handleNavigate = useCallback((id: string) => {
        onNavigate(id);
    }, [onNavigate]);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="glass dark:glass-dark rounded-full px-2 py-2 flex items-center gap-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`
                            p-3 rounded-full transition-all duration-300 relative group
                            ${currentSection === item.id
                                ? 'bg-white/90 dark:bg-white/10 text-black dark:text-white shadow-sm scale-105'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100'}
                        `}
                        aria-label={item.label}
                    >
                        <item.icon size={20} />
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
