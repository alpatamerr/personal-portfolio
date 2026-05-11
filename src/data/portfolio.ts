import { SkillCategory, Experience, Project, Education } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 70 },
      { name: 'SQL', level: 80 },
      { name: 'Bash', level: 60 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 70 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Redux', level: 70 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'FastAPI', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Jest', level: 65 },
      { name: 'Asana', level: 80 },
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
      'Enhanced AI-powered legal tech platform with Python workflows and React components',
      'Contributed to Python scripts for HubSpot CRM data extraction and PostgreSQL integration',
      'Built React dashboard components with real-time data updates',
      'Developed reusable components including collapsible panels and interactive charts',
      'Optimized frontend performance with lazy loading and memoization',
      'Collaborated with PM and engineering teams to translate business requirements into software solutions',
    ],
    techStack: 'Python, React, PostgreSQL, HubSpot API',
  },
  {
    title: 'Research Assistant, Computational Logistics & Data Analysis',
    company: 'Bilkent University',
    location: 'Ankara, Turkey',
    period: 'Sep 2022 - Jun 2023',
    description: [
      'Developed computational simulation models using AnyLogic for logistics optimization',
      'Performed quantitative data analysis using statistical methods and optimization algorithms',
      'Identified cost-reduction opportunities through data pattern analysis',
    ],
    techStack: 'AnyLogic, Statistical Analysis, Optimization Algorithms',
  },
  {
    title: 'International Relations Specialist Intern',
    company: 'Ministry of Foreign Affairs',
    location: 'Ankara, Turkey',
    period: 'Jun 2022 - Jul 2022',
    description: [
      'Developed internal website using HTML, CSS, and JavaScript',
      'Created automated digital newsletter system for geopolitical news',
      'Improved workflow efficiency through technology integration',
    ],
    techStack: 'HTML, CSS, JavaScript',
  },
];

export const projects: Project[] = [
  {
    title: 'Simple Social',
    emoji: '📱',
    description: 'Personal Project - FastAPI + Streamlit social media application featuring user authentication, media uploads with ImageKit CDN integration, and a real-time social feed.',
    features: [
      'JWT-based user authentication with FastAPI-Users',
      'Image and video uploads with ImageKit CDN integration',
      'Real-time social feed displaying posts from all users',
      'Dynamic image transformations with caption overlays',
      'User registration, login, and password reset',
      'Create and delete posts with ownership verification',
      'SQLite database with async support',
    ],
    technologies: 'FastAPI, Streamlit, SQLAlchemy, ImageKit, SQLite',
    github: 'https://github.com/alpatamerr/Social-Media-App',
  },
  {
    title: 'AI-Personalized Running Coach',
    emoji: '🏃',
    description: 'MSc Dissertation Project - Developed a full-stack fitness app integrating Strava API with backend services to manage authentication, run history, and generate adaptive 16-week training plans.',
    features: [
      'Strava API integration for authentication and run data',
      'Implemented machine learning algorithm using K-means clustering on users\' last 10 runs',
      'Integrated OpenAI GPT into a responsive React interface',
      'PostgreSQL database for user data management',
      'Contextual coaching advice and personalized workout recommendations',
    ],
    technologies: 'React, Python, Node.js, Express.js, PostgreSQL, REST API',
    github: 'https://github.com/alpatamerr/AI-Personalized-Running-Coach',
  },
  {
    title: 'Weather Tracker',
    emoji: '🌤️',
    description: 'Personal Project - Developed real-time weather application with location-based forecasting and multi-city comparison features.',
    features: [
      'Current weather and 5-day forecasts',
      'Multi-city comparison dashboard',
      'API integration with OpenWeatherMap',
      'Responsive design for mobile/desktop use',
    ],
    technologies: 'React, Flask, Python',
    liveDemo: 'https://my-weathertracker.netlify.app/',
    github: 'https://github.com/alpatamerr/weather_tracker',
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
