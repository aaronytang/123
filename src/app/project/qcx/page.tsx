// Case study — Walmart Global Sourcing, QC-x.
// Framed as compliance and exception-management tooling (enterprise-grade,
// multi-stakeholder) per positioning guideline.
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
  title: "Walmart QC-x — Aaron Tang",
  description:
    "Compliance and exception-management tooling for Walmart Global Sourcing: bulk quote checking across six international markets.",
};

export default function QcxCaseStudy() {
  return (
    <div className="light min-h-screen bg-background font-sans text-fg-primary">
      <PortfolioNav />
      <main className="mx-auto max-w-[1024px] px-6">
        <Hero />
        <MetricBand
          metrics={[
            {
              value: "6",
              label: "international sourcing markets running on one ruleset tool",
            },
            {
              value: "[X]h → [Y]m",
              label: "per line review: manual checking to automated report",
            },
            {
              value: "100%",
              label: "of checks documented and repeatable, replacing ad-hoc review",
            },
          ]}
          methodology="[Fill before publishing: how review time was measured (sample of line reviews before/after), what counts as a check, and the audit/documentation claim verified with the sourcing compliance team. Directional placeholders until then.]"
        />
        <Problem />
        <Constraints />
        <Decisions />
        <Outcome />
        <Reflection />
      </main>
      <NextCase
        href="/project/okx"
        title="OKX Recurring Buy"
        sub="Flagship study · it failed at launch, three versions later it stuck"
      />
      <PortfolioFooter />
    </div>
  );
}

function Hero() {
  const facts = [
    ["Role", "Lead Product Designer — QC-x, end to end"],
    ["Team", "[Fill: e.g. 1 designer · 1 PM · 4 engineers]"],
    ["Duration", "2019 – 2021 · within Walmart Global Sourcing"],
    ["Platform", "Web · internal enterprise tooling"],
  ] as const;
  return (
    <section className="pb-16 pt-24 max-md:pb-12 max-md:pt-14">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
        Walmart Global Sourcing · QC-x
      </p>
      <h1 className="max-w-[26ch] text-balance text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.15] tracking-[-0.03em]">
        Checking thousands of supplier quotes without reading them
      </h1>
      <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-fg-tertiary">
        Walmart{"’"}s sourcing teams validated supplier quotes and line
        reviews by hand — analysts eyeballing spreadsheets for pricing
        errors, missing certifications, and policy violations across six
        international markets. I led design for QC-x, the tool that turned
        that manual review into rule-based, scheduled, auditable checking.
        Less a screen redesign than a workflow redesign: compliance and
        exception management for people whose mistakes ship in containers.
      </p>
      <CaseFacts facts={facts} />
      <div className="mt-12">
        <ImagePlaceholder
          label="Hero — ruleset builder and violation report"
          note="Two frames: the ruleset creation interface (conditions composed in plain business language) and a generated report with flagged violations grouped by severity. Together they should read as “write the rule once, catch every violation after.”"
          aspect="aspect-[21/9]"
        />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section title="Manual review doesn’t scale, and it doesn’t defend itself">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          A line review can run thousands of rows: unit costs, freight
          terms, certification fields, packaging specs. Analysts checked
          them in spreadsheets, each with private heuristics about what to
          scan first. The volume guaranteed misses, and every miss had a
          shape — a pricing error that survives into a purchase order, a
          missing cert discovered at customs.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          The deeper problem was accountability. When a check lives in
          someone{"’"}s head, you can{"’"}t prove it happened. Sourcing
          operates under audit, and {"“"}our best analyst usually catches
          that{"”"} is not an answer a compliance review accepts. The tool
          had to make checking faster — but just as importantly, it had to
          make checking demonstrable.
        </p>
      </div>
    </Section>
  );
}

function Constraints() {
  const items = [
    {
      title: "Three kinds of users, one tool",
      body: "Merchants submitting data, sourcing analysts running checks, and managers answering for the results. Each needed a different slice — submission clarity, exception speed, audit reporting — without the tool fragmenting into three products.",
    },
    {
      title: "Rules written by non-engineers",
      body: "The people who knew the policies were analysts, not developers. If creating a rule required a ticket to engineering, the tool would die — rulesets had to be composable in business language by the people who own the policy.",
    },
    {
      title: "Every department’s data looked different",
      body: "Six markets, dozens of departments, each with its own line-review format. The checking engine needed structured input from a world of unstructured spreadsheets — the central tension the whole design hung on.",
    },
  ] as const;
  return (
    <Section title="What made it hard">
      <CardGrid items={items} />
    </Section>
  );
}

function Decisions() {
  return (
    <Section title="The decisions that made it stick">
      <div className="grid gap-16">
        <Decision
          n="1"
          title="Fixed templates first — flexibility was the enemy of v1"
          body="We considered accepting each department’s native spreadsheet and parsing it — maximally friendly, and we killed it: the variance was unparseable, and silent mis-parsing in a compliance tool is worse than no tool. We shipped fixed downloadable templates instead, accepting real onboarding friction and grumbling. Once checking proved its value, I designed template customization in v2 — letting departments adapt fields within constraints the engine could still validate. Sequencing the flexibility, rather than promising it upfront, is why the engine stayed trustworthy."
          imgLabel="Template flow — fixed v1, customizable v2"
          imgNote="The template download/upload step in v1, then the v2 customization screen where a department modifies fields within validated constraints. Annotate what stayed locked and why."
        />
        <Decision
          n="2"
          title="Rules read like policy, not like code"
          body="The ruleset builder composes conditions the way an analyst states them — field, comparison, threshold, severity — so the person accountable for a policy is the person who encodes it. No engineering ticket, no translation loss, and when a regulation changes, the rule changes the same day."
          imgLabel="Ruleset builder"
          imgNote="Rule creation UI showing a condition being composed in plain language with severity assignment, plus the library of existing rules with owners and last-modified dates — the audit angle should be visible."
        />
        <Decision
          n="3"
          title="Reports became scheduled infrastructure, not requests"
          body="V1 made checking possible; the rhythm of sourcing made it repetitive. I designed scheduled reports against previously uploaded files — checks that run on cadence and land in inboxes with violations grouped by severity. The exception-management pattern again: the system does the sweep, humans handle only what it flags."
          imgLabel="Scheduled reporting"
          imgNote="Report scheduling setup (cadence, ruleset, recipients) and the delivered report view with violations grouped by severity and links to the offending rows."
        />
      </div>
    </Section>
  );
}

function Outcome() {
  return (
    <Section title="Checking became a system property, not a person’s virtue">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          Review went from hours of spreadsheet scanning per line review to
          minutes of exception handling{"*"}, and — the part the compliance
          organization cared about most — every check became documented and
          repeatable. {"“"}Did we verify this?{"”"} changed from an
          interview question into a query.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          QC-x also outgrew its origin: the ruleset-plus-exceptions pattern
          I designed became the reference for how other Global Sourcing
          tools approached validation, and the v2 template customization
          work pointed toward retiring the download-a-template step
          entirely. It{"’"}s the project where I learned the shape of
          enterprise trust — boring, auditable, and earned in v1 before you
          ask users to absorb flexibility in v2.
        </p>
      </div>
      <div className="mt-10">
        <ImagePlaceholder
          label="Outcome — review time and catch rate"
          note="Before/after comparison: time per line review (manual vs. QC-x) and violations caught per review cycle. [Use real measured figures — directional bars are fine if exact numbers are confidential.]"
        />
      </div>
    </Section>
  );
}

function Reflection() {
  const items = [
    {
      title: "In compliance tools, false confidence is the worst failure",
      body: "A missed check is bad; a wrongly passed check is worse, because it carries the system’s endorsement. That asymmetry drove the fixed-template decision and most severity design — when in doubt, the tool flags rather than passes.",
    },
    {
      title: "Sequence flexibility, don’t promise it",
      body: "Shipping the rigid version first felt user-hostile and was right. Users forgave v1 friction once the value was proven, and v2 customization landed on an engine that had earned the trust to absorb it.",
    },
    {
      title: "The audit trail is a user need, not a checkbox",
      body: "I went in thinking documentation requirements were bureaucratic overhead to minimize. The managers taught me otherwise — provability was the product for them. Designing for the person who answers the auditor changed how I weigh invisible requirements everywhere.",
    },
  ] as const;
  return (
    <Section title="What this project taught me">
      <CardGrid items={items} />
    </Section>
  );
}
