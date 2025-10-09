import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/70 to-blue-600/70"></div>

            {experiences.map((exp, index) => (
              <div
                  key={index}
                  className="relative mb-12 md:pr-1/2"
                >
                  <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 md:-translate-x-1/2 w-9 h-9 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                      <Briefcase size={14} />
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 md:mr-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                      {exp.company}
                      <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-900">{exp.period}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex gap-3 items-start"
                        >
                          <span className="flex-shrink-0 mt-1.5 block w-2 h-2 rounded-full bg-cyan-500"></span>
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Tech Stack:
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                        {exp.techStack}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
