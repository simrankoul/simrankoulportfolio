import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                {data.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-600 font-semibold">
                {data.title}
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {data.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection('timeline')}
                variant="outline"
                className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg"
              >
                View Experience
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span className="text-sm">{data.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span className="text-sm">{data.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-600" />
                <span className="text-sm">{data.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-cyan-100 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-cyan-100 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Avatar className="w-72 h-72 md:w-96 md:h-96 border-8 border-white shadow-2xl relative">
                <AvatarImage src={data.photo} alt={data.name} className="object-cover" />
                <AvatarFallback className="text-6xl bg-cyan-100 text-cyan-600">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;