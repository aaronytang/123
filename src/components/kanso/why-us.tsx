const features = [
  {
    title: "Streamlined Process",
    body: "Our focused, step-by-step approach saves time and keeps projects moving smoothly.",
  },
  {
    title: "Scalable Design",
    body: "We create systems that grow with your brand and stay effective over time.",
  },
  {
    title: "24/7 Dedicated Support",
    body: "We're always here when you need us, ready to answer questions and provide updates.",
  },
];

const badges = [
  "Collaborative Approach",
  "Quick turnaround",
  "Clear Communication",
  "Consistent Quality",
  "Reliable Support",
];

export function KansoWhyUs() {
  return (
    <section className="bg-[#0f1011]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
          <span>/</span>
          <span>Why us</span>
          <span>(03)</span>
        </div>

        <h2 className="max-w-[624px] text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
          We cut through noise to create designs that are thoughtful, timeless,
          and impactful.
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-[9999px] border border-[#23252a] bg-[#141516] px-4 py-2 text-sm text-[#d0d6e0]"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Testimonial highlight */}
        <blockquote className="mt-16 max-w-[624px] rounded-[12px] border border-[#23252a] bg-[#141516] p-8">
          <p className="text-[15px] leading-[1.5] text-[#d0d6e0]">
            &ldquo;Kanso understood our brand better than we did. Their ability
            to find the essential and express it simply is what sets them
            apart.&rdquo;
          </p>
          <footer className="mt-4 text-sm">
            <span className="font-[510] text-[#f7f8f8]">Sofia Ford</span>
            <span className="text-[#8a8f98]"> &middot; Founder</span>
          </footer>
        </blockquote>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 rounded-[12px] border border-[#23252a] bg-[#141516] p-6"
            >
              <h3 className="font-[510] tracking-[-0.02em] text-[#f7f8f8]">
                {f.title}
              </h3>
              <p className="text-sm text-[#8a8f98]">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Brand statement */}
        <div className="mt-16 rounded-[12px] border border-[#23252a] bg-[#141516] p-10">
          <p className="text-lg font-[510] text-[#f7f8f8]">
            Kanso<sup className="text-[8px]">&reg;</sup>
          </p>
          <p className="mt-4 max-w-md text-2xl font-[510] tracking-[-0.03em] text-[#f7f8f8]">
            Design with intent.
            <br />
            No excess, no fluff.
          </p>
        </div>
      </div>
    </section>
  );
}
