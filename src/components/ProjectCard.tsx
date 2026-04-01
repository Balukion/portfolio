import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <article className="group relative flex flex-col bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300">
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full">
          {t.featured}
        </span>
      )}

      <h3 className="text-white font-semibold text-lg mb-3 pr-16">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description[lang]}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-500 bg-white/5 border border-white/8 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
        >
          <Github size={14} />
          {t.source}
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
          >
            <ExternalLink size={14} />
            {t.liveDemo}
          </a>
        )}
      </div>
    </article>
  );
}
