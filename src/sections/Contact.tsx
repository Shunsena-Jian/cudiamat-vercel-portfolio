import React, { useEffect, useRef, useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '@/config/portfolio';
import { SectionHeader } from '../components/SectionHeader';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const inputClasses = 'w-full bg-zinc-50 dark:bg-black/20 border border-zinc-200 dark:border-white/10 px-4 py-3.5 rounded-xl text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:border-accent focus:ring-2 focus:ring-[rgb(var(--accent-glow))] focus:outline-none transition-all text-[15px]';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [status, setStatus] = useState<SendStatus>('idle');

    useEffect(() => {
        return () => {
            if (resetTimer.current) {
                clearTimeout(resetTimer.current);
                resetTimer.current = null;
            }
        };
    }, []);

    const scheduleReset = (): void => {
        if (resetTimer.current) {
            clearTimeout(resetTimer.current);
        }
        resetTimer.current = setTimeout(() => {
            setStatus('idle');
            resetTimer.current = null;
        }, 3000);
    };

    const sendEmail = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!form.current || status === 'sending') return;

        const serviceId: string | undefined = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId: string | undefined = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey: string | undefined = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (!serviceId || !templateId || !publicKey) {
            setStatus('error');
            scheduleReset();
            return;
        }

        setStatus('sending');

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                setStatus('success');
                form.current?.reset();
                scheduleReset();
            }, () => {
                setStatus('error');
                scheduleReset();
            });
    };

    return (
        <div className="max-w-2xl mx-auto pb-8">
            <SectionHeader
                eyebrow="Contact"
                title="Get in Touch"
                description={CONTACT.defaultStatusMessage}
            />

            <div className="surface rounded-2xl p-7 sm:p-10">
                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="contact-name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="user_name"
                                required
                                autoComplete="name"
                                className={inputClasses}
                                placeholder={CONTACT.formPlaceholders.name}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="contact-email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="user_email"
                                required
                                autoComplete="email"
                                className={inputClasses}
                                placeholder={CONTACT.formPlaceholders.email}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="contact-message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={6}
                            className={`${inputClasses} resize-none`}
                            placeholder={CONTACT.formPlaceholders.message}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-colors duration-300 text-[15px] ${
                            status === 'success'
                                ? 'bg-emerald-600 text-white cursor-default'
                            : status === 'error'
                                ? 'bg-red-600 text-white'
                                : 'bg-accent hover:bg-accent-hover text-white'
                        }`}
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 size={19} className="animate-spin" aria-hidden="true" />
                                Sending...
                            </>
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle size={19} aria-hidden="true" />
                                Message Sent!
                            </>
                        ) : status === 'error' ? (
                            <>
                                <XCircle size={19} aria-hidden="true" />
                                Failed to Send
                            </>
                        ) : (
                            <>
                                <Send size={19} aria-hidden="true" />
                                Send Message
                            </>
                        )}
                    </button>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-light text-center" role="status">
                        {status === 'error'
                            ? 'Something went wrong sending your message. Please try again or reach me via the links below.'
                            : 'I usually reply within a day or two.'}
                    </p>
                </form>
            </div>
        </div>
    );
};
