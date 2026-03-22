import { Github, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Balukion
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
          Full-Stack Developer
        </p>
        <p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          I build mobile and web applications — from event management systems and offline-first apps to AI-powered automation tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex gap-5 justify-center mt-10">
          <a
            href="https://github.com/Balukion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:balukion@gmail.com"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
