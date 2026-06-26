const projects = [
  { name: "Lune", year: "2025", category: "App Visual Direction" },
  { name: "Aren", year: "2025", category: "Fashion Brand Launch" },
  { name: "Oura", year: "2024", category: "Brand Refinement" },
  { name: "Forma", year: "2024", category: "Product UI" },
  { name: "Oko", year: "2023", category: "Portfolio Website" },
  { name: "Velin", year: "2022", category: "Skincare Rebrand" },
];

export function KansoWork() {
  return (
    <section id="work" className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
        <span>Selected Work.</span>
        <span>(02)</span>
      </div>

      <p className="mb-12 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
        A curated selection of projects that reflect our commitment to
        simplicity and purposeful design.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group block rounded-[12px] border border-[#23252a] bg-[#0f1011] transition-colors duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:border-[#5e6ad2] hover:bg-[#141516]"
          >
            {/* Image placeholder area */}
            <div className="aspect-[4/3] w-full rounded-t-[11px] bg-gradient-to-br from-[#141516] to-[#0f1011]" />

            {/* Info row */}
            <div className="flex items-center justify-between border-t border-[#23252a] px-6 py-4 transition-colors duration-150 group-hover:border-[#5e6ad2]/30">
              <div className="flex items-baseline gap-3">
                <h3 className="text-[15px] font-[510] tracking-[-0.02em] text-[#f7f8f8]">
                  {p.name}
                </h3>
                <span className="text-[13px] text-[#8a8f98] transition-colors duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:text-[#d0d6e0]">
                  {p.category}
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d] transition-colors duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:text-[#8a8f98]">
                {p.year}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-[6px] border border-[#23252a] px-4 py-2 text-sm font-[510] text-[#f7f8f8] transition-colors duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:border-[#34343a] hover:bg-[#141516]"
        >
          View all projects
        </a>
      </div>
    </section>
  );
}
