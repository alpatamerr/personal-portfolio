import { SkillCategory, Experience, Project, Education } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'Bash', level: 60 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 85 },
      { name: 'FastAPI', level: 75 },
      { name: 'PySpark', level: 70 },
      { name: 'Polars', level: 70 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'Leaflet', level: 70 },
      { name: 'BlueprintJS', level: 65 },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (S3, RDS)', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'Palantir Foundry', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 75 },
      { name: 'CI/CD', level: 65 },
    ],
  },
  {
    title: 'API & Data',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Data Pipelines', level: 80 },
      { name: 'HubSpot API', level: 75 },
      { name: 'DocuSign API', level: 70 },
      { name: 'Strava API', level: 75 },
      { name: 'OpenAI API', level: 75 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Draftwise',
    location: 'Remote, New York, USA',
    period: 'May 2024 - Sep 2024',
    description: [
      'Built Python data pipelines integrating the HubSpot and DocuSign APIs, using AWS S3 for automated data processing and storage.',
      'Developed React and TypeScript dashboard features, implementing PostgreSQL constraints to improve data integrity and prevent duplicate records.',
      'Investigated and resolved production issues through L3 engineering support, performing root cause analysis and collaborating with other developers to deploy backend fixes in Python.',
      'Wrote technical documentation and contributed to onboarding sessions to help enterprise customers successfully integrate and adopt the platform.',
      'Worked with customer-facing teams and PM to scope technical integrations and build internal dashboards to improve visibility into customer activity and product usage.',
    ],
    techStack: 'Python, React, TypeScript, PostgreSQL, HubSpot API, DocuSign API, AWS S3',
  },
  {
    title: 'Research Assistant Data Analyst',
    company: 'Bilkent University',
    location: 'Ankara, Turkey',
    period: 'Sep 2022 - Jun 2023',
    description: [
      'Built simulation models in AnyLogic across 3 international logistics scenarios, identifying process bottlenecks and operational inefficiencies.',
      'Utilized Python and SQL to analyze logistics datasets of 1,000+ records, translating raw data into actionable cost-reduction strategies.',
      'Delivered 2 technical presentations and walkthroughs of optimization models to academic, industrial, and external project stakeholders to drive alignment.',
    ],
    techStack: 'Python, SQL, AnyLogic',
  },
  {
    title: 'International Relations Intern',
    company: 'Ministry of Foreign Affairs of Turkey',
    location: 'Ankara, Turkey',
    period: 'Jun 2022 - Jul 2022',
    description: [
      'Developed an internal web platform using HTML, CSS, and basic JavaScript, improving accessibility to 50+ departmental resources for a 5+ person team.',
      'Analyzed 50+ daily geopolitical news sources to synthesize reporting for senior officials, translating high-volume data into concise executive summaries.',
    ],
    techStack: 'HTML, CSS, JavaScript',
  },
];

export const projects: Project[] = [
  {
    title: 'Crisis Logistics Command System',
    emoji: '🚨',
    description: 'Freelance Project - Operational crisis management dashboard built on Palantir Foundry, integrating 4 real-time data sources to monitor live incidents, transport, and resource deployment across a city.',
    features: [
      'Designed 21 Python/PySpark data pipelines integrating 4 real-time APIs (TfL, Google Maps, Airlabs, Air Quality) with automated 15-minute refresh cycles.',
      'Built an operational dashboard with 5 interactive tabs featuring live incident mapping, transport monitoring, resource CRUD actions, and PySpark-powered analytics.',
      'Architected a semantic data model (13 entity types) with server-side business logic, automated threshold alerts, and full CRUD operations via TypeScript Functions.',
    ],
    technologies: 'React, TypeScript, Python, Polars, PySpark, Palantir Foundry OSDK, Leaflet, BlueprintJS',
    github: 'https://github.com/alpatamerr/crisis-logistics-command-system',
  },
  {
    title: 'AI-Personalized Running Coach',
    emoji: '🏃',
    description: 'MSc Dissertation Project - Full-stack fitness application integrating the Strava API to ingest run history and generate adaptive training plans using K-means clustering and OpenAI coaching insights.',
    features: [
      'Developed a full-stack application integrating the Strava API to ingest, parse, and store 500+ activity records and performance data points.',
      'Implemented K-means clustering in Python across 3 performance metrics (cadence, pace, heart rate) to generate adaptive training recommendations.',
      'Integrated the OpenAI API to deliver contextual, natural language coaching insights through a responsive React interface.',
    ],
    technologies: 'React, Python, Node.js, Express.js, PostgreSQL, Strava API, OpenAI API',
    github: 'https://github.com/alpatamerr/ai-personalized-running-coach',
  },
  {
    title: 'Simple Social',
    emoji: '📱',
    description: 'Personal Project - Full-stack social media application featuring asynchronous FastAPI backend, secure JWT authentication, and real-time data feeds with ImageKit CDN for media handling.',
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
    degree: 'BA International Relations',
    institution: 'Bilkent University',
    period: 'Sep 2018 - Aug 2024',
    location: 'Ankara, Turkey',
  },
];
