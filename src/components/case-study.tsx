// Shared case-study building blocks. Voice and structure follow the OKX
// flagship study: plain story-telling headers, first person, metric band with
// a methodology note, image placeholders that describe the asset they await.
import Link from "next/link";

// ---------------------------------------------------------------------------
// Image placeholder — description sits ON TOP of the frame so it's obvious
// what asset belongs here when screenshots get dropped in.
// ---------------------------------------------------------------------------
export function ImagePlaceholder({
  label,
  note,
  aspect = "aspect-[16/9]",
  annotations,
}: {
  label: string;
  note: string;
  aspect?: string;
  annotations?: readonly string[];
}) {
  return (
    <figure className="w-full">
      <figcaption className="mb-2 flex items-baseline gap-2.5 font-mono text-[10px] uppercase tracking-[0.05em]">
        <span className="text-brand-link">Image</span>
        <span className="text-fg-tertiary">{label}</span>
      </figcaption>
      <div
        className={`flex ${aspect} w-full items-center justify-center rounded-xl border border-dashed border-[#33363d] bg-bg-level-1 px-8`}
      >
        <p className="max-w-[52ch] text-center text-[13px] leading-relaxed text-fg-quaternary">
          {note}
        </p>
      </div>
      {annotations && annotations.length > 0 ? (
        <ul className="mt-4 grid gap-2">
          {annotations.map((a) => (
            <li key={a} className="flex gap-2.5 text-[13px] leading-relaxed">
              <span aria-hidden className="text-brand-link">
                {"↳"}
              </span>
              <span className="max-w-[64ch] text-fg-tertiary">{a}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Pull quote — for the one line each study should be remembered by.
// ---------------------------------------------------------------------------
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-brand-link pl-6">
      <p className="max-w-[40ch] text-balance text-xl font-medium leading-snug tracking-[-0.015em] text-fg-primary sm:text-2xl">
        {children}
      </p>
    </blockquote>
  );
}

// ---------------------------------------------------------------------------
// Section shell — headers carry the takeaway, not a label.
// ---------------------------------------------------------------------------
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-24 max-md:py-16">
      <h2 className="max-w-[30ch] text-balance text-2xl font-medium leading-snug tracking-[-0.02em]">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Standard header facts: role, team composition, duration, platform.
// ---------------------------------------------------------------------------
export function CaseFacts({
  facts,
}: {
  facts: readonly (readonly [string, string])[];
}) {
  return (
    <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
      {facts.map(([k, v]) => (
        <div key={k}>
          <dt className="font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
            {k}
          </dt>
          <dd className="mt-1 text-sm text-fg-secondary">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

// ---------------------------------------------------------------------------
// Metric band + methodology note (credibility block).
// ---------------------------------------------------------------------------
export function MetricBand({
  metrics,
  methodology,
  valueClassName,
}: {
  metrics: readonly { value: string; label: string }[];
  methodology: string;
  valueClassName?: string;
}) {
  return (
    <section className="border-y border-border py-14 max-md:py-10">
      <div className="grid gap-10 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.value}>
            <p
              className={`text-[2.6rem] font-medium leading-none tracking-[-0.03em] tabular-nums ${
                valueClassName ?? "text-brand-link"
              }`}
            >
              {m.value}
            </p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-fg-tertiary">
              {m.label}
              <sup className="text-fg-quaternary">*</sup>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-[72ch] border-t border-border pt-5 text-xs leading-relaxed text-fg-quaternary">
        * {methodology}
      </p>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Numbered decision/failure block with an attached visual slot.
// ---------------------------------------------------------------------------
export function Decision({
  n,
  title,
  body,
  imgLabel,
  imgNote,
  annotations,
}: {
  n: string;
  title: string;
  body: string;
  imgLabel?: string;
  imgNote?: string;
  annotations?: readonly string[];
}) {
  return (
    <div className="grid gap-x-8 gap-y-4 md:grid-cols-[3rem_1fr]">
      <span className="font-mono text-[11px] leading-7 text-fg-quaternary">
        {n}
      </span>
      <div>
        <h3 className="text-lg font-medium tracking-[-0.01em]">{title}</h3>
        <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
          {body}
        </p>
        {imgLabel && imgNote ? (
          <div className="mt-6">
            <ImagePlaceholder
              label={imgLabel}
              note={imgNote}
              annotations={annotations}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Three-up reflection / constraint cards.
// ---------------------------------------------------------------------------
export function CardGrid({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ul className="grid gap-8 md:grid-cols-3">
      {items.map((it) => (
        <li key={it.title} className="border-t border-border pt-5">
          <h3 className="text-[15px] font-medium leading-snug">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-tertiary">
            {it.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Linear-style meta strip — mirrors the customer-story sidebar rows
// (company + outbound link, founded, role/dates). Sits under the hero intro.
// ---------------------------------------------------------------------------
export function CaseMeta({
  rows,
  bottomDivider = true,
  linkClassName,
}: {
  rows: readonly { label: string; value: string; href?: string }[];
  bottomDivider?: boolean;
  linkClassName?: string;
}) {
  return (
    <dl
      className={`grid grid-cols-2 gap-x-8 gap-y-6 border-border py-8 sm:grid-cols-4 ${
        bottomDivider ? "border-y" : "border-t"
      }`}
    >
      {rows.map((r) => (
        <div key={r.label}>
          <dt className="text-[13px] text-fg-tertiary">{r.label}</dt>
          <dd className="mt-1 text-[15px] font-medium text-fg-primary">
            {r.href ? (
              <a
                href={r.href}
                className={`inline-flex items-center gap-1 hover:underline ${
                  linkClassName ?? "text-brand-link"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {r.value}
                <span aria-hidden className="text-[12px]">
                  {"↗"}
                </span>
              </a>
            ) : (
              r.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// ---------------------------------------------------------------------------
// Linear-style article section — narrow column, anchored heading that matches
// the customer-story "### Heading" rhythm.
// ---------------------------------------------------------------------------
export function LinearSection({
  id,
  title,
  children,
  linkedHeading = true,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  linkedHeading?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-14 first:pt-0">
      <h2 className="group flex items-baseline gap-2 text-[clamp(28px,3.4vw,36px)] font-semibold leading-tight tracking-[-0.02em] text-fg-primary">
        {linkedHeading ? (
          <>
            <a href={`#${id}`} className="hover:underline">
              {title}
            </a>
            <span
              aria-hidden
              className="text-fg-quaternary opacity-0 transition-opacity group-hover:opacity-100"
            >
              {"#"}
            </span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

// Plain article paragraph at Linear's reading width / size.
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[68ch] text-[17px] leading-[1.7] text-fg-secondary">
      {children}
    </p>
  );
}

// Flat sub-block — flush-left heading + paragraph + optional inline image.
// No number column, no indentation, so the article reads as one column.
export function SubBlock({
  title,
  body,
  imgLabel,
  imgNote,
  annotations,
}: {
  title: string;
  body: string;
  imgLabel?: string;
  imgNote?: string;
  annotations?: readonly string[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-[19px] font-medium leading-snug tracking-[-0.01em] text-fg-primary">
        {title}
      </h3>
      <Prose>{body}</Prose>
      {imgLabel && imgNote ? (
        <div className="pt-2">
          <ImagePlaceholder
            label={imgLabel}
            note={imgNote}
            annotations={annotations}
          />
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer link to the next study.
// ---------------------------------------------------------------------------
export function NextCase({
  href,
  title,
  sub,
}: {
  href: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1024px] px-6 py-16">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
          Next case study
        </p>
        <Link href={href} className="group inline-block">
          <span className="text-xl font-medium tracking-[-0.015em] sm:text-2xl">
            {title}
            <span
              aria-hidden
              className="ml-2 inline-block text-fg-quaternary transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg-primary"
            >
              {"→"}
            </span>
          </span>
          <span className="mt-1 block text-sm text-fg-tertiary">{sub}</span>
        </Link>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Linear-style prev/next pager (two-up, with direction labels).
// ---------------------------------------------------------------------------
export function CasePager({
  prev,
  next,
}: {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  return (
    <nav
      aria-label="More case studies"
      className="mx-auto grid max-w-[1024px] grid-cols-2 gap-px border-t border-border"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-2 px-6 py-12 hover:bg-bg-level-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
            {"←"} Previous
          </span>
          <span className="text-lg font-medium tracking-[-0.015em] text-fg-primary">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-2 px-6 py-12 text-right hover:bg-bg-level-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
            Next {"→"}
          </span>
          <span className="text-lg font-medium tracking-[-0.015em] text-fg-primary">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
