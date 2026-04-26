import { ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const labels = {
  en: {
    label: 'Education',
    heading: 'Certifications',
    school: 'Kenzie Academy Brasil',
    course: 'Full-Stack Web Development',
    description: 'Intensive full-stack bootcamp covering front-end and back-end development, software engineering fundamentals, and agile practices.',
    viewCert: 'View Certificate',
  },
  pt: {
    label: 'Formação',
    heading: 'Certificações',
    school: 'Kenzie Academy Brasil',
    course: 'Desenvolvimento Web Full-Stack',
    description: 'Bootcamp intensivo de desenvolvimento full-stack cobrindo front-end, back-end, fundamentos de engenharia de software e práticas ágeis.',
    viewCert: 'Ver Certificado',
  },
};

export default function Certifications() {
  const { lang } = useLang();
  const t = labels[lang];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {t.heading}
        </h2>

        <div className="flex items-start gap-5 bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
          <div className="mt-1 p-2.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 shrink-0">
            <Award size={20} className="text-cyan-400" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">
              {t.school}
            </p>
            <h3 className="text-white font-semibold text-lg mb-2">{t.course}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.description}</p>

            <Link
              to="/certificate"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
            >
              <ExternalLink size={13} />
              {t.viewCert}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
