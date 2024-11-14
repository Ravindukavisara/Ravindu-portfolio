import React from 'react';
import { ArrowDown } from 'lucide-react';
import CodeRain from './CodeRain';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden">
      <CodeRain />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
          <img
              src={profileImg}
              alt="Profile"
              className="w-60 h-60 rounded-full mx-auto border-4 border-blue-600 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
            Ravindu Kavisara
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Full Stack Developer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Building robust web applications with modern technologies
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent text-blue-400 border border-blue-600 rounded-lg hover:bg-blue-600/20 transition-colors"
            >
              View Projects
            </a>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}