import { } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              Recent MSc Computer Science graduate from the University of Birmingham with a unique
              background in International Relations from Bilkent University. My journey into tech
              began through a software engineering role, where I discovered a passion for 
              solving complex problems through code.
            </p>

            <p className="mb-6">
              I specialize in full-stack development with React, TypeScript, Python, and PostgreSQL, 
              with hands-on experience building production-ready applications that integrate 
              real-time APIs, data pipelines, and cloud infrastructure. My diverse background
              gives me a strong ability to bridge technical and non-technical stakeholders.
            </p>

            <p>
              Currently based in the UK with full work authorization, I'm seeking opportunities to
              contribute to innovative teams building impactful software.
            </p>
          </div>

          {/* Highlights removed per user request */}
        </div>
      </div>
    </section>
  );
}
