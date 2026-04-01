import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'pt';

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('portfolio-lang') as Lang) ?? 'en';
  });

  const toggle = () => {
    setLang((l) => {
      const next = l === 'en' ? 'pt' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
