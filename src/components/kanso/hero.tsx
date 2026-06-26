export function KansoHero() {
  return (
    <section className="mx-auto max-w-[1024px] px-6 pt-[128px] pb-[64px]">
      <div className="flex flex-col gap-8">
        <h1 className="max-w-4xl text-[56px] font-[510] leading-[1.1] tracking-[-0.04em] sm:text-[72px]">
          Kanso<sup className="text-lg align-super">&reg;</sup>
        </h1>
        <p className="max-w-[624px] text-[15px] leading-[1.5] text-[#d0d6e0] sm:text-lg">
          Kanso is a design studio crafting modern brand identities and refined
          web experiences.
        </p>
        <div className="flex items-center gap-6 text-sm text-[#8a8f98]">
          <span className="flex items-center gap-1">
            <span className="font-[510] text-[#f7f8f8]">4.9/5</span> Trusted by
          </span>
          <span>
            <span className="font-[510] text-[#f7f8f8]">100+</span> businesses
          </span>
        </div>
      </div>
    </section>
  );
}
