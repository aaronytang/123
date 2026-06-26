// Case study — Next Trucking dispatch & operations platform.
// Thesis: less UI, more automation, exception management — each metric tied
// to the design decision that caused it.
// Items in [brackets] and figures marked * need real data before publishing.
import { PortfolioNav, PortfolioFooter } from "@/components/portfolio/nav";
import {
  ImagePlaceholder,
  Section,
  CaseFacts,
  MetricBand,
  Decision,
  CardGrid,
  NextCase,
} from "@/components/case-study";

export const metadata = {
  title: "Next Trucking — Aaron Tang",
  description:
    "Designing a freight operations platform around automation and exception management: $5 saved per container, +25% throughput.",
};

export default function NextTruckingCaseStudy() {
  return (
    <div className="light min-h-screen bg-background font-sans text-fg-primary">
      <PortfolioNav />
      <main className="mx-auto max-w-[1024px] px-6">
        <Hero />
        <MetricBand
          metrics={[
            {
              value: "$5",
              label: "loss reduction per container from earlier exception catches",
            },
            {
              value: "+25%",
              label: "dispatch throughput per operator after automation",
            },
            {
              value: "1",
              label: "design system unified across all web and mobile products",
            },
          ]}
          methodology="Loss reduction = avoided demurrage and detention fees per container, measured against the pre-exception-queue baseline. Throughput = shipments handled per operator per shift. [Confirm measurement windows with ops reporting before publishing.]"
        />
        <Problem />
        <Thesis />
        <Decisions />
        <DesignSystem />
        <Outcome />
        <Reflection />
      </main>
      <NextCase
        href="/project/playstation"
        title="PlayStation Payments"
        sub="Localized checkout · installments in Brazil, iDeal in the Netherlands"
      />
      <PortfolioFooter />
    </div>
  );
}

function Hero() {
  const facts = [
    ["Role", "Lead Product Designer — core operations product"],
    ["Team", "[Fill: e.g. 2 designers · 2 PM · platform engineering]"],
    ["Duration", "Oct 2021 – [fill real end date]"],
    ["Platform", "Web · internal ops + carrier-facing"],
  ] as const;
  return (
    <section className="pb-16 pt-24 max-md:pb-12 max-md:pt-14">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
        Next Trucking · Operations Platform
      </p>
      <h1 className="max-w-[26ch] text-balance text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.15] tracking-[-0.03em]">
        The best dispatch screen is the one nobody opens
      </h1>
      <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-fg-tertiary">
        I led design for Next{"’"}s dispatching and operations system in the
        drayage business — moving containers between ports and warehouses on
        margins thin enough that a single idle day erases the profit. The
        counterintuitive part of the job: the company was automating, so my
        work wasn{"’"}t making operators faster at using screens. It was
        removing the screens, and designing what remains when only the hard
        cases need a human.
      </p>
      <CaseFacts facts={facts} />
      <div className="mt-12">
        <ImagePlaceholder
          label="Hero — the exception queue"
          note="The exception-management view: a prioritized queue of shipments needing human attention, each with risk reason (demurrage clock, missed appointment, doc mismatch), cost-at-risk, and a primary action. This is the product’s center of gravity — show it, not a dashboard."
          aspect="aspect-[21/9]"
        />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section title="Every container has a meter running">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          Drayage punishes slowness with fees. A container that sits at the
          port past its free days accrues demurrage; a chassis held too long
          accrues detention; a missed warehouse appointment cascades into
          both. Operators were managing this with spreadsheets, tribal
          knowledge, and a dispatch tool that treated every shipment as
          equally urgent — which in practice meant the expensive problems
          surfaced when the invoice arrived, weeks later.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          Meanwhile the engineering org was automating matching and
          dispatch. That created a real design question with no precedent in
          the existing product: if the system assigns most loads itself,
          what is the operator{"’"}s screen even for? Making them faster at
          a job that was disappearing would have been wasted work.
        </p>
      </div>
    </Section>
  );
}

function Thesis() {
  return (
    <Section title="Design for the exceptions, automate the rest">
      <p className="max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
        The thesis I aligned the team around: in an automating operation,
        design{"’"}s value moves from task efficiency to exception
        management. The product should do nothing visible when things go
        well, and become extremely good at three moments — detecting that a
        shipment is drifting toward a fee, explaining why, and making the
        human intervention fast and auditable. Fewer screens, but the
        remaining ones carry money.
      </p>
      <div className="mt-10">
        <ImagePlaceholder
          label="Before/after — task flow vs. exception flow"
          note="Flow diagram pair: the old model (operator touches every shipment through list → detail → assign → confirm) versus the new model (system handles the happy path; operator sees only flagged exceptions). Counts of human touchpoints annotated on each."
        />
      </div>
    </Section>
  );
}

function Decisions() {
  return (
    <Section title="Three calls that carried the numbers">
      <div className="grid gap-16">
        <Decision
          n="1"
          title="A prioritized exception queue, ranked by cost at risk"
          body="We considered the classic ops dashboard — charts, statuses, a map. We killed it: dashboards make people feel informed while the demurrage clock runs. We shipped a queue instead, ranked by dollars at risk and time to fee, each row carrying its reason and one primary action. This is what the $5-per-container figure traces to — fees got caught while they were still avoidable, not reported after they landed."
          imgLabel="Exception queue, ranked by cost"
          imgNote="The queue view with rows showing: shipment ID, risk reason, hours until fee starts, dollars at risk, and the single recommended action. Sorting by cost-at-risk should be visibly the default."
        />
        <Decision
          n="2"
          title="Automation got an audit trail instead of a control panel"
          body="Ops leads initially wanted approval steps on automated dispatch — understandable, and we said no. Approval queues would have rebuilt the bottleneck automation just removed. The compromise that settled the disagreement was data: we ran both paths and measured. Auto-dispatch with a full audit trail (what the system decided, when, on what basis) matched approval-flow quality while cutting handling steps — that’s the +25% throughput. Trust came from legibility, not from a human rubber stamp."
          imgLabel="Audit trail on an automated dispatch"
          imgNote="Shipment detail with the automation history: matched carrier, timestamp, decision basis, and the override affordance. Shows that a human can always see and reverse what the system did."
        />
        <Decision
          n="3"
          title="Bulk actions replaced per-shipment ceremony"
          body="The remaining human work clustered — the same fix applied across twenty shipments hit by one vessel delay. We rebuilt the table layer around selection and bulk mutation with preview-before-apply, because confidence at the moment of a 20-row change is what makes operators actually use it instead of falling back to one-at-a-time."
          imgLabel="Bulk exception handling"
          imgNote="Table with multi-select active, bulk action bar, and the preview state showing exactly what will change across selected shipments before confirm."
        />
      </div>
    </Section>
  );
}

function DesignSystem() {
  return (
    <Section title="One design language, because speed compounds">
      <p className="max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
        None of this ships fast on a fractured UI foundation. I initiated
        and led the unified design system adopted across Next{"’"}s web and
        mobile products — tables, forms, status grammar, and the dense data
        components ops tools live on — built with engineering as a shared
        library rather than a Figma artifact. The payoff wasn{"’"}t
        consistency for its own sake; it{"’"}s that the exception queue and
        bulk tooling above went from design to production in weeks, on
        components that already existed.
      </p>
      <div className="mt-10">
        <ImagePlaceholder
          label="Design system — the ops table components"
          note="A spread of the system’s data-dense components: table variants, status badges, filter patterns, bulk-action bar. Show the same components recurring across two different product screens to make the reuse point."
        />
      </div>
    </Section>
  );
}

function Outcome() {
  return (
    <Section title="Less interface, more margin">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          The exception queue turned fee avoidance from an invoice-time
          discovery into a daily operating practice — about $5 saved per
          container against the prior baseline{"*"}, which in container
          volume terms is real money on drayage margins. Throughput per
          operator rose roughly 25% as automated dispatch with audit trails
          replaced per-shipment handling.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          The quieter outcome: the {"“"}less UI{"”"} thesis became how the
          product org evaluated new work. Feature proposals started getting
          asked {"“"}does this need a screen, or a rule?{"”"} — a question
          that didn{"’"}t exist before. That reframing outlived any single
          release I shipped there.
        </p>
      </div>
      <div className="mt-10">
        <ImagePlaceholder
          label="Outcome — fees caught before accrual"
          note="Chart: demurrage/detention fees per container trending down after the exception queue launch, annotated with the launch date. Alternatively, exceptions resolved before fee start as a rising percentage."
        />
      </div>
    </Section>
  );
}

function Reflection() {
  const items = [
    {
      title: "Removing UI is a design deliverable",
      body: "The strongest work I did here doesn’t screenshot well — it’s the screens that no longer exist. I had to learn to document absence as rigorously as I’d document a redesign, or the work was invisible in reviews.",
    },
    {
      title: "Operators don’t resist automation, they resist opacity",
      body: "Every fight about auto-dispatch was actually about legibility. Once the system showed its reasoning and offered an override, the approval-step debate evaporated. I now reach for audit trails before permission gates by default.",
    },
    {
      title: "Win the argument with a measured pilot, not a deck",
      body: "The approval-flow disagreement with ops leadership could have burned a quarter in meetings. Running both paths and letting the numbers settle it was faster and left no resentment. I’ve reused that move on every contested decision since — including at OKX.",
    },
  ] as const;
  return (
    <Section title="What I took with me">
      <CardGrid items={items} />
    </Section>
  );
}
