export function KansoAbout() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "140+", label: "Projects completed" },
    { value: "100+", label: "Customer satisfaction rate" },
    { value: "97%", label: "Customer satisfaction rate" },
    { value: "6", label: "Industry awards" },
  ];

  return (
    <section id="about" className="bg-[#0f1011]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
          <span>/</span>
          <span>About us</span>
          <span>(01)</span>
        </div>

        <h2 className="max-w-[624px] text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
          We&apos;re a design studio focused on creating simple, purposeful, and
          elegant solutions.
        </h2>

        <div className="mt-16 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label + s.value} className="flex flex-col gap-1">
              <span className="text-3xl font-[510] tracking-[-0.03em] text-[#f7f8f8]">
                {s.value}
              </span>
              <span className="text-sm text-[#8a8f98]">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
          Our studio is dedicated to crafting clean, purposeful solutions that
          cut through the noise.
        </p>
      </div>
    </section>
  );
}
