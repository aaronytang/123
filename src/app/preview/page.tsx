// Design-system reference page at /preview — mirrors the real tokens pulled
// off linear.app's compiled CSS. Grouped by role (surfaces, type, brand, accents).

type Swatch = { token: string; hex: string; note: string };

const surfaces: Swatch[] = [
  { token: "--background",    hex: "#08090a", note: "--color-bg-level-0 / primary bg (dark)" },
  { token: "--bg-marketing",  hex: "#010102", note: "--color-bg-marketing (deepest)" },
  { token: "--bg-level-1",    hex: "#0f1011", note: "panel / card" },
  { token: "--bg-level-2",    hex: "#141516", note: "tint / secondary surface" },
  { token: "--bg-level-3",    hex: "#191a1b", note: "deeper tint" },
];

const type: Swatch[] = [
  { token: "--foreground / --fg-primary", hex: "#f7f8f8", note: "body + headings" },
  { token: "--fg-secondary",              hex: "#d0d6e0", note: "supporting copy" },
  { token: "--fg-tertiary",               hex: "#8a8f98", note: "muted copy" },
  { token: "--fg-quaternary",             hex: "#62666d", note: "most muted / labels" },
];

const brand: Swatch[] = [
  { token: "--brand",       hex: "#5e6ad2", note: "--color-brand-bg / indigo action" },
  { token: "--brand-hover", hex: "#7170ff", note: "--color-accent-hover" },
  { token: "--brand-link",  hex: "#828fff", note: "--color-link-primary" },
];

const accents: Swatch[] = [
  { token: "--accent-red",    hex: "#eb5757", note: "destructive / urgent" },
  { token: "--accent-orange", hex: "#fc7840", note: "In Progress" },
  { token: "--accent-yellow", hex: "#f0bf00", note: "warnings" },
  { token: "--accent-green",  hex: "#27a644", note: "done / positive" },
  { token: "--accent-blue",   hex: "#4ea7fc", note: "info" },
  { token: "--accent-pink",   hex: "#f79ce0", note: "retained marketing accent" },
];

export default function PreviewPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-[1024px] flex-col gap-12 px-6 py-20">
        <header className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-fg-tertiary">
            Design tokens {"\u00B7"} /preview
          </span>
          <h1 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            linear.app tokens, grouped by role.
          </h1>
          <p className="max-w-2xl text-fg-tertiary">
            Values pulled directly from linear.app{"\u2019"}s compiled CSS
            ({"\u201C"}--color-bg-level-*{"\u201D"}, {"\u201C"}--color-fg-*{"\u201D"},{" "}
            {"\u201C"}--color-brand-bg{"\u201D"}, {"\u201C"}--color-link-*{"\u201D"}).
            The site ships dark-as-default, so we do the same.
          </p>
        </header>

        <SwatchGrid title="Surfaces" swatches={surfaces} />
        <SwatchGrid title="Typography" swatches={type} />
        <SwatchGrid title="Brand" swatches={brand} />
        <SwatchGrid title="Accents" swatches={accents} />

        <div className="rounded-xl border border-border bg-[--bg-level-1] p-6">
          <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-tertiary">
            Type sample
          </h3>
          <p className="text-3xl font-medium tracking-[-0.03em]">
            The product development system for teams and agents.
          </p>
          <p className="mt-2 text-fg-tertiary">
            Purpose-built for planning and building products. Designed for the AI era.
          </p>
          <pre className="mt-4 overflow-hidden rounded-md border border-border bg-[--bg-level-2] p-3 font-mono text-xs text-fg-secondary">
{`// Berkeley Mono substitute — JetBrains Mono until licensed.
const issue = { id: "ENG-2703", status: "In Progress" };`}
          </pre>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-[--brand-hover]">
            Sign up
          </button>
          <button className="rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-fg-primary hover:bg-[--bg-level-2]">
            Contact sales
          </button>
          <span className="rounded-md border border-border bg-[--bg-level-1] px-3 py-1 font-mono text-xs text-brand-link">
            New
          </span>
        </div>
      </section>
    </main>
  );
}

function SwatchGrid({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-tertiary">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {swatches.map((s) => (
          <div
            key={s.token}
            className="flex items-center gap-3 rounded-lg border border-border bg-[--bg-level-1] p-3"
          >
            <div
              aria-hidden
              className="h-12 w-12 flex-none rounded-md border border-border"
              style={{ background: s.hex }}
            />
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate font-mono text-xs text-fg-primary">
                {s.hex}
              </span>
              <span className="truncate font-mono text-[11px] text-fg-tertiary">
                {s.token}
              </span>
              <span className="truncate text-xs text-fg-quaternary">{s.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
