import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import acareImg from '../assets/acare.jpg';
import foodtImg from '../assets/res.jpeg';
import learnImg from '../assets/student.png';

const projects = [
  {
    title: 'Acare',
    description: 'ICU bed availability and Ambulance Tracking System  with React, Node.js, flutter and MongoDB',
    image: acareImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'Socket.io'],
    github: 'https://github.com/Ravindukavisara/Acare-finalProject-Turnkey',
    live: 'https://example.com',
  },
  {
    title: 'Knowledge Sharing Platform',
    description: 'Full-stack web application for student with React, Node.js, Tailwind CSS',
    image: learnImg,
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Ravindukavisara/Knowledge_sharing_platform',
    live: 'https://example.com',
  },
  {
    title: 'Online Food Ordering System',
    description: 'Web application for order food items ',
    image: foodtImg,
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/Ravindukavisara/Resturant-web',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-shadow border border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
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
}