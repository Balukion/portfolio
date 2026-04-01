import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Balukion. {t.built}
      </p>
    </footer>
  );
}
