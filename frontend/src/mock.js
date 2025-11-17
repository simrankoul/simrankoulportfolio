// Mock data for portfolio

export const portfolioData = {
  personal: {
    name: "Alex Morgan",
    title: "Senior Project Manager",
    tagline: "Transforming ideas into successful project deliveries with proven leadership",
    email: "alex.morgan@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    summary: "Results-driven Project Manager with 8+ years of experience leading cross-functional teams to deliver complex projects on time and within budget. Certified Scrum Master with expertise in Agile methodologies, stakeholder management, and strategic planning.",
    linkedin: "https://linkedin.com/in/alexmorgan",
    github: "https://github.com/alexmorgan",
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
      title: "Enterprise Digital Transformation",
      client: "Fortune 500 Financial Company",
      duration: "Jan 2023 - Dec 2023",
      description: "Led complete digital transformation initiative for a major financial institution, modernizing legacy systems and implementing cloud-based solutions.",
      technologies: ["Agile", "Scrum", "JIRA", "Azure", "Microservices"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      outcomes: [
        "40% increase in operational efficiency",
        "Reduced infrastructure costs by $2M annually",
        "Improved customer satisfaction by 35%"
      ],
      role: "Senior Project Manager",
      teamSize: "20+ members"
    },
    {
      id: 2,
      title: "E-Commerce Platform Launch",
      client: "Retail Tech Startup",
      duration: "Jun 2022 - Dec 2022",
      description: "Managed end-to-end development and launch of a multi-vendor e-commerce platform serving 100K+ users.",
      technologies: ["Agile", "React", "Node.js", "AWS", "Payment Gateway Integration"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      outcomes: [
        "Successfully launched on time and within budget",
        "Achieved 100K+ users in first 3 months",
        "Generated $5M in revenue within 6 months"
      ],
      role: "Project Manager",
      teamSize: "15 members"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "Regional Hospital Network",
      duration: "Mar 2021 - Aug 2021",
      description: "Implemented an integrated healthcare management system across 5 hospitals, improving patient care and administrative efficiency.",
      technologies: ["Waterfall", "HL7", "FHIR", "Cloud Migration", "Data Security"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      outcomes: [
        "Reduced patient wait times by 50%",
        "Improved data accuracy by 95%",
        "Enhanced compliance with healthcare regulations"
      ],
      role: "Project Manager",
      teamSize: "12 members"
    },
    {
      id: 4,
      title: "Mobile App Development",
      client: "EdTech Company",
      duration: "Sep 2020 - Feb 2021",
      description: "Coordinated development of a mobile learning platform for K-12 education with interactive features and real-time progress tracking.",
      technologies: ["Agile", "React Native", "Firebase", "Mobile Development", "UX Design"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      outcomes: [
        "Reached 50K+ active students",
        "Achieved 4.8/5 app store rating",
        "Increased student engagement by 60%"
      ],
      role: "Associate Project Manager",
      teamSize: "10 members"
    }
  ],
  
  timeline: [
    {
      id: 1,
      type: "work",
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      designation: "Senior Project Manager",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading enterprise-level digital transformation projects with teams of 15+ members. Managed $2M+ project budgets and delivered 12 major projects with 98% client satisfaction.",
      achievements: [
        "Led digital transformation initiative resulting in 40% operational efficiency",
        "Managed cross-functional team of 20+ across 3 countries",
        "Reduced project delivery time by 25% through Agile implementation"
      ]
    },
    {
      id: 2,
      type: "work",
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      designation: "Project Manager",
      duration: "Mar 2020 - Dec 2021",
      location: "San Francisco, CA",
      description: "Managed software development projects and coordinated with stakeholders to ensure successful project delivery.",
      achievements: [
        "Successfully delivered 8 projects on time and within budget",
        "Improved team productivity by 30% through process optimization",
        "Achieved 95% stakeholder satisfaction rating"
      ]
    },
    {
      id: 3,
      type: "work",
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      designation: "Associate Project Manager",
      duration: "Jun 2018 - Feb 2020",
      location: "San Francisco, CA",
      description: "Assisted senior project managers in planning and execution of medium-scale projects.",
      achievements: [
        "Coordinated 5 concurrent projects with team of 10 members",
        "Implemented risk management framework",
        "Reduced project risks by 35%"
      ]
    },
    {
      id: 4,
      type: "work",
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      designation: "Project Coordinator",
      duration: "Jan 2017 - May 2018",
      location: "San Francisco, CA",
      description: "Supported project teams with scheduling, documentation, and stakeholder communication.",
      achievements: [
        "Maintained 100% on-time project documentation",
        "Streamlined communication processes",
        "Supported 3 major product launches"
      ]
    },
    {
      id: 5,
      type: "break",
      title: "Career Break",
      duration: "Jul 2016 - Dec 2016",
      description: "Took a 6-month sabbatical for personal development and skill enhancement. Completed advanced certifications and traveled to gain global business perspectives.",
      activities: [
        "Completed online courses in Advanced Project Management",
        "Volunteered for non-profit project initiatives",
        "Personal skill development and wellness focus"
      ]
    },
    {
      id: 6,
      type: "education",
      institution: "Stanford University",
      degree: "Master of Business Administration (MBA)",
      field: "Project Management & Strategy",
      duration: "2014 - 2016",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for Academic Excellence",
        "Led student consulting project for Fortune 500 company"
      ]
    },
    {
      id: 7,
      type: "education",
      institution: "University of California",
      degree: "Bachelor of Science",
      field: "Business Administration",
      duration: "2010 - 2014",
      location: "Berkeley, CA",
      gpa: "3.6/4.0",
      achievements: [
        "President of Business Students Association",
        "Graduated with Honors"
      ]
    },
    {
      id: 10,
      type: "certification",
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      issued: "March 2021",
      credentialId: "CSM-123456",
      description: "Professional certification demonstrating expertise in Scrum framework and Agile project management methodologies."
    }
  ]
};