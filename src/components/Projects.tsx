import React from 'react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">プロジェクト画像</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
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