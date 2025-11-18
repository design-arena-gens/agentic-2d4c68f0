export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[.06] bg-white/80 backdrop-blur-md dark:border-white/[.06] dark:bg-black/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-indigo-600" />
          <span className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Accelio Lab
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:flex">
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Services</a>
          <a href="#cases" className="hover:text-zinc-900 dark:hover:text-white">Case Studies</a>
          <a href="#process" className="hover:text-zinc-900 dark:hover:text-white">Process</a>
          <a href="#testimonials" className="hover:text-zinc-900 dark:hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
