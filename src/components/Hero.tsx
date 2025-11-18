export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-black">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden>
        <div className="mx-auto h-72 max-w-7xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">AI Infrastructure Consulting</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Build resilient, scalable AI systems that drive real ROI
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Accelio Lab helps medium to large enterprises design, deploy, and operate production-grade AI infrastructure: private RAG, secure model gateways, data pipelines, observability, and governance.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Book a strategy call</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10">Explore services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
