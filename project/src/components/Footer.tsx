import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/Ravindukavisara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ravindu-kavisara-b5a59329a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ravindukavisara21@.com" className="hover:text-blue-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} RK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}