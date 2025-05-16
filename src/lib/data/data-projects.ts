export type ProjectType = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  privacy: 'public' | 'private';
  member: number;
  role: string;
};

export const PROJECTS: ProjectType[] = [
  {
    name: 'DatPhongNhanh',
    description:
      'Designed and developed a comprehensive hotel booking system that enables users to search, book, and manage hotel reservations seamlessly. Features include real-time room availability, secure payment processing, user authentication, and an intuitive UI for an enhanced booking experience.',
    image: '',
    technologies: [
      'ASP.NET',
      'PostgreSql',
      'PostGIS',
      'Redis',
      'MediatR',
      'CQRS',
      'Docker',
      'React',
      'Redux',
      'TypeScript',
      'Material-UI'
    ],
    github: 'https://github.com/thtn-dev/DatPhongNhanh',
    demo: 'https://github.com/thtn-dev/DatPhongNhanh',
    privacy: 'public',
    member: 1,
    role: 'Fullstack'
  },
  {
    name: 'Vietstock SSO',
    description:
      'Developed a secure and scalable Single Sign-On (SSO) solution using OpenID Connect (OIDC) to streamline authentication across multiple applications. Integrated identity provider (IdP) support, user session management, and token-based authentication to enhance security and user experience. Designed for seamless interoperability with modern web and mobile applications.',
    image: '',
    technologies: [
      'ASP.NET',
      'SQL Server',
      'IdentityServer4',
      'Redis',
      'Entity Framework'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    privacy: 'private',
    member: 2,
    role: 'Fullstack'
  },
  {
    name: 'Farmstay Booking',
    description:
      'Building app manager farmstay for web and mobile platform. Users can view, manage, and control devices in farmstay realtime using MQTT and socketio technologies. ',
    image: '',
    technologies: [
      'NodeJS',
      'ExpressJS',
      'MQTT',
      'Socket.io',
      'MongoDB',
      'Redis',
      'React',
      'Redux',
      'Mongoose',
      'Ant Design'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    privacy: 'public',
    member: 3,
    role: 'Fullstack'
  }
];
