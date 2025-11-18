const cases = [
  {
    logo: "FinanceCo",
    title: "Unified model gateway cut LLM spend by 42%",
    result: "Routing, caching, and evals reduced latency 28% while improving answer quality.",
  },
  {
    logo: "RetailCorp",
    title: "Enterprise RAG increased agent resolution by 31%",
    result: "Freshness-aware indexing and guardrails enabled safe, accurate responses at scale.",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Selected outcomes
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            We partner with enterprises to deliver measurable results.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-black/10 p-6 dark:border-white/15">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-black text-sm font-semibold text-white dark:bg-white dark:text-black">
                  {c.logo[0]}
                </span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{c.logo}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{c.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
