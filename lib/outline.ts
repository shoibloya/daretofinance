/* -------------------------------------------------------------------------- */
/*  Outline model                                                             */
/* -------------------------------------------------------------------------- */

export type Keyword = {
  keyword: string
  intent:
    | "Transactional"
    | "Informational"
    | "Navigational"
    | "Commercial"
}

export interface Outline {
  slug: string
  date: string
  seoTitle: string
  seoDescription: string
  articleTitle: string
  gapHeading: string
  gapBody: string
  fillGapHeading: string
  fillGapBody: string
  keywords: Keyword[]
}

/* -------------------------------------------------------------------------- */
/*  Outlines                                                                  */
/* -------------------------------------------------------------------------- */

export const outlines: Outline[] = [
  /* ──────────────── 7. Working Holiday Visa Budget ─────────────── */
  {
    slug: "working-holiday-visa-australia-budget-outline",
    date: "June 25, 2025",
    seoTitle: "SEO Keyword Plan: Working Holiday Visa Australia Budget Checklist for Singaporeans",
    seoDescription:
      "A detailed guide for Singaporean travellers planning for an Australia Working Holiday Visa, covering all costs from visa fees to farm boots.",
    articleTitle:
      "Working Holiday in Oz: Every Dollar You’ll Spend from Visa Fee to Vegemite (Singaporean Edition)",
    gapHeading: "Content Gap",
    gapBody: `Official sources like australia.com and the Singapore High Commission website state basic costs (visa fee, proof of funds), but they:

Superannuation refund process and timeline

Income tax obligations and potential refunds

Regional work transport and gear (e.g. flights to remote farms, work boots)

Ignore realistic lifestyle budgeting – food, shared housing, public transport, SIM cards, etc.

Provide no consolidated budget checklist or download, leaving travellers to patch together advice from forums or TikTok`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `Publish a visually structured, pre-departure budgeting guide that balances official requirements with real-world, on-the-ground advice. The content should:

Break down cost phases:

Upfront costs: Visa (A$635), travel insurance (A$400–A$900), one-way flight (S$500–S$1,200), proof-of-funds (A$5,000)

Monthly living costs: rent in major cities (~A$700–A$1,000/month), groceries (~A$300–A$400), transport (Myki/Opal cards), leisure

Regional/farm work expenses: transport to rural towns (Greyhound, Jetstar), work gear, seasonal rent

Exit costs & returns: superannuation refund (~A$1,000+), tax refund (up to 13% of income if eligible)

Include a downloadable budget checklist (Google Sheets or PDF):

Itemized line items with editable columns

Sectioned into: Before You Go, Monthly, and When You Return

Offer a sample starter budget:

“With a S$8,000 budget, here’s how you could spend your first 3 months” — housing, setup, gap buffer

Embed local context:

Tips for finding cheap flights from Changi

Mention common paths Singaporeans take (e.g. Melbourne or Perth start)

Suggestions for safe regional work via official job boards or hostel notices

Bonus tips:

Reclaiming unused Opal card credit

Applying for a TFN (Tax File Number) to avoid high withholding tax

This article would be the first Singapore-focused WHV budgeting resource that combines transparency, practicality, and local relevance — earning links, shares, and trust from younger travellers.`,
    keywords: [
      { keyword: "working holiday visa Australia budget checklist for Singaporeans", intent: "Informational" },
      { keyword: "how much money to save for Australia working holiday", intent: "Informational" },
      { keyword: "working holiday visa Australia Singapore cost", intent: "Transactional" },
      { keyword: "Singaporean working holiday tax refund Australia", intent: "Informational" },
      { keyword: "Australia working holiday farm work cost", intent: "Informational" },
      { keyword: "budget breakdown working holiday visa Australia", intent: "Informational" },
      { keyword: "travel insurance for working holiday visa Australia", intent: "Transactional" },
      { keyword: "starter budget for WHV Australia Singapore", intent: "Informational" },
    ],
  },

  /* ──────────────── 8. Saving for Overseas Master’s ─────────────── */
  {
    slug: "saving-for-overseas-masters-outline",
    date: "July 2, 2025",
    seoTitle: "SEO Keyword Plan: Saving for Overseas Master’s Degree – Singapore Young Professionals Guide",
    seoDescription:
      "A practical guide for Singaporean young professionals planning to fund their postgraduate studies abroad with clear milestones, tuition benchmarks, and FX planning.",
    articleTitle:
      "Master Your Savings: Funding a Postgrad Abroad Without Selling Your Soul (Singapore Edition)",
    gapHeading: "Content Gap",
    gapBody: `Most current content falls into two extremes:

Bank blog posts that preach vague budgeting or push education loans — without any real planning frameworks

Forum threads (Seedly, Reddit) debating whether it’s “worth it” — often personal anecdotes, not actionable guidance

There’s no structured content showing how to prepare financially over 3–5 years, with destination-specific tuition costs, FX risks, and scholarship opportunities clearly laid out for Singaporean readers.`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `Publish a long-term financial planning guide that speaks directly to Singapore-based young professionals with ambitions of studying overseas. The article should include:

5-Year Cash Flow Roadmap:

Year-by-year savings milestones

Annual savings targets based on income (e.g. “save 20% if you earn S$4k/month for 5 years = S$48k fund”)

Visual timeline with cost checkpoints and deadline reminders for application windows

Tuition Benchmarks by Country:

UK: £20,000–£40,000

US: US$30,000–$70,000/year

Australia: A$25,000–$50,000/year

Include typical cost of living ranges and visa health insurance charges

Scholarship & Grant Tracker:

Table of common scholarships (e.g. Fulbright, Chevening, Australia Awards, NUS Overseas Grants)

Include eligibility, coverage, links, and deadlines

Bonus: Highlight hidden gems like employer education subsidies or local charity-based study funds

FX Hedging Tips:

Teach basic currency risk planning — opening multi-currency accounts, using FX-forward tools like DBS FX Pay or Revolut

Show impact of a 5% currency swing on S$50k (e.g. S$2.5k variance)

Other Considerations:

Opportunity cost: losing income during study

Post-study work rights: factor potential return on investment

Building a “return runway”: save 3 months' expenses for re-entry into the job market after graduation

This content positions your brand (or blog) as a go-to advisor for global education planning, offering clarity and control in a space that often feels like a financial black box.`,
    keywords: [
      { keyword: "saving for overseas masters degree Singapore", intent: "Informational" },
      { keyword: "how to fund postgrad studies abroad Singapore", intent: "Informational" },
      { keyword: "best countries for masters degree Singaporeans", intent: "Informational" },
      { keyword: "masters degree savings plan Singapore", intent: "Transactional" },
      { keyword: "scholarship and grant tracker for Singaporean students", intent: "Informational" },
      { keyword: "exchange rate planning for studying abroad", intent: "Informational" },
      { keyword: "how much to save for UK/US/Australia masters", intent: "Informational" },
      { keyword: "budgeting for postgrad studies overseas", intent: "Informational" },
    ],
  },

  /* ──────────────── 9. Pop-Up Stall Startup Guide ─────────────── */
  {
    slug: "pop-up-stall-costs-outline",
    date: "July 9, 2025",
    seoTitle: "SEO Keyword Plan: Weekend Pop-Up Stall Startup Costs and Profit Margins in Singapore (2025)",
    seoDescription:
      "A comprehensive guide for aspiring vendors in Singapore to understand real startup costs, licensing, and profitability of weekend pop-up stalls.",
    articleTitle:
      "Market Hustle: Launch a Pop-Up Stall in Singapore Without Burning Cash (2025 Edition)",
    gapHeading: "Content Gap",
    gapBody: `Most existing content (e.g. Facebook Event pages, general startup lists) offers only surface-level info like booth rental fees, but skips over:

Actual licensing requirements (e.g. SFA or NEA approval for F&B stalls, UOB POS terminal licensing for digital payments)

Hidden costs: POS terminal rentals, packaging, insurance, branding, sample production, cleaning deposits

Sales conversion assumptions: Realistic footfall-to-sales ratios based on event type (e.g. art market vs. farmers’ market)

No working P&L template or real founder interviews, leaving new vendors to “trial by fire”`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `Publish a realistic, first-timer-friendly guide that walks readers through every cost and decision point in building a profitable pop-up stall. The article should include:

Step-by-step Startup Cost Breakdown:

Booth rental: S$150–S$500/weekend depending on location

Licensing: SFA/F&B permits (S$100+), insurance (~S$50–S$100), public liability

POS rentals: S$60–S$80/weekend or free with bank setup

Signage, tables, stools, banners: S$100–S$200 one-time

Packaging, samples, prep materials: ~S$200 for soft launch

Optional: shared logistics or rental marketplace tips for cutting setup costs

Profitability Insight:

“You need to convert ~3–6% of 1,000 passersby at S$10–S$15 per sale to break even”

Margin math: COGS at 35–50% of sale price = viable? Not if rent eats half your day

Licensing Checklist:

What licenses are needed for food vs. retail vs. services

Where to apply (SFA, GoBusiness, event organizer pre-approvals)

Lead times and fees for temporary food handling licenses

Case Study Interviews:

Profiles of 2–3 successful stall owners (e.g. home baker turned weekend warrior, soap crafter, thrift seller)

Ask about average sales, initial investment, “what I wish I knew” insights

Local Venue Tips:

Compare weekend events: Artbox, Boutiques Fair, Crane Living, Farmers Markets

Footfall, booth fees, niche relevance

This article would serve as Singapore’s most complete playbook for launching a weekend stall, helping readers avoid rookie mistakes and confidently test a business idea — while making it financially viable.`,
    keywords: [
      { keyword: "weekend pop-up stall startup costs Singapore", intent: "Informational" },
      { keyword: "pop-up booth rental Singapore cost 2025", intent: "Transactional" },
      { keyword: "profit margin for pop-up stall Singapore", intent: "Informational" },
      { keyword: "how to start a weekend stall in Singapore", intent: "Informational" },
      { keyword: "pop-up licensing and permits Singapore", intent: "Informational" },
      { keyword: "best places to set up pop-up stall Singapore", intent: "Informational" },
      { keyword: "P&L template for pop-up business Singapore", intent: "Transactional" },
      { keyword: "low-cost business ideas Singapore 2025", intent: "Informational" },
    ],
  },

  /* ──────────────── 10. Micro Wedding Cost Guide ─────────────── */
  {
    slug: "micro-wedding-cost-outline",
    date: "July 16, 2025",
    seoTitle: "SEO Keyword Plan: Micro Wedding Cost in Singapore (2025 Edition)",
    seoDescription:
      "A transparent guide to planning a stylish micro wedding in Singapore under S$20k, with venue options, downloadable budget template, and tips.",
    articleTitle:
      "Say ‘I Do’ to a Budget: How to Plan a Chic Micro Wedding in Singapore for Under S$20k (2025 Guide)",
    gapHeading: "Content Gap",
    gapBody: `Most wedding-related content in Singapore is still focused on large-scale banquets and hotel ballroom packages, quoting average budgets of S$35k–S$60k. Existing sites (e.g. Dr Wealth, Raffles Credit) discuss wedding loans or how to afford a “traditional” wedding, but completely ignore:

The rising trend of micro weddings post-pandemic

Realistic cost templates for 30–60 pax events

A clear comparison of venue packages vs. DIY setups

Budget-saving vendor tips (e.g. freelance photographers, non-bridal label gowns)`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `Publish a transparent, visually rich guide that empowers couples to plan a micro wedding within a S$15k–S$20k range. The content should include:

✅ Line-Item Micro Wedding Budget (Downloadable Template)

Venue (3-hr rental or brunch package): S$3,000–S$6,000

Catering (per pax x 40–60 guests): S$3,000–S$6,000

Photography/videography (4 hrs): S$800–S$1,500

Gown/suit rental: S$500–S$1,000

Florals & styling: S$800–S$1,200

Solemnizer/admin fees: S$300

DIY décor, printing, etc.: S$300–S$800

TOTAL: ~S$15,000–S$20,000

🏛️ List of Affordable Micro Wedding Venues:

The Secret Patio (Club Street)

The Refinery

White Rabbit (brunch weddings)

Hort Park or Fort Canning event spaces

The Projector (for film-buff couples)

Include rental rates, guest capacity, and styling flexibility

🔄 Package vs. DIY Comparison Table

Cost predictability: High vs Medium

Personalization: Medium vs High

Vendor flexibility: Low vs High

Stress level: Low vs High

Total cost (avg): S$16k–S$18k vs S$12k–S$20k

🎯 Money-Saving Tips:

Off-peak timing (weekday brunches, late lunches)

Bundle freelance creatives (photo + video)

Skip bridal boutiques – buy white dress online or rent via style portals

Use friends for live music or cake baking

Rent instead of buy decor (e.g. floral arches, fairy lights)

📥 Free Download

Editable Micro Wedding Budget Planner (Google Sheet)

Sample Timeline for 3-Month Planning

Bonus: Vendor checklist with average rates (updated for 2025)

This content becomes the go-to micro wedding budgeting guide in Singapore — realistic, empowering, and trend-aware, helping couples celebrate love without financial regret.`,
    keywords: [
      { keyword: "micro wedding cost Singapore 2025", intent: "Informational" },
      { keyword: "affordable wedding packages Singapore 2025", intent: "Transactional" },
      { keyword: "intimate wedding venues Singapore", intent: "Transactional" },
      { keyword: "micro wedding Singapore under 20k", intent: "Transactional" },
      { keyword: "wedding cost breakdown Singapore 2025", intent: "Informational" },
      { keyword: "DIY wedding vs package Singapore", intent: "Informational" },
      { keyword: "how to plan a small wedding in Singapore", intent: "Informational" },
      { keyword: "best wedding venues for small weddings Singapore", intent: "Transactional" },
    ],
  },
];
