// ============================================
// YOUR PERSONAL DATA FILE
// ============================================
// This file is for YOUR data only
// Edit this file with your real information
// mock.js will remain as template/backup
// ============================================

export const myPortfolioData = {
  personal: {
    name: "Simran Koul",
    title: "Project Manager",
    tagline: "Bridging the gap between technology, business and people to deliver value.",
    email: "simrankoul525@gmail.com",
    phone: "+91 9779939097",
    location: "Chandigarh, India",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQHIBtIHEWYGzA/profile-displayphoto-scale_200_200/B56ZoiHPKOJwAY-/0/1761508914620?e=1764806400&v=beta&t=5IJZYOj5ywJsZrL9VaTj5Upt9pkSKpSspT-KgrBemek",
    summary: "Results-driven professional with 4 years of experience delivering complex projects on time and within budget. Expert in Agile methodologies, stakeholder management, and cross-functional team leadership. Proven track record of improving operational efficiency and driving organizational success. Currently seeking opportunities to leverage my project management expertise in dynamic, growth-oriented environments.",
    linkedin: "https://linkedin.com/in/simrankoul",
    github: "https://github.com/simrankoul",
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
      company: "Nagarro",
      logo: "https://ibb.co/SwfbBBPD",
      designation: "Senior Engineer",
      duration: "Jan 2023 - Nov 2024",
      location: "Gurugram, India",
      description: "Orchestrated cross-functional teams to onboard a new release process and change management.",
      achievements: [
        "Onboarded 5 teams to implement weekly release process.",
        "Migrated environments from On-prem to Cloud.",
        "Formulated strategies to mitigate risk on-Live. "
      ]
    },
    {
      id: 2,
      type: "work",
      company: "Nagarro",
      logo: "https://ibb.co/SwfbBBPD",
      designation: "Engineer",
      duration: "Feb 2022 - Jan 2023",
      location: "Gurugram, India",
      description: "Optimised processes to streamline teams and increase efficiency",
      achievements: [
        "Successfully heavy releases with 70+ user stories.",
        "Automated processes to increase efficiency by 100%",
        "Improved the collaboration between teams to improve communication and issue resolution."
      ]
    },
    {
      id: 3,
      type: "work",
      company: "Nagarro",
      logo: "https://ibb.co/SwfbBBPD",
      designation: "Associate Engineer",
      duration: "Feb 2021 - Feb 2022",
      location: "Gurugram, India",
      description: "Managed Bi-weekly releases of the Investment Bank as the Client",
      achievements: [
        "Handled Test and Staging environments with issues resolved within SLA.",
        "Coordinated with multiple teams to ensure minimum blockers.",
        "Reduced Go-Live issues by 50%."
      ]
    },
    {
      id: 4,
      type: "work",
      company: "Nagarro",
      logo: "https://ibb.co/SwfbBBPD",
      designation: "Engineer Trainee",
      duration: "Nov 2020 - Jan 2021",
      location: "Gurugram, India",
      description: "Successfully completed training on Cloud & DevOps Technologies",
      achievements: [
        "Underwent training related to Jenkins, Azure, Ansible, Terraform, Azure DevOps.",
        "Collaborated with team members to implement the learnings from the training as a project."
      ]
    },
    {
      id: 5,
      type: "break",
      title: "Career Break",
      duration: "November 2024 - November 2025",
      description: "Took 1-year break for personal development and skill enhancement.",
      activities: [
        "Prepared & Appeared for MBA Exams",
        "Started my EPGP program with IIMK",
        "Upskilled in Project Management",
        "Volunteered for non-profit initiatives"
      ]
    },
    {
      id: 6,
      type: "education",
      institution: "Indian Institute of Management, Kozhikode",
      degree: "Executive Post Graduate Program",
      field: "General Management",
      duration: "2025 - 2027",
      location: "Kozhikode, India",
      gpa: "3.22/4.33",
      /* achievements: [
        "Dean's List for Academic Excellence",
        "Led student consulting project for Fortune 500 company"
      ] */
    },
    {
      id: 7,
      type: "education",
      institution: "Chitkara University",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      duration: "2016 - 2020",
      location: "Punjab, India",
      gpa: "9.65/10.0",
      achievements: [
        "Member of Toasmasters' International Club",
        "Selected as part of Quick Heal Academy for Cyber Security Batch"
      ]
    },
    {
      id: 10,
      type: "certification",
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      issued: "September 2025",
      credentialId: "001786799",
      description: "Professional certification demonstrating expertise in Scrum framework and Agile project management methodologies."
    }
    // Add more timeline entries: work, education, certification, break
  ]
};
