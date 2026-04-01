import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = translations[lang].nav;

  const links = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-cyan-400 font-bold text-xl tracking-tight">
          Balukion
        </a>

        {/* Desktop links + toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggle}
            className="cursor-pointer text-xs font-semibold px-2.5 py-1 rounded border border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors tracking-wide"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* Mobile: toggle + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="cursor-pointer text-xs font-semibold px-2.5 py-1 rounded border border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors tracking-wide"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d15] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
