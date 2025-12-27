import React, { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

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
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24">
            <header className="mb-12 text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block">
                    Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </header>

            <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 relative shadow-2xl">
                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-white/50 dark:bg-black/20 border-0 ring-1 ring-gray-200 dark:ring-white/10 p-3 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-white/50 dark:bg-black/20 border-0 ring-1 ring-gray-200 dark:ring-white/10 p-3 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-white/50 dark:bg-black/20 border-0 ring-1 ring-gray-200 dark:ring-white/10 p-3 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] ${status === 'success' ? 'bg-green-600 text-white cursor-default' :
                                status === 'error' ? 'bg-red-600 text-white' :
                                    'bg-gray-900 dark:bg-white text-white dark:text-black hover:shadow-lg'
                            }`}
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Sending...
                            </>
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle size={20} />
                                Message Sent!
                            </>
                        ) : status === 'error' ? (
                            <>
                                <XCircle size={20} />
                                Failed to Send
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>

            <div className="mt-12 flex justify-center gap-8">
                <a href="https://github.com/Shunsena-Jian" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jian.r.cudiamat@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-110 transition-all duration-300">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                </a>
            </div>
        </div>
    );
};
