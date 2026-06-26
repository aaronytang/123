import Link from "next/link";
import { PortfolioNav, PortfolioFooter } from "@/components/portfolio/nav";
import {
  ImagePlaceholder,
  CaseMeta,
  LinearSection,
  Prose,
  MetricBand,
  SubBlock,
  CasePager,
} from "@/components/case-study";

export const metadata = {
  title: "OKX Recurring Buy — Aaron Tang",
  description:
    "Recurring Buy launched with a simple premise: help people invest consistently instead of trying to time the market.",
};

export default function OkxCaseStudy() {
  return (
    <div className="light min-h-screen bg-background font-sans text-fg-primary">
      <PortfolioNav variant="home" interactive={false} />
      <main>
        <Hero />

        <article className="mx-auto max-w-[760px] px-6 pb-8">
          <Intro />
          <CaseMeta
            rows={[
              { label: "Company", value: "OKX", href: "https://www.okx.com/" },
              { label: "Role", value: "Lead Product Designer" },
              { label: "Timeline", value: "Q1–Q3 2024" },
              { label: "Platform", value: "iOS · Android" },
            ]}
          />

          <ConversionProblem />
          <ThreeFailures />
          <AfterSetup />
          <ReduceEffort />
          <WrongThing />
          <UnderStress />
          <ChangedThinking />
          <Closing />
        </article>
      </main>

      <CasePager
        prev={{ href: "/project/playstation", title: "PlayStation Payments" }}
        next={{ href: "/project/next", title: "Next Trucking" }}
      />
      <PortfolioFooter />
    </div>
  );
}

function Hero() {
  return (
    <header className="pt-20 max-md:pt-12">
      <div className="mx-auto max-w-[760px] px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-fg-tertiary">
          <Link href="/#work" className="hover:text-fg-primary">
            Work
          </Link>
          <span className="mx-2 text-fg-quaternary" aria-hidden>
            /
          </span>
          <span className="text-fg-secondary">OKX</span>
        </nav>
        <h1 className="max-w-[24ch] text-balance text-[clamp(32px,5vw,52px)] font-medium leading-[1.08] tracking-[-0.03em]">
          Automate the repetition. Keep the judgment.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[clamp(17px,2vw,21px)] leading-snug text-fg-tertiary">
          How a 5% completion rate revealed a delegation problem, not a friction
          problem.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-[1120px] px-6 max-md:mt-8">
        <ImagePlaceholder
          label="Recurring Buy"
          note="Marquee image: the V3 price-range screen or a V1→V3 progression. Full-bleed, ~16:9."
          aspect="aspect-[16/9]"
        />
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div className="space-y-5 py-14 max-md:py-10">
      <Prose>
        {`Only about 5% of users who opened the flow created a plan. Many of the plans that were created didn't remain active for long.`}
      </Prose>
      <Prose>
        {`At first, I assumed we had a setup problem.`}
      </Prose>
      <Prose>
        {`The more I looked at the behavior, the less that explanation held up.`}
      </Prose>
      <Prose>
        {`We had built a recurring investing feature. Many users were trying to solve a narrower problem. They were happy to outsource repetition. Outsourcing judgment was a different matter entirely.`}
      </Prose>
      <Prose>
        {`That distinction ended up shaping three versions of the product.`}
      </Prose>
    </div>
  );
}

function ConversionProblem() {
  return (
    <LinearSection
      id="conversion"
      title="We thought we had a conversion problem."
      linkedHeading={false}
    >
      <Prose>
        {`The symptom looked familiar.`}
      </Prose>
      <Prose>
        {`People discovered the feature. Opened the flow. Dropped.`}
      </Prose>
      <Prose>
        {`Most product teams would call that friction: too many steps, too many decisions, too much commitment. We were close to doing exactly that.`}
      </Prose>
      <Prose>
        {`The data told a different story.`}
      </Prose>
      <Prose>
        {`When we broke the funnel apart, 5% completion stopped behaving like one problem. It was three different failures hiding behind the same number.`}
      </Prose>
      <div className="pt-2">
        <ImagePlaceholder
          label="Where people actually stopped"
          note="Funnel showing entry → setup → active plans."
        />
      </div>
    </LinearSection>
  );
}

function ThreeFailures() {
  const failures = [
    {
      title: "Users didn't trust the system yet",
      body: "A recurring plan isn't a one-time purchase. A purchase ends. A plan keeps making decisions after the user leaves. At launch we were asking people to schedule future purchases before the system had earned that. The commitment felt larger than the interface let on.",
    },
    {
      title: "Users couldn't invest the way they normally would",
      body: "Many users wanted to fund recurring purchases using ACH and stablecoins. Neither existed in V1. This wasn't a UX problem. It was an infrastructure problem. Recognizing that early kept us from trying to patch missing payment rails with better screens.",
    },
    {
      title: "Users couldn't tell whether a plan was working",
      body: "The product went quiet after setup. Users could see a plan existed. They couldn't quickly tell if it was healthy, whether the next purchase would execute, what happened if something failed, or how to adjust without starting over. When money is involved, silence reads as risk.",
    },
  ] as const;

  return (
    <LinearSection
      id="three-failures"
      title="Three failures hiding behind one metric"
      linkedHeading={false}
    >
      <div className="grid gap-10 pt-4">
        {failures.map((f) => (
          <SubBlock key={f.title} title={f.title} body={f.body} />
        ))}
      </div>
    </LinearSection>
  );
}

function AfterSetup() {
  return (
    <LinearSection
      id="after-setup"
      title="The hardest part wasn't creating a plan. It was living with one."
      linkedHeading={false}
    >
      <Prose>
        {`Creating a plan takes minutes. Owning one takes months.`}
      </Prose>
      <Prose>
        {`The real experience starts after setup: when the market moves, a payment fails, a card expires, or a user changes their mind. That's where trust actually gets tested, and where control becomes visible.`}
      </Prose>
      <Prose>
        {`Can I see what the system is doing? Can I change it without losing context? Can I tell if it's working?`}
      </Prose>
      <Prose>
        {`Those questions mattered far more than shaving another step off setup.`}
      </Prose>
    </LinearSection>
  );
}

function ReduceEffort() {
  return (
    <LinearSection
      id="reduce-effort"
      title="Reduce effort. Preserve control."
      linkedHeading={false}
    >
      <Prose>
        {`The principle for V2: remove repetitive effort, preserve judgment.`}
      </Prose>
      <Prose>
        {`Not maximum automation. The right amount of it.`}
      </Prose>
      <Prose>
        {`People wanted help executing their investing strategy. They didn't want the product replacing it.`}
      </Prose>
      <div className="grid gap-16 pt-4">
        <SubBlock
          title="Recurring buying became part of buying"
          body="We stopped treating recurrence as a separate product. Instead, it became a choice inside the buy flow people already used. Buy once. Or buy on a schedule. That's it. The decision got smaller."
          imgLabel="Frequency inside the buy flow"
          imgNote="Frequency selector inside buy flow."
        />
        <SubBlock
          title="Plans became easier to understand"
          body={`The redesigned plan view answered the first question users actually had: "Is this working?" Average entry price. Current price. Total invested. Returns. Next execution. Visible at a glance.`}
          imgLabel="Redesigned plan detail"
          imgNote="Redesigned plan detail."
        />
        <SubBlock
          title="Failures became impossible to miss"
          body="V1 let plans fail quietly. V2 didn't. Low balance warnings surfaced sooner. Repeated failures paused plans automatically. Removing a payment method previewed future impact before you confirmed anything. Recovery stopped feeling like detective work."
          imgLabel="Failure states"
          imgNote="Failure states."
        />
        <SubBlock
          title="Automation became accountable"
          body="We surfaced recurring purchases in the same places users already tracked their money: Portfolio, Activity, Transaction history. Hidden automation feels suspicious. Automation that shows up in public feels like it's working for you."
          imgLabel="Portfolio and activity integration"
          imgNote="Portfolio and activity integration."
        />
      </div>
    </LinearSection>
  );
}

function WrongThing() {
  return (
    <LinearSection
      id="wrong-thing"
      title="We almost built the wrong thing."
      linkedHeading={false}
    >
      <Prose>
        {`The obvious next step after V2 was passive yield. A competitor had it. The business story was easy: idle cash earning something while waiting for the next purchase.`}
      </Prose>
      <Prose>
        {`Before we built it, we tested the assumption underneath it. Did users actually want us making more decisions on their behalf?`}
      </Prose>
      <Prose>
        {`We surveyed active Recurring Buy users and clustered responses using an LLM. The result surprised us.`}
      </Prose>
      <Prose>
        {`Passive yield barely registered. What users kept asking for was more control over execution. One comment captured the pattern:`}
      </Prose>
      <Prose>
        {`"Let me decide the rule. Then do the repetitive part for me."`}
      </Prose>
    </LinearSection>
  );
}

function UnderStress() {
  return (
    <LinearSection
      id="under-stress"
      title="Why V3 became price-range buying"
      linkedHeading={false}
    >
      <Prose>
        {`That changed the roadmap.`}
      </Prose>
      <Prose>
        {`Instead of more automation, we gave users a better way to express intent. They defined a price range. The system executed purchases only inside it, handling all the monitoring in the background. The user kept the rule.`}
      </Prose>
      <div className="grid gap-6 pt-2 md:grid-cols-2">
        <ImagePlaceholder
          label="Survey findings"
          note="Survey findings."
          aspect="aspect-[4/3]"
        />
        <ImagePlaceholder
          label="Price-range buying"
          note="Price-range buying."
          aspect="aspect-[4/3]"
        />
      </div>
      <Prose>
        {`The result I trust most didn't show up during launch week. It showed up during the first real market correction.`}
      </Prose>
      <Prose>
        {`One-time buying dropped. Recurring buying held.`}
      </Prose>
      <Prose>
        {`That was the original promise finally showing up in production: the system staying consistent when emotions weren't.`}
      </Prose>
      <Prose>
        {`The growth numbers mattered because they confirmed that behavior wasn't a blip: 5× increase in recurring-buy volume, +40% increase in active plans, sustained across six months.`}
      </Prose>
      <div className="pt-2">
        <MetricBand
          metrics={[
            {
              value: "5×",
              label: "recurring-buy volume after V2",
            },
            {
              value: "+40%",
              label: "active plans after six months",
            },
            {
              value: "3",
              label: "versions shipped across all regions",
            },
          ]}
          methodology="Measured against the pre-V2 baseline. Volume = recurring buy purchase volume. Active plans = plans with at least one successful execution in the trailing 30 days. Sustained = held through quarter-end and re-checked at six months. Exact figures anonymized."
        />
      </div>
      <div className="pt-2">
        <ImagePlaceholder
          label="Six-month volume chart"
          note="Six-month volume chart."
        />
      </div>
    </LinearSection>
  );
}

function ChangedThinking() {
  const items = [
    {
      title: "Setup isn't the product",
      body: "Setup is the sales pitch. The relationship starts afterward. We'd invested heavily in onboarding and underestimated ownership. The redesign reversed that balance.",
    },
    {
      title: "Minimal isn't always transparent",
      body: "A sparse interface looks elegant in review. When money is moving, users want less decoration and more evidence. Visibility beats minimalism.",
    },
    {
      title: "The diagnosis was the design work",
      body: "The most important design decision wasn't visual. We thought we were solving a conversion problem. We were actually solving a delegation problem.",
    },
  ] as const;

  return (
    <LinearSection
      id="changed-thinking"
      title="What changed my thinking"
      linkedHeading={false}
    >
      <div className="grid gap-10 pt-2">
        {items.map((it) => (
          <SubBlock key={it.title} title={it.title} body={it.body} />
        ))}
      </div>
    </LinearSection>
  );
}

function Closing() {
  return (
    <div className="border-t border-border mt-14 pt-14">
      <p className="max-w-[60ch] text-balance text-[clamp(20px,2.6vw,28px)] font-medium leading-snug tracking-[-0.02em] text-fg-primary">
        People didn&apos;t want the product to invest for them. They wanted it to
        make consistency easier.
      </p>
      <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.7] text-fg-secondary">
        That distinction changed everything that followed.
      </p>
    </div>
  );
}
