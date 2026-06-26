const testimonials = [
  {
    quote: "Working with Kanso felt effortless. They have a rare ability to take complex ideas and distill them into something beautifully simple.",
    name: "Alex D.",
    role: "Creative Director",
    rating: "4.5/5",
  },
  {
    quote: "Kanso doesn't just design, they listen, interpret, and then create with precision.",
    name: "Emma V.",
    role: "Founder",
    rating: "4.8/5",
  },
  {
    quote: "Minimal, timeless, and sharp. That's how I'd describe both their process and their output.",
    name: "Julian M.",
    role: "Creative Director",
    rating: "5/5",
  },
  {
    quote: "They delivered a design system that not only looks great but works across every screen and touchpoint.",
    name: "Sofia L.",
    role: "Founder",
    rating: "4.5/5",
  },
];

export function KansoTestimonials() {
  return (
    <section className="bg-[#0f1011]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
          <span>/</span>
          <span>Testimonials</span>
          <span>(07)</span>
        </div>

        <h2 className="max-w-[624px] text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
          Success stories from our clients.
        </h2>

        <div className="mt-4 mb-12 text-sm text-[#8a8f98]">
          <span className="font-[510] text-[#f7f8f8]">4.9/5</span> average rating
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col gap-4 rounded-[12px] border border-[#23252a] bg-[#141516] p-6"
            >
              <span className="text-xs text-[#62666d]">{t.rating}</span>
              <p className="text-[15px] leading-[1.5] text-[#d0d6e0]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-auto text-sm">
                <span className="font-[510] text-[#f7f8f8]">{t.name}</span>
                <span className="text-[#8a8f98]"> &middot; {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
