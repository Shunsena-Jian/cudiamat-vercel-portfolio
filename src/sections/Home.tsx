import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { TerminalWindow } from '@/components/TerminalWindow';

interface HomeProps {
    onNavigate: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="space-y-12">
            <section className="min-h-[50vh] flex flex-col justify-center">
                <div className="space-y-4">
                    <div className="inline-block bg-green-900/20 border border-green-800 text-green-400 px-3 py-1 rounded text-xs mb-4">
                        <span className="animate-pulse">●</span> JIAN_CUDIAMAT | SYSTEM_READY
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-100 tracking-tighter">
                        <TypewriterText text="_Hello, World." speed={50} />
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-500">
                        I build <span className="text-green-500">scalable backends</span> and <span className="text-blue-500">distributed systems</span>.
                    </h2>
                    <div className="max-w-xl text-gray-400 leading-relaxed pt-4 border-l-2 border-gray-800 pl-6">
                        <p>
                            Specializing in robust API design, high-concurrency architecture, and database optimization.
                            I turn coffee into clean, efficient code.
                        </p>
                    </div>
                    <div className="flex gap-4 pt-6">
                        <button
                            onClick={() => onNavigate('projects')}
                            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-colors flex items-center gap-2"
                        >
                            <Terminal size={18} />
                            View Projects
                        </button>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 rounded transition-colors"
                        >
                            Contact.sh
                        </button>
                    </div>
                </div>
            </section>

            {/* SYSTEM INFO (REPLACES AI) */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Cpu className="text-green-500" />
                        System Architecture
                    </h3>
                    <p className="text-gray-400 mb-6">
                        My development environment is tuned for maximum efficiency.
                        I advocate for open-source tools, linux-based workflows, and automated CI/CD pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono">
                        <span className="bg-gray-900 px-2 py-1 rounded border border-gray-800">os: arch_linux</span>
                        <span className="bg-gray-900 px-2 py-1 rounded border border-gray-800">shell: zsh</span>
                        <span className="bg-gray-900 px-2 py-1 rounded border border-gray-800">editor: neovim</span>
                    </div>
                </div>
                <TerminalWindow title="neofetch" className="min-h-[300px] flex items-center justify-center">
                    <div className="w-full flex gap-4 font-mono text-sm p-2">
                        {/* Fake ASCII Art */}
                        <div className="hidden sm:block text-green-500 font-bold select-none opacity-80 leading-tight">
<pre>{`       /\\
      /  \\
     /    \\
    /      \\
   /   /\\   \\
  /   /  \\   \\
 /   /    \\   \\
/___/      \\___\\`}</pre>
                        </div>

                        {/* Info */}
                        <div className="space-y-1.5 text-xs md:text-sm">
                            <div><span className="text-green-500">jian_cudiamat</span>@<span className="text-blue-500">portfolio</span></div>
                            <div className="text-gray-600">-------------------</div>
                            <div><span className="text-purple-400 font-bold">OS</span>: Arch Linux x86_64</div>
                            <div><span className="text-purple-400 font-bold">Host</span>: Backend Mainframe</div>
                            <div><span className="text-purple-400 font-bold">Kernel</span>: 6.8.9-arch1-1</div>
                            <div><span className="text-purple-400 font-bold">Uptime</span>: 1337 mins</div>
                            <div><span className="text-purple-400 font-bold">Shell</span>: zsh 5.9</div>
                            <div><span className="text-purple-400 font-bold">CPU</span>: Neural Engine v9</div>
                            <div><span className="text-purple-400 font-bold">Memory</span>: 32768MB / 65536MB</div>

                            {/* Color blocks */}
                            <div className="pt-3 flex gap-1.5">
                                <span className="w-3 h-3 bg-black rounded-sm"></span>
                                <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-sm"></span>
                                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                                <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
                                <span className="w-3 h-3 bg-cyan-500 rounded-sm"></span>
                            </div>
                        </div>
                    </div>
                </TerminalWindow>
            </section>
        </div>
    );
};