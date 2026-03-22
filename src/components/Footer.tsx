export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Balukion. Built with React + Vite + Tailwind.
      </p>
    </footer>
  );
}
