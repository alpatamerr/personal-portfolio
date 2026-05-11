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
              I'm a software engineer obsessed with building systems that work reliably at scale. I spent my early career in business analysis, but I quickly realized I'd rather write code than talk about it. Now I build things that matter—from data pipelines that keep stakeholders in the loop to AI-powered applications that actually solve real problems.
            </p>

            <p className="mb-6">
              My background is a little unconventional: I started with International Relations, pivoted to computational analysis, and landed in software engineering. That winding path shaped how I think. I see problems through multiple lenses, which means I don't just write code—I write code that bridges what business needs and what engineers can build.
            </p>

            <p className="mb-6">
              I'm fluent in the full stack: React and TypeScript on the frontend, Python and Node.js on the backend, PostgreSQL for data, and AWS for infrastructure. I've shipped production systems at Draftwise, built full-stack apps with AI integration, and I'm always looking for the next hard problem to solve.
            </p>

            <p>
              Based in the UK with work authorization, I'm looking for teams that value clean code, thoughtful architecture, and shipping things that work.
            </p>
          </div>

          {/* Highlights removed per user request */}
        </div>
      </div>
    </section>
  );
}
