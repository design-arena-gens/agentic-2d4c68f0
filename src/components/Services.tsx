const services = [
  {
    title: "AI Platform & Model Ops",
    desc: "Multi-tenant model gateways, routing, evals, guardrails, feature flags, and cost controls.",
  },
  {
    title: "RAG & Data Pipelines",
    desc: "Document ingestion, chunking, embeddings, vector stores, sync jobs, and freshness SLAs.",
  },
  {
    title: "Observability & Safety",
    desc: "Tracing, prompt/version logs, PII redaction, jailbreak hardening, and alignment checks.",
  },
  {
    title: "Private & Hybrid Deployments",
    desc: "VPC, on-prem, or hybrid with compliance (SOC2, HIPAA) and data governance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            What we build
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            End-to-end infrastructure so your teams can ship AI products faster?securely and reliably.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/10 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15"
            >
              <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600" />
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
