// Shared portfolio chrome — matches the home page's Linear-token system:
// sticky blurred nav, AT mono wordmark, brand CTA.
import Link from "next/link";

export function PortfolioNav({
  variant = "default",
  interactive = true,
}: {
  variant?: "default" | "home";
  interactive?: boolean;
}) {
  if (variant === "home") {
    return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 text-[13px] font-medium backdrop-blur-md">
        <div className="mx-auto grid max-w-[1120px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 px-[4vw] py-[18px]">
          {interactive ? (
            <Link
              href="/"
              aria-label="Aaron Tang — home"
              className="col-start-1 justify-self-start text-fg-primary transition-colors hover:text-fg-primary"
            >
              Aaron Tang
            </Link>
          ) : (
            <Link
              href="/"
              aria-label="Aaron Tang — home"
              className="col-start-1 justify-self-start text-fg-primary transition-colors hover:text-fg-primary"
            >
              Aaron Tang
            </Link>
          )}
          <span className="col-start-2 hidden justify-self-center text-fg-tertiary md:block">
            Product Designer — Payments &amp; Crypto
          </span>
          <nav aria-label="Primary" className="col-start-3 flex items-center justify-self-end gap-6 text-fg-tertiary">
            {interactive ? (
              <>
                <Link href="/#work" className="text-fg-primary transition-colors hover:text-fg-primary">
                  Work
                </Link>
                <Link href="/#about" className="transition-colors hover:text-fg-primary">
                  About
                </Link>
                <a
                  href="mailto:aarontang.design@gmail.com"
                  className="transition-colors hover:text-fg-primary"
                >
                  Email
                </a>
              </>
            ) : (
              <>
                <span className="text-fg-primary">Work</span>
                <span>About</span>
                <span>Email</span>
              </>
            )}
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[rgba(35,37,42,0.8)] bg-[rgba(8,9,10,0.7)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-6 px-6">
        <Link
          href="/"
          aria-label="Aaron Tang — home"
          className="rounded-md px-2.5 py-1.5 font-mono text-sm font-medium tracking-wide text-fg-primary transition-colors hover:bg-bg-level-1"
        >
          AT
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            <li>
              <Link href="/#work" className="text-fg-tertiary transition-colors hover:text-fg-primary">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-fg-tertiary transition-colors hover:text-fg-primary">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href="mailto:aarontang.design@gmail.com"
          className="inline-flex items-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="mx-auto flex max-w-[1024px] flex-wrap items-center justify-between gap-6 px-6 text-[13px] text-fg-quaternary">
        <div className="inline-flex items-center gap-3.5">
          <span className="font-mono font-medium tracking-wide text-fg-secondary">AT</span>
          <span>{"©"} {new Date().getFullYear()} Aaron Tang</span>
        </div>
        <div className="inline-flex items-center gap-4">
          <a
            href="mailto:aarontang.design@gmail.com"
            className="text-fg-tertiary transition-colors hover:text-fg-primary"
          >
            aarontang.design@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-tang"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-fg-tertiary transition-colors hover:border-[#2e3138] hover:text-fg-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.05 1.38-2.05 2.8V21H10V9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({
  num,
  label,
}: {
  num: string;
  label: string;
}) {
  return (
    <span className="mb-5 inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
      <span>{num}</span>
      <span className="inline-block h-px w-12 bg-border" aria-hidden />
      <span>{label}</span>
      <span aria-hidden>{"→"}</span>
    </span>
  );
}
