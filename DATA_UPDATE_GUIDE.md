# Portfolio Data Update Guide

This guide explains how to customize your portfolio with your own information.

## 📁 Data Files Location

- **Your Data:** `/app/frontend/src/myData.js` - Edit this file with YOUR real information
- **Template/Reference:** `/app/frontend/src/mock.js` - Keep as reference, contains example data

## 🔄 Switching Between Data Files

In `/app/frontend/src/App.js`, you can switch between your data and mock data:

**Using YOUR data (myData.js):**
```javascript
import { myPortfolioData as portfolioData } from './myData';
// import { portfolioData } from './mock'; // Keep this commented
```

**Using MOCK data (for testing/reference):**
```javascript
// import { myPortfolioData as portfolioData } from './myData';
import { portfolioData } from './mock'; // Uncomment this line
```

---

## 📝 Data Structure Overview

Your portfolio data consists of 4 main sections:

1. **Personal Information** - Name, title, contact details, social links
2. **Skills** - Technical and soft skills with proficiency levels
3. **Timeline** - Work experience, education, certifications, career breaks
4. **Projects** - Portfolio projects (optional section)

---

## 1️⃣ Personal Information

### Location
Edit the `personal` object in `/app/frontend/src/myData.js`

### Fields Explanation

```javascript
personal: {
  name: "Your Full Name",              // Your complete name
  title: "Your Job Title",             // Current job title or desired position
  tagline: "Your professional tagline", // One-line professional summary
  email: "your.email@example.com",     // Professional email
  phone: "+1 (555) XXX-XXXX",          // Contact number
  location: "City, State/Country",     // Your current location
  photo: "URL_TO_YOUR_PHOTO",          // Profile photo URL (see tips below)
  summary: "Your professional bio...", // 2-3 sentence professional summary
  linkedin: "https://linkedin.com/in/yourprofile",  // LinkedIn profile URL
  github: "https://github.com/yourprofile",         // GitHub profile URL
  resumeUrl: "/resume.pdf"             // Path to your resume PDF
}
```

### Photo URL Tips
You can use:
- **Direct URL:** Upload to image hosting service (Imgur, Cloudinary, etc.)
- **Unsplash:** `https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop`
- **LinkedIn:** Right-click your LinkedIn photo → Copy image address
- **GitHub:** Your GitHub avatar: `https://avatars.githubusercontent.com/u/YOUR_USER_ID`

### Example
```javascript
personal: {
  name: "Simran Koul",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "simran.koul@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  summary: "Passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Specialized in building user-centric applications.",
  linkedin: "https://linkedin.com/in/simrankoul",
  github: "https://github.com/simrankoul",
  resumeUrl: "/resume.pdf"
}
```

---

## 2️⃣ Skills Section

### Structure
```javascript
skills: [
  { name: "Skill Name", level: 90 },  // level is 0-100
  // Add more skills...
]
```

### Tips
- **Level:** Use numbers 0-100 (0 = beginner, 100 = expert)
- **Order:** List most important skills first
- **Categories:** Group similar skills together
- **Quantity:** 6-12 skills recommended for best visual display

### Example
```javascript
skills: [
  // Programming Languages
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  
  // Frameworks
  { name: "React & Next.js", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "FastAPI", level: 85 },
  
  // Tools & Other
  { name: "Git & GitHub", level: 90 },
  { name: "Docker & Kubernetes", level: 80 },
  { name: "AWS Cloud Services", level: 85 },
  { name: "MongoDB & PostgreSQL", level: 88 }
]
```

---

## 3️⃣ Timeline Section (Most Important!)

The timeline displays your professional journey including work experience, education, certifications, and career breaks.

### Timeline Entry Types

1. **Work Experience** (`type: "work"`)
2. **Education** (`type: "education"`)
3. **Certification** (`type: "certification"`)
4. **Career Break** (`type: "break"`)

---

### 3.1 Work Experience Entry

```javascript
{
  id: 1,                                    // Unique number
  type: "work",                             // Always "work" for job entries
  company: "Company Name",                  // Employer name
  logo: "COMPANY_LOGO_URL",                 // Company logo URL
  designation: "Your Job Title",            // Your position/role
  duration: "Month Year - Month Year",      // e.g., "Jan 2022 - Present"
  location: "City, State",                  // Work location
  description: "Brief role description",    // 1-2 sentences about your role
  achievements: [                           // Bullet points of achievements
    "Achievement 1 with metrics",
    "Achievement 2 with impact",
    "Achievement 3 with results"
  ]
}
```

**Full Example:**
```javascript
{
  id: 1,
  type: "work",
  company: "TechCorp Solutions",
  logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
  designation: "Senior Software Engineer",
  duration: "Jan 2022 - Present",
  location: "San Francisco, CA",
  description: "Leading frontend development for enterprise SaaS platform serving 10,000+ users. Architecting scalable React applications and mentoring junior developers.",
  achievements: [
    "Increased application performance by 40% through code optimization and lazy loading",
    "Led migration from JavaScript to TypeScript, reducing bugs by 35%",
    "Mentored team of 5 junior developers, improving team productivity by 25%",
    "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"
  ]
}
```

**Tips for Work Entries:**
- ✅ Use **metrics and numbers** in achievements (40%, 10K users, 5 developers)
- ✅ Start achievements with **action verbs** (Led, Implemented, Increased, Reduced)
- ✅ Show **impact** not just responsibilities
- ✅ Keep descriptions **concise** (1-2 sentences)
- ✅ List **3-5 achievements** per role

---

### 3.2 Education Entry

```javascript
{
  id: 5,                                    // Unique number
  type: "education",                        // Always "education"
  institution: "University Name",           // College/University name
  degree: "Degree Name",                    // E.g., "Bachelor of Science"
  field: "Major/Field of Study",            // Your major
  duration: "Year - Year",                  // E.g., "2018 - 2022"
  location: "City, State",                  // University location
  gpa: "3.8/4.0",                          // Optional: Your GPA
  achievements: [                           // Optional: Academic achievements
    "Dean's List all 4 years",
    "Graduated Summa Cum Laude",
    "President of Computer Science Club"
  ]
}
```

**Full Example:**
```javascript
{
  id: 5,
  type: "education",
  institution: "University of Wisconsin-Madison",
  degree: "Bachelor of Science",
  field: "Computer Science",
  duration: "2018 - 2022",
  location: "Madison, WI",
  gpa: "3.9/4.0",
  achievements: [
    "Dean's List for Academic Excellence (all 4 years)",
    "Graduated Summa Cum Laude with Honors",
    "Founded and led University Coding Club with 100+ members",
    "Published research paper on Machine Learning applications"
  ]
}
```

**Tips for Education Entries:**
- Include your most recent or highest degree first
- GPA is optional (include if 3.5+)
- Highlight relevant coursework, projects, or leadership roles
- Include study abroad or special programs if relevant

---

### 3.3 Certification Entry

```javascript
{
  id: 8,                                    // Unique number
  type: "certification",                    // Always "certification"
  title: "Certification Name",              // Full certification title
  issuer: "Issuing Organization",           // Who issued it
  issued: "Month Year",                     // When you received it
  credentialId: "CREDENTIAL-ID",            // Optional: Credential ID
  description: "Brief description"          // What the certification covers
}
```

**Full Example:**
```javascript
{
  id: 8,
  type: "certification",
  title: "AWS Certified Solutions Architect - Professional",
  issuer: "Amazon Web Services (AWS)",
  issued: "March 2023",
  credentialId: "AWS-SAP-123456",
  description: "Advanced certification demonstrating expertise in designing distributed systems on AWS, implementing cost control strategies, and architecting for high availability and scalability."
}
```

**More Examples:**
```javascript
// Example 2: Scrum Certification
{
  id: 9,
  type: "certification",
  title: "Certified Scrum Master (CSM)",
  issuer: "Scrum Alliance",
  issued: "January 2022",
  credentialId: "CSM-987654",
  description: "Professional certification demonstrating expertise in Scrum framework and Agile project management methodologies."
}

// Example 3: Technical Certification
{
  id: 10,
  type: "certification",
  title: "Google Cloud Professional Developer",
  issuer: "Google Cloud",
  issued: "June 2023",
  credentialId: null,  // No credential ID
  description: "Validates ability to design, build, and deploy cloud-native applications on Google Cloud Platform."
}
```

---

### 3.4 Career Break Entry

```javascript
{
  id: 7,                                    // Unique number
  type: "break",                            // Always "break"
  title: "Career Break Title",              // E.g., "Sabbatical", "Career Break"
  duration: "Month Year - Month Year",      // Time period
  description: "Reason and what you did",   // Brief explanation
  activities: [                             // Optional: What you did during break
    "Activity 1",
    "Activity 2",
    "Activity 3"
  ]
}
```

**Full Example:**
```javascript
{
  id: 7,
  type: "break",
  title: "Career Sabbatical",
  duration: "Jul 2021 - Dec 2021",
  description: "Took a 6-month sabbatical for personal development, skill enhancement, and family care. Used this time to upskill in emerging technologies and contribute to open source.",
  activities: [
    "Completed advanced React and Next.js certification courses",
    "Contributed to 5 open-source projects on GitHub (500+ stars combined)",
    "Volunteered as coding instructor for underprivileged youth",
    "Traveled to 3 countries to gain global perspective on tech industry"
  ]
}
```

**Tips for Career Breaks:**
- ✅ Be honest and positive about the reason
- ✅ Highlight productive activities (learning, volunteering, personal projects)
- ✅ Show how you stayed engaged with your field
- ✅ Keep it brief but meaningful

---

## 🗓️ Timeline Entry Ordering

**IMPORTANT:** Timeline entries are automatically sorted by year!

### How Years are Extracted

- **Work entries:** Years extracted from `duration` field (e.g., "Jan 2022 - Present" → shows in 2022)
- **Education entries:** Uses END year only (graduation year) from `duration` field
- **Certifications:** Year extracted from `issued` field (e.g., "March 2023" → shows in 2023)
- **Career breaks:** Uses END year only from `duration` field

### Example Timeline Array

```javascript
timeline: [
  // Work Experience - Current Job
  {
    id: 1,
    type: "work",
    company: "Current Company",
    designation: "Senior Developer",
    duration: "Jan 2023 - Present",
    // ... other fields
  },
  
  // Work Experience - Previous Job
  {
    id: 2,
    type: "work",
    company: "Previous Company",
    designation: "Developer",
    duration: "Jun 2020 - Dec 2022",
    // ... other fields
  },
  
  // Certification
  {
    id: 3,
    type: "certification",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    issued: "March 2021",
    // ... other fields
  },
  
  // Education - Master's Degree
  {
    id: 4,
    type: "education",
    institution: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    duration: "2018 - 2020",
    // ... other fields
  },
  
  // Career Break
  {
    id: 5,
    type: "break",
    title: "Career Sabbatical",
    duration: "Jan 2018 - Jun 2018",
    // ... other fields
  },
  
  // Education - Bachelor's Degree
  {
    id: 6,
    type: "education",
    institution: "UC Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    duration: "2014 - 2018",
    // ... other fields
  }
]
```

**The above will be displayed as:**
- **2023:** Current Job
- **2022:** Previous Job (shows for 2022)
- **2021:** Certification + Previous Job (shows for both 2021 and 2022)
- **2020:** Previous Job + Master's Degree (graduation year)
- **2018:** Career Break + Bachelor's Degree (graduation year)

---

## 4️⃣ Projects Section (Optional)

The projects section is **currently hidden by default**. To show it, see instructions below.

### Project Entry Structure

```javascript
{
  id: 1,
  title: "Project Title",
  client: "Client/Company Name",          // Optional
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
```

### Enabling Projects Section

In `/app/frontend/src/App.js`, change line ~13:

**To HIDE Projects (default):**
```javascript
const [showProjects, setShowProjects] = useState(false);
```

**To SHOW Projects:**
```javascript
const [showProjects, setShowProjects] = useState(true);
```

---

## 🎨 Finding Images/Logos

### For Profile Photos
1. **LinkedIn:** Right-click your photo → Copy image address
2. **Unsplash:** https://unsplash.com/s/photos/professional-portrait
3. **UI Avatars:** https://ui-avatars.com/api/?name=Your+Name&size=400

### For Company Logos
1. **Clearbit Logo API:** `https://logo.clearbit.com/companyname.com`
   - Example: `https://logo.clearbit.com/google.com`
2. **Unsplash:** Search for company or generic logos
3. **Company Website:** Download logo from company's press/media page

### For Project Images
1. **Unsplash:** https://unsplash.com (free, high-quality)
2. **Pexels:** https://pexels.com (free stock photos)
3. **Screenshots:** Take screenshots of your actual projects

**Unsplash URL Format:**
```
https://images.unsplash.com/photo-PHOTO_ID?w=600&h=400&fit=crop
```

---

## 📋 Step-by-Step Update Process

### Step 1: Backup Current Data
```bash
cp /app/frontend/src/myData.js /app/frontend/src/myData.backup.js
```

### Step 2: Open myData.js
Edit `/app/frontend/src/myData.js`

### Step 3: Update Personal Information
Replace all placeholder values with your real information.

### Step 4: Update Skills
Add your skills with appropriate proficiency levels (0-100).

### Step 5: Update Timeline
1. **Start with Work Experience** - Add all your jobs (most recent first)
2. **Add Education** - Add your degrees
3. **Add Certifications** - Add relevant certifications
4. **Add Career Breaks** (if applicable)

### Step 6: Update Projects (Optional)
If you want to show projects, update the projects array.

### Step 7: Switch to Your Data
In `/app/frontend/src/App.js`, ensure you're using myData:
```javascript
import { myPortfolioData as portfolioData } from './myData';
```

### Step 8: Test Locally
The frontend will auto-reload. Check:
- All sections display correctly
- No missing information
- Images load properly
- Timeline is in correct order

### Step 9: Commit and Deploy
Changes are auto-committed. Push to GitHub for Netlify deployment.

---

## ⚠️ Common Mistakes to Avoid

### 1. Missing Commas
❌ **Wrong:**
```javascript
skills: [
  { name: "JavaScript", level: 90 }
  { name: "Python", level: 85 }  // Missing comma above!
]
```

✅ **Correct:**
```javascript
skills: [
  { name: "JavaScript", level: 90 },  // Comma here
  { name: "Python", level: 85 }       // No comma after last item
]
```

### 2. Invalid Image URLs
❌ Broken links, local file paths
✅ Use full URLs starting with `https://`

### 3. Inconsistent Date Formats
❌ "2022-01", "January 2022", "1/2022"
✅ Use consistent format: "Jan 2022" or "January 2022"

### 4. Missing Required Fields
Each timeline entry type has required fields. Don't skip them!

### 5. Wrong Timeline Type
Make sure `type` field is exactly: `"work"`, `"education"`, `"certification"`, or `"break"`

---

## 🔍 Testing Your Changes

### Local Testing
1. Save your changes to `myData.js`
2. Check the preview at: https://blank-experience.preview.emergentagent.com
3. Navigate through all sections
4. Click "Experience" to see timeline
5. Verify all images load
6. Check for console errors (F12 → Console tab)

### What to Verify
- ✅ Personal info displays correctly
- ✅ Skills bars show with correct percentages
- ✅ Timeline entries appear in correct years
- ✅ All images/logos load
- ✅ No JavaScript errors in console
- ✅ Contact form shows correct email

---

## 💾 Sample Complete myData.js

Here's a complete example with real data structure:

```javascript
export const myPortfolioData = {
  personal: {
    name: "Simran Koul",
    title: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    email: "simran.koul@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    summary: "Passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Specialized in building user-centric applications that solve real-world problems.",
    linkedin: "https://linkedin.com/in/simrankoul",
    github: "https://github.com/simrankoul",
    resumeUrl: "/resume.pdf"
  },
  
  skills: [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "Python & FastAPI", level: 88 },
    { name: "MongoDB & PostgreSQL", level: 85 },
    { name: "AWS Cloud Services", level: 82 },
    { name: "Docker & Kubernetes", level: 80 },
    { name: "Git & CI/CD", level: 90 }
  ],
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "Retail Startup",
      duration: "Jan 2023 - Jun 2023",
      description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB serving 50K+ users.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      outcomes: [
        "Achieved 50K+ active users in first 3 months",
        "Generated $2M in revenue within 6 months",
        "Maintained 99.9% uptime"
      ],
      role: "Lead Developer",
      teamSize: "4 developers"
    }
  ],
  
  timeline: [
    // Current Job
    {
      id: 1,
      type: "work",
      company: "TechCorp Solutions",
      logo: "https://logo.clearbit.com/techcorp.com",
      designation: "Senior Full Stack Developer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise SaaS platform serving 10,000+ users. Managing team of 5 developers and architecting scalable solutions.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration to microservices architecture",
        "Mentored 5 junior developers, improving team productivity by 30%",
        "Reduced deployment time from 2 hours to 15 minutes with CI/CD"
      ]
    },
    
    // Previous Job
    {
      id: 2,
      type: "work",
      company: "StartupXYZ",
      logo: "https://logo.clearbit.com/startupxyz.com",
      designation: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "San Francisco, CA",
      description: "Developed customer-facing web applications using React and Node.js. Collaborated with design team to implement responsive UIs.",
      achievements: [
        "Built 3 major features increasing user engagement by 50%",
        "Improved code quality by implementing comprehensive testing",
        "Reduced page load time by 60% through optimization"
      ]
    },
    
    // AWS Certification
    {
      id: 3,
      type: "certification",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issued: "March 2021",
      credentialId: "AWS-SAA-123456",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS."
    },
    
    // Master's Degree
    {
      id: 4,
      type: "education",
      institution: "University of Wisconsin-Madison",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "2018 - 2020",
      location: "Madison, WI",
      gpa: "3.9/4.0",
      achievements: [
        "Dean's List for Academic Excellence",
        "Published research paper on Machine Learning",
        "Teaching Assistant for Data Structures course"
      ]
    },
    
    // Bachelor's Degree
    {
      id: 5,
      type: "education",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Engineering",
      duration: "2014 - 2018",
      location: "Berkeley, CA",
      gpa: "3.7/4.0",
      achievements: [
        "Graduated with Honors",
        "President of Computer Science Club",
        "Led team of 4 students in senior capstone project"
      ]
    }
  ]
};
```

---

## 🚀 After Updating Data

1. **Save the file**
2. **Frontend auto-reloads** (hot reload enabled)
3. **Check the preview** at your Emergent preview URL
4. **Verify all sections** display correctly
5. **Changes auto-commit** to Git
6. **Push to GitHub** for Netlify deployment

---

## 📞 Need Help?

### Common Issues

**Timeline entries not showing?**
- Check that all required fields are filled
- Verify `type` field is spelled correctly
- Ensure dates are in correct format

**Images not loading?**
- Use full URLs starting with `https://`
- Test image URLs in browser first
- Use placeholder services if needed

**Syntax errors?**
- Check for missing/extra commas
- Ensure all quotes match (" or ')
- Validate JSON structure

### Quick Reference

- **Personal Info:** 11 fields required
- **Skills:** Array of { name, level } objects
- **Timeline:** Array of work/education/certification/break objects
- **Projects:** Array of project objects (optional)

---

## ✨ Pro Tips

1. **Use Metrics:** Always include numbers in achievements (40%, $2M, 5 developers)
2. **Action Verbs:** Start achievements with strong verbs (Led, Built, Increased, Reduced)
3. **Be Concise:** Keep descriptions under 2 sentences
4. **Show Impact:** Focus on results, not just responsibilities
5. **Update Regularly:** Add new achievements and projects as you complete them
6. **Test Images:** Verify all image URLs work before deploying
7. **Consistent Formatting:** Use same date format throughout
8. **Quality Over Quantity:** 3-5 strong achievements > 10 weak ones

---

**Happy customizing! 🎉**
