import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Let's work together
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-10">
          Have a project in mind or want to collaborate? I'm open to freelance
          work and full-time opportunities. Drop me a message.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:guga.magu@gmail.com"
            className="flex items-center gap-2 justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm"
          >
            <Mail size={16} />
            guga.magu@gmail.com
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
