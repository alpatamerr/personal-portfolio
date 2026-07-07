import { skillCategories } from '../data/portfolio';
import { Code2, Server, Cloud, Database } from 'lucide-react';
import {
  siApachespark,
  siPolars,
  siLeaflet,
  siBlueprint,
  siPalantir,
  siHubspot,
  siStrava,
  siJsonwebtokens,
} from 'simple-icons/icons';

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

  const siMap: Record<string, { path: string; hex: string }> = {
    pyspark: siApachespark,
    polars: siPolars,
    leaflet: siLeaflet,
    blueprintjs: siBlueprint,
    'palantir foundry': siPalantir,
    hubspot: siHubspot,
    strava: siStrava,
    webhooks: siJsonwebtokens,
    'json schemas': siJsonwebtokens,
  };

  let icon = siMap[key];

  if (!icon) {
    if (key.includes('spark') || key.includes('pyspark')) icon = siApachespark;
    else if (key.includes('palantir')) icon = siPalantir;
    else if (key.includes('hubspot')) icon = siHubspot;
    else if (key.includes('strava')) icon = siStrava;
    else if (key.includes('webhook')) icon = siJsonwebtokens;
    else if (key.includes('json schema')) icon = siJsonwebtokens;
  }

  if (icon) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }

  if (key.includes('docusign')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" fill="#FFCE00"/>
        <path d="M7 14c2-3 4-5 6-5s3 2 4 4" stroke="#1B2A4E" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <line x1="7" y1="18" x2="17" y2="18" stroke="#1B2A4E" strokeWidth="1" opacity="0.4"/>
      </svg>
    );
  }

  if (key.includes('openai')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#10A37F"/>
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (key === 'ci/cd') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12c0-4.4 3.6-8 8-8 2.8 0 5.2 1.4 6.6 3.5" stroke="#2DA44E" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 12c0 4.4-3.6 8-8 8-2.8 0-5.2-1.4-6.6-3.5" stroke="#2DA44E" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16.5 3.5L19 7.5l-4 .5" fill="#2DA44E"/>
        <path d="M7.5 20.5L5 16.5l4-.5" fill="#2DA44E"/>
      </svg>
    );
  }

  if (key === 'rest apis' || key.includes('rest api')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h12M4 12h16M4 16h10" stroke="#FF6C37" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="2" fill="#FF6C37"/>
      </svg>
    );
  }

  if (key === 'data pipelines' || key.includes('pipeline')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="4" cy="12" r="2.5" fill="#6CB6FF"/>
        <circle cx="20" cy="6" r="2.5" fill="#6CB6FF"/>
        <circle cx="20" cy="18" r="2.5" fill="#6CB6FF"/>
        <path d="M6.5 11L17.5 7M6.5 13L17.5 17" stroke="#6CB6FF" strokeWidth="1.5"/>
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
