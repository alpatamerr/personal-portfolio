import { skillCategories } from '../data/portfolio';
import { Code2, Server, Cloud, Database } from 'lucide-react';

function getCategoryIcon(title: string) {
  const name = title.toLowerCase();
  if (name.includes('language')) return Code2;
  if (name.includes('framework') || name.includes('library')) return Server;
  if (name.includes('cloud') || name.includes('tool')) return Cloud;
  if (name.includes('api') || name.includes('data')) return Database;
  return Code2;
}

function getDeviconClass(skillName: string): string | null {
  const key = skillName.toLowerCase();
  const map: Record<string, string> = {
    react: 'devicon-react-original colored',
    typescript: 'devicon-typescript-plain colored',
    javascript: 'devicon-javascript-plain colored',
    python: 'devicon-python-plain colored',
    'node.js': 'devicon-nodejs-plain colored',
    'express.js': 'devicon-express-original',
    fastapi: 'devicon-fastapi-plain colored',
    docker: 'devicon-docker-plain colored',
    postgresql: 'devicon-postgresql-plain colored',
    sqlite: 'devicon-sqlite-plain colored',
    'aws (s3, rds)': 'devicon-amazonwebservices-plain colored',
    aws: 'devicon-amazonwebservices-plain colored',
    bash: 'devicon-bash-plain',
    sql: 'devicon-mysql-plain colored',
    git: 'devicon-git-plain colored',
  };
  if (map[key]) return map[key];
  if (key.includes('postgres')) return 'devicon-postgresql-plain colored';
  if (key.includes('docker')) return 'devicon-docker-plain colored';
  if (key.includes('react')) return 'devicon-react-original colored';
  if (key.includes('node')) return 'devicon-nodejs-plain colored';
  if (key.includes('fastapi')) return 'devicon-fastapi-plain colored';
  return null;
}

function getCustomIcon(skillName: string): JSX.Element | null {
  const key = skillName.toLowerCase();

  if (key === 'pyspark' || key.includes('spark')) {
    return (
      <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 8C42 22 28 32 28 52c0 18 10 36 22 40 12-4 22-22 22-40 0-20-14-30-22-44z" fill="#E25A1C"/>
        <path d="M50 30c-4 8-12 13-12 24 0 9 5 18 12 21 7-3 12-12 12-21 0-11-8-16-12-24z" fill="#FF8C42"/>
      </svg>
    );
  }

  if (key === 'polars') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.3L18 8v8l-6 3.7L6 16V8l6-3.7z" fill="#CD792C"/>
        <path d="M12 6.5L7.5 9.2v5.6l4.5 2.7 4.5-2.7V9.2L12 6.5z" fill="#CD792C" opacity="0.6"/>
      </svg>
    );
  }

  if (key === 'leaflet') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.5 3.5C15 1 11 3 12 7c1 4-3 8-3 8s6-1 8.5-3.5c2.5-2.5 2.5-5.5 0-8z" fill="#3BBD54"/>
        <path d="M6.5 10C5 11.5 5 14 7 16c2 2 8 4 8 4s-3-5-5-7-2.5-4-3.5-3z" fill="#82D850"/>
      </svg>
    );
  }

  if (key === 'blueprintjs') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#137CBD"/>
        <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#137CBD" opacity="0.7"/>
        <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#137CBD" opacity="0.7"/>
        <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#137CBD" opacity="0.4"/>
      </svg>
    );
  }

  if (key === 'palantir foundry' || key.includes('palantir')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#1A1A2E"/>
        <circle cx="12" cy="12" r="5.5" fill="none" stroke="#4F77FF" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" fill="#4F77FF"/>
      </svg>
    );
  }

  if (key === 'ci/cd') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12c0-4.4 3.6-8 8-8 2.8 0 5.2 1.4 6.6 3.5" stroke="#2DA44E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 12c0 4.4-3.6 8-8 8-2.8 0-5.2-1.4-6.6-3.5" stroke="#2DA44E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16.5 3.5L19 7.5l-4 .5" fill="#2DA44E"/>
        <path d="M7.5 20.5L5 16.5l4-.5" fill="#2DA44E"/>
      </svg>
    );
  }

  if (key === 'rest apis' || key.includes('rest api')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h12M4 12h16M4 16h10" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="2" fill="#FF6C37"/>
      </svg>
    );
  }

  if (key === 'data pipelines' || key.includes('pipeline')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="4" cy="12" r="2.5" fill="#6CB6FF"/>
        <circle cx="20" cy="6" r="2.5" fill="#6CB6FF"/>
        <circle cx="20" cy="18" r="2.5" fill="#6CB6FF"/>
        <path d="M6.5 11L17.5 7M6.5 13L17.5 17" stroke="#6CB6FF" strokeWidth="1.5"/>
      </svg>
    );
  }

  if (key.includes('hubspot')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="15" cy="12" r="4" fill="none" stroke="#FF7A59" strokeWidth="2"/>
        <circle cx="15" cy="12" r="1.5" fill="#FF7A59"/>
        <line x1="15" y1="4" x2="15" y2="8" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="15" cy="3" r="1.5" fill="#FF7A59"/>
        <line x1="9" y1="9" x2="11" y2="10.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7.5" cy="8" r="2" fill="none" stroke="#FF7A59" strokeWidth="1.5"/>
        <line x1="9" y1="15" x2="11" y2="13.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7.5" cy="16" r="2" fill="none" stroke="#FF7A59" strokeWidth="1.5"/>
      </svg>
    );
  }

  if (key.includes('docusign')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" fill="#FFC829"/>
        <path d="M7 14c2-3 4-5 6-5s3 2 4 4" stroke="#1B2A4E" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <line x1="7" y1="18" x2="17" y2="18" stroke="#1B2A4E" strokeWidth="1" opacity="0.4"/>
      </svg>
    );
  }

  if (key.includes('strava')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 18L12 6l6 12h-3.5L12 12.5 9.5 18H6z" fill="#FC4C02"/>
        <path d="M14.5 18l2.5-5 2.5 5h-5z" fill="#FC4C02" opacity="0.6"/>
      </svg>
    );
  }

  if (key.includes('openai')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07z" fill="#10a37f"/>
      </svg>
    );
  }

  if (key.includes('json schema') || key.includes('webhook')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h2v2H5v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5h-2V3h2z" fill="#F7DF1E"/>
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
                          <i className={`${iconClass} text-[18px] leading-none`} aria-hidden="true"></i>
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
