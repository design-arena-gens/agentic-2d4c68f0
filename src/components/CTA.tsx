"use client";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to accelerate your AI roadmap?</h2>
            <p className="mt-3 text-lg text-white/90">
              Book a free 30-minute strategy call. We?ll evaluate your current stack and identify the fastest path to reliable AI in production.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@acceliolab.com" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100">hello@acceliolab.com</a>
              <a href="#" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">Download capability deck</a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = encodeURIComponent(String(data.get("name") || ""));
              const email = encodeURIComponent(String(data.get("email") || ""));
              const msg = encodeURIComponent(String(data.get("message") || ""));
              const subject = `Accelio Lab ? Inquiry from ${name}`;
              window.location.href = `mailto:hello@acceliolab.com?subject=${subject}&body=${msg}%0A%0AFrom:%20${name}%20<${email}>`;
            }}
            className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="h-11 rounded-md border border-white/20 bg-white/10 px-3 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input name="email" required type="email" placeholder="Work email" className="h-11 rounded-md border border-white/20 bg-white/10 px-3 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <textarea name="message" required placeholder="What are you trying to achieve?" rows={4} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button type="submit" className="h-11 rounded-md bg-white px-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100">Send inquiry</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
