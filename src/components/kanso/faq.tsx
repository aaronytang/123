const faqs = [
  {
    q: "What kind of clients do you work with?",
    a: "We work with startups, established brands, and creative teams who value clarity, purpose, and thoughtful design. Whether you're launching something new or refining an existing presence, we adapt our approach to your needs.",
  },
  {
    q: "What services do you offer?",
    a: "Our core services include brand identity, digital design, art direction, and strategy. We often work across multiple touchpoints to ensure consistency and cohesion in everything we create.",
  },
  {
    q: "How do you price your projects?",
    a: "We price based on scope, timeline, and deliverables—never by the hour. After a discovery call, we'll provide a custom proposal aligned with your goals and budget.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by project, but most branding projects take 4–8 weeks, while digital projects may range from 6–12 weeks. We'll always agree on key milestones before starting.",
  },
  {
    q: "Can we collaborate remotely?",
    a: "Absolutely. Most of our work is done remotely, and we've partnered successfully with clients across time zones. Clear communication and structured check-ins keep everything on track.",
  },
  {
    q: "Do you accept one-off design tasks or only full projects?",
    a: "We typically take on full-scope projects to ensure cohesion and quality. However, if you have a smaller need that aligns with our approach, we're open to discussing it.",
  },
  {
    q: "How many concepts or revisions are included?",
    a: "Our process is collaborative and structured. Rather than presenting dozens of options, we focus on one strong direction—refined through feedback. The number of revisions depends on the scope, but clarity and alignment are our priority from the start.",
  },
];

export function KansoFaq() {
  return (
    <section className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
        <span>/</span>
        <span>FAQs</span>
        <span>(08)</span>
      </div>

      <h2 className="max-w-[624px] text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
        Wondering How We Work?
      </h2>
      <p className="mt-4 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
        Answers to common questions about our process, services, and how we work.
      </p>

      <div className="mt-12 flex flex-col divide-y divide-[#23252a]">
        {faqs.map((faq, i) => (
          <details key={i} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between text-[15px] font-[510] text-[#f7f8f8]">
              <span>
                {i + 1}. {faq.q}
              </span>
              <span className="ml-4 flex-none text-[#8a8f98] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[624px] text-sm text-[#8a8f98]">{faq.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-[6px] border border-[#23252a] px-4 py-2 text-sm font-[510] text-[#f7f8f8] transition-colors hover:bg-[#141516]"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
