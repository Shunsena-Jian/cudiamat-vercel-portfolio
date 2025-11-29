import React from 'react';
import { Folder } from 'lucide-react';
import { TerminalWindow } from '@/components/TerminalWindow';
import { PROJECTS } from '../data/content';

export const Projects: React.FC = () => {
    return (
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
    );
};
