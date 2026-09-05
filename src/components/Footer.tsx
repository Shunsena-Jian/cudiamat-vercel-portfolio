import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL, SOCIAL } from '@/config/portfolio';
import type { SectionId } from '../App';

interface FooterProps {
    onNavigate: (section: SectionId) => void;
}

const FOOTER_LINKS: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="relative z-10 border-t border-zinc-200/80 dark:border-white/10">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <p className="font-bold text-zinc-900 dark:text-white tracking-tight">
                        {PERSONAL.name}
                    </p>
                    <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                        {PERSONAL.title} · {PERSONAL.status}
                    </p>
                </div>

                <nav aria-label="Footer" className="flex items-center gap-1 text-sm font-semibold">
                    {FOOTER_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => onNavigate(link.id)}
                            className="px-3 py-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-2.5">
                    <a
                        href={SOCIAL.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="p-2.5 rounded-full surface text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:-translate-y-0.5 transition-all"
                    >
                        <Github size={18} aria-hidden="true" />
                    </a>
                    <a
                        href={SOCIAL.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="p-2.5 rounded-full surface text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:-translate-y-0.5 transition-all"
                    >
                        <Linkedin size={18} aria-hidden="true" />
                    </a>
                    <a
                        href={SOCIAL.emailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send email"
                        className="p-2.5 rounded-full surface text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:-translate-y-0.5 transition-all"
                    >
                        <Mail size={18} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
