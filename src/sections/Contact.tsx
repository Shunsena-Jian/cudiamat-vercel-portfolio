import React, { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SOCIAL, CONTACT } from '@/config/portfolio';

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
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-32">
            <header className="mb-16 text-center">
                <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-4 inline-block pb-2">
                    Get in Touch
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">
                    {CONTACT.defaultStatusMessage}
                </p>
            </header>

            <div className="glass dark:glass-dark rounded-3xl p-8 md:p-12 border-t border-l border-white/40 dark:border-white/10 relative shadow-spatial dark:shadow-spatial-dark">
                <form ref={form} className="space-y-8" onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-white/40 dark:bg-black/20 backdrop-blur-md border border-gray-200/50 dark:border-white/10 p-4 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-inner"
                                placeholder={CONTACT.formPlaceholders.name}
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-white/40 dark:bg-black/20 backdrop-blur-md border border-gray-200/50 dark:border-white/10 p-4 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-inner"
                                placeholder={CONTACT.formPlaceholders.email}
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Message</label>
                        <textarea
                            name="message"
                            required
                            rows={6}
                            className="w-full bg-white/40 dark:bg-black/20 backdrop-blur-md border border-gray-200/50 dark:border-white/10 p-4 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none shadow-inner"
                            placeholder={CONTACT.formPlaceholders.message}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-transparent dark:border-white/20 ${status === 'success' ? 'bg-emerald-600 text-white cursor-default' :
                                status === 'error' ? 'bg-red-600 text-white' :
                                    'bg-gray-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black hover:shadow-spatial dark:hover:shadow-spatial-dark hover:bg-black dark:hover:bg-white'
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

            <div className="mt-16 flex justify-center gap-6">
                <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:shadow-spatial dark:hover:shadow-spatial-dark transition-all duration-300">
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 hover:shadow-spatial dark:hover:shadow-spatial-dark transition-all duration-300">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href={SOCIAL.emailLink} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass dark:glass-dark text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-1 hover:shadow-spatial dark:hover:shadow-spatial-dark transition-all duration-300">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                </a>
            </div>
        </div>
    );
};