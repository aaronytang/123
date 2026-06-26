// Geist (Vercel) design-system theme, scoped under `.geist`.
// Values taken from vercel.com/design.md (Light theme): near-neutral surfaces,
// Geist Sans/Mono, tight radii, restrained color, 4px spacing rhythm, subtle
// shadows. Scoping keeps it from touching the rest of the site's tokens.
import Link from "next/link";

const GEIST_CSS = `
.geist {
  --g-bg-100:#ffffff; --g-bg-200:#fafafa;
  --g-gray-200:#ebebeb; --g-gray-400:#eaeaea; --g-gray-700:#8f8f8f;
  --g-gray-900:#4d4d4d; --g-gray-1000:#171717;
  --g-a-400:#00000014; --g-a-500:#00000024; --g-a-200:#00000010;
  --g-blue-100:#f0f7ff; --g-blue-400:#cae7ff; --g-blue-700:#006bff;
  --g-sans:var(--font-geist),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  --g-mono:var(--font-berkeley-mono),ui-monospace,"SF Mono",Menlo,monospace;
  background:var(--g-bg-100);
  color:var(--g-gray-1000);
  font-family:var(--g-sans);
  -webkit-font-smoothing:antialiased;
}
.geist ::selection{background:var(--g-blue-400);color:var(--g-gray-1000);}
.geist a:focus-visible,.geist button:focus-visible{
  outline:none;border-radius:6px;
  box-shadow:0 0 0 2px var(--g-bg-100),0 0 0 4px var(--g-blue-700);
}
.g-display{font-weight:600;font-size:clamp(40px,7.5vw,72px);line-height:1.0;letter-spacing:-0.05em;}
.g-h1{font-weight:600;font-size:clamp(32px,4.5vw,48px);line-height:1.06;letter-spacing:-0.05em;}
.g-h2{font-weight:600;font-size:clamp(26px,3vw,32px);line-height:1.2;letter-spacing:-0.04em;}
.g-h3{font-weight:600;font-size:24px;line-height:32px;letter-spacing:-0.04em;}
.g-h4{font-weight:600;font-size:20px;line-height:26px;letter-spacing:-0.02em;}
.g-lede{font-size:clamp(18px,2vw,20px);line-height:1.6;color:var(--g-gray-900);}
.g-copy{font-size:18px;line-height:28px;color:var(--g-gray-900);}
.g-copy16{font-size:16px;line-height:24px;color:var(--g-gray-900);}
.g-copy14{font-size:14px;line-height:20px;color:var(--g-gray-900);}
.g-mono{font-family:var(--g-mono);font-size:12px;line-height:16px;letter-spacing:0.02em;text-transform:uppercase;color:var(--g-gray-700);}
.g-mono13{font-family:var(--g-mono);font-size:13px;line-height:20px;color:var(--g-gray-700);}
.g-sec{color:var(--g-gray-900);} .g-ter{color:var(--g-gray-700);}
.g-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:40px;padding:0 14px;border-radius:6px;font-family:var(--g-sans);font-size:14px;font-weight:500;line-height:20px;transition:background 150ms cubic-bezier(0.175,0.885,0.32,1.1),border-color 150ms,color 150ms;cursor:pointer;text-decoration:none;}
.g-btn-primary{background:var(--g-gray-1000);color:var(--g-bg-100);}
.g-btn-primary:hover{background:#383838;}
.g-btn-secondary{background:var(--g-bg-100);color:var(--g-gray-1000);border:1px solid var(--g-a-400);}
.g-btn-secondary:hover{border-color:var(--g-a-500);background:var(--g-bg-200);}
.g-card{background:var(--g-bg-100);border:1px solid var(--g-a-400);border-radius:12px;box-shadow:0 2px 2px rgba(0,0,0,0.04);transition:border-color 150ms,box-shadow 150ms;}
a.g-card:hover{border-color:var(--g-a-500);box-shadow:0 2px 4px rgba(0,0,0,0.06);}
.g-link{color:var(--g-blue-700);text-decoration:none;}
.g-link:hover{text-decoration:underline;}
.g-rule{border-color:var(--g-a-400);}
@media (prefers-reduced-motion: reduce){.geist *{transition:none!important;}}
`;

export function GeistTheme() {
  return <style dangerouslySetInnerHTML={{ __html: GEIST_CSS }} />;
}

export function GeistNav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.8)",
        borderBottom: "1px solid var(--g-a-400)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10">
        <Link href="/" aria-label="Aaron Tang — home" className="g-h4">
          Aaron Tang
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          <Link href="/#work" className="g-copy14 g-sec hover:text-[var(--g-gray-1000)]">
            Work
          </Link>
          <Link href="/#about" className="g-copy14 g-sec hover:text-[var(--g-gray-1000)]">
            About
          </Link>
        </nav>
        <a href="mailto:aarontang.design@gmail.com" className="g-btn g-btn-primary">
          Get in Touch
        </a>
      </div>
    </header>
  );
}

export function GeistFooter() {
  return (
    <footer role="contentinfo" className="border-t g-rule">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="g-h3">Let&apos;s work together.</p>
            <a
              href="mailto:aarontang.design@gmail.com"
              className="g-link mt-3 inline-block g-copy16"
            >
              aarontang.design@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/aaron-tang" className="g-copy14 g-sec hover:text-[var(--g-gray-1000)]">
              LinkedIn
            </a>
            <Link href="/#work" className="g-copy14 g-sec hover:text-[var(--g-gray-1000)]">
              Work
            </Link>
            <Link href="/#about" className="g-copy14 g-sec hover:text-[var(--g-gray-1000)]">
              About
            </Link>
          </div>
        </div>
        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t g-rule pt-6 g-mono"
        >
          <span>© {new Date().getFullYear()} Aaron Tang</span>
          <span>Designed in the PNW</span>
        </div>
      </div>
    </footer>
  );
}
