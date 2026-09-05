import React, { Suspense, lazy, useState, useEffect, useCallback, useRef } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './sections/Home';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetails = lazy(() => import('./sections/ProjectDetails').then((m) => ({ default: m.ProjectDetails })));
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));

export type SectionId = 'home' | 'projects' | 'project' | 'experience' | 'contact';

const VALID_SECTIONS: SectionId[] = ['home', 'projects', 'project', 'experience', 'contact'];

interface Route {
    section: SectionId;
    projectId: string | null;
}

function parseHash(): Route {
    const fallback: Route = { section: 'home', projectId: null };
    if (typeof window === 'undefined') return fallback;
    const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts.length === 0) return fallback;
    // Backwards compatibility with the old bespoke detail route.
    if (parts[0] === 'kasalo-kusina') {
        return { section: 'project', projectId: 'kasalo-kusina' };
    }
    if (!VALID_SECTIONS.includes(parts[0] as SectionId)) return fallback;
    if (parts[0] === 'project') {
        return { section: 'project', projectId: parts[1] ?? null };
    }
    return { section: parts[0] as SectionId, projectId: null };
}

function hashFor(route: Route): string {
    if (route.section === 'project' && route.projectId) return `#/project/${route.projectId}`;
    return `#/${route.section}`;
}

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [route, setRoute] = useState<Route>(() => parseHash());
    const [mounted, setMounted] = useState(false);
    const mainRef = useRef<HTMLElement | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [accentTheme, setAccentTheme] = useState<'emerald' | 'blue' | 'purple' | 'amber'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accentTheme');
            if (saved === 'emerald' || saved === 'blue' || saved === 'purple' || saved === 'amber') {
                return saved;
            }
        }
        return 'emerald';
    });

    const navigate = useCallback((section: SectionId, projectId: string | null = null) => {
        const next: Route = { section, projectId };
        const hash = hashFor(next);
        if (window.location.hash === hash) {
            setRoute(next);
        } else {
            window.location.hash = hash;
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const onHashChange = () => setRoute(parseHash());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        mainRef.current?.focus({ preventScroll: true });
    }, [route, mounted]);

    useEffect(() => {
        // Initialize dark mode class on HTML element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('accentTheme', accentTheme);
    }, [accentTheme]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    if (!mounted) return null;

    const viewKey = route.section === 'project' ? `project-${route.projectId}` : route.section;

    return (
        <div className={`min-h-screen text-zinc-800 dark:text-zinc-200 font-sans transition-colors duration-300 relative overflow-hidden bg-paper dark:bg-ink theme-${accentTheme}`}>
            {/* Dynamic Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
                style={{ scaleX }}
            />

            {/* Background layer: engineering grid with accent glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_35%,transparent_100%)]" />
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full opacity-20 dark:opacity-25 blur-[120px] bg-accent" />
            </div>

            <NavBar
                currentSection={route.section}
                onNavigate={navigate}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                accentTheme={accentTheme}
                onChangeAccent={setAccentTheme}
            />

            <main
                ref={mainRef}
                tabIndex={-1}
                aria-label={`${viewKey} section`}
                className="container mx-auto px-4 sm:px-6 pt-32 pb-24 max-w-5xl relative z-10 outline-none"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={viewKey}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {route.section === 'home' && <Home onNavigate={navigate} />}
                        <Suspense fallback={<div className="py-24 text-center font-mono text-sm text-zinc-500 dark:text-zinc-400">loading module…</div>}>
                            {route.section === 'projects' && <Projects onNavigate={navigate} />}
                            {route.section === 'project' && (
                                <ProjectDetails
                                    projectId={route.projectId}
                                    onBack={() => navigate('projects')}
                                    onNavigate={navigate}
                                />
                            )}
                            {route.section === 'experience' && <Experience />}
                            {route.section === 'contact' && <Contact />}
                        </Suspense>
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer onNavigate={navigate} />
        </div>
    );
}
