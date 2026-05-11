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
              I build software that actually works. Started my career in International Relations thinking I'd do policy work, then stumbled into tech through business analysis and realized I'd rather ship code than talk about it. Now I do both, but mostly the code part.
            </p>

            <p className="mb-6">
              At Draftwise I engineered data pipelines and dashboards that moved the needle for real stakeholders. My dissertation was an AI coaching app that actually helped runners train smarter. I've shipped full-stack projects, optimized database queries, built real-time systems. The work that sticks is work that solves something tangible.
            </p>

            <p className="mb-6">
              I think differently because I came up through multiple disciplines. That makes me useful in messy problems where the technical and business sides need to talk to each other. I can work across the entire stack without losing the plot—React, Node, Python, PostgreSQL, the cloud infrastructure. Pick your poison, I'll build it clean.
            </p>

            <p>
              UK based with work authorization. Looking for teams that care about writing good code and shipping fast.
            </p>
          </div>

          {/* Highlights removed per user request */}
        </div>
      </div>
    </section>
  );
}
