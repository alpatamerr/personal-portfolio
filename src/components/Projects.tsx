import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

// Small deterministic hue generator based on project title
function getHue(seed: string, idx: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  h = Math.abs(h + idx * 37) % 360;
  return h;
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
                <div
                  style={{
                    background: `linear-gradient(135deg, hsl(${getHue(project.title, index)} 70% 95%), hsl(${(getHue(project.title, index) + 30) % 360} 60% 85%))`,
                  }}
                  className="relative flex items-center justify-center w-12 h-12 rounded-md text-2xl font-semibold text-gray-900 dark:text-white overflow-hidden"
                >
                  <span aria-hidden="true">{project.emoji}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white whitespace-normal leading-tight">
                    {project.title}
                  </h3>
                </div>
              </header>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex gap-3 items-start"
                      >
                        <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-sm bg-cyan-500"></span>
                        <span className="min-w-0">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <footer className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900 py-2 px-3 text-sm font-medium transition"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-3 text-sm font-medium transition"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
