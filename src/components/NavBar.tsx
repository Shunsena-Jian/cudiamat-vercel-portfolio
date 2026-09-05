import React, { useCallback, useEffect, useState } from 'react';
import { Home, Folder, Briefcase, Mail, Sun, Moon, ChevronDown, Check } from 'lucide-react';
import type { SectionId } from '../App';

interface NavBarProps {
    currentSection: SectionId;
    onNavigate: (section: SectionId) => void;
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
    { id: 'emerald', class: 'bg-emerald-500', label: 'Emerald' },
    { id: 'blue', class: 'bg-blue-500', label: 'Blue' },
    { id: 'purple', class: 'bg-purple-500', label: 'Purple' },
    { id: 'amber', class: 'bg-amber-500', label: 'Amber' },
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

    useEffect(() => {
        if (!isDropdownOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsDropdownOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isDropdownOpen]);

    const handleNavigate = useCallback((id: SectionId) => {
        onNavigate(id);
    }, [onNavigate]);

    const isProjectsActive = currentSection === 'projects' || currentSection === 'project';

    return (
        <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]">
            <nav
                aria-label="Primary"
                className="surface rounded-full px-2 py-1.5 flex items-center gap-0.5 sm:gap-1 transition-shadow duration-300"
            >
                {NAV_ITEMS.map((item) => {
                    const isActive = item.id === currentSection || (item.id === 'projects' && isProjectsActive);
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`
                                px-3 sm:px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-semibold whitespace-nowrap
                                ${isActive
                                    ? 'bg-accent/15 text-accent'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100'}
                            `}
                        >
                            <item.icon size={17} aria-hidden="true" />
                            <span className="hidden sm:inline">{item.label}</span>
                            <span className="sm:hidden sr-only">{item.label}</span>
                        </button>
                    );
                })}

                {onChangeAccent && accentTheme && (
                    <>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-white/10 mx-1 shrink-0" aria-hidden="true" />
                        <div className="relative shrink-0">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`
                                    p-2.5 rounded-full flex items-center gap-1.5 transition-all duration-300
                                    ${isDropdownOpen
                                        ? 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white'
                                        : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100'}
                                `}
                                aria-label="Select color accent"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="listbox"
                            >
                                <span className="w-3.5 h-3.5 rounded-full bg-accent border border-black/10 dark:border-white/20" aria-hidden="true" />
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-accent' : ''}`} aria-hidden="true" />
                            </button>

                            {isDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40 cursor-default"
                                        onClick={() => setIsDropdownOpen(false)}
                                    />
                                    <div role="listbox" aria-label="Accent color" className="absolute right-0 mt-3 w-44 rounded-2xl surface p-2 z-50">
                                        {ACCENT_THEMES.map((theme) => (
                                            <button
                                                key={theme.id}
                                                role="option"
                                                aria-selected={accentTheme === theme.id}
                                                onClick={() => {
                                                    onChangeAccent(theme.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`
                                                    w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm font-semibold transition-colors duration-200
                                                    ${accentTheme === theme.id
                                                        ? 'bg-accent/15 text-accent'
                                                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'}
                                                `}
                                            >
                                                <span className="flex items-center gap-2.5">
                                                    <span className={`w-3.5 h-3.5 rounded-full ${theme.class}`} aria-hidden="true" />
                                                    <span className="text-xs">{theme.label}</span>
                                                </span>
                                                {accentTheme === theme.id && (
                                                    <Check size={14} className="text-accent shrink-0" aria-hidden="true" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}

                <div className="w-px h-6 bg-zinc-200 dark:bg-white/10 mx-1 shrink-0" aria-hidden="true" />

                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 shrink-0"
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </button>
            </nav>
        </div>
    );
};
