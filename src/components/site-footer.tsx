// Footer — headings and link sets lifted from the live linear.app footer
// (Product / Company / Resources / Developers / Connect columns). Routes
// are not wired, since this is a best-effort visual rebuild.

const columns = [
  {
    heading: "Product",
    items: [
      "Intake", "Plan", "Build", "Diffs", "Monitor",
      "Pricing", "Security", "Features", "Asks", "Agents",
      "Customer Requests", "Insights", "Mobile", "Integrations", "Changelog",
    ],
  },
  {
    heading: "Company",
    items: ["About", "Customers", "Careers", "Blog", "Method", "Quality", "Brand"],
  },
  {
    heading: "Resources",
    items: ["Switch", "Download", "Documentation", "Docs"],
  },
  {
    heading: "Developers",
    items: ["Status", "Enterprise", "Startups"],
  },
  {
    heading: "Connect",
    items: ["Contact us", "Community", "Twitter"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1344px] px-6 py-16">
        <div className="mb-12 flex items-center gap-2 text-fg-primary">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary font-mono text-[11px] text-primary-foreground">
            L
          </span>
          <span className="text-sm font-medium">Linear</span>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <div className="font-mono text-xs uppercase tracking-widest text-fg-quaternary">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-2 text-sm">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-fg-secondary transition-colors hover:text-fg-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-2 px-6 py-6 text-xs text-fg-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span>
            {"\u00A9"} {new Date().getFullYear()} Linear {"\u00B7"} Best-effort
            rebuild for the ai-website-cloner-template demo.
          </span>
          <span className="font-mono">v0.3.1</span>
        </div>
      </div>
    </footer>
  );
}
