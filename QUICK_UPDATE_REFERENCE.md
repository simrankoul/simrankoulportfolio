# Quick Reference: Update Portfolio Data

## 🎯 Quick Start

**File to Edit:** `/app/frontend/src/myData.js`

**Auto-reload:** Save file → Changes appear instantly in preview

**Preview URL:** Check your Emergent preview link

---

## 📝 4 Data Sections

```javascript
export const myPortfolioData = {
  personal: { ... },    // Your info
  skills: [ ... ],      // Skills list
  projects: [ ... ],    // Projects (optional)
  timeline: [ ... ]     // Work, education, certs
};
```

---

## 1. Personal Info (11 Fields)

```javascript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  tagline: "One-line summary",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  location: "City, State",
  photo: "PHOTO_URL",
  summary: "Professional bio...",
  linkedin: "https://linkedin.com/in/you",
  github: "https://github.com/you",
  resumeUrl: "/resume.pdf"
}
```

---

## 2. Skills (Array)

```javascript
skills: [
  { name: "Skill Name", level: 90 },  // 0-100
  { name: "Another Skill", level: 85 }
]
```

**Recommended:** 6-12 skills

---

## 3. Timeline - Work Experience

```javascript
{
  id: 1,
  type: "work",
  company: "Company Name",
  logo: "LOGO_URL",
  designation: "Job Title",
  duration: "Jan 2022 - Present",
  location: "City, State",
  description: "Brief role description...",
  achievements: [
    "Achievement with metrics",
    "Another achievement"
  ]
}
```

---

## 4. Timeline - Education

```javascript
{
  id: 2,
  type: "education",
  institution: "University Name",
  degree: "Bachelor of Science",
  field: "Computer Science",
  duration: "2018 - 2022",
  location: "City, State",
  gpa: "3.8/4.0",
  achievements: [
    "Dean's List",
    "Graduated with Honors"
  ]
}
```

---

## 5. Timeline - Certification

```javascript
{
  id: 3,
  type: "certification",
  title: "AWS Certified Developer",
  issuer: "Amazon Web Services",
  issued: "March 2023",
  credentialId: "CERT-12345",
  description: "Brief description..."
}
```

---

## 6. Timeline - Career Break

```javascript
{
  id: 4,
  type: "break",
  title: "Career Sabbatical",
  duration: "Jan 2021 - Jun 2021",
  description: "Why you took a break...",
  activities: [
    "What you did",
    "Skills learned"
  ]
}
```

---

## 🎨 Image URLs

**Profile Photo:**
- Unsplash: `https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop`
- UI Avatars: `https://ui-avatars.com/api/?name=Your+Name&size=400`

**Company Logos:**
- Clearbit: `https://logo.clearbit.com/company.com`

**Project Images:**
- Unsplash: Search and copy image URL

---

## ⚠️ Must-Have Tips

1. ✅ Use commas between array items (except last)
2. ✅ All strings in "quotes"
3. ✅ Unique `id` for each timeline entry
4. ✅ Correct `type`: "work", "education", "certification", or "break"
5. ✅ Use full URLs for images (https://)
6. ✅ Consistent date format: "Jan 2022" or "January 2022"

---

## 🔄 Enable/Disable Projects

**File:** `/app/frontend/src/App.js` (line ~13)

**Hide Projects (default):**
```javascript
const [showProjects, setShowProjects] = useState(false);
```

**Show Projects:**
```javascript
const [showProjects, setShowProjects] = useState(true);
```

---

## 🧪 Testing

1. Save `myData.js`
2. Check preview URL
3. Click "Experience" menu
4. Verify:
   - ✅ Personal info correct
   - ✅ Skills display
   - ✅ Timeline shows all entries
   - ✅ Images load
   - ✅ No errors (F12 console)

---

## 📋 Complete Example Template

```javascript
export const myPortfolioData = {
  personal: {
    name: "Jane Doe",
    title: "Software Engineer",
    tagline: "Building amazing web apps",
    email: "jane@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    photo: "https://ui-avatars.com/api/?name=Jane+Doe&size=400",
    summary: "Passionate developer with 5 years experience...",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    resumeUrl: "/resume.pdf"
  },
  
  skills: [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 }
  ],
  
  projects: [],  // Leave empty or add projects
  
  timeline: [
    // Work
    {
      id: 1,
      type: "work",
      company: "TechCorp",
      logo: "https://logo.clearbit.com/techcorp.com",
      designation: "Senior Developer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading web development...",
      achievements: [
        "Increased performance by 40%",
        "Led team of 5 developers"
      ]
    },
    
    // Education
    {
      id: 2,
      type: "education",
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "2016 - 2020",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      achievements: ["Dean's List"]
    },
    
    // Certification
    {
      id: 3,
      type: "certification",
      title: "AWS Developer Associate",
      issuer: "Amazon Web Services",
      issued: "March 2021",
      credentialId: "AWS-123456",
      description: "Cloud development certification"
    }
  ]
};
```

---

## 🚨 Common Errors

**Missing Comma:**
```javascript
❌ { name: "Skill 1", level: 90 }
   { name: "Skill 2", level: 85 }

✅ { name: "Skill 1", level: 90 },
   { name: "Skill 2", level: 85 }
```

**Wrong Type:**
```javascript
❌ type: "job"
✅ type: "work"
```

**Local Image Path:**
```javascript
❌ logo: "/images/logo.png"
✅ logo: "https://logo.clearbit.com/company.com"
```

---

## 📱 Need Full Details?

See **DATA_UPDATE_GUIDE.md** for:
- Detailed explanations
- More examples
- Troubleshooting
- Pro tips

---

**Save → Preview → Deploy → Done! ✨**
