// Case study — PlayStation Store payments.
// Trust & compliance framing: localized payment methods, regulation,
// irreversible transactions at 300M-player scale.
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
  title: "PlayStation Payments — Aaron Tang",
  description:
    "Localizing PlayStation Store checkout: installments in Brazil, iDeal in the Netherlands, and what breaks at 300M-player scale.",
};

export default function PlayStationCaseStudy() {
  return (
    <div className="light min-h-screen bg-background font-sans text-fg-primary">
      <PortfolioNav />
      <main className="mx-auto max-w-[1024px] px-6">
        <Hero />
        <MetricBand
          metrics={[
            {
              value: "2×",
              label: "Brazil digital sales after installment support shipped",
            },
            {
              value: "6+",
              label: "markets with localized payment methods and rules",
            },
            {
              value: "300M",
              label: "players relying on the same core checkout",
            },
          ]}
          methodology="Brazil figure compares the quarters before and after installment launch; sales = PlayStation Store digital revenue in market. [Confirm window and definition against internal reporting before publishing.] Player count is Sony’s published network scale at the time."
        />
        <Problem />
        <Constraints />
        <Brazil />
        <Netherlands />
        <EdgeStates />
        <Reflection />
      </main>
      <NextCase
        href="/project/qcx"
        title="Walmart QC-x"
        sub="Compliance tooling · bulk quote checking across 6 sourcing markets"
      />
      <PortfolioFooter />
    </div>
  );
}

function Hero() {
  const facts = [
    ["Role", "Product Designer — payments & checkout"],
    ["Team", "[Fill: e.g. 2 designers · 1 PM · payments engineering]"],
    ["Duration", "[Fill: real start–end dates]"],
    ["Platform", "Web · PlayStation Store"],
  ] as const;
  return (
    <section className="pb-16 pt-24 max-md:pb-12 max-md:pt-14">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.05em] text-fg-quaternary">
        PlayStation · Store Payments
      </p>
      <h1 className="max-w-[26ch] text-balance text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.15] tracking-[-0.03em]">
        The checkout worked. The payment methods didn{"’"}t.
      </h1>
      <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-fg-tertiary">
        PlayStation Store served 300 million players with what was
        essentially one checkout. In markets where people don{"’"}t pay the
        way the checkout assumed — Brazil{"’"}s installment culture, the
        Netherlands{"’"} bank-transfer habit — sales leaked at the last step.
        I designed the localized payment experiences that closed that gap,
        starting with the two markets where the mismatch was costing the
        most.
      </p>
      <CaseFacts facts={facts} />
      <div className="mt-12">
        <ImagePlaceholder
          label="Hero — one checkout, two localized forks"
          note="Side-by-side: the Brazil checkout with installment options (3×, 6×, 12× with per-installment pricing) and the Netherlands checkout with iDeal bank selection. Same store frame, visibly different payment steps."
          aspect="aspect-[21/9]"
        />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section title="At this scale, a payment mismatch is a revenue line">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          When checkout serves a few thousand users, a poorly fitting payment
          method is a support ticket. At 300 million, single-digit
          percentage drop-off in one market is a number with commas that
          executives ask about. The funnel data showed the same pattern in
          both problem markets: players browsed, added to cart, reached
          payment — and left at the exact step where the store asked for a
          credit card.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          The diagnosis wasn{"’"}t subtle once we looked locally. In Brazil,
          big purchases happen in installments — paying 12{"×"} for a console
          game is normal, and card credit limits make lump sums genuinely
          impossible for many players. In the Netherlands, iDeal bank
          transfers — not cards — are the default for online payment. We
          weren{"’"}t losing players at checkout. We were asking them to pay
          in a foreign language.
        </p>
      </div>
    </Section>
  );
}

function Constraints() {
  const items = [
    {
      title: "One store, many laws",
      body: "Installments in Brazil are regulated consumer credit — pricing display, fee disclosure, and messaging all have legal requirements. Whatever we designed had to survive legal review in each market, not just usability testing.",
    },
    {
      title: "A shared checkout core",
      body: "The base checkout was shared infrastructure across all markets. Local payment flows had to fork from it without forking the codebase — every divergence needed a stronger reason than “it looks better.”",
    },
    {
      title: "Irreversible transactions",
      body: "Digital goods deliver instantly; most purchases can’t be quietly reversed. Any ambiguity about what the player would be charged, when, and in how many parts had to be resolved before the confirm button — not in support tickets after.",
    },
  ] as const;
  return (
    <Section title="What made it hard">
      <CardGrid items={items} />
    </Section>
  );
}

function Brazil() {
  return (
    <Section title="Brazil: installments, not discounts">
      <p className="max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
        The obvious lever for weak sales was promotion — run discounts, lift
        the quarter, repeat. We considered it and killed it: discounting
        doesn{"’"}t fix a structural payment mismatch, it just subsidizes the
        players who could already pay. We shipped installment support
        instead, accepting real costs — reconciliation complexity for
        finance, longer settlement, and a checkout that had to explain
        consumer credit clearly enough to satisfy both a first-time buyer
        and a regulator.
      </p>
      <div className="mt-10 grid gap-16">
        <Decision
          n="1"
          title="The installment picker priced honestly"
          body="Per-installment amounts shown upfront, total cost alongside, no asterisks. Brazilian players are fluent in installments and immediately suspicious of hidden spread — the design’s job was to look as straightforward as the local e-commerce sites they already trusted."
          imgLabel="Brazil — installment selection"
          imgNote="Checkout payment step with installment options (1×, 3×, 6×, 12×), each showing per-installment price and total. Annotate the legally required disclosure text placement."
        />
        <Decision
          n="2"
          title="Confirmation made the schedule concrete"
          body="The confirm screen restated what would be charged, in how many parts, on what cadence — because an irreversible digital purchase is exactly the wrong place for a player to discover their payment plan was misunderstood."
          imgLabel="Brazil — confirmation with payment schedule"
          imgNote="Order confirmation screen showing the installment schedule (dates and amounts) before final purchase. The point: zero ambiguity before an irreversible transaction."
        />
      </div>
      <p className="mt-12 max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
        Digital sales in Brazil roughly doubled in the quarters after
        launch{"*"}. Installments didn{"’"}t make games cheaper — they made
        the existing prices payable the way that market actually pays.
      </p>
    </Section>
  );
}

function Netherlands() {
  return (
    <Section title="The Netherlands: trust means leaving the store">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          iDeal flips the usual trust model: instead of typing card details
          into our checkout, the player leaves it — redirected to their own
          bank to approve the payment, then returned. The design problem
          isn{"’"}t the form; it{"’"}s the handoff. A redirect with no
          preparation reads as a phishing pattern, and a clumsy return reads
          as a failed payment.
        </p>
        <p className="text-[15px] leading-relaxed text-fg-secondary">
          I designed the seams: a clear pre-redirect moment naming the
          player{"’"}s bank and what would happen next, and a return state
          that confirmed the result instantly — including the pending case,
          where the bank has accepted but settlement hasn{"’"}t landed.
          Dutch players trust their bank more than any store. The job was to
          borrow that trust without the journey feeling broken.
        </p>
      </div>
      <div className="mt-10">
        <ImagePlaceholder
          label="Netherlands — the iDeal handoff"
          note="Three frames: bank-selection step in checkout, the pre-redirect interstitial (“You’ll be sent to your bank to approve this payment”), and the return/confirmation state including the pending variant."
        />
      </div>
    </Section>
  );
}

function EdgeStates() {
  return (
    <Section title="Money screens earn their keep in the failure cases">
      <p className="max-w-[64ch] text-[15px] leading-relaxed text-fg-secondary">
        Most of the actual design hours went into states nobody screenshots
        for a portfolio: a declined installment after the first one
        succeeded, an iDeal session that expired mid-redirect, a wallet
        top-up that landed after the player gave up. Each one answers the
        same three questions — what happened, am I out money, what do I do
        now — and at this scale every percentage of confused players is a
        call-center budget. This is the same lesson my OKX work kept
        teaching: with payments, the unhappy paths are the product.
      </p>
      <div className="mt-10">
        <ImagePlaceholder
          label="Edge states — declined, expired, pending"
          note="A grid of the failure/edge screens: declined payment with recovery action, expired iDeal session with retry, pending-settlement state with expectation setting. Caption each with the player question it answers."
        />
      </div>
    </Section>
  );
}

function Reflection() {
  const items = [
    {
      title: "Localization is payment behavior, not translation",
      body: "The store was translated into Dutch and Portuguese long before it could be paid for in Dutch or Brazilian ways. Language was never the barrier; the payment method was.",
    },
    {
      title: "Borrowed trust beats built trust",
      body: "We could never make our checkout as trusted as a player’s own bank — iDeal worked because we stopped trying and designed a graceful handoff instead. Knowing when not to own the moment is a design decision.",
    },
    {
      title: "Scale changes which problems are worth solving",
      body: "Neither installments nor iDeal is a clever interface. They’re unglamorous structural fixes that moved revenue more than any visual redesign of the store could have. That recalibrated my sense of what high-impact design work looks like.",
    },
  ] as const;
  return (
    <Section title="What this project recalibrated">
      <CardGrid items={items} />
    </Section>
  );
}
