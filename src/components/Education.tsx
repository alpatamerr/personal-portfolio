import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>

                <div className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                  {edu.institution}
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Codecademy Full-Stack Engineer Certificate
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">August 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
