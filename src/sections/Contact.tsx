import React from 'react';
import { Zap, Github, Linkedin, Mail } from 'lucide-react';
import { TerminalWindow } from '@/components/TerminalWindow';

export const Contact: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TerminalWindow title="send_message.sh">
                <div className="space-y-6">
                    <div className="text-gray-400 text-sm">
                        <p>initiating secure channel...</p>
                        <p>handshake established.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label className="text-xs text-green-500 uppercase">Input: Email</label>
                            <input type="email" className="w-full bg-black border border-gray-700 p-2 text-gray-300 focus:border-green-500 focus:outline-none rounded-sm" placeholder="user@domain.com" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-green-500 uppercase">Input: Message</label>
                            <textarea rows={5} className="w-full bg-black border border-gray-700 p-2 text-gray-300 focus:border-green-500 focus:outline-none rounded-sm" placeholder="Payload content..." />
                        </div>

                        <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-sm flex items-center justify-center gap-2 transition-all">
                            <Zap size={16} />
                            EXECUTE_SEND()
                        </button>
                    </form>

                    <div className="border-t border-gray-800 pt-6 flex justify-center gap-8">
                        <a href="https://github.com/Shunsena-Jian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                            <Github size={20} />
                            <span>github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                            <span>linkedin</span>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jian.r.cudiamat@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                            <Mail size={20} />
                            <span>email</span>
                        </a>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
};
