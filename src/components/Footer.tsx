export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-8 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded bg-gradient-to-br from-blue-500 to-indigo-600" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Accelio Lab</span>
        </div>
        <nav className="flex gap-6">
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Services</a>
          <a href="#cases" className="hover:text-zinc-900 dark:hover:text-white">Case Studies</a>
          <a href="#process" className="hover:text-zinc-900 dark:hover:text-white">Process</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </nav>
        <p className="text-center sm:text-right">? {new Date().getFullYear()} Accelio Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
