const posts = [
  {
    date: "May 30, 2025",
    title: "The Power of Restraint in Design",
    excerpt: "A look at how simplicity can sharpen communication, increase impact, and build longer-lasting brands.",
    tag: "Insights",
  },
  {
    date: "May 23, 2025",
    title: "Designing for Calm: UX Beyond the Screen",
    excerpt: "An exploration of how subtle interaction, whitespace, and visual pacing shape user emotion.",
    tag: "Digital Design",
  },
  {
    date: "May 16, 2025",
    title: "Building a Timeless Identity",
    excerpt: "A guide to creating brands that transcend trends, focusing on core values instead.",
    tag: "Strategy",
  },
];

export function KansoBlog() {
  return (
    <section id="blog" className="bg-[#0f1011]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
          <span>/</span>
          <span>Blog</span>
          <span>(09)</span>
        </div>

        <h2 className="text-[36px] font-[510] leading-tight tracking-[-0.03em] text-[#f7f8f8] sm:text-[48px]">
          Latest insights from our blog.
        </h2>
        <p className="mt-4 max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0]">
          Thoughts, ideas, and perspectives on design, simplicity, and creative
          process.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-4 rounded-[12px] border border-[#23252a] bg-[#141516] p-6"
            >
              <div className="flex items-center justify-between text-xs text-[#62666d]">
                <span>{p.date}</span>
                <span className="rounded-[9999px] border border-[#23252a] bg-[#0f1011] px-2 py-0.5 text-[#8a8f98]">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-[510] tracking-[-0.02em] text-[#f7f8f8]">
                {p.title}
              </h3>
              <p className="text-sm text-[#8a8f98]">{p.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[6px] border border-[#23252a] px-4 py-2 text-sm font-[510] text-[#f7f8f8] transition-colors hover:bg-[#141516]"
          >
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
}
