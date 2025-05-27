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
  /* ─────────────────────── 3. CPF vs SRS Comparison ──────────────────── */
  {
    slug: "cpf-vs-srs-outline",
    date: "May 28, 2025",
    seoTitle: "SEO Keyword Plan: CPF vs SRS – Tax Savings for Young Singaporeans",
    seoDescription:
      "A practical guide for Singaporeans in their 20s and 30s evaluating CPF top-ups versus SRS contributions to maximize tax savings and retirement growth.",
    articleTitle:
      "CPF vs SRS: A Young Singaporean’s Guide to Tax Savings and Retirement Planning",
    gapHeading: "Content Gap",
    gapBody: `Existing content on CPF and SRS comparisons often targets a general audience or older demographics, lacking specificity for young Singaporeans. Key gaps include:

Lack of Personalized Scenarios: Few resources provide tailored advice for individuals in their 20s and 30s, considering their unique financial situations and goals.

Insufficient Comparative Analysis: There's a scarcity of side-by-side comparisons illustrating the benefits and drawbacks of CPF top-ups versus SRS contributions, especially concerning tax savings and investment returns.

Limited Practical Tools: While calculators exist, they often lack user-friendly interfaces or fail to incorporate variables relevant to younger individuals, such as career progression and changing income levels.`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `To address these shortcomings, the article should:

Provide Age-Specific Scenarios: Develop case studies for individuals aged 25, 30, and 35, demonstrating how CPF top-ups and SRS contributions impact their tax savings and retirement funds over time.

Offer Comparative Tables: Create clear, side-by-side comparisons of CPF and SRS features, including contribution limits, tax relief, investment options, interest rates, and withdrawal conditions.

Include Interactive Calculators: Develop or link to intuitive calculators that allow users to input their income, age, and financial goals to determine the optimal strategy between CPF and SRS.

Incorporate Visual Aids: Use charts and infographics to illustrate potential growth of retirement savings under each scheme, making complex information more digestible.

Address Common Misconceptions: Clarify misunderstandings about CPF and SRS, such as the belief that funds are inaccessible or that one scheme is universally better than the other.

Highlight Flexibility and Liquidity: Discuss the flexibility of SRS in terms of investment choices and withdrawal options, compared to the more rigid structure of CPF, to help readers make informed decisions based on their risk tolerance and financial needs.

Provide Actionable Steps: Conclude with a step-by-step guide on how young Singaporeans can start contributing to CPF or SRS, including links to relevant platforms and resources.

By focusing on the specific needs and concerns of young adults in Singapore, this article can serve as a comprehensive resource, empowering readers to make informed decisions about their retirement planning and tax-saving strategies.`,
    keywords: [
      { keyword: "CPF vs SRS tax savings Singapore", intent: "Informational" },
      { keyword: "CPF top-up vs SRS contribution for young adults", intent: "Informational" },
      { keyword: "CPF SA vs SRS investment returns", intent: "Informational" },
      { keyword: "CPF top-up tax relief Singapore", intent: "Transactional" },
      { keyword: "SRS contribution tax benefits Singapore", intent: "Transactional" },
      { keyword: "CPF vs SRS withdrawal rules Singapore", intent: "Informational" },
      { keyword: "CPF top-up vs SRS for 30-year-old Singaporean", intent: "Informational" },
      { keyword: "CPF vs SRS retirement planning Singapore", intent: "Informational" },
      { keyword: "CPF vs SRS calculator Singapore", intent: "Transactional" },
      { keyword: "CPF vs SRS which is better for tax relief", intent: "Informational" },
    ],
  },

  /* ──────────────── 4. Salary Negotiation for Fresh Graduates ─────────────── */
  {
    slug: "fresh-grad-salary-negotiation-outline",
    date: "June 4, 2025",
    seoTitle: "SEO Keyword Plan: Salary Negotiation Tips for Fresh Graduates in Singapore",
    seoDescription:
      "A practical guide for Singaporean fresh graduates to navigate salary negotiations, considering local employment practices, CPF contributions, and cost-of-living factors.",
    articleTitle:
      "Mastering Salary Negotiation: A Guide for Singaporean Fresh Graduates",
    gapHeading: "Content Gap",
    gapBody: `While numerous global articles provide general salary negotiation advice, few address the unique aspects of Singapore's employment landscape that fresh graduates must consider. Key gaps include:

CPF Contributions: In Singapore, employees contribute 20% of their salary to the Central Provident Fund (CPF), with employers adding 17%. This significantly affects take-home pay, yet many guides overlook this factor.

13th Month Bonus (AWS): The Annual Wage Supplement is common but not mandatory in Singapore. Fresh graduates may not understand its implications on total compensation.

Local Salary Benchmarks: Without knowledge of median starting salaries, such as the S$4,500 reported for 2024 graduates, fresh graduates may lack context for negotiations.

Cultural Nuances: Singapore's cultural emphasis on humility may deter fresh graduates from negotiating assertively, a nuance not addressed in generic guides.`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `To address these shortcomings, the article should:

Explain CPF Contributions: Detail how CPF deductions impact net salary and the importance of considering CPF in salary negotiations.

Clarify the 13th Month Bonus: Discuss the prevalence of the AWS in Singapore and how it factors into annual compensation.

Provide Local Salary Data: Present up-to-date statistics on median starting salaries across various industries to help set realistic expectations.

Offer Negotiation Strategies: Suggest culturally appropriate ways for fresh graduates to negotiate, such as expressing enthusiasm for the role while inquiring about compensation flexibility.

Include a Negotiation Checklist: Provide a step-by-step guide tailored to Singapore's context, covering research, understanding of benefits, and communication tips.

Use Real-Life Scenarios: Incorporate case studies or testimonials from recent graduates who successfully negotiated their salaries, highlighting lessons learned.

By focusing on these areas, the article will serve as a comprehensive resource for Singaporean fresh graduates, empowering them to navigate salary negotiations effectively within the local context.`,
    keywords: [
      { keyword: "salary negotiation tips for fresh graduates Singapore", intent: "Informational" },
      { keyword: "CPF contributions fresh graduates Singapore", intent: "Informational" },
      { keyword: "13th month bonus Singapore fresh graduates", intent: "Informational" },
      { keyword: "median starting salary Singapore 2024", intent: "Informational" },
      { keyword: "how to negotiate first salary Singapore", intent: "Informational" },
      { keyword: "fresh graduate salary expectations Singapore", intent: "Informational" },
      { keyword: "negotiating salary with CPF considerations Singapore", intent: "Informational" },
      { keyword: "entry-level salary negotiation Singapore", intent: "Informational" },
      { keyword: "understanding total compensation Singapore", intent: "Informational" },
      { keyword: "fresh grad salary negotiation checklist Singapore", intent: "Informational" },
    ],
  },

  /* ─────── 5. Student Loan Repayment for Fresh Graduates ─────── */
  {
    slug: "student-loan-repayment-outline",
    date: "June 11, 2025",
    seoTitle: "SEO Keyword Plan: Accelerating Student Loan Repayment for Recent Graduates in Singapore",
    seoDescription:
      "A comprehensive guide for Singaporean fresh graduates on effectively managing and expediting the repayment of student loans, considering local financial structures and obligations.",
    articleTitle:
      "Accelerating Student Loan Repayment: A Guide for Singaporean Fresh Graduates",
    gapHeading: "Content Gap",
    gapBody: `While various resources discuss student loan repayment in Singapore, they often lack a consolidated, actionable approach tailored for recent graduates. Existing content tends to:

Fragment Information: Details about MOE Tuition Fee Loans, CPF Education Loans, and private loans are scattered across different platforms, making it challenging for graduates to find cohesive guidance.

Lack Practical Budgeting Strategies: Few resources provide step-by-step budgeting plans that integrate loan repayments with other financial obligations like rent, CPF contributions, and daily expenses.

Overlook Early Repayment Benefits: There's limited discussion on the advantages of early repayment, such as interest savings and improved credit scores, and how to achieve it.

Neglect Emotional and Psychological Aspects: Managing debt can be stressful, yet there's minimal content addressing the emotional well-being of graduates navigating loan repayments.`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `To address these shortcomings, the article should:

1. Consolidate Loan Information: Provide a clear comparison of MOE Tuition Fee Loans, CPF Education Loans, and private loans, highlighting interest rates, repayment terms, and eligibility criteria.

2. Offer Practical Budgeting Tools: Introduce budgeting templates or calculators that help graduates allocate their income effectively, ensuring timely loan repayments while covering essential expenses.

3. Emphasize Early Repayment Strategies: Discuss methods to accelerate loan repayment, such as making lump-sum payments, increasing monthly installments, or utilizing bonuses and part-time income.

4. Address Emotional Well-being: Include tips on managing stress related to debt, such as setting achievable goals, seeking support, and celebrating repayment milestones.

5. Provide Real-life Case Studies: Share stories of individuals who successfully managed to repay their student loans quickly, detailing the strategies they employed and lessons learned.

6. Include Visual Aids: Use infographics and charts to illustrate repayment timelines, budgeting allocations, and the impact of early repayments on interest savings.

By delivering a comprehensive, empathetic, and practical guide, this article can serve as a valuable resource for Singaporean fresh graduates aiming to navigate and expedite their student loan repayments effectively.`,
    keywords: [
      { keyword: "repay student loan quickly Singapore", intent: "Informational" },
      { keyword: "student loan repayment strategies Singapore", intent: "Informational" },
      { keyword: "MOE Tuition Fee Loan repayment Singapore", intent: "Informational" },
      { keyword: "CPF Education Loan repayment plan", intent: "Informational" },
      { keyword: "student loan budgeting tips Singapore", intent: "Informational" },
      { keyword: "early student loan repayment benefits Singapore", intent: "Informational" },
      { keyword: "managing student debt Singapore graduates", intent: "Informational" },
      { keyword: "student loan interest rates Singapore", intent: "Informational" },
      { keyword: "education loan repayment calculator Singapore", intent: "Transactional" },
      { keyword: "student loan refinancing options Singapore", intent: "Transactional" },
    ],
  },

  /* ─────────────── 6. CPF vs Cash for HDB Downpayment ─────────────── */
  {
    slug: "cpf-vs-cash-hdb-downpayment-outline",
    date: "June 18, 2025",
    seoTitle: "SEO Keyword Plan: CPF vs Cash for HDB Downpayment in Singapore",
    seoDescription:
      "A comprehensive guide for Singaporean first-time homebuyers evaluating the use of CPF savings versus cash for HDB downpayments, considering long-term financial implications.",
    articleTitle:
      "CPF vs Cash: Making the Right Choice for Your HDB Downpayment in Singapore",
    gapHeading: "Content Gap",
    gapBody: `While official sources provide guidelines on using CPF for HDB downpayments, they often lack comprehensive comparisons between using CPF savings and cash. Key gaps include:

Lack of Comparative Scenarios: Few resources offer side-by-side analyses of the long-term financial impacts of using CPF versus cash for downpayments, including effects on retirement savings and loan interest.

Insufficient Information on Accrued Interest: Many first-time buyers are unaware of the concept of CPF accrued interest and how it affects the amount to be refunded to their CPF account upon selling the property.

Limited Guidance on Optimal Strategies: There's a scarcity of advice on how to balance CPF and cash usage to optimize financial outcomes, considering factors like investment opportunities and emergency funds.`,
    fillGapHeading: "How to Fill the Gap",
    fillGapBody: `To address these shortcomings, the article should:

1. Provide Comparative Case Studies: Illustrate scenarios where one buyer uses CPF for the full downpayment while another uses a combination of CPF and cash, analyzing the long-term effects on retirement savings and loan interest paid.

2. Explain CPF Accrued Interest: Detail how using CPF for housing affects the amount to be refunded upon property sale, including the calculation of accrued interest and its implications on future financial planning.

3. Offer Strategic Recommendations: Advise on optimal strategies for combining CPF and cash payments, taking into account current CPF interest rates, potential investment returns on cash, and maintaining liquidity for unforeseen expenses.

4. Include Visual Aids: Use charts and tables to compare the financial outcomes of different payment methods, making complex information more accessible and understandable.

5. Update with Current Data: Ensure all information reflects the latest CPF policies, HDB loan structures, and market interest rates to provide accurate and relevant guidance.

By delivering a detailed, scenario-based analysis, this article can serve as a valuable resource for Singaporean first-time homebuyers, empowering them to make informed decisions about using CPF savings or cash for their HDB downpayments.`,
    keywords: [
      { keyword: "should I use CPF or cash for HDB downpayment Singapore", intent: "Informational" },
      { keyword: "CPF vs cash HDB downpayment Singapore", intent: "Informational" },
      { keyword: "HDB downpayment CPF rules Singapore", intent: "Informational" },
      { keyword: "CPF accrued interest HDB downpayment", intent: "Informational" },
      { keyword: "CPF vs cash property purchase Singapore", intent: "Informational" },
      { keyword: "CPF OA usage for HDB downpayment", intent: "Informational" },
      { keyword: "HDB downpayment options Singapore", intent: "Informational" },
      { keyword: "CPF accrued interest implications", intent: "Informational" },
      { keyword: "CPF vs cash home loan Singapore", intent: "Informational" },
      { keyword: "CPF vs cash for HDB loan repayment", intent: "Informational" },
    ],
  },
];
