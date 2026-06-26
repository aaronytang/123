export function KansoFooter() {
  return (
    <footer id="contact" className="border-t border-[#23252a] bg-[#08090a]">
      <div className="mx-auto max-w-[1024px] px-6 py-[64px] sm:py-[128px]">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-[510] text-[#f7f8f8]">
              Kanso<sup className="text-[8px]">&reg;</sup> Studio
            </p>
            <p className="max-w-md text-[15px] leading-[1.5] text-[#8a8f98]">
              Whether you&apos;re building a brand, designing a product, or
              simply want to explore an idea, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:hello@kanso.studio" className="text-[#828fff] hover:underline">
                hello@kanso.studio
              </a>
              <a href="tel:+11234567890" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">
                (123) 456-7890
              </a>
            </div>

            <div className="mt-4">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
                Sign up for our monthly newsletter.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-[6px] border border-[#23252a] bg-transparent px-4 py-2 text-sm text-[#f7f8f8] placeholder:text-[#62666d] focus:border-[#5e6ad2] focus:outline-none"
                />
                <button className="rounded-[6px] bg-[#5e6ad2] px-4 py-2 text-sm font-[510] text-white transition-colors hover:bg-[#7170ff]">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
                Pages
              </span>
              {["Home", "About", "Projects", "Blog", "Contact"].map((l) => (
                <a key={l} href="#" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
                Social
              </span>
              {["Twitter/X", "Instagram", "LinkedIn"].map((l) => (
                <a key={l} href="#" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">
                  {l}
                </a>
              ))}
              <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.05em] text-[#62666d]">
                Legal
              </span>
              {["Terms & Conditions", "Privacy Policy"].map((l) => (
                <a key={l} href="#" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#23252a] pt-6 text-xs text-[#62666d] sm:flex-row">
          <span>Designed in Framer &middot; By Thaer</span>
          <span>&copy; 2025 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
