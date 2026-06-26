import * as React from "react";

const V5_CSS = `
.v5 {
  --v5-bg: #ffffff;
  --v5-bg-subtle: #fafafa;
  --v5-panel: #fcfcfc;
  --v5-text: #111111;
  --v5-text-soft: #666666;
  --v5-text-faint: #888888;
  --v5-border: rgba(0, 0, 0, 0.08);
  --v5-border-strong: rgba(0, 0, 0, 0.12);
  --v5-accent: #0070f3;
  --v5-sans: var(--font-geist), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --v5-mono: var(--font-berkeley-mono), ui-monospace, "SF Mono", monospace;
  background: var(--v5-bg);
  color: var(--v5-text);
  font-family: var(--v5-sans);
  -webkit-font-smoothing: antialiased;
}

.v5 ::selection {
  background: rgba(0, 112, 243, 0.18);
  color: var(--v5-text);
}

.v5 a {
  color: inherit;
  text-decoration: none;
}

.v5-display {
  font-size: clamp(2.75rem, 6vw, 5.75rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
  font-weight: 600;
}

.v5-h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  font-weight: 600;
}

.v5-h2 {
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 600;
}

.v5-body {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--v5-text-soft);
}

.v5-body-lg {
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.7;
  color: var(--v5-text-soft);
}

.v5-mono {
  font-family: var(--v5-mono);
  font-size: 0.72rem;
  line-height: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--v5-text-faint);
}

.v5-rule {
  border-color: var(--v5-border);
}

.v5-panel {
  background: var(--v5-panel);
  border: 1px solid var(--v5-border);
  border-radius: 14px;
}

.v5-media {
  background: linear-gradient(180deg, #fbfbfb 0%, #f5f5f5 100%);
  border: 1px solid var(--v5-border);
  border-radius: 16px;
}

.v5-link:hover {
  color: var(--v5-text);
}

@media (prefers-reduced-motion: reduce) {
  .v5 * {
    transition: none !important;
  }
}
`;

export function V5Theme() {
  return <style dangerouslySetInnerHTML={{ __html: V5_CSS }} />;
}
