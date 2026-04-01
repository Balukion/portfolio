export interface Project {
  title: string;
  description: { en: string; pt: string };
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'FlowManager',
    description: {
      en: 'Collaborative task management system with a Workspace → Project → Task → Step hierarchy and three role levels. Full-stack monorepo with a Next.js frontend, Fastify REST API, JWT auth, cursor-based pagination, soft delete, activity logs, background jobs, and AWS S3 image uploads. Built with TDD across 111 user stories.',
      pt: 'Sistema colaborativo de gerenciamento de tarefas com hierarquia Workspace → Projeto → Tarefa → Passo e três níveis de permissão. Monorepo full-stack com frontend Next.js, API REST Fastify, autenticação JWT, paginação por cursor, soft delete, logs de atividade, jobs em background e uploads para AWS S3. Desenvolvido com TDD em 111 user stories.',
    },
    tags: ['Next.js', 'Fastify', 'TypeScript', 'PostgreSQL', 'Prisma', 'Turborepo', 'TanStack Query', 'AWS S3'],
    github: 'https://github.com/Balukion/FlowManager',
    featured: true,
  },
  {
    title: 'UberTrance Driver',
    description: {
      en: 'Offline-first mobile app for bus drivers managing ticket sales and passenger boarding at electronic music events. Features a 30-seat bus layout, QR scanning with Ed25519 signature verification, boarding queues, and automatic sync when connectivity returns.',
      pt: 'App mobile offline-first para motoristas gerenciarem vendas de ingressos e embarque de passageiros em eventos de música eletrônica. Inclui layout de ônibus com 30 assentos, leitura de QR com verificação de assinatura Ed25519, fila de embarque e sincronização automática ao retornar a conexão.',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Zustand', 'Fastify'],
    github: 'https://github.com/Balukion/uber-trance-driver',
    featured: true,
  },
  {
    title: 'UberTrance Client',
    description: {
      en: 'Passenger-facing mobile app for UberTrance events. Users register with name and phone number, choose a ticket type, and receive a scannable QR code after payment confirmation — seamlessly integrated with the driver app for boarding validation.',
      pt: 'App mobile voltado ao passageiro para eventos UberTrance. Usuários se cadastram com nome e telefone, escolhem o tipo de ingresso e recebem um QR code após confirmação do pagamento — integrado ao app do motorista para validação de embarque.',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'expo-router', 'Fastify', 'PostgreSQL'],
    github: 'https://github.com/Balukion/uber-trance-cliente',
    featured: true,
  },
  {
    title: 'Arena POC',
    description: {
      en: 'Dual-purpose mobile app for rave and electronic music events. Attendees browse events and display QR tickets; door staff scan them with real-time duplicate prevention. Role-based routing determined at login keeps both flows in a single app.',
      pt: 'App mobile de dupla finalidade para eventos de rave e música eletrônica. Participantes visualizam eventos e exibem ingressos QR; a equipe da portaria os escaneia com prevenção de duplicatas em tempo real. Roteamento por perfil determinado no login mantém os dois fluxos em um único app.',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'JWT', 'Moti', 'Reanimated'],
    github: 'https://github.com/Balukion/arena-poc',
  },
  {
    title: 'Aeelbot',
    description: {
      en: 'Automated daily newsletter bot for the gaming industry. Fetches articles from RSS feeds, uses Google Gemini to filter and rank market-relevant stories (acquisitions, layoffs, platform decisions), and delivers a formatted HTML digest via email.',
      pt: 'Bot de newsletter diária automatizada para a indústria de jogos. Busca artigos em feeds RSS, usa o Google Gemini para filtrar e ranquear notícias relevantes para o mercado (aquisições, demissões, decisões de plataformas) e entrega um digest HTML formatado por e-mail.',
    },
    tags: ['Node.js', 'Google Gemini', 'Nodemailer', 'RSS', 'AI'],
    github: 'https://github.com/Balukion/Aeelbot',
  },
  {
    title: 'Offen',
    description: {
      en: 'Proof-of-concept configurator for sports apparel orders. Customers browse clothing models, pick a color, upload logos, drag them into position on front and back, then submit their order — generating a complete JSON order summary.',
      pt: 'Configurador de pedidos de uniformes esportivos. Clientes navegam pelos modelos de roupa, escolhem uma cor, fazem upload de logos, arrastam até a posição no frente e no verso e enviam o pedido — gerando um resumo JSON completo do pedido.',
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod'],
    github: 'https://github.com/Balukion/poc-offen',
  },
  {
    title: 'Infopower',
    description: {
      en: 'Marketing website for an IT services provider in São Paulo. Showcases software and hardware service categories, answers FAQs, and captures leads with a direct WhatsApp integration for immediate customer engagement.',
      pt: 'Site de marketing para uma empresa de serviços de TI em São Paulo. Apresenta categorias de serviços de software e hardware, responde dúvidas frequentes e capta leads com integração direta ao WhatsApp para contato imediato.',
    },
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/Balukion/infopower-frontend',
  },
];
