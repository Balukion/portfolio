import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
