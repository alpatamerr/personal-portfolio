import { SkillCategory, Experience, Project, Education } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'Bash', level: 65 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'React', level: 85 },
      { name: 'PySpark', level: 75 },
      { name: 'Polars', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Leaflet', level: 70 },
      { name: 'BlueprintJS', level: 65 },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (S3, RDS)', level: 75 },
      { name: 'Docker', level: 75 },
      { name: 'Palantir Foundry', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQLite', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    title: 'API & Data',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Webhooks', level: 80 },
      { name: 'Data Pipelines', level: 85 },
      { name: 'HubSpot API', level: 75 },
      { name: 'DocuSign API', level: 70 },
      { name: 'Strava API', level: 75 },
      { name: 'Anthropic API', level: 85 },
      { name: 'OpenAI API', level: 85 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: 'AI Product Engineer',
    company: 'Cruvo',
    location: 'London, UK',
    period: 'Jul 2026 - Present',
    description: [
      'Work directly with founders and the founder team to turn hiring challenges into product decisions, owning features end-to-end from research and design through production rollout.',
      'Develop AI-powered recruiting workflows for company discovery, candidate sourcing, enrichment, evaluation, ranking, and reporting using Python, FastAPI, Next.js, and PostgreSQL with vector search.',
      'Improve the reliability and cost-efficiency of LLM-driven workflows by analyzing failure cases and validating outputs, and build integrations with ATS platforms and third-party data providers.',
    ],
    techStack: 'Python, FastAPI, Next.js, PostgreSQL, LLM APIs, Vector Search, REST APIs, Webhooks',
  },
  {
    title: 'Software Engineer',
    company: 'Draftwise',
    location: 'Remote, New York, USA',
    period: 'May 2024 - Sep 2024',
    description: [
      'Built Python data pipelines integrating the HubSpot and DocuSign APIs, using AWS S3 for automated data processing and storage.',
      'Developed React and TypeScript dashboard features, implementing PostgreSQL constraints to prevent duplicate records and improve data integrity.',
      'Investigated and resolved L3 production issues through root cause analysis, shipping Python backend fixes via code review and CI/CD.',
      'Partnered with customer-facing teams to scope technical integrations, wrote technical documentation, and contributed to onboarding sessions helping enterprise customers adopt the platform.',
    ],
    techStack: 'Python, React, TypeScript, PostgreSQL, HubSpot API, DocuSign API, AWS S3, CI/CD',
  },
  {
    title: 'Research Assistant Data Analyst',
    company: 'Bilkent University',
    location: 'Ankara, Turkey',
    period: 'Sep 2022 - Jun 2023',
    description: [
      'Built simulation models in AnyLogic across 3 international logistics scenarios in a research partnership with Aselsan, identifying process bottlenecks and operational inefficiencies.',
      'Analyzed logistics datasets of 1,000+ records with Python and SQL, and delivered 2 technical presentations of optimization models to academic, industrial, and external stakeholders to drive alignment.',
    ],
    techStack: 'Python, SQL, AnyLogic',
  },
  {
    title: 'International Relations Intern',
    company: 'Ministry of Foreign Affairs of Turkey',
    location: 'Ankara, Turkey',
    period: 'Jun 2022 - Jul 2022',
    description: [
      'Built an internal web platform in HTML, CSS, and JavaScript improving accessibility to departmental resources, and synthesized daily geopolitical reporting into executive summaries for senior officials.',
    ],
    techStack: 'HTML, CSS, JavaScript',
  },
];

export const projects: Project[] = [
  {
    title: 'Crisis Logistics Command System',
    emoji: '🚨',
    description: 'Independent Project - Built a live crisis-response prototype on Palantir Foundry to monitor incidents, transport networks, and airborne assets with real-time situational awareness across a city.',
    features: [
      'Designed 21 Python/PySpark data pipelines integrating 4 real-time APIs with automated 15-minute refresh cycles.',
      'Turned raw city data into operational decisions with PySpark analytics, including anomaly alerts when incidents spike above trend, peak-hour disruption forecasts, and geographic hotspot scoring.',
      'Designed the product around operational personas, from dispatchers to shift supervisors, with role-based views, incident response workflows, route or escalate actions, and a full audit trail.',
    ],
    technologies: 'React, TypeScript, Python, Polars, PySpark, Palantir Foundry OSDK, Leaflet, BlueprintJS',
    liveDemo: 'https://www.youtube.com/watch?v=GIf3iSV59ms',
    github: 'https://github.com/alpatamerr/crisis-logistics-command-system',
  },
  {
    title: 'AI-Personalized Running Coach',
    emoji: '🏃',
    description: 'MSc Dissertation Project - Built a full-stack AI coach that ingests 10,000+ activities from the Strava API, analyzes performance, and generates personalized 16-week training plans through a goal-setting wizard.',
    features: [
      'Developed a full-stack AI coach that ingests 10,000+ activities from the Strava API, analyzes performance, and stores training data in PostgreSQL.',
      'Segmented runners into 10 performance profiles with K-means clustering on cadence, pace, and heart rate, exporting the trained model for real-time inference in Node.js.',
      'Engineered a constrained LLM workflow on the OpenAI API with schema-enforced JSON output, training-science guardrails such as weekly mileage caps and deload weeks, and cluster-aware prompts that regenerate plans from recent activity.',
    ],
    technologies: 'React, Python, Node.js, Express.js, PostgreSQL, Strava API, OpenAI API',
    github: 'https://github.com/alpatamerr/ai-personalized-running-coach',
  },
  {
    title: 'Simple Social',
    emoji: '📱',
    description: 'Personal Project - Full-stack social media application featuring an asynchronous FastAPI backend, secure JWT authentication, and real-time data feeds with ImageKit CDN for media handling.',
    features: [
      'JWT-based user authentication with FastAPI-Users.',
      'Image and video uploads with ImageKit CDN integration for dynamic transformations.',
      'Real-time social feed displaying posts from all users.',
      'SQLite database with async support.',
    ],
    technologies: 'FastAPI, Python, Streamlit, SQLite, JWT, ImageKit CDN',
    github: 'https://github.com/alpatamerr/Social-Media-App',
  },
];

export const education: Education[] = [
  {
    degree: 'MSc Computer Science',
    institution: 'University of Birmingham',
    period: 'Sep 2024 - Sep 2025',
    location: 'Birmingham, United Kingdom',
  },
  {
    degree: 'BA in International Relations',
    institution: 'Bilkent University',
    period: 'Sep 2018 - Sep 2024',
    location: 'Ankara, Turkey',
  },
];
