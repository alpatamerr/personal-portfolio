import { skillCategories } from '../data/portfolio';
import { Code2, Server, Layout, Cloud, Wrench, Sparkles } from 'lucide-react';

function getCategoryIcon(title: string) {
  const name = title.toLowerCase();
  if (name.includes('front')) return Code2;
  if (name.includes('back') || name.includes('api')) return Server;
  if (name.includes('ui') || name.includes('design')) return Layout;
  if (name.includes('cloud') || name.includes('devops')) return Cloud;
  if (name.includes('tool')) return Wrench;
  return Sparkles;
}

function getDeviconClass(skillName: string): string | null {
  const key = skillName.toLowerCase();
  const map: Record<string, string> = {
    react: 'devicon-react-original colored',
    'next.js': 'devicon-nextjs-plain',
    nextjs: 'devicon-nextjs-plain',
    typescript: 'devicon-typescript-plain colored',
    javascript: 'devicon-javascript-plain colored',
    python: 'devicon-python-plain colored',
    node: 'devicon-nodejs-plain colored',
    'node.js': 'devicon-nodejs-plain colored',
    express: 'devicon-express-original',
    'express.js': 'devicon-express-original',
    flask: 'devicon-flask-original',
    docker: 'devicon-docker-plain colored',
    kubernetes: 'devicon-kubernetes-plain colored',
    aws: 'devicon-amazonwebservices-plain colored',
    git: 'devicon-git-plain colored',
    github: 'devicon-github-original',
    linux: 'devicon-linux-plain',
    postgresql: 'devicon-postgresql-plain colored',
    mongodb: 'devicon-mongodb-plain colored',
    html: 'devicon-html5-plain colored',
    css: 'devicon-css3-plain colored',
    'html/css': 'devicon-html5-plain colored',
    jest: 'devicon-jest-plain colored',
    redux: 'devicon-redux-original colored',
    webpack: 'devicon-webpack-plain colored',
    vite: 'devicon-vitejs-plain colored',
    tailwind: 'devicon-tailwindcss-plain colored',
    'tailwind css': 'devicon-tailwindcss-plain colored',
    graphql: 'devicon-graphql-plain colored',
    mysql: 'devicon-mysql-plain colored',
    sql: 'devicon-mysql-plain colored',
    firebase: 'devicon-firebase-plain colored',
    bash: 'devicon-bash-plain',
    asana: 'devicon-asana-plain colored',
    'rest apis': 'devicon-postman-plain colored',
  };
  if (map[key]) return map[key];
  // Try to normalize common variants
  if (key.includes('tailwind')) return 'devicon-tailwindcss-plain colored';
  if (key.includes('react')) return 'devicon-react-original colored';
  if (key.includes('node')) return 'devicon-nodejs-plain colored';
  if (key.includes('postgres')) return 'devicon-postgresql-plain colored';
  if (key.includes('mongo')) return 'devicon-mongodb-plain colored';
  if (key.includes('html')) return 'devicon-html5-plain colored';
  if (key.includes('css')) return 'devicon-css3-plain colored';
  if (key.includes('docker')) return 'devicon-docker-plain colored';
  if (key.includes('kubernetes')) return 'devicon-kubernetes-plain colored';
  if (key.includes('github')) return 'devicon-github-original';
  if (key.includes('bash')) return 'devicon-bash-plain';
  if (key.includes('flask')) return 'devicon-flask-original';
  if (key.includes('asana')) return 'devicon-asana-plain colored';
  if (key.includes('rest')) return 'devicon-postman-plain colored';
  return null;
}

function getCustomIcon(skillName: string): JSX.Element | null {
  const key = skillName.toLowerCase();
  if (key === 'asana') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="12" r="3.2" fill="#FC636B" />
        <circle cx="18" cy="12" r="3.2" fill="#FBAE3C" />
        <circle cx="12" cy="6" r="3.2" fill="#36B37E" />
      </svg>
    );
  }
  if (key === 'rest apis' || key === 'rest api' || key.includes('rest')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#FF6C37" />
        <rect x="6.5" y="11" width="11" height="2" rx="1" fill="white" />
      </svg>
    );
  }
  return null;
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <Icon className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const iconClass = getDeviconClass(skill.name);
                    const custom = getCustomIcon(skill.name);
                    return (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 shadow-sm"
                      >
                        {custom ? (
                          custom
                        ) : iconClass ? (
                          <i className={`${iconClass} text-[18px] leading-none` } aria-hidden="true"></i>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-cyan-500/70 dark:bg-cyan-400/70"></span>
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
