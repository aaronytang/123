const services = [
  {
    num: 1,
    title: "Brand Identity",
    body: "We craft cohesive brand systems that communicate who you are with clarity and intention, from the core idea to every visual expression.",
    items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Typography & Color Systems", "Naming & Tone of Voice", "Brand Strategy"],
  },
  {
    num: 2,
    title: "Digital Design",
    body: "We design user-centered digital experiences that are intuitive, engaging, and visually refined, built for clarity, function, and flow.",
    items: ["Web Design", "App & Interface Design", "UX/UI Design", "Design Systems", "Responsive Design"],
  },
  {
    num: 3,
    title: "Art Direction",
    body: "We shape compelling visual narratives through considered art direction that aligns with your brand and elevates every creative output.",
    items: ["Creative Direction", "Campaign Design", "Visual Storytelling", "Motion & Animation Guidance"],
  },
  {
    num: 4,
    title: "Strategy & Consulting",
    body: "We help brands define their essence and communicate it with focus, offering strategic guidance rooted in clarity, consistency, and meaning.",
    items: ["Brand Positioning", "Market Research", "Design Audits", "Experience Strategy", "Creative Consulting"],
  },
];

export function KansoServices() {
  return (
    <section className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
        <span>/</span>
        <span>Services</span>
        <span>(04)</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.num}
            className="flex flex-col gap-4 rounded-[12px] border border-[#23252a] bg-[#0f1011] p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-[510] tracking-[-0.02em] text-[#f7f8f8]">
                {s.title}
              </h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141516] text-sm font-[510] text-[#8a8f98]">
                {s.num}
              </span>
            </div>
            <p className="text-sm text-[#8a8f98]">{s.body}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[9999px] border border-[#23252a] bg-[#141516] px-3 py-1 text-xs text-[#d0d6e0]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-[6px] border border-[#23252a] px-4 py-2 text-sm font-[510] text-[#f7f8f8] transition-colors hover:bg-[#141516]"
        >
          See pricing
        </a>
      </div>
    </section>
  );
}
