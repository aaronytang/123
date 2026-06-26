import Link from "next/link";
import type { ReactNode } from "react";

export function V5CaseHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="border-b v5-rule">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <nav aria-label="Breadcrumb" className="v5-mono mb-6">
          <Link href="/v5#work" className="v5-link">
            Work
          </Link>
          <span className="mx-2">/</span>
          <span>OKX</span>
        </nav>
        <h1 className="v5-h1 max-w-[14ch] text-balance">{title}</h1>
        <p className="v5-body-lg mt-6 max-w-[42ch]">{subtitle}</p>
      </div>
    </header>
  );
}

export function V5MediaFrame({
  label,
  note,
  aspect = "aspect-[16/9]",
}: {
  label: string;
  note: string;
  aspect?: string;
}) {
  return (
    <figure className="w-full">
      <figcaption className="v5-mono mb-3">{label}</figcaption>
      <div
        className={`v5-media flex ${aspect} items-center justify-center px-8`}
      >
        <p className="max-w-[44ch] text-center text-sm leading-6 text-[color:var(--v5-text-faint)]">
          {note}
        </p>
      </div>
    </figure>
  );
}

export function V5MetaGrid({
  rows,
}: {
  rows: readonly { label: string; value: string; href?: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y v5-rule py-8 md:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="text-sm text-[color:var(--v5-text-faint)]">
            {row.label}
          </dt>
          <dd className="mt-1 text-[15px] font-medium text-[color:var(--v5-text)]">
            {row.href ? (
              <a
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="v5-link"
              >
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function V5CaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t v5-rule py-14 md:py-20">
      <h2 className="v5-h2 max-w-[22ch] text-balance">{title}</h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function V5Prose({ children }: { children: ReactNode }) {
  return <p className="v5-body max-w-[64ch]">{children}</p>;
}

export function V5SubBlock({
  title,
  body,
  imgLabel,
  imgNote,
}: {
  title: string;
  body: string;
  imgLabel?: string;
  imgNote?: string;
}) {
  return (
    <div>
      <h3 className="text-[1.1rem] font-semibold tracking-[-0.03em]">
        {title}
      </h3>
      <p className="v5-body mt-3 max-w-[64ch]">{body}</p>
      {imgLabel && imgNote ? (
        <div className="mt-7">
          <V5MediaFrame label={imgLabel} note={imgNote} />
        </div>
      ) : null}
    </div>
  );
}

export function V5MetricBand({
  metrics,
  methodology,
}: {
  metrics: readonly { value: string; label: string }[];
  methodology: string;
}) {
  return (
    <section className="border-y v5-rule py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.value}>
            <p className="text-[2.6rem] font-semibold leading-none tracking-[-0.06em]">
              {metric.value}
            </p>
            <p className="mt-3 max-w-[26ch] text-sm leading-6 text-[color:var(--v5-text-soft)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 border-t v5-rule pt-5 text-xs leading-6 text-[color:var(--v5-text-faint)]">
        * {methodology}
      </p>
    </section>
  );
}

export function V5CasePager() {
  return (
    <nav className="border-t v5-rule" aria-label="Project navigation">
      <div className="mx-auto grid max-w-[1120px] gap-6 px-6 py-10 md:grid-cols-2 md:px-10">
        <Link href="/project/playstation" className="v5-link">
          <span className="v5-mono">Previous</span>
          <span className="mt-2 block text-lg font-semibold tracking-[-0.03em]">
            PlayStation Payments
          </span>
        </Link>
        <Link href="/project/next" className="v5-link md:text-right">
          <span className="v5-mono">Next</span>
          <span className="mt-2 block text-lg font-semibold tracking-[-0.03em]">
            Next Trucking
          </span>
        </Link>
      </div>
    </nav>
  );
}
