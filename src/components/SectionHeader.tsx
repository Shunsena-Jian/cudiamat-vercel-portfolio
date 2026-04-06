import React from 'react';

interface SectionHeaderProps {
    title: string;
    description?: string;
    gradient?: 'default' | 'blue' | 'purple';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
    title, 
    description,
    gradient = 'default' 
}) => {
    const gradientClasses = {
        default: 'from-gray-900 to-gray-500 dark:from-white dark:to-gray-400',
        blue: 'from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400',
        purple: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400'
    };

    return (
        <header className="mb-12">
            <h2 className={`text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br ${gradientClasses[gradient]} mb-4 inline-block pb-2`}>
                {title}
            </h2>
            {description && (
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                    {description}
                </p>
            )}
        </header>
    );
};
