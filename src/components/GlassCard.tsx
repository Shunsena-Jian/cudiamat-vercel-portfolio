import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
    children, 
    className = '',
    hover = true 
}) => {
    return (
        <div 
            className={`
                glass dark:glass-dark rounded-3xl p-8 
                border-t border-l border-white/40 dark:border-white/10
                ${hover ? 'hover:-translate-y-2 transition-all duration-500 hover:shadow-spatial dark:hover:shadow-spatial-dark' : ''}
                ${className}
            `}
        >
            {children}
        </div>
    );
};
