'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-24">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-quaternary">
            Application error
          </p>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Something went wrong.
          </h1>
          <p className="mt-4 text-sm leading-6 text-fg-tertiary">
            The page hit a rendering error. Try reloading the route, or retry
            if the issue was temporary.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-fg-primary transition-colors hover:bg-bg-level-2"
            >
              Back home
            </Link>
          </div>
          {error.digest ? (
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-quaternary">
              Error ID: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
