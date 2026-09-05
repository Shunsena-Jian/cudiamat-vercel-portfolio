import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { PROJECTS, SOCIAL } from '@/config/portfolio';

interface CommandOutput {
    type: 'input' | 'output' | 'error' | 'success';
    text: string;
}

const QUICK_COMMANDS = ['help', 'neofetch', 'skills', 'projects', 'contact', 'clear'] as const;

export const TerminalShell: React.FC = () => {
    const [history, setHistory] = useState<CommandOutput[]>(() => [
        { type: 'output', text: 'profile shell v2.0 — query anything below.' },
        { type: 'output', text: 'Type "help" or tap a shortcut to see available commands.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    // Pin the shell's own scroll box to the latest output.
    // Scrolls only the inner container so the page itself never moves.
    React.useEffect(() => {
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
        const newHistory = [...history, { type: 'input', text: `$ ${cmd}` } as CommandOutput];

        let outputLines: CommandOutput[] = [];

        switch (cmd) {
            case 'help':
                outputLines = [
                    { type: 'output', text: 'Available commands:' },
                    { type: 'output', text: '  neofetch  - Display bio and profile details.' },
                    { type: 'output', text: '  skills    - View core technical competencies.' },
                    { type: 'output', text: '  projects  - Show project nodes with status.' },
                    { type: 'output', text: '  contact   - Display connection details.' },
                    { type: 'output', text: '  clear     - Wipe the current screen.' }
                ];
                break;

            case 'neofetch': {
                const accentName = localStorage.getItem('accentTheme') || 'emerald';
                outputLines = [
                    { type: 'success', text: 'Jian Raphael Cudiamat' },
                    { type: 'output', text: '---------------------' },
                    { type: 'output', text: 'Role: Backend Engineer' },
                    { type: 'output', text: 'Focus: Robust APIs, distributed architecture, high-performance apps' },
                    { type: 'output', text: 'Status: ONLINE' },
                    { type: 'output', text: `Accent: ${accentName.toUpperCase()}` }
                ];
                break;
            }

            case 'skills':
                outputLines = [
                    { type: 'output', text: 'Core competencies:' },
                    { type: 'success', text: '  PHP Laravel   ·  MySQL  ·  MongoDB' },
                    { type: 'success', text: '  RESTful APIs  ·  DynamoDB  ·  OpenSearch' },
                    { type: 'output', text: '  Node.js  ·  React  ·  Stripe integrations' }
                ];
                break;

            case 'projects': {
                outputLines = [
                    { type: 'output', text: 'Project nodes:' }
                ];
                PROJECTS.forEach(p => {
                    outputLines.push({
                        type: p.status === 'Deployed' ? 'success' : 'output',
                        text: `* ${p.name} — ${p.status} · ${p.techStack.join(', ')}`
                    });
                });
                break;
            }

            case 'clear':
                setHistory([]);
                return;

            case 'contact':
                outputLines = [
                    { type: 'success', text: 'Connection details:' },
                    { type: 'output', text: `  Email:    ${SOCIAL.email}` },
                    { type: 'output', text: `  GitHub:   ${SOCIAL.github}` },
                    { type: 'output', text: `  LinkedIn: ${SOCIAL.linkedin}` }
                ];
                break;

            case 'sudo':
                outputLines = [
                    { type: 'error', text: 'Permission denied. You are not in the sudoers file.' },
                    { type: 'error', text: 'This incident will be reported to the sysadmin.' }
                ];
                break;

            default:
                outputLines = [
                    { type: 'error', text: `command not found: ${cmd}` },
                    { type: 'output', text: 'Type "help" to view all available commands.' }
                ];
                break;
        }

        setHistory([...newHistory, ...outputLines]);
    };

    return (
        <div
            onClick={focusInput}
            className="surface rounded-2xl overflow-hidden w-full flex flex-col cursor-text"
        >
            <div className="px-5 sm:px-6 py-3.5 flex items-center gap-2.5 border-b border-zinc-200/80 dark:border-white/10 select-none">
                <Terminal size={15} className="text-accent" aria-hidden="true" />
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    profile<span className="text-accent font-semibold"> ~ </span>interactive
                </span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                    live shell
                </span>
            </div>

            <div ref={scrollContainerRef} className="px-5 sm:px-6 py-5 font-mono text-xs md:text-sm min-h-[280px] max-h-[340px] overflow-y-auto space-y-2 select-text">
                {history.map((line, idx) => (
                    <div
                        key={idx}
                        className={`whitespace-pre-wrap leading-relaxed ${
                            line.type === 'input' ? 'text-zinc-900 dark:text-white font-bold' :
                            line.type === 'success' ? 'text-accent font-medium' :
                            line.type === 'error' ? 'text-red-500 dark:text-red-400 font-semibold' :
                            'text-zinc-600 dark:text-zinc-300'
                        }`}
                    >
                        {line.text}
                    </div>
                ))}

                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-3">
                    <span className="text-accent font-bold select-none shrink-0" aria-hidden="true">$</span>
                    <label htmlFor="profile-shell-input" className="sr-only">Run a profile command</label>
                    <input
                        ref={inputRef}
                        id="profile-shell-input"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent text-zinc-900 dark:text-white outline-none flex-grow font-mono caret-accent min-w-0"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                    />
                </form>
            </div>

            <div className="px-5 sm:px-6 py-3.5 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap gap-2 items-center select-none">
                <span className="mr-1 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">Try:</span>
                {QUICK_COMMANDS.map((cmd) => (
                    <button
                        key={cmd}
                        onClick={(e) => {
                            e.stopPropagation();
                            runCommand(cmd);
                        }}
                        className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </div>
    );
};
