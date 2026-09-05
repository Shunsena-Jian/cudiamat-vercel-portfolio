import React from 'react';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    eyebrow,
    title,
    description,
}) => {
    return (
        <header className="mb-12 max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-accent" />
                {eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed">
                    {description}
                </p>
            )}
        </header>
    );
};
