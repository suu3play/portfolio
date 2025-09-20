import React from 'react';
import { projects } from '../data/portfolio';
import ProjectImage from './ProjectImage';

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
                            <ProjectImage
                                src={project.imageUrl}
                                fallback={project.imageFallback}
                                alt={`${project.title}のプロジェクト画像`}
                                className="h-48"
                            />
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
                                    {project.githubUrl ? (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors duration-300"
                                        >
                                            <i className="fab fa-github"></i>
                                            GitHub
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
                                            <i className="fab fa-github"></i>
                                            GitHub（非公開）
                                        </span>
                                    )}
                                    {project.demoUrl ? (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors duration-300"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Demo（準備中）
                                        </span>
                                    )}
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
