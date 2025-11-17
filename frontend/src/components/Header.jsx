import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';

const Header = ({ onDownloadResume, showProjects = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">AM</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Skills
            </button>
            {showProjects && (
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Projects
              </button>
            )}
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={onDownloadResume}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left"
            >
              Skills
            </button>
            {showProjects && (
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left"
              >
                Projects
              </button>
            )}
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left"
            >
              Contact
            </button>
            <Button
              onClick={onDownloadResume}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;