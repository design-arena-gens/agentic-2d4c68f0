export default function LogoCloud() {
  const logos = ["Contoso", "Fabrikam", "Globex", "Umbrella", "Initech", "Hooli"];
  return (
    <section className="bg-white py-10 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {logos.map((l) => (
            <span key={l} className="text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
