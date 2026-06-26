import type { Metadata } from "next";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PortfolioFooter, PortfolioNav } from "@/components/portfolio/nav";

export const metadata: Metadata = {
  title: "Aaron Tang — Product Designer",
  description:
    "Product designer specializing in payments, crypto, and regulated products. OKX, PlayStation, Walmart, Next Trucking.",
};

function loadSnapshot() {
  const snapshotPath = firstExistingPath([
    join(process.cwd(), "out/portfolio-v3/index.html"),
    join(process.cwd(), "out/index.html"),
  ]);
  const stylesheetPath = join(process.cwd(), "out/portfolio-v3/style.css");
  const snapshot = readFileSync(snapshotPath, "utf8");
  const inlineStyle = existsSync(stylesheetPath)
    ? readFileSync(stylesheetPath, "utf8")
    : extractInlineStyles(snapshot);
  const bodyMarkup = extractInnerHtmlFromDiv(
    snapshot,
    '<div class="portfolio-home">',
  );

  return {
    inlineStyle,
    normalizedBodyMarkup: bodyMarkup
      .replaceAll('href="index.html"', 'href="/"')
      .replaceAll('href="about.html"', 'href="/about"')
      .replaceAll('href="okx.html"', 'href="/project/okx"')
      .replaceAll('href="playstation.html"', 'href="/project/playstation"')
      .replaceAll(
        'href="https://atangdesign.com/project/next"',
        'href="/homepage-test/next-trucking/index.html"',
      )
      .replaceAll(
        'href="/homepage-test/next-trucking/"',
        'href="/homepage-test/next-trucking/index.html"',
      )
      .replaceAll(
        'href="https://atangdesign.com/project/walmartgs"',
        'href="/homepage-test/walmart/index.html"',
      )
      .replaceAll(
        'href="/homepage-test/walmart/"',
        'href="/homepage-test/walmart/index.html"',
      )
      .replaceAll(
        'src="https://atangdesign.com/wp-content/uploads/OKX-cover-2025.svg"',
        'src="/images/okx-recurring-buy-home.png"',
      )
      .replaceAll(
        'src="https://atangdesign.com/wp-content/uploads/PScoverlatest.svg"',
        'src="/images/playstation-home-cover.png"',
      )
      .replaceAll(
        'src="https://atangdesign.com/wp-content/uploads/nextcover3.svg"',
        'src="/images/next-trucking-home-cover.svg"',
      )
      .replaceAll(
        'src="https://atangdesign.com/wp-content/uploads/wmtcoverupdated2.svg"',
        'src="/images/walmart-gs-home-cover.svg"',
      )
      .replaceAll(
        'src="https://atangdesign.com/wp-content/uploads/rumblecover.png"',
        'src="/images/rumble-home-cover.png"',
      ),
  };
}

function firstExistingPath(paths: string[]) {
  const path = paths.find((candidate) => existsSync(candidate));

  if (!path) {
    throw new Error(`Missing portfolio snapshot. Tried: ${paths.join(", ")}`);
  }

  return path;
}

function extractInlineStyles(snapshot: string) {
  return Array.from(snapshot.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g))
    .map((match) => match[1])
    .join("\n");
}

function extractInnerHtmlFromDiv(snapshot: string, openTag: string) {
  const openIndex = snapshot.indexOf(openTag);

  if (openIndex < 0) {
    throw new Error(`Missing portfolio wrapper. Tried: ${openTag}`);
  }

  const contentStart = snapshot.indexOf(">", openIndex);

  if (contentStart < 0) {
    throw new Error(`Malformed portfolio wrapper: ${openTag}`);
  }

  const divToken = /<\/?div\b[^>]*>/gi;
  divToken.lastIndex = contentStart + 1;

  let depth = 1;
  let match = divToken.exec(snapshot);

  while (match) {
    if (match[0].startsWith("</")) {
      depth -= 1;
    } else {
      depth += 1;
    }

    if (depth === 0) {
      return snapshot.slice(contentStart + 1, match.index);
    }

    match = divToken.exec(snapshot);
  }

  throw new Error(`Unclosed portfolio wrapper. Tried: ${openTag}`);
}

export default function HomePage() {
  const { inlineStyle, normalizedBodyMarkup } = loadSnapshot();

  return (
    <div className="portfolio-home-page light min-h-screen bg-background text-fg-primary">
      <PortfolioNav variant="home" />
      <style dangerouslySetInnerHTML={{ __html: inlineStyle }} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".portfolio-home .rv{opacity:1;transform:none}.portfolio-home .bar,.portfolio-home footer{display:none}.portfolio-home-page>header.sticky>div.mx-auto{padding:18px 4vw}.portfolio-home .entry:hover .shot img,.portfolio-home .mini:hover .shot img{transform:none}.portfolio-home .entry:hover .ar,.portfolio-home .entry-featured:hover .shot-ar{color:var(--light);transform:none}.portfolio-home .entry .shot,.portfolio-home .mini .shot{width:100%;padding:0}.portfolio-home .entry .shot img,.portfolio-home .mini .shot img{width:100%;height:100%;object-fit:cover}.portfolio-home a[href='/project/okx'] .shot-name{color:#fff}.portfolio-home a[href='/project/okx'] .shot{width:100%;padding:0;background:#161616}.portfolio-home a[href='/project/playstation'] .shot-name{color:#fff}.portfolio-home a[href='/project/playstation'] .shot{width:100%;padding:0;background:#000}.portfolio-home a[href='/project/playstation'] .shot img{object-position:center}" +
            // Sonder warm off-white background + Over-Stimulated portrait tile grid
            ".portfolio-home-page{background:#fdf9f8}" +
            ".portfolio-home-page header.sticky{background:rgba(253,249,248,0.9)}" +
            ".portfolio-home .index{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:0 var(--pad);padding-top:24px}" +
            ".portfolio-home .entry-featured:nth-of-type(1),.portfolio-home .entry-featured:nth-of-type(2){grid-column:auto}" +
            ".portfolio-home .entry-featured .shot{aspect-ratio:3/4;min-height:unset}" +
            ".portfolio-home .entry-featured .shot-copy{inset:16px;gap:12px}" +
            ".portfolio-home .entry-featured .shot-bottom{max-width:90%}" +
            ".portfolio-home .entry-featured .shot-top{max-width:90%}" +
            ".portfolio-home .mini-grid{display:contents}" +
            ".portfolio-home .mini .shot{aspect-ratio:3/4}" +
            "@media(max-width:860px){.portfolio-home .index{grid-template-columns:repeat(2,1fr);gap:12px}}" +
            "@media(max-width:480px){.portfolio-home .index{grid-template-columns:1fr;gap:32px}}",
        }}
      />
      <div
        className="portfolio-home"
        dangerouslySetInnerHTML={{ __html: normalizedBodyMarkup }}
      />
      <PortfolioFooter />
    </div>
  );
}
