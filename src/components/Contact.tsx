import { Mail, Github } from "lucide-react";
import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          {t.heading}
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-10">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:balukion@gmail.com"
            className="flex items-center gap-2 justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm"
          >
            <Mail size={16} />
            balukion@gmail.com
          </a>
          <a
            href="https://github.com/Balukion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center px-6 py-3 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
