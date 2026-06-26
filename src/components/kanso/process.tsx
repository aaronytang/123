const steps = [
  {
    num: 1,
    title: "Discover",
    body: "We begin by listening, gaining a deep understanding of your goals, audience, and challenges through research and conversation.",
  },
  {
    num: 2,
    title: "Define",
    body: "We distill insights into a clear direction. Strategy, structure, and creative foundations are established to guide the work forward.",
  },
  {
    num: 3,
    title: "Design",
    body: "Ideas take shape through thoughtful design. We explore, refine, and iterate with intention, always rooted in purpose and simplicity.",
  },
  {
    num: 4,
    title: "Deliver",
    body: "We finalize and hand off with care. Every element is prepared for implementation with clarity, consistency, and attention to detail.",
  },
];

export function KansoProcess() {
  return (
    <section className="bg-[#0f1011]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
          <span>/</span>
          <span>Process</span>
          <span>(05)</span>
        </div>

        <h2 className="max-w-[624px] text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
          Our process is simple, purposeful, and adaptable.
        </h2>
        <p className="mt-4 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
          We believe great design is a result of clarity, collaboration, and
          craft.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article
              key={s.num}
              className="flex flex-col gap-4 rounded-[12px] border border-[#23252a] bg-[#141516] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5e6ad2] text-sm font-[510] text-white">
                  {s.num}
                </span>
                <h3 className="font-[510] tracking-[-0.02em] text-[#f7f8f8]">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-[#8a8f98]">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[6px] bg-[#5e6ad2] px-4 py-2 text-sm font-[510] text-white transition-colors hover:bg-[#7170ff]"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
