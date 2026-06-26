// Top navigation — link set and order taken from the live linear.app header:
// Product · Resources · Customers · Pricing · Now · Contact, then Docs,
// Open app, Log in, Sign up on the right.
import Link from "next/link";

export function SiteNav() {
  const primary = [
    { label: "Product",   href: "/project/linear" },
    { label: "Resources", href: "#resources" },
    { label: "Customers", href: "#customers" },
    { label: "Pricing",   href: "#pricing"   },
    { label: "Now",       href: "#now"       },
    { label: "Contact",   href: "#contact"   },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1344px] items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2 font-medium tracking-tight text-fg-primary">
          <LinearMark />
          <span>Linear</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-fg-tertiary md:flex">
          {primary.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-fg-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 text-sm">
          <a
            href="#docs"
            className="hidden rounded-md px-3 py-1.5 text-fg-tertiary transition-colors hover:text-fg-primary md:inline-block"
          >
            Docs
          </a>
          <a
            href="#open-app"
            className="hidden rounded-md px-3 py-1.5 text-fg-tertiary transition-colors hover:text-fg-primary sm:inline-block"
          >
            Open app
          </a>
          <a
            href="#login"
            className="hidden rounded-md px-3 py-1.5 text-fg-tertiary transition-colors hover:text-fg-primary sm:inline-block"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-[--brand-hover]"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}

// Abstract chevron-style mark. Not Linear's real logo.
function LinearMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="text-fg-primary"
    >
      <path
        d="M1 10.2 9.8 1M1 14.8 14.3 1M1 19.6 19.4 1M6.4 20 20 6.4m-7.6 13.6L20 12.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
