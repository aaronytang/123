// Hero product visual: a faux Linear issue view modelled on what's visible
// on the live linear.app hero — sidebar + issue detail + metadata rail,
// with the "Faster app launch / ENG-2703" story. No real product UI is copied.

type PillTone = "neutral" | "orange" | "red" | "green" | "brand";

export function IssueMock({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-[--bg-level-1] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      <header className="flex items-center gap-2 border-b border-border bg-[--bg-level-2] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[--bg-level-3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[--bg-level-3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[--bg-level-3]" />
        </span>
        <span className="ml-3 font-mono text-[11px] text-fg-quaternary">
          linear.app/next
        </span>
        <span className="ml-auto font-mono text-[11px] text-fg-quaternary">
          {"\u2192"}
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_220px]">
        <Sidebar />
        <IssueDetail />
        <MetadataRail />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden border-r border-border bg-[--bg-level-1] md:block">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary font-mono text-[10px] text-primary-foreground">
          L
        </span>
        <span className="text-xs font-medium text-fg-primary">Linear</span>
      </div>
      <nav className="flex flex-col gap-0.5 p-2 text-xs">
        {["Inbox", "My issues", "Reviews", "Pulse"].map((l) => (
          <a
            key={l}
            href="#"
            className="rounded-md px-2 py-1.5 text-fg-secondary transition-colors hover:bg-[--bg-level-2] hover:text-fg-primary"
          >
            {l}
          </a>
        ))}
        <p className="mt-3 px-2 font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
          Workspace
        </p>
        {["Initiatives", "Projects", "More"].map((l) => (
          <a
            key={l}
            href="#"
            className="rounded-md px-2 py-1.5 text-fg-secondary transition-colors hover:bg-[--bg-level-2] hover:text-fg-primary"
          >
            {l}
          </a>
        ))}
        <p className="mt-3 px-2 font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
          Favorites
        </p>
        {[
          "Faster app launch",
          "Agent tasks",
          "UI Refresh",
          "Agents Insights",
        ].map((l) => (
          <a
            key={l}
            href="#"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-fg-secondary transition-colors hover:bg-[--bg-level-2] hover:text-fg-primary"
          >
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-fg-quaternary" aria-hidden />
            <span className="truncate">{l}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function IssueDetail() {
  return (
    <div className="flex min-w-0 flex-col border-b border-border md:border-b-0">
      <header className="flex items-center gap-3 border-b border-border px-5 py-3 text-xs">
        <span className="font-mono text-fg-quaternary">
          Faster app launch {"\u00B7"} 02 / 145
        </span>
        <span className="ml-auto font-mono text-fg-quaternary">ENG-2703</span>
      </header>

      <div className="flex flex-col gap-5 px-5 py-5">
        <h3 className="text-xl font-medium tracking-[-0.02em] text-fg-primary">
          Render UI before vehicle_state sync when minimum required state is
          present, instead of blocking on full refresh during iOS startup.
        </h3>

        <section className="flex flex-col gap-3">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
            Activity
          </h4>
          <ul className="flex flex-col gap-2 text-xs">
            <ActivityRow
              who="Linear"
              kind="agent"
              body={
                <>
                  created the issue via <span className="text-fg-primary">Slack</span> on behalf of{" "}
                  <span className="text-fg-primary">karri</span>
                </>
              }
              when="2m ago"
            />
            <ActivityRow
              who="Triage Intelligence"
              kind="agent"
              body={
                <>
                  added the labels <Label>Performance</Label> <Label>iOS</Label>
                </>
              }
              when="2m ago"
            />
            <ActivityRow
              who="karri"
              kind="person"
              body={
                <>{"\u201C"}Right now we show a spinner forever, which makes it look like the car disappeared.{"\u201D"}</>
              }
              when="4m ago"
            />
            <ActivityRow
              who="jori"
              kind="person"
              body={
                <>
                  @<span className="text-brand-link">Codex</span> can you take a stab at this?
                </>
              }
              when="just now"
            />
            <ActivityRow
              who="jori"
              kind="person"
              body={<>connected <span className="text-fg-primary">Codex</span></>}
              when="just now"
            />
          </ul>
        </section>

        <section className="overflow-hidden rounded-lg border border-border bg-[--bg-level-2]">
          <header className="flex items-center gap-2 border-b border-border px-3 py-2 text-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary font-mono text-[9px] text-primary-foreground">
              C
            </span>
            <span className="font-medium text-fg-primary">Codex</span>
            <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-fg-quaternary">
              Moved from <Pill>Todo</Pill> to <Pill tone="orange">In Progress</Pill>
            </span>
          </header>
          <pre className="p-3 font-mono text-[11px] leading-relaxed text-fg-secondary">
{`> On it! I've received your request.
> Kicked off a task in kinetic/kinetic-iOS environment.
> Searching for root AGENTS file

kinetic-iOS$ /bin/bash -lc rg --files -g 'AGENTS.md'
AGENTS.md

> Locating initialization logic for vehicle_state
> Thinking ...`}
          </pre>
        </section>
      </div>
    </div>
  );
}

function MetadataRail() {
  return (
    <aside className="hidden flex-col gap-4 border-l border-border px-4 py-5 text-xs md:flex">
      <MetadataRow label="Status">
        <Pill tone="orange">In Progress</Pill>
      </MetadataRow>
      <MetadataRow label="Priority">
        <Pill tone="red">High</Pill>
      </MetadataRow>
      <MetadataRow label="Assignees">
        <span className="flex items-center gap-1.5">
          <Avatar initials="jo" />
          <span>jori</span>
        </span>
      </MetadataRow>
      <MetadataRow label="Agents">
        <span className="flex items-center gap-1.5">
          <Avatar initials="C" tone="brand" />
          <span>Codex</span>
        </span>
      </MetadataRow>
      <MetadataRow label="Labels">
        <span className="flex flex-wrap gap-1">
          <Label>Performance</Label>
          <Label>iOS</Label>
        </span>
      </MetadataRow>
      <MetadataRow label="Cycle">Cycle 144</MetadataRow>
      <MetadataRow label="Project">Core Performance</MetadataRow>
    </aside>
  );
}

function MetadataRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-quaternary">
        {label}
      </span>
      <div className="text-fg-primary">{children}</div>
    </div>
  );
}

function ActivityRow({
  who,
  kind,
  body,
  when,
}: {
  who: string;
  kind: "agent" | "person";
  body: React.ReactNode;
  when: string;
}) {
  return (
    <li className="flex items-baseline gap-2">
      <Avatar initials={who.slice(0, 2)} tone={kind === "agent" ? "brand" : undefined} />
      <span className="text-fg-primary">{who}</span>
      <span className="text-fg-tertiary">{body}</span>
      <span className="ml-auto font-mono text-[10px] text-fg-quaternary">{when}</span>
    </li>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: PillTone;
}) {
  const toneClass: Record<PillTone, string> = {
    neutral: "text-fg-secondary",
    orange:  "text-accent-orange",
    red:     "text-accent-red",
    green:   "text-accent-green",
    brand:   "text-brand-link",
  };
  return (
    <span
      className={`rounded-sm border border-border bg-[--bg-level-2] px-1.5 py-[1px] font-mono text-[10px] ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-border bg-[--bg-level-2] px-1.5 py-[1px] font-mono text-[10px] text-fg-secondary">
      {children}
    </span>
  );
}

function Avatar({ initials, tone }: { initials: string; tone?: "brand" }) {
  const bg = tone === "brand" ? "bg-primary text-primary-foreground" : "bg-[--bg-level-2] text-fg-secondary";
  return (
    <span className={`inline-flex h-5 w-5 flex-none items-center justify-center rounded-full font-mono text-[10px] ${bg}`}>
      {initials.toUpperCase()}
    </span>
  );
}
