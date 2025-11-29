import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultHeight?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
        title,
        children,
        className = "",
        defaultHeight = "min-h-[300px]"
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`rounded-lg overflow-hidden border border-gray-800 bg-[#0c0c0c] shadow-2xl ${className}`}
        >
            {/* Header Bar */}
            <div className="bg-gray-900/80 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                </div>
                <div className="text-xs font-mono text-gray-400 select-none flex items-center gap-2">
                    <span className="text-blue-400">jian_cudiamat@portfolio</span>
                    <span>:</span>
                    <span className="text-gray-300">~/{title}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <Minus size={12} />
                    <Square size={10} />
                    <X size={12} />
                </div>
            </div>

            {/* Content Area */}
            <div className={`p-6 font-mono text-sm ${defaultHeight} relative`}>
                {children}
            </div>
        </motion.div>
    );
};