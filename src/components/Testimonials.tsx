const testimonials = [
  {
    name: "VP Engineering, FinanceCo",
    quote:
      "Accelio Lab turned our AI chaos into a reliable platform. Incidents dropped, throughput rose, and cost visibility finally made sense.",
  },
  {
    name: "Director of Data, RetailCorp",
    quote:
      "They shipped in weeks what we struggled to align for months?clean architecture, great comms, excellent documentation.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Trusted by leaders
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            We integrate with your teams and ship outcomes, not just diagrams.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-black/10 p-6 text-zinc-700 dark:border-white/15 dark:text-zinc-200">
              <p className="text-base leading-7">?{t.quote}?</p>
              <footer className="mt-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
