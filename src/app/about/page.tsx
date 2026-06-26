import type { Metadata } from "next";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PortfolioV3Effects } from "@/components/portfolio-v3-effects";

export const metadata: Metadata = {
  title: "About — Aaron Tang",
  description:
    "Architecture-informed product design for payments, crypto, and high-trust systems.",
};

function loadSnapshot() {
  const snapshotPath = firstExistingPath([
    join(process.cwd(), "out/about/index.html"),
    join(process.cwd(), "out/portfolio-v3/about.html"),
    join(process.cwd(), "out/about.html"),
  ]);
  const stylesheetPath = join(process.cwd(), "out/portfolio-v3/style.css");
  if (!snapshotPath) return { inlineStyle: "", normalizedBodyMarkup: "" };
  const snapshot = readFileSync(snapshotPath, "utf8");
  const inlineStyle = existsSync(stylesheetPath)
    ? readFileSync(stylesheetPath, "utf8")
    : extractInlineStyles(snapshot);
  const bodyStart = snapshot.indexOf("<body>");
  const scriptStart = snapshot.lastIndexOf("<script>");
  const bodyMarkup =
    bodyStart >= 0 && scriptStart > bodyStart
      ? snapshot.slice(bodyStart + "<body>".length, scriptStart)
      : "";

  return {
    inlineStyle,
    normalizedBodyMarkup: bodyMarkup
      .replaceAll('href="index.html"', 'href="/"')
      .replaceAll('href="about.html"', 'href="/about"')
      .replaceAll('href="okx.html"', 'href="/project/okx"')
      .replaceAll('href="playstation.html"', 'href="/project/playstation"'),
  };
}

function firstExistingPath(paths: string[]) {
  return paths.find((candidate) => existsSync(candidate)) ?? null;
}

function extractInlineStyles(snapshot: string) {
  return Array.from(snapshot.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g))
    .map((match) => match[1])
    .join("\n");
}

export default function AboutPage() {
  const { inlineStyle, normalizedBodyMarkup } = loadSnapshot();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: inlineStyle }} />
      <div dangerouslySetInnerHTML={{ __html: normalizedBodyMarkup }} />
      <PortfolioV3Effects />
    </>
  );
}
