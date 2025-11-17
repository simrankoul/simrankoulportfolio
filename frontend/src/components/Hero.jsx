import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 pt-20">
      <div className="container mx-auto px-6 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                {data.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-600 font-semibold">
                {data.title}
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {data.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('timeline')}
                variant="outline"
                className="border-2 border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg"
              >
                View Experience
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4 text-slate-600">
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 hover:text-cyan-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{data.email}</span>
              </a>
              <span className="flex items-center gap-2">
                <span className="text-sm">📞 {data.phone}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sm">📍 {data.location}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-cyan-50 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={data.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-cyan-50 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={data.image || '/1761508914535.jpeg'}
                alt={data.name}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
