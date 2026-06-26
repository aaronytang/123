const features = [
  "Unlimited design requests",
  "One active task at a time",
  "Weekly progress calls",
  "Fast turnaround times",
  "Brand consistency across all deliverables",
  "Priority support",
  "Pause or cancel anytime",
];

export function KansoPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
        <span>Pricing Plans.</span>
        <span>(06)</span>
      </div>

      <p className="mb-12 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
        A curated selection of projects that reflect our commitment to
        simplicity and purposeful design.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Subscription */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#23252a] bg-[#0f1011] p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-[9999px] border border-[#23252a] bg-[#141516] px-3 py-1 text-xs font-[510] text-[#d0d6e0]">
              Subscription
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-[510] tracking-[-0.03em] text-[#f7f8f8]">
              $2500
            </span>
            <span className="text-[#8a8f98]">/month</span>
          </div>
          <p className="text-sm text-[#8a8f98]">
            For ongoing support and flexible design needs. Ideal for startups,
            growing brands, and marketing teams needing consistent creative
            support.
          </p>
          <ul className="flex flex-col gap-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#d0d6e0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-2 text-xs text-[#62666d]">
            Estimated delivery: <span className="font-[510] text-[#f7f8f8]">48 hours</span>
          </div>
          <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center rounded-[6px] bg-[#5e6ad2] px-4 py-2.5 text-sm font-[510] text-white transition-colors hover:bg-[#7170ff]"
          >
            Get started
          </a>
        </div>

        {/* Subscription+ */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#23252a] bg-[#141516] p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-[9999px] border border-[#23252a] bg-[#0f1011] px-3 py-1 text-xs font-[510] text-[#d0d6e0]">
              Subscription +
            </span>
            <span className="text-xs text-[#62666d]">Kanso&reg;</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-[510] tracking-[-0.03em] text-[#f7f8f8]">
              $3300
            </span>
            <span className="text-[#8a8f98]">/month</span>
          </div>
          <p className="text-sm text-[#8a8f98]">
            Everything in Subscription, plus SEO optimization add-on for
            $800/month extra.
          </p>
          <ul className="flex flex-col gap-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#d0d6e0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                {f}
              </li>
            ))}
            <li className="flex items-center gap-2 text-sm text-[#d0d6e0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
              SEO optimization included
            </li>
          </ul>
          <div className="mt-2 text-xs text-[#62666d]">
            Estimated delivery: <span className="font-[510] text-[#f7f8f8]">48 hours</span>
          </div>
          <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center rounded-[6px] bg-[#5e6ad2] px-4 py-2.5 text-sm font-[510] text-white transition-colors hover:bg-[#7170ff]"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
