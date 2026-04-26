import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const labels = {
  en: {
    back: 'Back to portfolio',
    title: 'Certificate',
    issuer: 'Issued by Kenzie Academy Brasil',
    download: 'Download PDF',
    fallback: 'Your browser does not support PDF preview.',
    fallbackLink: 'Click here to view the certificate.',
  },
  pt: {
    back: 'Voltar ao portfólio',
    title: 'Certificado',
    issuer: 'Emitido pela Kenzie Academy Brasil',
    download: 'Baixar PDF',
    fallback: 'Seu navegador não suporta pré-visualização de PDF.',
    fallbackLink: 'Clique aqui para visualizar o certificado.',
  },
};

export default function Certificate() {
  const { lang } = useLang();
  const t = labels[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-300 flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          {t.back}
        </Link>

        <a
          href="/kenzie-certificate.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm"
        >
          <Download size={15} />
          {t.download}
        </a>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-10 max-w-5xl mx-auto w-full">
        <div className="mb-6 text-center">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-1">
            Kenzie Academy Brasil
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t.title}
          </h1>
          <p className="text-slate-500 text-sm mt-2">{t.issuer}</p>
        </div>

        {/* PDF viewer */}
        <div className="w-full flex-1 rounded-xl overflow-hidden border border-white/8 bg-white/[0.02]" style={{ minHeight: '75vh' }}>
          <object
            data="/kenzie-certificate.pdf"
            type="application/pdf"
            className="w-full h-full"
            style={{ minHeight: '75vh' }}
          >
            <div className="flex flex-col items-center justify-center h-full py-20 gap-4 text-slate-400">
              <p>{t.fallback}</p>
              <a
                href="/kenzie-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-sm"
              >
                {t.fallbackLink}
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}
