import React from 'react';
import { Terminal, Folder, FileCode, Server } from 'lucide-react';

interface NavBarProps {
    currentSection: string;
    onNavigate: (section: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentSection, onNavigate }) => {
    const items = [
        { id: 'home', icon: <Terminal size={14} />, label: '~' },
        { id: 'projects', icon: <Folder size={14} />, label: '/projects' },
        { id: 'experience', icon: <Server size={14} />, label: '/var/log' },
        { id: 'contact', icon: <FileCode size={14} />, label: '/contact.sh' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800 h-14 flex items-center px-4 md:px-8">
            <div className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
                <button 
                    onClick={() => onNavigate(items[0].id)}
                    className="text-green-500 font-mono font-bold mr-4 hidden md:block hover:text-green-400 transition-colors"
                >
                    jian_cudiamat@portfolio:~$
                </button>

                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
              flex items-center gap-2 px-3 py-1.5 rounded font-mono text-sm transition-all
              ${currentSection === item.id
                            ? 'bg-gray-800 text-green-400 border border-gray-600 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900'}
            `}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};