import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Users, Award } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Key Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Successful projects delivered with measurable impact
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {/* Project Image */}
                <div className="h-32 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-5 space-y-3">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-cyan-600 font-semibold text-sm">{project.client}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.role}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 text-xs">
                      Key Outcomes:
                    </h4>
                    <ul className="space-y-0.5">
                      {project.outcomes.map((outcome, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <span className="text-cyan-500 mt-0.5">▪</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
