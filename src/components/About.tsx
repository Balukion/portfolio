export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          About me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Building things that actually work
        </h2>

        <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed">
          <p>
            I'm a full-stack developer based in Brazil with a focus on mobile and web applications that solve real-world problems. I work primarily with React, React Native, Node.js, and TypeScript — comfortable on both the frontend and backend.
          </p>
          <p>
            My recent work spans offline-first mobile apps for event logistics, AI-powered newsletter automation, and role-based ticketing systems. I care about clean architecture, practical UX, and shipping products that hold up in production.
          </p>
          <p>
            When I'm not building, I'm usually exploring new tools or going deep on the Brazilian electronic music scene — which inspired a couple of projects in this portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
