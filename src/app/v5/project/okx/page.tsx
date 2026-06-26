import {
  V5CaseHero,
  V5CasePager,
  V5CaseSection,
  V5MediaFrame,
  V5MetaGrid,
  V5MetricBand,
  V5Prose,
  V5SubBlock,
} from "@/components/v5/case-study";
import { V5Footer, V5Nav } from "@/components/v5/nav";
import { V5Theme } from "@/components/v5/theme";

export const metadata = {
  title: "OKX Recurring Buy — Aaron Tang · V5",
  description:
    "Standalone v5 OKX case study for Aaron Tang. Same content, redesigned layout and system.",
};

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

const effortBlocks = [
  {
    title: "Recurring buying became part of buying",
    body: "We stopped treating recurrence as a separate product. Instead, it became a choice inside the buy flow people already used. Buy once. Or buy on a schedule. That's it. The decision got smaller.",
    imgLabel: "Frequency inside the buy flow",
    imgNote: "Frequency selector inside buy flow.",
  },
  {
    title: "Plans became easier to understand",
    body: `The redesigned plan view answered the first question users actually had: "Is this working?" Average entry price. Current price. Total invested. Returns. Next execution. Visible at a glance.`,
    imgLabel: "Redesigned plan detail",
    imgNote: "Redesigned plan detail.",
  },
  {
    title: "Failures became impossible to miss",
    body: "V1 let plans fail quietly. V2 didn't. Low balance warnings surfaced sooner. Repeated failures paused plans automatically. Removing a payment method previewed future impact before you confirmed anything. Recovery stopped feeling like detective work.",
    imgLabel: "Failure states",
    imgNote: "Failure states.",
  },
  {
    title: "Automation became accountable",
    body: "We surfaced recurring purchases in the same places users already tracked their money: Portfolio, Activity, Transaction history. Hidden automation feels suspicious. Automation that shows up in public feels like it's working for you.",
    imgLabel: "Portfolio and activity integration",
    imgNote: "Portfolio and activity integration.",
  },
] as const;

const reflectionItems = [
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

export default function V5OkxPage() {
  return (
    <div className="v5 min-h-screen">
      <V5Theme />
      <V5Nav homeHref="/v5" workHref="/v5#work" aboutHref="/v5#about" />
      <main>
        <V5CaseHero
          title="Automate the repetition. Keep the judgment."
          subtitle="How a 5% completion rate revealed a delegation problem, not a friction problem."
        />

        <div className="mx-auto max-w-[1120px] px-6 py-10 md:px-10 md:py-14">
          <V5MediaFrame
            label="Recurring Buy"
            note="Marquee image: the V3 price-range screen or a V1→V3 progression. Full-bleed, ~16:9."
          />
        </div>

        <article className="mx-auto max-w-[760px] px-6 pb-8 md:px-10">
          <Intro />
          <V5MetaGrid
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
      <V5CasePager />
      <V5Footer />
    </div>
  );
}

function Intro() {
  return (
    <div className="space-y-5 py-12 md:py-14">
      <V5Prose>
        Only about 5% of users who opened the flow created a plan. Many of the
        plans that were created didn&apos;t remain active for long.
      </V5Prose>
      <V5Prose>At first, I assumed we had a setup problem.</V5Prose>
      <V5Prose>
        The more I looked at the behavior, the less that explanation held up.
      </V5Prose>
      <V5Prose>
        We had built a recurring investing feature. Many users were trying to
        solve a narrower problem. They were happy to outsource repetition.
        Outsourcing judgment was a different matter entirely.
      </V5Prose>
      <V5Prose>
        That distinction ended up shaping three versions of the product.
      </V5Prose>
    </div>
  );
}

function ConversionProblem() {
  return (
    <V5CaseSection title="We thought we had a conversion problem.">
      <div className="space-y-5">
        <V5Prose>The symptom looked familiar.</V5Prose>
        <V5Prose>People discovered the feature. Opened the flow. Dropped.</V5Prose>
        <V5Prose>
          Most product teams would call that friction: too many steps, too many
          decisions, too much commitment. We were close to doing exactly that.
        </V5Prose>
        <V5Prose>The data told a different story.</V5Prose>
        <V5Prose>
          When we broke the funnel apart, 5% completion stopped behaving like
          one problem. It was three different failures hiding behind the same
          number.
        </V5Prose>
      </div>
      <div className="mt-8">
        <V5MediaFrame
          label="Where people actually stopped"
          note="Funnel showing entry → setup → active plans."
        />
      </div>
    </V5CaseSection>
  );
}

function ThreeFailures() {
  return (
    <V5CaseSection title="Three failures hiding behind one metric">
      <div className="grid gap-10">
        {failures.map((failure) => (
          <V5SubBlock
            key={failure.title}
            title={failure.title}
            body={failure.body}
          />
        ))}
      </div>
    </V5CaseSection>
  );
}

function AfterSetup() {
  return (
    <V5CaseSection title="The hardest part wasn't creating a plan. It was living with one.">
      <div className="space-y-5">
        <V5Prose>Creating a plan takes minutes. Owning one takes months.</V5Prose>
        <V5Prose>
          The real experience starts after setup: when the market moves, a
          payment fails, a card expires, or a user changes their mind.
          That&apos;s where trust actually gets tested, and where control
          becomes visible.
        </V5Prose>
        <V5Prose>
          Can I see what the system is doing? Can I change it without losing
          context? Can I tell if it&apos;s working?
        </V5Prose>
        <V5Prose>
          Those questions mattered far more than shaving another step off setup.
        </V5Prose>
      </div>
    </V5CaseSection>
  );
}

function ReduceEffort() {
  return (
    <V5CaseSection title="Reduce effort. Preserve control.">
      <div className="space-y-5">
        <V5Prose>
          The principle for V2: remove repetitive effort, preserve judgment.
        </V5Prose>
        <V5Prose>Not maximum automation. The right amount of it.</V5Prose>
        <V5Prose>
          People wanted help executing their investing strategy. They
          didn&apos;t want the product replacing it.
        </V5Prose>
      </div>
      <div className="mt-10 grid gap-14">
        {effortBlocks.map((block) => (
          <V5SubBlock
            key={block.title}
            title={block.title}
            body={block.body}
            imgLabel={block.imgLabel}
            imgNote={block.imgNote}
          />
        ))}
      </div>
    </V5CaseSection>
  );
}

function WrongThing() {
  return (
    <V5CaseSection title="We almost built the wrong thing.">
      <div className="space-y-5">
        <V5Prose>
          The obvious next step after V2 was passive yield. A competitor had it.
          The business story was easy: idle cash earning something while waiting
          for the next purchase.
        </V5Prose>
        <V5Prose>
          Before we built it, we tested the assumption underneath it. Did users
          actually want us making more decisions on their behalf?
        </V5Prose>
        <V5Prose>
          We surveyed active Recurring Buy users and clustered responses using
          an LLM. The result surprised us.
        </V5Prose>
        <V5Prose>
          Passive yield barely registered. What users kept asking for was more
          control over execution. One comment captured the pattern:
        </V5Prose>
        <V5Prose>
          &quot;Let me decide the rule. Then do the repetitive part for me.&quot;
        </V5Prose>
      </div>
    </V5CaseSection>
  );
}

function UnderStress() {
  return (
    <V5CaseSection title="Why V3 became price-range buying">
      <div className="space-y-5">
        <V5Prose>That changed the roadmap.</V5Prose>
        <V5Prose>
          Instead of more automation, we gave users a better way to express
          intent. They defined a price range. The system executed purchases only
          inside it, handling all the monitoring in the background. The user
          kept the rule.
        </V5Prose>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <V5MediaFrame
          label="Survey findings"
          note="Survey findings."
          aspect="aspect-[4/3]"
        />
        <V5MediaFrame
          label="Price-range buying"
          note="Price-range buying."
          aspect="aspect-[4/3]"
        />
      </div>
      <div className="mt-10 space-y-5">
        <V5Prose>
          The result I trust most didn&apos;t show up during launch week. It
          showed up during the first real market correction.
        </V5Prose>
        <V5Prose>One-time buying dropped. Recurring buying held.</V5Prose>
        <V5Prose>
          That was the original promise finally showing up in production: the
          system staying consistent when emotions weren&apos;t.
        </V5Prose>
        <V5Prose>
          The growth numbers mattered because they confirmed that behavior
          wasn&apos;t a blip: 5× increase in recurring-buy volume, +40% increase
          in active plans, sustained across six months.
        </V5Prose>
      </div>
      <div className="mt-8">
        <V5MetricBand
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
      <div className="mt-8">
        <V5MediaFrame
          label="Six-month volume chart"
          note="Six-month volume chart."
        />
      </div>
    </V5CaseSection>
  );
}

function ChangedThinking() {
  return (
    <V5CaseSection title="What changed my thinking">
      <div className="grid gap-10">
        {reflectionItems.map((item) => (
          <V5SubBlock key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </V5CaseSection>
  );
}

function Closing() {
  return (
    <div className="mt-14 border-t v5-rule pt-14">
      <p className="max-w-[60ch] text-balance text-[clamp(20px,2.6vw,28px)] font-semibold leading-snug tracking-[-0.04em]">
        People didn&apos;t want the product to invest for them. They wanted it
        to make consistency easier.
      </p>
      <p className="v5-body mt-6 max-w-[60ch]">
        That distinction changed everything that followed.
      </p>
    </div>
  );
}
