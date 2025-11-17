// ============================================
// YOUR PERSONAL DATA FILE
// ============================================
// This file is for YOUR data only
// Edit this file with your real information
// mock.js will remain as template/backup
// ============================================

export const myPortfolioData = {
  personal: {
    name: "Your Full Name",
    title: "Senior Project Manager",
    tagline: "Your professional tagline here",
    email: "your.email@example.com",
    phone: "+1 (555) XXX-XXXX",
    location: "Your City, State",
    photo: "YOUR_PHOTO_URL",
    summary: "Your professional summary here...",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    resumeUrl: "/resume.pdf"
  },
  
  skills: [
    { name: "Agile/Scrum Methodologies", level: 95 },
    { name: "Stakeholder Management", level: 90 },
    { name: "Risk Management", level: 85 },
    { name: "Budget Planning & Control", level: 88 },
    { name: "Team Leadership", level: 92 },
    { name: "Strategic Planning", level: 87 },
    { name: "JIRA & Project Tools", level: 90 },
    { name: "Process Improvement", level: 85 }
  ],
  
  projects: [
    {
      id: 1,
      title: "Your Project Title",
      client: "Client Name",
      duration: "Month Year - Month Year",
      description: "Project description...",
      technologies: ["Tech1", "Tech2", "Tech3"],
      image: "PROJECT_IMAGE_URL",
      outcomes: [
        "Outcome 1",
        "Outcome 2",
        "Outcome 3"
      ],
      role: "Your Role",
      teamSize: "Team size"
    }
    // Add more projects here
  ],
  
  timeline: [
    {
      id: 1,
      type: "work",
      company: "Your Company",
      logo: "COMPANY_LOGO_URL",
      designation: "Your Current Position",
      duration: "Month Year - Present",
      location: "City, State",
      description: "Your role description...",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ]
    }
    // Add more timeline entries: work, education, certification, break
  ]
};
