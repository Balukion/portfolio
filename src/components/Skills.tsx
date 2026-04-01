const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Expo', category: 'Mobile' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Fastify', category: 'Backend' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Zustand', category: 'State' },
  { name: 'Git', category: 'Tooling' },
  { name: 'Google Gemini', category: 'AI' },
  { name: 'JWT', category: 'Auth' },
];

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Mobile: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Backend: 'bg-green-500/10 text-green-400 border-green-500/20',
  Database: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Language: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Tooling: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  State: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Auth: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  AI: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {t.heading}
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1.5 rounded-md border text-sm font-medium ${
                categoryColors[skill.category] ?? 'bg-white/5 text-slate-400 border-white/10'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
