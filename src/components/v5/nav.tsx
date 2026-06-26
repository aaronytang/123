import Link from "next/link";

type V5NavProps = {
  homeHref?: string;
  workHref: string;
  aboutHref?: string;
};

export function V5Nav({
  homeHref = "/v5",
  workHref,
  aboutHref = "/v5#about",
}: V5NavProps) {
  return (
    <header className="sticky top-0 z-50 border-b v5-rule bg-[rgba(255,255,255,0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10">
        <Link href={homeHref} className="text-[15px] font-medium tracking-[-0.02em]">
          Aaron Tang
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <Link href={workHref} className="v5-link text-sm text-[color:var(--v5-text-soft)]">
            Work
          </Link>
          <Link href={aboutHref} className="v5-link text-sm text-[color:var(--v5-text-soft)]">
            About
          </Link>
          <a
            href="mailto:aarontang.design@gmail.com"
            className="v5-link text-sm text-[color:var(--v5-text-soft)]"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}

export function V5Footer() {
  return (
    <footer className="border-t v5-rule">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-[15px] font-medium tracking-[-0.02em]">Aaron Tang</p>
          <p className="mt-1 text-sm text-[color:var(--v5-text-soft)]">
            Product Designer — Payments & Crypto
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-[color:var(--v5-text-soft)]">
          <a href="mailto:aarontang.design@gmail.com" className="v5-link">
            aarontang.design@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/aaron-tang" className="v5-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
