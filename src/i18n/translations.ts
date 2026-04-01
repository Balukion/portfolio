import type { Lang } from '../contexts/LanguageContext';

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      title: 'Balukion',
      subtitle: 'Full-Stack Developer',
      tagline:
        'I build mobile and web applications — from event management systems and offline-first apps to AI-powered automation tools.',
      cta1: 'View Projects',
      cta2: 'Get in Touch',
    },
    about: {
      label: 'About me',
      heading: 'Building things that actually work',
      p1: "I'm a full-stack developer based in Brazil with a focus on mobile and web applications that solve real-world problems. I work primarily with React, React Native, Node.js, and TypeScript — comfortable on both the frontend and backend.",
      p2: 'My recent work spans offline-first mobile apps for event logistics, AI-powered newsletter automation, and role-based ticketing systems. I care about clean architecture, practical UX, and shipping products that hold up in production.',
      p3: "When I'm not building, I'm usually exploring new tools or going deep on the Brazilian electronic music scene — which inspired a couple of projects in this portfolio.",
    },
    skills: {
      label: 'Skills',
      heading: 'Tech stack',
    },
    projects: {
      label: 'Work',
      heading: 'Projects',
      featured: 'Featured',
      source: 'Source',
      liveDemo: 'Live Demo',
    },
    contact: {
      label: 'Contact',
      heading: "Let's work together",
      description:
        "Have a project in mind or want to collaborate? I'm open to freelance work and full-time opportunities. Drop me a message.",
    },
    footer: {
      built: 'Built with React + Vite + Tailwind.',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, me chamo',
      title: 'Balukion',
      subtitle: 'Desenvolvedor Full-Stack',
      tagline:
        'Desenvolvo aplicações mobile e web — de sistemas de gestão de eventos e apps offline-first até ferramentas de automação com IA.',
      cta1: 'Ver Projetos',
      cta2: 'Entrar em Contato',
    },
    about: {
      label: 'Sobre mim',
      heading: 'Construindo coisas que realmente funcionam',
      p1: 'Sou um desenvolvedor full-stack brasileiro focado em aplicações mobile e web que resolvem problemas reais. Trabalho principalmente com React, React Native, Node.js e TypeScript — confortável tanto no frontend quanto no backend.',
      p2: 'Meus trabalhos recentes incluem apps mobile offline-first para logística de eventos, automação de newsletters com IA e sistemas de bilheteria com controle de permissões. Priorizo arquitetura limpa, UX prática e entregas que se sustentam em produção.',
      p3: 'Quando não estou programando, estou explorando novas ferramentas ou mergulhando na cena de música eletrônica brasileira — o que inspirou alguns projetos deste portfólio.',
    },
    skills: {
      label: 'Habilidades',
      heading: 'Stack tecnológica',
    },
    projects: {
      label: 'Trabalhos',
      heading: 'Projetos',
      featured: 'Destaque',
      source: 'Código',
      liveDemo: 'Demo',
    },
    contact: {
      label: 'Contato',
      heading: 'Vamos trabalhar juntos',
      description:
        'Tem um projeto em mente ou quer colaborar? Estou aberto a trabalhos freelance e oportunidades full-time. Me manda uma mensagem.',
    },
    footer: {
      built: 'Feito com React + Vite + Tailwind.',
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = (typeof translations)['en'];
