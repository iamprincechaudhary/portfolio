import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Flutter and Firebase',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['Flutter', 'Dart', 'Firebase', 'Rest API'],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
  {
    title: 'News App',
    description: 'A news app that provides the latest news from around the world',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    tags: ['Flutter', 'GetX', 'News API'],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
  {
    title: 'Boys Hostel Website',
    description: 'A website for a boys hostel built with Vite, React, and TypeScript',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['TypeScript', 'React', 'Vite'],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-dark-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-dark-text">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-50 dark:bg-dark-bg text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* Uncomment and provide links for GitHub or Live Demo */}
                  {/* 
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a> 
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
