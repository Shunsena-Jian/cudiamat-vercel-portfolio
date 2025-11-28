import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { TerminalWindow } from './components/TerminalWindow';
import { TypewriterText } from './components/TypewriterText';
import { Project, Experience } from './types';
import { motion } from 'framer-motion';
import {
    Database,
    Server,
    Cpu,
    Github,
    Linkedin,
    Mail,
    Zap,
    HardDrive,
    Terminal,
    Folder,
    Layout,
    Box
} from 'lucide-react';

// Mock Data
const PROJECTS: Project[] = [
    {
        id: 'p1',
        name: 'cadet_information_system',
        description: 'Centralized cadet lifecycle management core. Handles high-concurrency enrollment transactions, tuition processing, and administrative administrative workflows for the academy.',
        techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        status: 'Deployed',
        endpoint: 'Philippine Military Academy',
        latency: '13ms'
    },
    {
        id: 'p2',
        name: 'intellidocs',
        description: 'Enterprise document automation engine for SLU. Features dynamic template rendering, version control, print spooling, and real-time document editing capabilities.',
        techStack: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        status: 'Deployed',
        endpoint: 'Saint Louis University',
        latency: '15ms'
    },
    {
        id: 'p3',
        name: 'kasalo_kusina_frontend',
        description: 'High-performance frontend interface for a culinary sharing ecosystem. Optimized for user engagement ("vibe-coded") with modular component architecture.',
        techStack: ['ReactJS', 'Tailwind', 'Vite'],
        status: 'In Development',
        endpoint: 'localhost:3001',
        latency: '8ms'
    },
    {
        id: 'p4',
        name: 'kasalo_kusina_backend',
        description: 'Scalable RESTful API service supporting the culinary platform. Implements complex query logic, secure authentication gateways, and optimized data retrieval.',
        techStack: ['NodeJS', 'Express', 'MySQL', 'JWT'],
        status: 'In Development',
        endpoint: 'localhost:3000',
        latency: '5ms'
    }
];

const EXPERIENCE: Experience[] = [
    {
        id: 'e1',
        role: 'Junior Backend Web Developer',
        company: 'IThinkWeb Corporation',
        period: 'July 2024 - Present',
        logs: [
            '[INFO] Engineered robust backends with Laravel, DynamoDB, and OpenSearch',
            '[SUCCESS] Designed RESTful APIs for seamless system integration',
            '[DEBUG] Optimized legacy code and enhanced system performance',
            '[WARN] Maintained Agile SDLC utilizing Jira, Slack, and Confluence'
        ]
    },
    {
        id: 'e2',
        role: '(Intern) Computer Programmer',
        company: 'Philippine Military Academy',
        period: 'January 2024 - May 2024',
        logs: [
            '[INFO] Architected scalable system components using PHP Laravel framework',
            '[SUCCESS] Developed web portal for academy operations management',
            '[WARN] Collaborated with cross-functional teams to ensure timely delivery'
        ]
    }
];

const SKILLS_CATEGORIES = [
    {
        id: 'backend',
        title: 'Backend',
        icon: <Server size={18} />,
        skills: [
            { name: 'PHP Laravel', level: '70%' },
            { name: 'NodeJS', level: '30%' },
            { name: 'Javascript', level: '40%' },
            { name: 'Java', level: '20%' },
            { name: 'Python', level: '15%' }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <Layout size={18} />,
        skills: [
            { name: 'Blade', level: '30%' },
            { name: 'ReactJS', level: '20%' }
        ]
    },
    {
        id: 'database',
        title: 'Database',
        icon: <Database size={18} />,
        skills: [
            { name: 'MySQL', level: '75%' },
            { name: 'MongoDB', level: '75%' },
            { name: 'DynamoDB', level: '35%' }
        ]
    },
    {
        id: 'others',
        title: 'Others',
        icon: <Box size={18} />,
        skills: [
            { name: 'Github', level: '90%' },
            { name: 'RESTful', level: '75%' },
            { name: 'Postman', level: '75%' },
            { name: 'Stripe', level: '50%' },
            { name: 'Agile SDLC', level: '100%' }
        ]
    }
];

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-terminal-black text-gray-300 font-mono pb-20 selection:bg-green-900 selection:text-white">
            <NavBar currentSection={activeSection} onNavigate={setActiveSection} />

            <main className="container mx-auto px-4 pt-24 max-w-5xl">

                {/* HOME SECTION */}
                {activeSection === 'home' && (
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
                                        onClick={() => setActiveSection('projects')}
                                        className="px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-colors flex items-center gap-2"
                                    >
                                        <Terminal size={18} />
                                        View Projects
                                    </button>
                                    <button
                                        onClick={() => setActiveSection('contact')}
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
                )}

                {/* PROJECTS SECTION */}
                {activeSection === 'projects' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <header className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                <Folder className="text-blue-500" />
                                /projects
                            </h2>
                            <p className="text-gray-500 text-sm">Listing directories... found {PROJECTS.length} results.</p>
                        </header>

                        <div className="grid md:grid-cols-2 gap-6">
                            {PROJECTS.map((project) => (
                                <TerminalWindow key={project.id} title={`cat ${project.name}.json`}>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold text-green-400">{project.name}</h3>
                                            <span className={`text-xs px-2 py-1 rounded border ${
                                                project.status === 'Deployed' ? 'border-green-800 bg-green-900/20 text-green-400' :
                                                    project.status === 'In Development' ? 'border-yellow-800 bg-yellow-900/20 text-yellow-400' :
                                                        'border-gray-800 bg-gray-900 text-gray-500'
                                            }`}>
                         {project.status.toUpperCase()}
                       </span>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="bg-black/50 p-3 rounded border border-gray-800 font-mono text-xs text-gray-300">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-blue-400">Endpoint:</span>
                                                <span>{project.endpoint}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-purple-400">Avg Latency:</span>
                                                <span>{project.latency}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </TerminalWindow>
                            ))}
                        </div>
                    </div>
                )}

                {/* EXPERIENCE SECTION */}
                {activeSection === 'experience' && (
                    <div className="space-y-8">
                        <header className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                <Server className="text-yellow-500" />
                                /var/log/career.log
                            </h2>
                            <p className="text-gray-500 text-sm">Tail output of system logs...</p>
                        </header>

                        <div className="relative border-l border-gray-800 ml-4 space-y-12">
                            {EXPERIENCE.map((exp, idx) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600" />

                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                                    </div>
                                    <div className="text-green-500 font-mono mb-4">@ {exp.company}</div>

                                    <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4 font-mono text-sm overflow-hidden">
                                        {exp.logs.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                                                className="mb-2 last:mb-0"
                                            >
                                                <span className="text-gray-600 mr-2">{idx * 100 + i + 1}</span>
                                                <span className={
                                                    log.includes('[INFO]') ? 'text-blue-400' :
                                                        log.includes('[SUCCESS]') ? 'text-green-400' :
                                                            log.includes('[WARN]') ? 'text-yellow-400' :
                                                                log.includes('[DEBUG]') ? 'text-purple-400' : 'text-gray-300'
                                                }>{log}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Grid */}
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <HardDrive className="text-purple-500" />
                                System Resources
                            </h3>

                            <div className="space-y-8">
                                {SKILLS_CATEGORIES.map((category, catIdx) => (
                                    <div key={category.id}>
                                        <div className="flex items-center gap-2 mb-4 text-green-400/80 text-sm font-bold uppercase tracking-wider border-b border-gray-800 pb-1 w-max pr-4">
                                            {category.icon}
                                            {category.title}
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {category.skills.map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: (catIdx * 0.1) + (i * 0.05) }}
                                                    className="bg-gray-900/50 border border-gray-800 p-3 rounded flex flex-col gap-2 hover:border-green-500/50 transition-colors group relative overflow-hidden"
                                                >
                                                    <div className="flex justify-between items-end mb-1">
                                                        <span className="font-bold text-gray-200 text-sm group-hover:text-green-400 transition-colors">{skill.name}</span>
                                                        <span className="text-xs text-gray-500 font-mono">{skill.level}</span>
                                                    </div>

                                                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: skill.level }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: (catIdx * 0.1) + 0.3 + (i * 0.1) }}
                                                            className={`h-full ${
                                                                category.id === 'backend' ? 'bg-green-600' :
                                                                    category.id === 'frontend' ? 'bg-blue-600' :
                                                                        category.id === 'database' ? 'bg-yellow-600' : 'bg-purple-600'
                                                            }`}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* CONTACT SECTION */}
                {activeSection === 'contact' && (
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
                                    <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                                        <Github size={20} />
                                        <span>github</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
                                        <Linkedin size={20} />
                                        <span>linkedin</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                                        <Mail size={20} />
                                        <span>email</span>
                                    </a>
                                </div>
                            </div>
                        </TerminalWindow>
                    </div>
                )}

            </main>

            {/* Footer Status Bar */}
            <footer className="fixed bottom-0 w-full bg-black border-t border-gray-800 text-xs font-mono text-gray-600 py-1 px-4 flex justify-between z-50">
                <div className="flex gap-4">
                    <span>STATUS: <span className="text-green-500">ONLINE</span></span>
                    <span className="hidden md:inline">UPTIME: 99.99%</span>
                </div>
                <div className="flex gap-4">
                    <span>BUILD: v2.4.0</span>
                    <span className="hidden md:inline">REACT_KERNEL</span>
                </div>
            </footer>
        </div>
    );
}