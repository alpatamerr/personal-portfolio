import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const roles = [
  'Software Engineer',
  'Full Stack Engineer',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHptLTggOGg4djhoLTh2LTh6bTggMGg4djhoLTh2LTh6bS04IDhoOHY4aC04di04em04IDBoOHY4aC04di04eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Alp Atamer
          </h1>

          <div className="text-xl md:text-2xl text-cyan-200 mb-8 h-8">
            <span className="inline-block animate-fade-in">
              {roles[currentRole]}
            </span>
          </div>


          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <a
              href="/AlpAtamerCV.pdf"
              download="AlpAtamerCV.pdf"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/alpatamer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/alpatamerr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:alpatamer@gmail.com"
              className="text-white hover:text-cyan-300 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
}
