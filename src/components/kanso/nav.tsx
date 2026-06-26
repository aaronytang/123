import Link from "next/link";

export function KansoNav() {
  return (
    <header className="sticky top-0 z-[100] border-b border-[#23252a]/80 bg-[#08090a]/70 backdrop-blur-[20px]">
      <div className="mx-auto flex h-[72px] max-w-[1024px] items-center justify-between px-6">
        <Link href="/" className="text-lg font-[510] tracking-[-0.02em] text-[#f7f8f8]">
          Kanso<sup className="text-[10px]">&reg;</sup>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/project/linear" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">Product</Link>
          <a href="/homepage-test/" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">About</a>
          <a href="#work" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">Projects</a>
          <a href="#blog" className="text-[#8a8f98] transition-colors hover:text-[#f7f8f8]">Blog</a>
        </nav>
        <a
          href="#contact"
          className="rounded-[6px] bg-[#5e6ad2] px-4 py-2 text-sm font-[510] text-white transition-colors hover:bg-[#7170ff]"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
