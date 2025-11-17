import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Core Competencies
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Key skills and expertise areas in project management
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    <span className="text-sm font-medium text-cyan-600">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2.5 bg-slate-200"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;