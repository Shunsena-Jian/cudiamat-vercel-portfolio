import React, { useState, useEffect, useRef } from 'react';
import { Minus, Square, X, Terminal } from 'lucide-react';
import { PROJECTS } from '@/config/portfolio';

interface CommandOutput {
    type: 'input' | 'output' | 'error' | 'success';
    text: string;
}

export const TerminalShell: React.FC = () => {
    const [history, setHistory] = useState<CommandOutput[]>(() => [
        { type: 'output', text: 'System: JianOS Core v1.5.0 booting...' },
        { type: 'success', text: '[OK] Load distributed microservice gateways.' },
        { type: 'success', text: '[OK] Bind database listener on port 3306.' },
        { type: 'success', text: '[OK] Secure connection to API cache clusters.' },
        { type: 'output', text: 'Type "help" or click the chips below to see available commands.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [matrixActive, setMatrixActive] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);


    // Matrix Rain Effect inside the terminal
    useEffect(() => {
        if (!matrixActive || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.parentElement?.clientWidth || 600;
        canvas.height = 300;

        const columns = Math.floor(canvas.width / 12);
        const yPositions = Array(columns).fill(0);

        const matrixRain = () => {
            ctx.fillStyle = 'rgba(12, 12, 12, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(34, 197, 94, 0.9)'; // emerald
            ctx.font = '10px monospace';

            yPositions.forEach((y, index) => {
                const char = String.fromCharCode(33 + Math.random() * 96);
                const x = index * 12;
                ctx.fillText(char, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 12;
                }
            });
        };

        const interval = setInterval(matrixRain, 40);

        // Handle resize
        const handleResize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 600;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [matrixActive]);

    // Pin the terminal's own scroll box to the latest output.
    // Scrolls only the inner container so the page itself never moves.
    useEffect(() => {
        const container: HTMLDivElement | null = scrollContainerRef.current;
        if (container) {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
    }, [history]);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedCmd = inputValue.trim().toLowerCase();
        if (!trimmedCmd) return;

        runCommand(trimmedCmd);
        setInputValue('');
    };

    const runCommand = (cmd: string) => {
        // Add typed command to history
        const newHistory = [...history, { type: 'input', text: `visitor@jian-cudiamat ~ % ${cmd}` } as CommandOutput];
        
        let outputLines: CommandOutput[] = [];

        switch (cmd) {
            case 'help':
                outputLines = [
                    { type: 'output', text: 'Available commands:' },
                    { type: 'output', text: '  neofetch  - Display user system specs & bio details.' },
                    { type: 'output', text: '  skills    - View interactive text-based skill competencies.' },
                    { type: 'output', text: '  projects  - Show active project nodes with latencies.' },
                    { type: 'output', text: '  matrix    - Toggle the green digital falling rain canvas.' },
                    { type: 'output', text: '  clear     - Wipe all records from the current screen.' },
                    { type: 'output', text: '  contact   - Display raw connection terminals.' }
                ];
                setMatrixActive(false);
                break;

            case 'neofetch': {
                const accentName = localStorage.getItem('accentTheme') || 'emerald';
                outputLines = [
                    { type: 'success', text: '   .---.       visitor@jian-cudiamat' },
                    { type: 'success', text: '  /     \\      ---------------------' },
                    { type: 'success', text: '  \\  o o /     OS: JianOS Pro x86_64 Web' },
                    { type: 'success', text: '   |  V  |     Shell: react-interactive-shell' },
                    { type: 'success', text: '  /   -   \\    Uptime: 26 years' },
                    { type: 'success', text: '  \\/     \\/    IDE: Cursor / Gemini Code Assistant' },
                    { type: 'success', text: '   `-----`     Status: ONLINE [System Nominal]' },
                    { type: 'success', text: `               Accent: ${accentName.toUpperCase()}` },
                    { type: 'output', text: '               Bio: Backend Engineer crafting robust pipelines' },
                    { type: 'output', text: '                    and high-performance APIs.' }
                ];
                setMatrixActive(false);
                break;
            }

            case 'skills':
                outputLines = [
                    { type: 'output', text: 'Technical Arsenal Level diagnostics:' },
                    { type: 'success', text: '  PHP Laravel   [██████████████░░░░░░] 70%' },
                    { type: 'success', text: '  MySQL         [███████████████░░░░░] 75%' },
                    { type: 'success', text: '  MongoDB       [███████████████░░░░░] 75%' },
                    { type: 'success', text: '  RESTful APIs  [███████████████░░░░░] 75%' },
                    { type: 'output', text: '  NodeJS        [██████░░░░░░░░░░░░░░] 30%' },
                    { type: 'output', text: '  ReactJS       [████░░░░░░░░░░░░░░░░] 20%' }
                ];
                setMatrixActive(false);
                break;

            case 'projects':
                outputLines = [
                    { type: 'output', text: 'Parsing operational project nodes...' }
                ];
                PROJECTS.forEach(p => {
                    outputLines.push({
                        type: 'success',
                        text: `* ${p.name} - Status: ${p.status} | Latency: ${p.latency} | Stack: ${p.techStack.join(', ')}`
                    });
                });
                setMatrixActive(false);
                break;

            case 'matrix':
                setMatrixActive(!matrixActive);
                outputLines = [
                    { type: 'success', text: !matrixActive ? 'Initializing digital rain stream... type "matrix" again to disable.' : 'Digital rain stream offline.' }
                ];
                break;

            case 'clear':
                setHistory([]);
                setMatrixActive(false);
                return;

            case 'contact':
                outputLines = [
                    { type: 'success', text: 'Connection details:' },
                    { type: 'output', text: '  Email:    jian.r.cudiamat@gmail.com' },
                    { type: 'output', text: '  GitHub:   https://github.com/Shunsena-Jian' },
                    { type: 'output', text: '  LinkedIn: https://linkedin.com/in/jian-raphael-cudiamat-70b1a5269' },
                    { type: 'output', text: 'Command "contact" successfully completed.' }
                ];
                setMatrixActive(false);
                break;

            case 'sudo':
                outputLines = [
                    { type: 'error', text: 'Permission denied. You are not in the sudoers file.' },
                    { type: 'error', text: 'This incident will be reported to the sysadmin.' }
                ];
                break;

            default:
                outputLines = [
                    { type: 'error', text: `bash: command not found: ${cmd}` },
                    { type: 'output', text: 'Type "help" to view all available commands.' }
                ];
                break;
        }

        setHistory([...newHistory, ...outputLines]);
    };

    return (
        <div 
            onClick={focusInput}
            className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/75 dark:bg-[#0c0c0c]/85 backdrop-blur-xl shadow-spatial dark:shadow-spatial-dark transition-all duration-300 w-full flex flex-col cursor-text group border-t border-l border-white/40 dark:border-white/5"
        >
            {/* Header bar */}
            <div className="bg-gray-100/80 dark:bg-gray-900/60 px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-white/5 select-none transition-colors">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                </div>
                <div className="text-xs font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Terminal size={14} className="text-accent" />
                    <span>jian_cudiamat@portfolio</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-accent font-semibold">~/terminal</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                    <Minus size={12} />
                    <Square size={10} />
                    <X size={12} />
                </div>
            </div>

            {/* Content area */}
            <div ref={scrollContainerRef} className="p-6 font-mono text-xs md:text-sm bg-gray-50/50 dark:bg-black/40 min-h-[320px] max-h-[360px] overflow-y-auto space-y-2.5 relative select-text flex flex-col justify-start">
                
                {/* Matrix Rain canvas layer */}
                {matrixActive && (
                    <div className="absolute inset-0 z-0 bg-[#0c0c0c] pointer-events-none opacity-85">
                        <canvas ref={canvasRef} className="w-full h-full block" />
                    </div>
                )}

                {/* Shell output text */}
                <div className="relative z-10 space-y-2 flex-grow">
                    {history.map((line, idx) => (
                        <div 
                            key={idx} 
                            className={`whitespace-pre-wrap leading-relaxed ${
                                line.type === 'input' ? 'text-gray-900 dark:text-white font-bold' :
                                line.type === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
                                line.type === 'error' ? 'text-red-500 dark:text-red-400 font-semibold' :
                                'text-gray-600 dark:text-gray-300'
                            }`}
                        >
                            {line.text}
                        </div>
                    ))}
                </div>

                {/* Prompt command line */}
                <form onSubmit={handleCommandSubmit} className="relative z-10 flex items-center gap-2 mt-4 pt-4 border-t border-gray-200/50 dark:border-white/5">
                    <span className="text-accent font-extrabold select-none shrink-0">visitor@jian-cudiamat ~ %</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent text-gray-900 dark:text-white outline-none flex-grow font-mono caret-accent"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                    />
                </form>
            </div>

            {/* Tactical Command Quick Chips (Awesome UX for mobile and rapid clicks) */}
            <div className="bg-gray-50/70 dark:bg-gray-950/40 p-4 border-t border-gray-200 dark:border-white/5 flex flex-wrap gap-2 items-center select-none text-[11px] font-mono text-gray-500 dark:text-gray-400">
                <span className="mr-1">Quick Run:</span>
                {['help', 'neofetch', 'skills', 'projects', 'matrix', 'clear'].map((cmd) => (
                    <button
                        key={cmd}
                        onClick={(e) => {
                            e.stopPropagation();
                            runCommand(cmd);
                        }}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </div>
    );
};
