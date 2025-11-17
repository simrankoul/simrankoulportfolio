
import React, { useState } from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import YOUR data file (edit myData.js with your real information)
// mock.js is kept as a template/backup
import { myPortfolioData as portfolioData } from './myData';
// import { portfolioData } from './mock'; // Using mock data to show experience section
import { useToast } from './hooks/use-toast';

function App() {
  const { toast } = useToast();
  
  // ============================================
  // PROJECTS SECTION VISIBILITY CONTROL
  // ============================================
  // To SHOW Projects section: Change false to true
  // To HIDE Projects section: Change true to false
  // ============================================
  const [showProjects, setShowProjects] = useState(false);
  
  // ============================================
  // To edit Projects data, go to: /app/frontend/src/mock.js
  // Find the "projects" array and modify project details
  // ============================================

  // ============================================
  // RESUME DOWNLOAD - UPDATED TO ACTUALLY WORK!
  // ============================================
  // Your resume PDF is already in: /frontend/public/Simran_Koul_Resume.pdf
  // This will download it when user clicks the button
  // ============================================
  const handleDownloadResume = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      // This points to your resume in the public folder
      link.href = '/Simran_Koul_Resume.pdf';
      link.download = 'Simran_Koul_Resume.pdf';
      link.style.display = 'none';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Resume Downloaded! 📄",
        description: "Your resume has been successfully downloaded.",
      });
    } catch (error) {
      console.error('Resume download error:', error);
      toast({
        title: "Download Error",
        description: "Please make sure the resume file is in the public folder.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="App">
      <Header onDownloadResume={handleDownloadResume} showProjects={showProjects} />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Skills skills={portfolioData.skills} />
      
      {/* ============================================ */}
      {/* PROJECTS SECTION (Currently Hidden)         */}
      {/* ============================================ */}
      {/* To show this section:                       */}
      {/* 1. Scroll to top of this file (line ~13)    */}
      {/* 2. Change: useState(false) to useState(true)*/}
      {/* 3. Edit project data in /app/frontend/src/mock.js */}
      {/* ============================================ */}
      {showProjects && <Projects projects={portfolioData.projects} />}
      
      <Timeline timeline={portfolioData.timeline} />
      <Contact data={portfolioData.personal} />
      <Footer data={portfolioData.personal} />
      <Toaster />
    </div>
  );
}

export default App;
