const steps = [
  { title: "Discovery", desc: "Stakeholder goals, systems mapping, security and compliance constraints." },
  { title: "Architecture", desc: "Reference designs, vendor selection, SLAs, and governance model." },
  { title: "Implementation", desc: "Pipelines, gateways, observability, rollouts, and documentation." },
  { title: "Enablement", desc: "Training, playbooks, and on-call readiness with KPIs and dashboards." },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">How we work</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">A proven, pragmatic approach that aligns executives and engineering.</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-black/10 p-6 dark:border-white/15">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
