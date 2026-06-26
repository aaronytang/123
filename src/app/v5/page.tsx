import { V5AboutBlock, V5FeaturedProjectCard, V5HomeHero, V5ProjectGrid } from "@/components/v5/home";
import { V5Footer, V5Nav } from "@/components/v5/nav";
import { V5Theme } from "@/components/v5/theme";

export const metadata = {
  title: "Aaron Tang — Product Designer · V5",
  description:
    "Standalone v5 portfolio direction for Aaron Tang. Product-design work across payments, crypto, and commerce.",
};

const featured = {
  name: "OKX Recurring Buy",
  tag: "Crypto · Mobile",
  desc: "It failed at launch. Three versions later, it stuck — a diagnosis, a trust redesign, and a research-led pivot that redirected the roadmap.",
  href: "/v5/project/okx",
  metrics: [
    { value: "5×", label: "volume growth, sustained" },
    { value: "+40%", label: "active plans at 6 months" },
  ],
} as const;

const projects = [
  {
    idx: "02",
    name: "PlayStation Payments",
    tag: "Payments · Web",
    desc: "Localized checkout for 300M players — installments doubled Brazil sales.",
    href: "/project/playstation",
  },
  {
    idx: "03",
    name: "Next Trucking",
    tag: "Enterprise · Logistics",
    desc: "Automation and exception design — $5 saved per container, +25% throughput.",
    href: "/project/next",
  },
  {
    idx: "04",
    name: "Walmart QC-x",
    tag: "Enterprise · Compliance",
    desc: "Bulk quote checking across 6 markets — hours of manual review to minutes.",
    href: "/project/qcx",
  },
] as const;

export default function V5HomePage() {
  return (
    <div className="v5 min-h-screen">
      <V5Theme />
      <V5Nav workHref="/v5#work" />
      <main>
        <V5HomeHero />
        <section id="work">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <V5FeaturedProjectCard project={featured} />
            <V5ProjectGrid projects={projects} />
          </div>
        </section>
        <V5AboutBlock />
      </main>
      <V5Footer />
    </div>
  );
}
