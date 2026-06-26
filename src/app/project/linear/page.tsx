// Best-effort rebuild of linear.app's marketing homepage.
//
// Structure, copy, navigation, and section headings were pulled from the live
// site (`curl https://linear.app/`). Design tokens come from the real compiled
// CSS. Visuals (charts, issue lists, terminals) are hand-built approximations.
// No screenshots, logos, video, or proprietary product UI are copied.
import Link from "next/link";
import { PortfolioNav, PortfolioFooter } from "@/components/portfolio/nav";
import { IssueMock } from "@/components/issue-mock";

export default function LinearProjectPage() {
  return (
    <div className="light min-h-screen bg-background text-fg-secondary">
      <PortfolioNav />
      <main className="flex-1">
        <Hero />
        <StatementSection />
        <SectionIntake />
        <SectionPlan />
        <SectionBuild />
        <SectionDiffs />
        <SectionMonitor />
        <CustomerStripe />
        <FinalCta />
      </main>
      <PortfolioFooter />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(94,106,210,0.10)_0%,rgba(94,106,210,0.04)_40%,transparent_70%)]"
      />
      <div className="mx-auto flex max-w-[1024px] flex-col px-6 pb-20 pt-24 max-md:pt-14">
        <span className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-bg-level-1 py-[5px] pl-2.5 pr-3 text-xs text-fg-secondary">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[#3fb950] shadow-[inset_0_0_0_2px_rgba(63,185,80,0.25)]"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-brand-link">
            Case study
          </span>
          <span>Linear {"\u00b7"} Product system</span>
        </span>

        <h1 className="mb-6 max-w-[24ch] text-balance text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.15] tracking-[-0.03em] text-fg-primary">
          The product development system for teams and agents
        </h1>

        <p className="mb-9 max-w-[560px] text-[15px] leading-relaxed text-fg-tertiary">
          Purpose-built for planning and building products. Designed for the AI era.
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href="mailto:aarontang.design@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
          >
            Get in touch
          </a>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-fg-primary transition-colors hover:border-[#2e3138] hover:bg-bg-level-1"
          >
            More work{" "}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              {"\u2192"}
            </span>
          </Link>
        </div>

        <div className="relative mt-10 w-full">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-3xl bg-gradient-to-b from-[rgba(94,106,210,0.18)] to-transparent blur-2xl"
          />
          <IssueMock />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Statement
// ---------------------------------------------------------------------------
function StatementSection() {
  const pillars = [
    {
      fig: "FIG 0.2",
      title: "Built for purpose",
      body: "Linear is shaped by the practices and principles of world-class product teams.",
    },
    {
      fig: "FIG 0.3",
      title: "Powered by AI agents",
      body: "Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.",
    },
    {
      fig: "FIG 0.4",
      title: "Designed for speed",
      body: "Reduces noise and restores momentum to help teams ship with high velocity and focus.",
    },
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1024px] px-6 py-24 max-md:py-16">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
          FIG 0.1
        </p>
        <h2 className="max-w-3xl text-balance text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-[-0.03em] text-fg-primary">
          A new species of product tool.{" "}
          <span className="text-fg-tertiary">
            Purpose-built for modern teams with AI workflows at its core, Linear
            sets a new standard for planning and building products.
          </span>
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.fig} className="flex flex-col gap-3 border-t border-border pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
                {p.fig}
              </span>
              <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="text-sm text-fg-tertiary">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Numbered section shell
// ---------------------------------------------------------------------------
function NumberedSection({
  num,
  eyebrow,
  title,
  headline,
  body,
  subnav,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  headline: string;
  body: string;
  subnav: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1024px] px-6 py-24 max-md:py-16">
        <div className="mb-12 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
            <span>{num}</span>
            <span className="inline-block h-px w-12 bg-border" aria-hidden />
            <span>{eyebrow}</span>
            <span aria-hidden>{"\u2192"}</span>
          </div>
          <h2 className="max-w-[20ch] text-balance text-[clamp(32px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-fg-primary">
            {title}
          </h2>
          <h3 className="max-w-2xl text-lg text-fg-secondary">{headline}</h3>
          <p className="max-w-2xl text-sm text-fg-tertiary">{body}</p>
        </div>
        {children}
        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
          {subnav.map((item, i) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-fg-primary"
            >
              <span className="text-fg-quaternary">
                {num.split(".")[0]}.{i + 1}
              </span>
              <span>{item}</span>
              <span className="text-fg-quaternary">+</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 1.0 Intake
// ---------------------------------------------------------------------------
function SectionIntake() {
  return (
    <NumberedSection
      num="1.0"
      eyebrow="Intake"
      title="Make product operations self-driving"
      headline="Route customer feedback straight into the backlog."
      body="Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team."
      subnav={["Linear Agent", "Triage", "Customer Requests", "Linear Asks"]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <BacklogColumn
          heading="Backlog"
          count={8}
          items={[
            { id: "ENG-2085", title: "Reduce UI flicker during autonomy start" },
            { id: "ENG-2094", title: "Add buffering for autonomy event streams" },
            { id: "ENG-2092", title: "Reduce startup delay caused by vehicle sync" },
            { id: "ENG-2200", title: "Fix delayed route updates during rerouting" },
          ]}
        />
        <BacklogColumn
          heading="Todo"
          count={71}
          items={[
            { id: "ENG-926",  title: "Remove UI inconsistencies", label: "Bug" },
            { id: "ENG-2088", title: "TypeError: Cannot read properties", label: "Bug" },
            { id: "ENG-924",  title: "Upgrade to Claude Opus 4.5", label: "AI" },
            { id: "ENG-1882", title: "Optimize load times", label: "Performance" },
          ]}
        />
        <BacklogColumn
          heading="In Progress"
          count={3}
          items={[
            { id: "ENG-1487", title: "Remove contentData from GraphQL API" },
            { id: "MKT-1028", title: "Launch page assets", label: "Design" },
            { id: "ENG-2187", title: "Prevent duplicate ride requests on poor network", label: "Bug" },
          ]}
        />
      </div>
      <FeedbackThread />
    </NumberedSection>
  );
}

function BacklogColumn({
  heading,
  count,
  items,
}: {
  heading: string;
  count: number;
  items: { id: string; title: string; label?: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
      <header className="flex items-center justify-between border-b border-border px-4 py-2.5 text-xs">
        <span className="font-medium text-fg-primary">{heading}</span>
        <span className="font-mono text-fg-tertiary">{count}</span>
      </header>
      <ul className="divide-y divide-border">
        {items.map((it) => (
          <li key={it.id} className="flex flex-col gap-1 px-4 py-2.5">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-fg-quaternary">{it.id}</span>
              <span className="truncate text-xs text-fg-primary">{it.title}</span>
            </div>
            {it.label ? (
              <span className="w-fit rounded-sm border border-border px-1.5 py-[1px] font-mono text-[10px] text-fg-tertiary">
                {it.label}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeedbackThread() {
  const msgs = [
    { who: "didier",  text: "Has anyone been looking into the iOS startup performance issues?" },
    { who: "lena",    text: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?" },
    { who: "didier",  text: "Yeah, we're still blocking initial render on a full vehicle_state sync every time..." },
    { who: "andreas", text: "Feels like we could render sooner and load the rest in the background. Worth tracking startup timing so we know how often this happens." },
  ];
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
      <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
        <span className="h-2 w-2 rounded-sm bg-accent-pink" aria-hidden />
        <span className="font-medium">Thread in #feedback</span>
        <span className="ml-auto font-mono text-fg-quaternary">Slack</span>
      </header>
      <ul className="divide-y divide-border text-sm">
        {msgs.map((m, i) => (
          <li key={i} className="flex items-start gap-3 px-4 py-2.5">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[--bg-level-2] font-mono text-[10px] text-fg-secondary">
              {m.who.slice(0, 2).toUpperCase()}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{m.who}</span>
              <span className="text-fg-secondary">{m.text}</span>
            </div>
          </li>
        ))}
      </ul>
      <footer className="border-t border-border bg-[--bg-level-2] px-4 py-3 font-mono text-xs text-fg-tertiary">
        <span className="text-brand-link">@Linear</span> create issues, urgent issues, and assign to me
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2.0 Plan
// ---------------------------------------------------------------------------
function SectionPlan() {
  const months = ["FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"];
  const projects: { name: string; span: [number, number]; color: string }[] = [
    { name: "UI Refresh",      span: [0, 2], color: "var(--brand-link)" },
    { name: "Core screens",    span: [1, 3], color: "var(--accent-orange)" },
    { name: "Polish",          span: [3, 4], color: "var(--accent-pink)" },
    { name: "Split fares",     span: [2, 5], color: "var(--accent-yellow)" },
    { name: "Autonomy status", span: [4, 7], color: "var(--accent-green)" },
  ];
  const initiatives = [
    { name: "Core Product",               count: 99 },
    { name: "Infra stability",            count: 28 },
    { name: "Autonomous systems",         count: 16 },
    { name: "Mobile apps",                count: 8  },
    { name: "APAC Expansion",             count: 21 },
    { name: "Japan Launch",               count: 12 },
    { name: "Customer-driven priorities", count: 9  },
  ];
  return (
    <NumberedSection
      num="2.0"
      eyebrow="Plan"
      title="Define the product direction"
      headline="From idea to launch, aligned across teams."
      body="Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs."
      subnav={["Projects", "Documents", "Initiatives", "Visual planning"]}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
        <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
          <span className="font-medium">Roadmap</span>
          <span className="font-mono text-fg-quaternary">Cycle 144</span>
          <span className="ml-auto font-mono text-fg-quaternary">5 projects</span>
        </header>

        <div className="grid grid-cols-8 border-b border-border font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
          {months.map((m) => (
            <span key={m} className="border-r border-border px-3 py-1.5 last:border-r-0">
              {m}
            </span>
          ))}
        </div>

        <ul className="divide-y divide-border">
          {projects.map((p) => (
            <li key={p.name} className="relative grid grid-cols-8 items-center">
              <span
                className="absolute inset-y-2 truncate rounded-md px-3 py-1 text-xs text-[rgba(255,255,255,0.92)]"
                style={{
                  background: p.color,
                  left: `calc(${(p.span[0] / 8) * 100}% + 8px)`,
                  width: `calc(${((p.span[1] - p.span[0] + 1) / 8) * 100}% - 16px)`,
                }}
              >
                {p.name}
              </span>
              {months.map((m) => (
                <span key={m} className="h-10 border-r border-border/60 last:border-r-0" />
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
        <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
          <span className="font-medium">Initiatives</span>
          <span className="ml-auto font-mono text-fg-quaternary">{initiatives.length}</span>
        </header>
        <ul className="divide-y divide-border text-sm">
          {initiatives.map((it) => (
            <li key={it.name} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-fg-primary">{it.name}</span>
              <span className="font-mono text-xs text-fg-tertiary">{it.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </NumberedSection>
  );
}

// ---------------------------------------------------------------------------
// 3.0 Build
// ---------------------------------------------------------------------------
function SectionBuild() {
  const agents = [
    { name: "Codex",          role: "Agent" },
    { name: "Steven",         role: "Teammate" },
    { name: "Ema",            role: "Agent" },
    { name: "GitHub Copilot", role: "Agent" },
    { name: "Cursor",         role: "Agent" },
    { name: "Meg",            role: "Teammate" },
  ];
  return (
    <NumberedSection
      num="3.0"
      eyebrow="Build"
      title="Move work forward across teams and agents"
      headline="Delegate entire issues end-to-end."
      body="Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end."
      subnav={["Issues", "Agents", "Linear MCP", "Git automations", "Cycles"]}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-border bg-[#0a0b0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
          <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[--bg-level-3] font-mono text-[9px]">
              C
            </span>
            <span className="font-medium">Codex</span>
            <span className="font-mono text-fg-quaternary">On it!</span>
          </header>
          <pre className="p-4 font-mono text-[11px] leading-relaxed text-fg-secondary">
{`> Received your request.
> Kicked off a task in kinetic/kinetic-iOS environment.
> Searching for root AGENTS file

kinetic-iOS$ rg --files -g 'AGENTS.md' AGENTS.md
AGENTS.md

> Locating initialization logic for vehicle_state
> Thought for 5s
> Reading src/app/bootstrap.ts ...
> Drafting patch ...`}
          </pre>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
          <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
            <span className="font-medium">Agents Command Menu</span>
            <span className="ml-auto font-mono text-fg-quaternary">{"\u2318"}K</span>
          </header>
          <ul className="divide-y divide-border text-sm">
            {agents.map((a) => (
              <li key={a.name} className="flex items-center gap-3 px-4 py-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[--bg-level-2] font-mono text-xs">
                  {a.name[0]}
                </span>
                <span className="flex-1 text-fg-primary">{a.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-quaternary">
                  {a.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NumberedSection>
  );
}

// ---------------------------------------------------------------------------
// 4.0 Diffs
// ---------------------------------------------------------------------------
function SectionDiffs() {
  return (
    <NumberedSection
      num="4.0"
      eyebrow="Diffs"
      title="Review PRs and agent output"
      headline="Structural diffs, right next to the issue."
      body={"Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge \u2014 all within Linear."}
      subnav={["Review", "Discuss", "Merge"]}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30]">
        <header className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-xs">
          <span className="font-mono text-fg-tertiary">
            kinetic-ios/src/screens/Home/HomeScreen.tsx
          </span>
          <span className="ml-auto font-mono text-fg-quaternary">Diff</span>
        </header>
        <pre className="overflow-auto p-4 font-mono text-[11px] leading-relaxed text-fg-secondary">
{`  import React from 'react'
  import { View, ActivityIndicator } from 'react-native'
  import { useVehicleState } from '@hooks/useVehicleState'
`}
          <span className="block rounded-sm bg-[rgba(235,87,87,0.10)] px-2 py-0.5 text-accent-red">
            - if (!state) return &lt;ActivityIndicator /&gt;
          </span>
          <span className="block rounded-sm bg-[rgba(39,166,68,0.10)] px-2 py-0.5 text-accent-green">
            + const partial = useMinimumVehicleState()
          </span>
          <span className="block rounded-sm bg-[rgba(39,166,68,0.10)] px-2 py-0.5 text-accent-green">
            + if (!partial) return &lt;ActivityIndicator /&gt;
          </span>
          <span className="block rounded-sm bg-[rgba(39,166,68,0.10)] px-2 py-0.5 text-accent-green">
            + return &lt;HomeView state={"{partial}"} /&gt;
          </span>
{`
  export default HomeScreen
`}
        </pre>
      </div>
    </NumberedSection>
  );
}

// ---------------------------------------------------------------------------
// 5.0 Monitor
// ---------------------------------------------------------------------------
function SectionMonitor() {
  return (
    <NumberedSection
      num="5.0"
      eyebrow="Monitor"
      title="Understand progress at scale"
      headline="Insights, dashboards, and a weekly audio briefing."
      body="Track cycle time, throughput, and initiative health across every team. Tune in to Weekly Pulse for a narrated rundown."
      subnav={["Insights", "Pulse", "Dashboards"]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30] p-6">
          <header className="mb-6 flex items-baseline justify-between">
            <h4 className="text-sm font-medium">Issue count by created date</h4>
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
              Last 30d
            </span>
          </header>
          <Sparkline values={[4, 7, 12, 9, 14, 18, 22, 19, 24, 28, 26, 31, 34, 30, 36]} />
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30] p-6">
          <header className="mb-6 flex items-baseline justify-between">
            <h4 className="text-sm font-medium">Cycle time by agent</h4>
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
              Last cycle
            </span>
          </header>
          <ul className="flex flex-col gap-2">
            {[
              { name: "Codex",          pct: 82 },
              { name: "GitHub Copilot", pct: 64 },
              { name: "Cursor",         pct: 58 },
              { name: "Ema",            pct: 41 },
            ].map((row) => (
              <li key={row.name} className="flex items-center gap-3 text-xs">
                <span className="w-28 truncate text-fg-primary">{row.name}</span>
                <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-[--bg-level-2]">
                  <span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ width: `${row.pct}%`, background: "var(--brand)" }}
                  />
                </span>
                <span className="w-8 text-right font-mono text-fg-tertiary">
                  {row.pct}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-xl border border-border bg-bg-level-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#292b30] p-6 sm:flex-row sm:items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M5 3v10l8-5z" fill="currentColor" />
          </svg>
        </span>
        <div className="flex flex-1 flex-col">
          <span className="font-mono text-xs uppercase tracking-widest text-fg-quaternary">
            Weekly Pulse
          </span>
          <span className="text-base font-medium">Weekly Pulse for May 11</span>
          <span className="text-xs text-fg-tertiary">
            7 min narrated briefing {"\u00B7"} powered by Linear Agent
          </span>
        </div>
        <span className="font-mono text-xs text-fg-tertiary">1.0{"\u00D7"}</span>
      </div>
    </NumberedSection>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const max = Math.max(...values);
  const w = 600;
  const h = 120;
  const step = w / (values.length - 1);
  const points = values.map((v, i) => `${i * step},${h - (v / max) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-32 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sl" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="var(--brand)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0"    />
        </linearGradient>
      </defs>
      <polygon fill="url(#sl)" points={`0,${h} ${points} ${w},${h}`} />
      <polyline
        fill="none"
        stroke="var(--brand-link)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Customer stripe
// ---------------------------------------------------------------------------
function CustomerStripe() {
  const customers = [
    "OpenAI", "Ramp", "Vercel", "Retool", "Cash App",
    "Mercury", "Raycast", "Figma", "Scale", "Perplexity",
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1024px] px-6 py-16">
        <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
          Powering the world{"\u2019"}s best product teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg font-medium text-fg-tertiary">
          {customers.map((c) => (
            <span key={c} className="tracking-tight">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------
function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_380px_at_50%_100%,rgba(94,106,210,0.18)_0%,transparent_65%)]"
      />
      <div className="mx-auto flex max-w-[1024px] flex-col items-center gap-6 px-6 py-32 text-center">
        <h2 className="max-w-[20ch] text-balance text-[clamp(32px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-fg-primary">
          Want the full story behind this work?
        </h2>
        <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row">
          <a
            href="mailto:aarontang.design@gmail.com"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
          >
            Get in touch
          </a>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-fg-primary transition-colors hover:border-[#2e3138] hover:bg-bg-level-1"
          >
            More work{" "}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              {"→"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
