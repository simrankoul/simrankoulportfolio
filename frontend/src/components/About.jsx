import React from 'react';
import { Card } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            About Me
          </h2>
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-cyan-50 border-none shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              {data.summary}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;