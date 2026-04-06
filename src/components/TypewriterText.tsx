import React, { useState, useEffect, useRef } from 'react';

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
    const indexRef = useRef(0);
    const textRef = useRef(text);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Update text ref when text prop changes
    useEffect(() => {
        textRef.current = text;
    }, [text]);

    // Main typing effect
    useEffect(() => {
        const startDelay = setTimeout(() => {
            indexRef.current = 0;
            setDisplayedText('');

            intervalRef.current = setInterval(() => {
                const currentIndex = indexRef.current;
                const currentText = textRef.current;
                
                if (currentIndex < currentText.length) {
                    setDisplayedText(prev => prev + currentText.charAt(currentIndex));
                    indexRef.current = currentIndex + 1;
                } else if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startDelay);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [speed, delay]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && <span className="animate-blink ml-1 bg-terminal-cursor w-2 h-4 inline-block align-middle"></span>}
        </span>
    );
};
