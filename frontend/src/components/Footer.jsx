import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{data.name}</h3>
            <p className="text-slate-400">{data.title}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;