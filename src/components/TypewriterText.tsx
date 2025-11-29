import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 30,
    delay = 0,
    className = "",
    cursor = true
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={`${className}`}>
      {displayedText}
            {cursor && <span className="animate-blink ml-1 bg-terminal-cursor w-2 h-4 inline-block align-middle"></span>}
    </span>
    );
};