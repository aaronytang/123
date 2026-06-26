import Link from "next/link";

export type V5FeaturedProject = {
  name: string;
  tag: string;
  desc: string;
  href: string;
  metrics: readonly { value: string; label: string }[];
};

export type V5Project = {
  idx: string;
  name: string;
  tag: string;
  desc: string;
  href: string;
};

export function V5HomeHero() {
  return (
    <section className="border-b v5-rule">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <p className="v5-mono">Product Designer · Payments & Crypto</p>
        <h1 className="v5-display mt-5 max-w-[12ch] text-balance">
          Systems people trust with money.
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <p className="v5-body-lg max-w-[42ch]">
            Payments, trading, and checkout for OKX, PlayStation, Walmart and
            Next.
          </p>
          <p className="v5-body max-w-[38ch] md:self-end">
            Eight years in regulated products. Strategy through post-launch
            iteration.
          </p>
        </div>
      </div>
    </section>
  );
}

export function V5FeaturedProjectCard({
  project,
}: {
  project: V5FeaturedProject;
}) {
  return (
    <Link href={project.href} className="group block">
      <article className="grid gap-8 border-b v5-rule py-10 md:grid-cols-[1.1fr_0.9fr] md:py-14">
        <div>
          <p className="v5-mono">{project.tag}</p>
          <h2 className="v5-h1 mt-4 max-w-[12ch] text-balance">
            {project.name}
          </h2>
          <p className="v5-body mt-5 max-w-[44ch]">{project.desc}</p>
          <div className="mt-8 flex flex-wrap gap-8">
            {project.metrics.map((metric) => (
              <div key={metric.value}>
                <p className="text-[2rem] font-semibold tracking-[-0.05em] text-[color:var(--v5-text)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[color:var(--v5-text-soft)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--v5-text)]">
            Read case study
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
        <div className="v5-media min-h-[280px] overflow-hidden p-6">
          <div className="flex h-full min-h-[240px] items-end rounded-[10px] border border-[color:var(--v5-border)] bg-white p-5">
            <div>
              <p className="v5-mono">Recurring Buy</p>
              <p className="mt-3 max-w-[18ch] text-2xl font-semibold tracking-[-0.04em]">
                Automate the repetition. Keep the judgment.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function V5ProjectGrid({ projects }: { projects: readonly V5Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3 md:py-14">
      {projects.map((project) => (
        <Link key={project.name} href={project.href} className="group block">
          <article className="v5-panel h-full p-5 transition-colors duration-200 group-hover:border-[color:var(--v5-border-strong)]">
            <div className="v5-media flex aspect-[16/11] items-end p-4">
              <span className="v5-mono">{project.idx}</span>
            </div>
            <p className="v5-mono mt-5">{project.tag}</p>
            <h3 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.04em]">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--v5-text-soft)]">
              {project.desc}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function V5AboutBlock() {
  return (
    <section id="about" className="border-t v5-rule">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="v5-mono">About</p>
            <h2 className="v5-h2 mt-4 max-w-[16ch]">
              Designing the systems where trust decides conversion.
            </h2>
          </div>
          <p className="v5-body max-w-[38ch]">
            I work across payments, crypto, logistics, and compliance: places
            where the interface has to explain what the system will do before
            people trust it with consequential decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
