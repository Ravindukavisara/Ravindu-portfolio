import React from 'react';
import { Code2, Database, Server, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'PHP', 'Express.js', 'RESTful APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Others',
    icon: Code2,
    technologies: ['Git', 'AWS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-shadow border border-gray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                <skill.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-gray-400">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}