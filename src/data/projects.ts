export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'UberTrance Driver',
    description:
      'Offline-first mobile app for bus drivers managing ticket sales and passenger boarding at electronic music events. Features a 30-seat bus layout, QR scanning with Ed25519 signature verification, boarding queues, and automatic sync when connectivity returns.',
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Zustand', 'Fastify'],
    github: 'https://github.com/Balukion/uber-trance-driver',
    featured: true,
  },
  {
    title: 'UberTrance Client',
    description:
      'Passenger-facing mobile app for UberTrance events. Users register with name and phone number, choose a ticket type, and receive a scannable QR code after payment confirmation — seamlessly integrated with the driver app for boarding validation.',
    tags: ['React Native', 'Expo', 'TypeScript', 'expo-router', 'Fastify', 'PostgreSQL'],
    github: 'https://github.com/Balukion/uber-trance-cliente',
    featured: true,
  },
  {
    title: 'Arena POC',
    description:
      'Dual-purpose mobile app for rave and electronic music events. Attendees browse events and display QR tickets; door staff scan them with real-time duplicate prevention. Role-based routing determined at login keeps both flows in a single app.',
    tags: ['React Native', 'Expo', 'TypeScript', 'JWT', 'Moti', 'Reanimated'],
    github: 'https://github.com/Balukion/arena-poc',
  },
  {
    title: 'Aeelbot',
    description:
      'Automated daily newsletter bot for the gaming industry. Fetches articles from RSS feeds, uses Google Gemini to filter and rank market-relevant stories (acquisitions, layoffs, platform decisions), and delivers a formatted HTML digest via email.',
    tags: ['Node.js', 'Google Gemini', 'Nodemailer', 'RSS', 'AI'],
    github: 'https://github.com/Balukion/Aeelbot',
  },
  {
    title: 'Offen',
    description:
      'Proof-of-concept configurator for sports apparel orders. Customers browse clothing models, pick a color, upload logos, drag them into position on front and back, then submit their order — generating a complete JSON order summary.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod'],
    github: 'https://github.com/Balukion/poc-offen',
  },
  {
    title: 'Infopower',
    description:
      'Marketing website for an IT services provider in São Paulo. Showcases software and hardware service categories, answers FAQs, and captures leads with a direct WhatsApp integration for immediate customer engagement.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/Balukion/infopower-frontend',
  },
];
