import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t.heading}
        </h2>

        <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>
      </div>
    </section>
  );
}
