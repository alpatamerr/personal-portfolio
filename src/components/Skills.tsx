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
        <rect x="2" y="15" width="5" height="6" rx="1" fill="#1B4FFF"/>
        <rect x="9.5" y="9" width="5" height="12" rx="1" fill="#1B4FFF"/>
        <rect x="17" y="4" width="5" height="17" rx="1" fill="#1B4FFF"/>
      </svg>
    );
  }

  if (key === 'leaflet') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1CAE59"/>
      </svg>
    );
  }

  if (key === 'blueprintjs') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12,2 20.5,7 20.5,17 12,22 3.5,17 3.5,7" fill="#137CBD"/>
        <polygon points="12,6.5 17,9.5 17,15.5 12,18.5 7,15.5 7,9.5" fill="none" stroke="white" strokeWidth="1.2"/>
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
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="#6CB6FF"/>
      </svg>
    );
  }

  if (key === 'rest apis' || key.includes('rest api')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
        <rect x="6.5" y="11" width="11" height="2" rx="1" fill="white"/>
        <path d="M14 8l3.5 4-3.5 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    );
  }

  if (key === 'data pipelines' || key.includes('pipeline')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="#6CB6FF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="6" r="2" fill="#6CB6FF"/>
        <circle cx="16" cy="12" r="2" fill="#6CB6FF"/>
        <circle cx="8" cy="18" r="2" fill="#6CB6FF"/>
      </svg>
    );
  }

  if (key.includes('hubspot')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#FF7A59"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
        <path d="M9.5 12.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V17h-5v-4.5z" fill="white"/>
      </svg>
    );
  }

  if (key.includes('docusign')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#1B2A4E"/>
        <path d="M6 8h8M6 12h10M6 16h6" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 14l2 2-3 3" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }

  if (key.includes('strava')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L4 22l4-8 4 8 4-8 4 8L12 2z" fill="#FC4C02"/>
      </svg>
    );
  }

  if (key.includes('openai')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#10a37f"/>
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
