import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Briefcase, GraduationCap, Coffee, Award, MapPin, Calendar } from 'lucide-react';

const Timeline = ({ timeline }) => {
  // Extract year from duration string
  const extractYears = (duration, type) => {
    const years = [];
    const matches = duration.match(/\d{4}/g);
    if (matches) {
      // For education and career break, only use the END year (completion year)
      if (type === 'education' || type === 'break') {
        // Get the last year (completion year)
        years.push(parseInt(matches[matches.length - 1]));
      } else {
        // For work and certification, use all years
        matches.forEach(year => years.push(parseInt(matches[0])));
      }
    }
    return years;
  };

  // Group timeline items by year
  const groupByYear = () => {
    const yearGroups = {};
    
    timeline.forEach(item => {
      const years = extractYears(item.duration || item.issued || '', item.type);
      years.forEach(year => {
        if (!yearGroups[year]) {
          yearGroups[year] = [];
        }
        yearGroups[year].push(item);
      });
    });

    // Sort years in descending order
    const sortedYears = Object.keys(yearGroups).sort((a, b) => b - a);
    return sortedYears.map(year => ({
      year: parseInt(year),
      items: yearGroups[year]
    }));
  };

  const yearGroups = groupByYear();

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'certification':
        return <Award className="w-5 h-5" />;
      case 'break':
        return <Coffee className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'work':
        return 'Work Experience';
      case 'education':
        return 'Education';
      case 'certification':
        return 'Certification';
      case 'break':
        return 'Career Break';
      default:
        return type;
    }
  };

  const getColorClass = (type) => {
    switch (type) {
      case 'work':
        return 'bg-cyan-500';
      case 'education':
        return 'bg-blue-500';
      case 'certification':
        return 'bg-orange-500';
      case 'break':
        return 'bg-purple-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Professional Journey
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            A comprehensive timeline of my career, education, and achievements
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 via-blue-200 to-orange-200"></div>

            {/* Timeline Items Grouped by Year */}
            <div className="space-y-16">
              {yearGroups.map((yearGroup, groupIndex) => (
                <div key={yearGroup.year} className="relative">
                  {/* Year Header */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative z-10 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <h3 className="text-2xl font-bold">{yearGroup.year}</h3>
                    </div>
                  </div>

                  {/* Items in this year */}
                  <div className="space-y-12">
                    {yearGroup.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-5 z-10">
                    <div
                      className={`w-10 h-10 rounded-full ${getColorClass(
                        item.type
                      )} flex items-center justify-center text-white shadow-lg`}
                    >
                      {getIcon(item.type)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 md:w-1/2 w-full">
                    <Card
                      className={`p-6 hover:shadow-xl transition-all duration-300 bg-white border-l-4 ${
                        item.type === 'work'
                          ? 'border-l-cyan-500'
                          : item.type === 'education'
                          ? 'border-l-blue-500'
                          : item.type === 'certification'
                          ? 'border-l-orange-500'
                          : 'border-l-purple-500'
                      }`}
                    >
                      <Badge className="mb-3 bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {getTypeLabel(item.type)}
                      </Badge>

                      {/* Work Experience */}
                      {item.type === 'work' && (
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            {item.logo && (
                              <Avatar className="w-12 h-12 border-2 border-slate-200">
                                <AvatarImage src={item.logo} alt={item.company} />
                                <AvatarFallback>{item.company[0]}</AvatarFallback>
                              </Avatar>
                            )}
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-slate-900">
                                {item.designation}
                              </h3>
                              <p className="text-cyan-600 font-semibold">{item.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-slate-700 leading-relaxed">{item.description}</p>
                          
                          {item.achievements && item.achievements.length > 0 && (
                            <ul className="space-y-2 mt-4">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className="text-cyan-500 mt-1">▪</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Education */}
                      {item.type === 'education' && (
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
                          <p className="text-blue-600 font-semibold">{item.institution}</p>
                          {item.field && (
                            <p className="text-slate-600">Major: {item.field}</p>
                          )}
                          
                          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          
                          {item.gpa && (
                            <p className="text-sm font-medium text-slate-700">GPA: {item.gpa}</p>
                          )}
                          
                          {item.achievements && item.achievements.length > 0 && (
                            <ul className="space-y-2 mt-4">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className="text-blue-500 mt-1">▪</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Certification */}
                      {item.type === 'certification' && (
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                          <p className="text-orange-600 font-semibold">{item.issuer}</p>
                          <div className="text-sm text-slate-600">
                            <p>Issued: {item.issued}</p>
                            {item.credentialId && <p>Credential ID: {item.credentialId}</p>}
                          </div>
                          <p className="text-slate-700 leading-relaxed">{item.description}</p>
                        </div>
                      )}

                      {/* Career Break */}
                      {item.type === 'break' && (
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{item.description}</p>
                          
                          {item.activities && item.activities.length > 0 && (
                            <ul className="space-y-2 mt-4">
                              {item.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className="text-purple-500 mt-1">▪</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
