type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  logoUrl: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Vietstock',
    position: 'Software Developer',
    startDate: '2023-10-27',
    endDate: 'Now',
    description:
      'Participated in new company projects as the principal developer for the Single Sign-On (SSO) system. Improved user experience, optimized performance, debugged, and upgraded legacy systems, including database queries, caching, and cron jobs',
    skills: [
      'ASP.NET',
      'SQL Server',
      'ReactJS',
      'Redis',
      'Docker',
      'Git',
      'Kanban',
      'RESTful API',
      'OAuth2',
      'OpenID Connect',
      'JWT',
      'ELK'
    ],
    logoUrl: '/images/vietstock_logo.png'
  },
  {
    company: 'TMA Solutions',
    position: 'Intern',
    startDate: '2022-08-10',
    endDate: '2022-12-12',
    description:
      'Learn basic and advanced programming concepts such as OOP, DSA, Design Pattern, Multithreaded Programming. Learn network protocols (TCP/IP, OSI) and Restful API',
    skills: ['DSA', 'C++', 'TCP/IP', 'Git', 'Scrum', 'IPC'],
    logoUrl: '/images/tma_logo.png'
  }
];
