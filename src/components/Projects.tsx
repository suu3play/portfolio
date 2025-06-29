import React from 'react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 ">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-center text-4xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full after:block">
                    プロジェクト
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                            style={{
                                backgroundColor: 'var(--color-card-bg)',
                            }}
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500 text-lg">
                                    プロジェクト画像
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-secondary mb-3">
                                    {project.title}
                                </h3>
                                <p className="mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.githubUrl || '#'}
                                        className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fab fa-github"></i>
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demoUrl || '#'}
                                        className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
