import React, { useCallback, useState } from 'react';
import { Home, Folder, Briefcase, Mail, Sun, Moon, ChevronDown, Check } from 'lucide-react';

interface NavBarProps {
    currentSection: string;
    onNavigate: (section: string) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
    accentTheme?: 'emerald' | 'blue' | 'purple' | 'amber';
    onChangeAccent?: (theme: 'emerald' | 'blue' | 'purple' | 'amber') => void;
}

const NAV_ITEMS = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
] as const;

const ACCENT_THEMES = [
    { id: 'emerald', class: 'bg-emerald-500 shadow-emerald-500/30', label: 'Retro Emerald' },
    { id: 'blue', class: 'bg-blue-500 shadow-blue-500/30', label: 'Oceanic Blue' },
    { id: 'purple', class: 'bg-purple-500 shadow-purple-500/30', label: 'Cyberpunk Purple' },
    { id: 'amber', class: 'bg-amber-500 shadow-amber-500/30', label: 'Retro Amber' },
] as const;

export const NavBar: React.FC<NavBarProps> = ({ 
    currentSection, 
    onNavigate, 
    isDarkMode, 
    toggleTheme,
    accentTheme,
    onChangeAccent
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                                ? 'bg-accent/15 dark:bg-accent/20 text-accent shadow-[0_0_15px_rgba(var(--accent),0.2)] scale-105'
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

                {onChangeAccent && accentTheme && (
                    <>
                        <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`
                                    p-2.5 rounded-full flex items-center gap-1.5 transition-all duration-300 group/theme-btn
                                    ${isDropdownOpen 
                                        ? 'bg-white/60 dark:bg-white/10 text-gray-900 dark:text-white' 
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100'}
                                `}
                                aria-label="Select color accent"
                                aria-expanded={isDropdownOpen}
                            >
                                <div className="w-3.5 h-3.5 rounded-full bg-accent shadow-sm border border-white/20" />
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-accent' : 'group-hover/theme-btn:text-gray-900 dark:group-hover/theme-btn:text-gray-100'}`} />
                            </button>

                            {isDropdownOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-40 cursor-default" 
                                        onClick={() => setIsDropdownOpen(false)} 
                                    />
                                    <div className="absolute right-0 mt-3 w-48 rounded-2xl glass dark:glass-dark p-2 shadow-spatial dark:shadow-spatial-dark z-50 border border-white/40 dark:border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {ACCENT_THEMES.map((theme) => (
                                            <button
                                                key={theme.id}
                                                onClick={() => {
                                                    onChangeAccent(theme.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`
                                                    w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm font-semibold transition-all duration-200 mb-0.5 last:mb-0
                                                    ${accentTheme === theme.id 
                                                        ? 'bg-accent/15 text-accent shadow-[0_0_15px_rgba(var(--accent),0.1)]' 
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/5'}
                                                `}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <div className={`w-3.5 h-3.5 rounded-full ${theme.class}`} />
                                                    <span className="text-xs">{theme.label}</span>
                                                </div>
                                                {accentTheme === theme.id && (
                                                    <Check size={14} className="text-accent shrink-0" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}

                <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />

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
