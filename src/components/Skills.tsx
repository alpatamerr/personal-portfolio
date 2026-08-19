import { skillCategories } from '../data/portfolio';
import { Code2, Server, Cloud, Database, BrainCircuit, Network } from 'lucide-react';
import {
  siApachespark,
  siPolars,
  siLeaflet,
  siBlueprint,
  siPalantir,
  siHubspot,
  siClaudecode,
  siRailway,
  siVercel,
  siGithubactions,
  siSqlalchemy,
  siNextdotjs,
} from 'simple-icons/icons';

function getCategoryIcon(title: string) {
  const name = title.toLowerCase();
  if (name.includes('language')) return Code2;
  if (name.includes('framework') || name.includes('library')) return Server;
  if (name.includes('cloud') || name.includes('tool')) return Cloud;
  if (name.includes('api') || name.includes('data')) return Database;
  if (name.includes('ai') || name.includes('llm')) return BrainCircuit;
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
    'claude code': siClaudecode,
    railway: siRailway,
    vercel: siVercel,
    'github actions': siGithubactions,
    sqlalchemy: siSqlalchemy,
    'next.js': siNextdotjs,
  };

  // Generic icon for API / integration / pipeline chips without a brand logo
  const genericKeys = ['rest apis', 'webhooks', 'data pipelines', 'ci/cd', 'strava api'];
  if (genericKeys.includes(key) || key.startsWith('llm api')) {
    return <Network size={16} className="text-cyan-600 dark:text-cyan-400" aria-hidden="true" />;
  }

  // Brand marks that are black: use currentColor so they stay visible in dark mode
  const monochrome = new Set(['railway', 'vercel', 'next.js']);

  let icon = siMap[key];

  if (!icon) {
    if (key.includes('spark') || key.includes('pyspark')) icon = siApachespark;
    else if (key.includes('palantir')) icon = siPalantir;
    else if (key.includes('hubspot')) icon = siHubspot;
  }

  if (icon) {
    const fill = monochrome.has(key) ? 'currentColor' : `#${icon.hex}`;
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={fill} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }

  if (key.includes('docusign')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 1h3a8 8 0 0 1 0 16H9V1z" fill="#FF4438"/>
        <rect x="2" y="9" width="12" height="14" fill="#4D00EC"/>
        <rect x="9" y="9" width="5" height="8" fill="#000000"/>
      </svg>
    );
  }

  if (key.includes('llm workflow') || key.includes('workflow')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="6" height="5" rx="1" fill="#6366F1"/>
        <rect x="15" y="4" width="6" height="5" rx="1" fill="#6366F1"/>
        <rect x="9" y="15" width="6" height="5" rx="1" fill="#6366F1"/>
        <path d="M6 9v3a2 2 0 0 0 2 2h2M18 9v3a2 2 0 0 1-2 2h-2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
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
