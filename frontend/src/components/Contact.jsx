---

## 📄 **FILE 2: Contact.jsx**

**Copy this entire code below:**
Action: $ cat /tmp/NEW_Contact.jsx
Observation: import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

// ============================================
// EMAILJS SETUP INSTRUCTIONS
// ============================================
// 1. Go to https://www.emailjs.com/ and sign up (FREE)
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{subject}}
//    - {{message}}
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the values below:
// ============================================
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
};

const Contact = ({ data }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      toast({
        title: "⚠️ EmailJS Not Configured",
        description: "Please set up EmailJS credentials in Contact.jsx file. Check the instructions at the top of the file.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Simran Koul' // Your name
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Message Sent! 📧",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Let's discuss how I can contribute to your organization's success
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Email</p>
                      <a href={`mailto:${data.email}`} className="text-slate-900 font-medium hover:text-cyan-600">
                        {data.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Phone</p>
                      <a href={`tel:${data.phone}`} className="text-slate-900 font-medium hover:text-cyan-600">
                        {data.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Location</p>
                      <p className="text-slate-900 font-medium">{data.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <Linkedin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">LinkedIn</p>
                      <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-medium hover:text-cyan-600"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Opportunity"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
