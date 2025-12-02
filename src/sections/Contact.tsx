import React, { useRef, useState } from 'react';
import { Zap, Github, Linkedin, Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { TerminalWindow } from '@/components/TerminalWindow';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const  sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create an Email Template -> Get Template ID
        // 3. Go to Account > Public Key -> Get Public Key
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
            console.log(result.text);
            setStatus('success');
            form.current?.reset();
            setTimeout(() => setStatus('idle'), 3000);
        }, (error) => {
            console.log(error.text);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        });
    };

    return (
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TerminalWindow title="send_message.sh">
                <div className="space-y-6">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        <p>initiating secure channel...</p>
                        <p>handshake established.</p>
                    </div>

                    <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                        <div className="space-y-1">
                            <label className="text-xs text-green-600 dark:text-green-500 uppercase">Input: Email</label>
                            <input 
                                type="text" 
                                name="user_name"
                                required
                                className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-gray-300 focus:border-green-500 focus:outline-none rounded-sm transition-colors"
                                placeholder="Ident.User" 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-green-600 dark:text-green-500 uppercase">Input: Email</label>
                            <input 
                                type="email" 
                                name="user_email"
                                required
                                className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-gray-300 focus:border-green-500 focus:outline-none rounded-sm transition-colors"
                                placeholder="user@domain.com" 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-green-600 dark:text-green-500 uppercase">Input: Message</label>
                            <textarea 
                                name="message" 
                                required
                                rows={5} 
                                className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 p-2 text-gray-900 dark:text-gray-300 focus:border-green-500 focus:outline-none rounded-sm transition-colors"
                                placeholder="Payload content..." 
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full font-bold py-2 px-4 rounded-sm flex items-center justify-center gap-2 transition-all ${
                                status === 'success' ? 'bg-green-900 text-green-200 cursor-default' :
                                status === 'error' ? 'bg-red-900 text-red-200' :
                                'bg-green-700 hover:bg-green-600 text-white'
                            }`}
                        >
                            {status === 'sending' ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    TRANSMITTING...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle size={16} />
                                    TRANSMISSION_COMPLETE
                                </>
                            ) : status === 'error' ? (
                                <>
                                    <XCircle size={16} />
                                    ERROR_RETRY
                                </>
                            ) : (
                                <>
                                    <Zap size={16} />
                                    EXECUTE_SEND()
                                </>
                            )}
                        </button>
                    </form>

                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex justify-center gap-8">
                        <a href="https://github.com/Shunsena-Jian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                            <Github size={20} />
                            <span>github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                            <span>linkedin</span>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jian.r.cudiamat@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            <Mail size={20} />
                            <span>email</span>
                        </a>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
};
