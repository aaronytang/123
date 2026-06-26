'use client';

import Link from 'next/link';

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center px-6 py-24">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-quaternary">
        Route error
      </p>
      <h2 className="text-2xl font-medium tracking-tight">
        This page could not load.
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-fg-tertiary">
        {error.message || 'An unexpected error occurred while rendering.'}
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Retry
        </button>
        <Link
          href="/"
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-fg-primary transition-colors hover:bg-bg-level-2"
        >
          Home
        </Link>
      </div>
      {error.digest ? (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-quaternary">
          Error ID: {error.digest}
        </p>
      ) : null}
    </div>
  );
}
