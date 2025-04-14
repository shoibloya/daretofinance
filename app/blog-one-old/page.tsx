"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

// InvestmentArticleDisplay Component – article content with updated text and improved formatting
const InvestmentArticleDisplay = () => {
  return (
    <div className="space-y-6 max-w-none prose prose-lg">
      <h1 className="text-3xl font-bold">
        Best Investment Options in Singapore: Choosing What’s Right for You
      </h1>
      <Image src="/blog-one.png" alt="blog-one" width={800} height={600} className="mx-auto" />
      <p>
        Imagine a young Singaporean couple excitedly preparing for their first child and
        dreaming about upgrading from their HDB flat. With $50,000 ready to invest over the coming
        year, they're exploring investment options to allocate their funds. Should they play it safe
        by topping up their CPF or try to invest directly in shares, REITs, or small businesses with
        the hope of greater returns? Like many Singaporeans, they're interested but unsure where to
        begin.
      </p>
      <p>
        Navigating the landscape of investment options in Singapore can feel overwhelming. The choices
        range from stocks offering attractive growth potential to bonds providing consistent returns
        and real estate presenting long-term opportunities. Yet, identifying the best investments in
        Singapore isn't a one-size-fits-all solution—it depends heavily on personal financial goals,
        timelines, and risk tolerance.
      </p>
      <p>
        This guide explores popular investment options in Singapore—from the reliability of government
        bonds and CPF to the growth prospects in stocks and REITs. We'll clearly explain each investment
        opportunity, discuss who it suits best, outline associated risks and potential returns, and guide
        you on how to start investing wisely.
      </p>

      <h2 className="text-2xl font-bold">Government Securities (T-Bills and SGS Bonds)</h2>
      <Image src="/blog-one-1.png" alt="Government Securities Image" width={800} height={600} className="mx-auto" />
      <p>
        Singapore Government Securities (SGS) include short-term Treasury Bills (T-Bills) and longer-term SGS
        Bonds. Both are issued by the Singapore Government and are considered extremely low-risk investments.
      </p>

      <h3 className="text-xl font-semibold">T-Bills (Treasury Bills)</h3>
      <p>
        T-Bills are short-term government securities issued with tenors of 6 months or 1 year (Monetary Authority
        of Singapore, n.d.a). They pay no coupons; instead, they are issued at a discount to face value and redeemed
        at par. The interest earned is the difference between the purchase price and $100 at maturity (Ask.gov.sg,
        n.d.).
      </p>
      <p>
        <strong>Latest Yields:</strong> As of April 2025, the 6-month T-bill yields about 2.5% per annum. Yields fluctuate with
        market conditions (for example, the 6M T-bill cut-off yield was ~2.7% in recent auctions). All interest rates
        on SGS are quoted on an annualized basis.
      </p>
      <p>
        <strong>Issuance and Structure:</strong> T-Bills are zero-coupon instruments sold at a discount (e.g., paying $97–$99 for
        $100 face value) (Ask.gov.sg, n.d.).
      </p>
      <p>
        <strong>Risk Characteristics:</strong> T-Bills are considered extremely low-risk due to the Singapore Government’s AAA credit
        rating (Factually, 2023). However, like all fixed-income instruments, they are subject to interest rate risk
        if sold before maturity.
      </p>

      <h3 className="text-xl font-semibold">SGS Bonds</h3>
      <p>
        SGS Bonds are longer-term securities with maturities ranging from 2 up to 50 years (Monetary Authority of
        Singapore, n.d.a). Unlike T-Bills, SGS bonds pay fixed semi-annual coupons at a stated rate and are typically issued
        at par value.
      </p>
      <p>
        <strong>Latest Yields:</strong> As of April 2025, a 10-year SGS bond yields around 2.6% p.a. Yields are quoted on an annualized
        basis and may fluctuate with market conditions.
      </p>
      <p>
        <strong>Issuance and Structure:</strong> SGS Bonds are coupon-bearing instruments. Investors receive interest twice a year until
        maturity, at which point the principal is repaid. These bonds can be bought at government auctions or on the
        secondary market (SGX) like typical bonds.
      </p>
      <p>
        <strong>Risk Characteristics:</strong> Like T-Bills, SGS Bonds are extremely low-risk due to Singapore’s strong credit rating.
        However, SGS Bonds are more sensitive to interest rate changes, especially those with longer maturities. For example,
        an investor selling a 10-year SGS bond before maturity could incur a loss if rates have risen (MoneySense, n.d.b). If held
        to maturity, the principal is repaid in full.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Feature</th>
              <th className="border p-2">T-Bills</th>
              <th className="border p-2">SGS Bonds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Type</td>
              <td className="border p-2">Short-term government security</td>
              <td className="border p-2">Long-term government bond</td>
            </tr>
            <tr>
              <td className="border p-2">Tenor / Maturity</td>
              <td className="border p-2">6 months or 1 year</td>
              <td className="border p-2">2 to 50 years</td>
            </tr>
            <tr>
              <td className="border p-2">Coupon</td>
              <td className="border p-2">No coupon; zero-coupon instrument</td>
              <td className="border p-2">Fixed semi-annual coupons</td>
            </tr>
            <tr>
              <td className="border p-2">Issued At</td>
              <td className="border p-2">Discount to face value</td>
              <td className="border p-2">Typically at par value</td>
            </tr>
            <tr>
              <td className="border p-2">Return Mechanism</td>
              <td className="border p-2">Difference between purchase price and $100 at maturity</td>
              <td className="border p-2">Fixed interest payments + principal at maturity</td>
            </tr>
            <tr>
              <td className="border p-2">Latest Yield (Apr 2025)</td>
              <td className="border p-2">~2.5% p.a. for 6-month T-Bill</td>
              <td className="border p-2">~2.6% p.a. for 10-year bond</td>
            </tr>
            <tr>
              <td className="border p-2">Purchase Methods</td>
              <td className="border p-2">Government auctions</td>
              <td className="border p-2">Government auctions or SGX (secondary market)</td>
            </tr>
            <tr>
              <td className="border p-2">Interest Rate Risk</td>
              <td className="border p-2">Lower exposure due to shorter maturity</td>
              <td className="border p-2">Higher exposure, especially for longer maturities</td>
            </tr>
            <tr>
              <td className="border p-2">Credit Risk</td>
              <td className="border p-2">Negligible – backed by AAA-rated Singapore Government</td>
              <td className="border p-2">Negligible – backed by AAA-rated Singapore Government</td>
            </tr>
            <tr>
              <td className="border p-2">Market Sensitivity</td>
              <td className="border p-2">Less sensitive to rate changes</td>
              <td className="border p-2">More sensitive; selling before maturity may incur losses</td>
            </tr>
            <tr>
              <td className="border p-2">Suitability</td>
              <td className="border p-2">Capital preservation with short-term horizon</td>
              <td className="border p-2">Capital preservation with predictable long-term income</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold">Singapore Savings Bonds (SSBs)</h2>
      <Image src="/blog-one-2.png" alt="Singapore Savings Bonds Image" width={800} height={600} className="mx-auto" />
      <p>
        The Singapore Savings Bond (SSB) is a special type of SGS bond tailored for individual investors. It offers flexible
        investing and a step-up interest structure over a 10-year term. Key features of SSBs include:
      </p>
      <p>
        <strong>Step-Up Interest Rates:</strong> SSBs pay interest that increases (“steps up”) each year you hold the bond, with rates based on average
        SGS yields. In practice, the coupon starts lower in the first year and rises over time. This means the effective annual return
        is higher the longer you hold the bond (Ministry of Finance, 2023). (For instance, a recent SSB issue offers about ~2.5% in Year 1,
        stepping up to around ~3+% by Year 10, resulting in a ~2.7–3% p.a. average if held to maturity.) This step-up mechanism rewards long-term
        savers while still giving flexibility to exit early.
      </p>
      <p>
        <strong>Safety and Principal Guarantee:</strong> Both principal and interest payments of SSBs are fully guaranteed by the Singapore Government
        (Ministry of Finance, 2023). Importantly, SSBs are non-tradable – you cannot sell them on the market. This protects investors from
        price fluctuations; if you need to cash out, you always get back the face value (plus any accrued interest) from the government,
        avoiding capital loss (Ministry of Finance, 2023).
      </p>
      <p>
        <strong>Minimum Investment and Accessibility:</strong> You can start investing in SSBs with as little as $500 (and in multiples of $500)
        (Ministry of Finance, 2023). This low entry point (half the $1,000 minimum of regular SGS bonds) makes SSBs very accessible.
        Purchases are made via local banks/ATMs or internet banking. There is a $2 transaction fee for each application (purchase).
      </p>
      <p>
        <strong>Redemption Flexibility:</strong> SSBs are unique in allowing early redemption at any time, with no penalties on interest (Ministry of
        Finance, 2023). You can redeem (in chunks of $500) in any month, and the principal will be returned in full the following month.
        Even if redeemed early, you still receive the accrued interest for the period you held the bond (there is no forfeiture of interest apart
        from not earning future coupons) (Ministry of Finance, 2023). The only cost to redeem is a $2 fee per request charged by the bank (Ask.gov.sg,
        n.d.b). This flexibility, combined with the principal guarantee, means SSBs effectively carry no price risk – an investor can always get their
        money back at face value.
      </p>
      <p>
        <strong>Returns and Risk:</strong> SSBs are considered very safe instruments for individual investors. The returns typically align with SGS yields (the
        10-year average yield has ranged roughly between ~2.5–3.5% in recent years, depending on the interest rate environment). While the returns
        are modest, the risk is extremely low. There is no default risk (government-guaranteed) and no market price volatility. The main risk is “reinvestment
        risk” or opportunity cost – if interest rates rise sharply, the fixed rates on an SSB might lag, but one could always redeem the bond and switch to
        higher-yielding issues. Overall, SSBs are ideal for those seeking higher returns than bank deposits while keeping capital very safe and retaining
        flexibility to cash out if needed.
      </p>

      <h2 className="text-2xl font-bold">High-Yield Savings Accounts and Fixed Deposits</h2>
      <Image src="/blog-one-3.png" alt="High-Yield Savings Accounts Image" width={800} height={600} className="mx-auto" />
      <p>
        For cash holdings, Singaporeans can consider high-interest savings accounts or fixed deposit (FD) accounts offered by major banks.
        These options provide higher interest than basic savings accounts, though often with certain conditions or lock-in periods.
        Key points:
      </p>
      <p>
        <strong>High-Yield Bank Accounts:</strong> Local banks like DBS (Multiplier account), OCBC (360 account), and UOB (One account) offer bonus interest schemes to
        significantly boost your savings rate. These accounts have a low base interest (~0.05% p.a.), but if the customer fulfills specific conditions – such as
        crediting a salary, spending on credit cards, paying bills or insurance/investments through the bank – the interest rate climbs sharply. For example,
        the DBS Multiplier account can offer up to ≈4.1% p.a. on SGD balances when multiple categories (income credit, transactions, etc.) are met (DBS Bank, n.d.).
        OCBC’s 360 Account currently advertises up to an effective 7.65% p.a. on the first $100k balance for customers who achieve all bonus criteria (salary credit +
        increase savings + card spend + insurance + investment) (OCBC Bank, n.d.a). (This is a theoretical maximum; achieving three common categories like salary, saving, and spending
        yields a lower—but still high—rate around 4–5% (OCBC Bank, n.d.a).) UOB’s One Account similarly gives tiered interest; for instance, with salary credit and $500 card spend,
        one could earn roughly 3% to 6% on portions of the balance (translating to about 4% effective annual rate at the upper limit) (Channel News Asia, 2024).
      </p>
      <p>
        <strong>Conditions:</strong> To earn these rates, users must meet the bank’s criteria each month. Typical requirements include crediting a monthly salary (e.g., ≥$1,800),
        spending a minimum amount on a credit card (e.g., $500), paying bills or contributing to investments/insurance with the bank, or increasing the account balance
        (OCBC Bank, n.d.b). The more categories fulfilled (and the higher the transaction amounts), the higher the bonus interest tier. These accounts reward customers who do
        all their banking with one bank. Do note that banks adjust these schemes over time; interest rate ceilings can change with market conditions (for example, OCBC has
        announced a reduction of the max rate to ~6.3% from May 2025 as overall rates ease (Channel News Asia, 2024)). Still, for active users, these accounts currently offer
        3%–5%+ annual interest, far above a regular savings account.
      </p>
      <p>
        <strong>Fixed Deposits:</strong> Fixed or time deposits are another low-risk option. Banks periodically run promotions for fixed deposit interest on SGD funds, especially for longer
        tenors. Currently, 12-month fixed deposit rates at major local banks are in the ~2%–2.5% p.a. range, depending on the bank and deposit amount. For example, in April
        2025, UOB is offering 2.30% p.a. for a 6-month SGD fixed deposit (min $10k fresh funds) (UOB Bank, n.d.), and around 2.0% for a 10-month tenor. OCBC recently offered
        ~2.15% p.a. for 9 months for online placements, and DBS ~2.4%–2.5% for 12 months (Moneysmart, n.d.; StashAway, n.d.) (promotional rates vary month to month). These rates have
        come down from the highs of 3–4% seen in 2023, in line with easing market interest rates. Unlike the flexible savings accounts above, an FD requires you to lock in the deposit
        for the agreed term (early withdrawal typically forfeits the interest). FDs pay a guaranteed interest and are very safe – suitable for those who can set aside a sum of money without
        needing to use it for a fixed period (e.g., 6, 12, or 24 months).
      </p>
      <p>
        <strong>Deposit Insurance (SDIC Coverage):</strong> Both bank savings accounts and FDs are insured by the Singapore Deposit Insurance Scheme. Under this scheme, deposits up to $100,000
        per depositor per bank are protected in the event the bank fails (MoneySense, n.d.c). This coverage includes SGD savings, fixed deposits, and checking accounts. In practice,
        Singapore banks are very stable, but this provides additional peace of mind. Essentially, keeping cash within the insured limit at each bank carries negligible risk of loss,
        making these accounts and FDs a safe place for liquidity or short-term savings. The primary “risk” is that interest rates can fluctuate – e.g., the bank might lower the bonus
        interest criteria or FD rates when market rates fall – and that these returns may not keep up with inflation. Nonetheless, for money that must be kept safe and relatively liquid,
        high-interest bank accounts and FDs are attractive options offering better yields than basic accounts while remaining principal-guaranteed and low-risk.
      </p>

      <h2 className="text-2xl font-bold">Central Provident Fund (CPF)</h2>
      <Image src="/blog-one-4.png" alt="CPF Image" width={800} height={600} className="mx-auto" />
      <p>
        Singapore’s Central Provident Fund (CPF) is a compulsory savings and pension scheme, and it offers its members risk-free interest rates set by the government.
        CPF savings are split into accounts such as the Ordinary Account (OA), Special Account (SA), MediSave Account (MA), and later a Retirement Account (RA). Key details on
        CPF interest and rules:
      </p>
      <p>
        <strong>Current Interest Rates:</strong> CPF funds earn floor interest rates regulated by law. The Ordinary Account earns 2.5% per annum (this is the minimum; it’s pegged to short-term bank
        rates but the government currently maintains a 2.5% floor) (Central Provident Fund Board, n.d.a; Central Provident Fund Board, n.d.b). The Special, MediSave, and Retirement
        Accounts earn 4.0% per annum (pegged to 10-year government bond yields, with a 4% floor extended through end-2025) (Central Provident Fund Board, n.d.a; Central Provident Fund Board,
        n.d.c). These rates are reviewed quarterly but have remained at the floor levels for many years. In effect, CPF provides a guaranteed 2.5% on ordinary savings and 4% on
        special/retirement savings – significantly higher than bank deposit rates – to help Singaporeans grow their retirement nest egg.
      </p>
      <p>
        <strong>Extra Interest (Bonus Rates):</strong> To boost retirement savings, the government pays an extra +1% interest on the first $60,000 of your combined CPF balances (capped at $20,000 from
        the OA) (Central Provident Fund Board, n.d.d). This means for most CPF members under age 55, the effective interest on those amounts is 3.5% in OA and 5% in SA/MA. Furthermore,
        members age 55 and above receive an additional +1% on the first $30,000 of balances. In total, older members earn up to 6% on their lowest balances (4 on first $30k, and 5% on the next
        $30k) (Central Provident Fund Board, n.d.d; Central Provident Fund Board, n.d.e). These bonus interest payments are credited to the SA or RA to further compound.
      </p>
      <p>
        <strong>Withdrawal and Lock-in Rules:</strong> CPF savings are meant for retirement and have restricted access compared to other investments. For younger members, OA funds can be used for specific
        purposes like housing, education, or certain investments, and MediSave is for medical needs – but direct cash withdrawal of CPF money is not allowed until reaching the withdrawal
        age. At age 55, a Retirement Account (RA) is created, and savings up to the Full Retirement Sum (FRS) are set aside in the RA (transferred primarily from SA, then OA) to fund
        retirement income. After this, members may withdraw any CPF savings in excess of the FRS. Even if one has not met the FRS, CPF rules allow a lump-sum withdrawal of $5,000 at age
        55 regardless (Central Provident Fund Board, n.d.f). In other words, upon turning 55 you can withdraw at least $5k, or more if you have extra savings above the required retirement sum.
        The remaining funds stay in CPF to provide monthly payouts in retirement. Payouts begin from the “payout eligibility age” (currently 65), typically via the CPF LIFE annuity scheme which
        converts the RA savings into lifelong monthly income. CPF savings thus have a long lock-in period – for most people, bulk withdrawals can only be done from age 55 (and even then subject to
        retaining the FRS for retirement income). This illiquidity is the trade-off for the high guaranteed rates. CPF is essentially a government-managed retirement fund: it is safe (capital
        guaranteed by the government (Central Provident Fund Board, n.d.b)) and yields a stable return, but one must be comfortable not accessing much of it until the legally specified ages.
      </p>

      <h2 className="text-2xl font-bold">Stocks and ETFs</h2>
      <Image src="/blog-one-8.png" alt="Stocks and ETFs Image" width={800} height={600} className="mx-auto" />
      <p>
        Investing in the stock market offers higher potential returns than fixed income or savings, but with significantly higher volatility and risk. In Singapore, the benchmark for equities
        is the Straits Times Index (STI), which tracks the top 30 blue-chip companies. Key points regarding stocks and equity Exchange-Traded Funds (ETFs):
      </p>
      <p>
        <strong>Long-Term Returns:</strong> Over the long run, equities have delivered strong average returns. Singapore blue-chip stocks historically have produced mid-to-high single-digit annual returns on
        average (including dividends). For example, over the 10-year period ending 2018, the STI generated about 9.2% per annum in total returns (Singapore Exchange, 2019). Over multi-decade
        periods, a more typical annualised return for the STI (with dividends reinvested) might be in the ~5–7% range. In essence, stocks can significantly outperform safer assets like bonds or deposits
        in the long term, making them attractive for growth of capital. Broad equity ETFs, such as the SPDR STI ETF, aim to replicate these market returns by holding the index constituents.
      </p>
      <p>
        <strong>Volatility and Risk:</strong> The flip side of higher return potential is higher volatility. Stock prices fluctuate daily and can swing widely year to year. It is common to see double-digit gains or
        losses in a given year for equity indices. For instance, in recent years the STI (ETF) returned +22% in 2024, but was –7.5% in 2020 during the pandemic downturn (Yahoo Finance, n.d.). Individual stocks can be even more volatile. There is also the risk of permanent loss if a company’s business fails – unlike a bond, there is no guaranteed principal repayment for stocks. Thus, equities are considered a higher-risk asset class, suitable for investors who can tolerate short-term ups and downs in exchange for long-run growth. It is often said that higher returns come with higher risks, which holds true here – stocks historically yield more than fixed income or CPF, but with much larger price risk at any given time (MoneySense, n.d.). Investors should be prepared for possible significant drawdowns; for example, during global financial crises or recessions, stock indexes can drop 30–50% from their peaks.
      </p>
      <p>
        <strong>ETFs and Diversification:</strong> One way to manage risk in stocks is through diversification. Rather than picking single stocks, many investors buy Exchange-Traded Funds (ETFs) that hold a broad basket
        of shares. An index ETF (like an STI ETF) automatically spreads your investment across many companies and sectors, reducing the impact of any one stock’s failure. Investing in ETFs allows you to gain
        exposure to a whole index or sector easily, providing instant diversification (MoneySense, n.d.). This diversification helps reduce idiosyncratic risk (company-specific risk). For example, if
        one company in the STI has a bad year, it may be offset by others doing well – the index smooths out some volatility. That said, market risk remains (an ETF will still drop if the overall market drops). ETFs also come with low fees and can be traded on SGX like a stock, making them convenient. For the Singapore market, popular equity ETFs include the STI ETF, or regional/global ETFs listed here which give exposure beyond local stocks.
      </p>

      <h2 className="text-2xl font-bold">Singapore Real Estate Investment Trusts (REITs)</h2>
      <Image src="/blog-one-7.png" alt="REITs Image" width={800} height={600} className="mx-auto" />
      <p>
        S-REITs are publicly traded real estate investment trusts listed in Singapore that invest in portfolios of property (such as malls, offices, industrial facilities, hotels, etc.) and distribute
        rental income to unitholders. They are a popular investment for yield-focused investors. Key aspects of Singapore REITs:
      </p>
      <p>
        <strong>High Dividend Yields:</strong> REITs are required by regulation to pay out at least 90% of their taxable income to unitholders (Singsaver, n.d.). As a result, S-REITs tend to offer generous dividends.
        The average dividend yield across Singapore REITs is currently quite high – as of mid-2024, the average S-REIT yield was about 8.1% per annum (REITAS, n.d.a). This figure rose in recent years
        because REIT prices declined (when prices fall, the yield % rises). In more “normal” times with higher prices, the S-REIT sector’s yield has typically been in the 5%–6% range. Many individual
        REITs today yield anywhere from ~5% on the low end to 7–8% (or even higher for some) on the high end. These yields are paid quarterly or semi-annually and are a major attraction of REITs,
        providing a steady income stream to investors. By comparison, the 10-year Singapore government bond yields ~3%, so REITs offer a substantial yield spread over risk-free rates (REITAS, n.d.a).
        This reflects the additional risk of equity and property exposure.
      </p>
      <p>
        <strong>Recent Market Trends:</strong> In the past couple of years, S-REIT performance has been challenged by rising global interest rates and economic uncertainties. Because REITs are interest-rate-sensitive
        (investors demand higher yields when risk-free rates rise), the sector saw price declines in 2022–2023. In fact, the FTSE ST REIT Index delivered a total return of –9.5% in 2024 (REITAS, n.d.b),
        meaning the drop in REIT prices outweighed the dividends that year. Over the 5-year period 2020–2024, the REIT index had an annualized negative return (about –10.9% total over that period)
        (REITAS, n.d.b), largely due to the pandemic shock and subsequent interest rate hikes. However, these price corrections have driven yields to very attractive levels (around 7–8% as noted).
        If interest rates stabilize or fall going forward, REIT prices could recover, leading to capital gains in addition to the ongoing dividends. Generally, when interest rates fall or property values rise,
        REITs tend to perform well, and when interest rates rise or during recessions, REIT prices face pressure. Investors have to be mindful of this cyclicality.
      </p>
      <p>
        <strong>Risk Factors:</strong> S-REITs come with a set of risks that combine aspects of both equities and real estate. A primary risk is interest rate risk: REIT prices often move inversely to interest rates, and
        REITs themselves use debt financing – rising interest rates increase their borrowing costs and can squeeze margins or limit growth. (Singapore REITs are subject to a gearing limit of 50% debt-to-assets
        by MAS regulation, and most maintain gearing in the 30–40% range.) Another risk is property market and tenant risk: the income REITs pay depends on rental occupancy, lease rates, and property values.
        Economic downturns or oversupply in the property market can lead to lower rental income or devaluation of properties, which may force a cut in distributions. Many S-REITs have overseas assets – in fact,
        over 90% of S-REITs by number have properties outside Singapore, as managers have expanded globally (REITAS, n.d.c). While this provides diversification and access to higher-yield properties,
        it also introduces currency risk (forex fluctuations can affect income) and foreign market risks (different regulations or economic conditions in those countries). Additionally, because REITs pay out most of
        their income, they retain little cash for expansion – to grow or acquire new assets, they must issue new equity or debt, which can dilute existing holders or add risk if not done prudently.
        Corporate governance and management quality are thus important (MAS has guidelines to ensure REIT managers act in unitholders’ interest (REITAS, n.d.d)).
      </p>

      <p>
        In summary, handling the numerous investment options in Singapore requires you to have a clear idea of your financial goals, your risk tolerance, and your investment horizon.
        Regardless of whether you prefer the security of government bonds and CPF or the growth potential of stocks, ETFs, and REITs, a solid plan can assist you in building a secure financial future.
        If you need assistance to enhance your investment portfolio or manage your money more efficiently, schedule a free call with our team at DareToFinance today! We can assist you in taking
        confident steps towards achieving your financial aspirations.
      </p>

      <h2 className="text-2xl font-bold">References</h2>
      <p>
        Ask.gov.sg. (n.d.). There are no coupon payments for Treasury bills. Retrieved from{" "}
        <a
          href="https://ask.gov.sg/mas/questions/clx8ktis0009rryozmmvbwkqm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://ask.gov.sg/mas/questions/clx8ktis0009rryozmmvbwkqm
        </a>
      </p>
      <p>
        Ask.gov.sg. (n.d.b). What are the fees involved in Savings Bonds?. Retrieved from{" "}
        <a
          href="https://ask.gov.sg/mas/questions/clx8ktirx008bryozek1ytnli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://ask.gov.sg/mas/questions/clx8ktirx008bryozek1ytnli
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.a). What are the CPF interest rates?. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/service/article/what-are-the-cpf-interest-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/service/article/what-are-the-cpf-interest-rates
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.b). Using Your CPF for Investments. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/growing-your-savings/investments/using-your-cpf-for-investments"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/growing-your-savings/investments/using-your-cpf-for-investments
        </a>
      </p>
      <p>
        Channel News Asia. (2024, April 26). UOB, OCBC cut interest rates for some savings accounts from May 1. Retrieved from{" "}
        <a
          href="https://www.channelnewsasia.com/singapore/uob-ocbc-cut-interest-rates-savings-accounts-may-1-5037086"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.channelnewsasia.com/singapore/uob-ocbc-cut-interest-rates-savings-accounts-may-1-5037086
        </a>
      </p>
      <p>
        DBS Bank. (n.d.). Multiplier Account. Retrieved from{" "}
        <a
          href="https://www.dbs.com.sg/personal/deposits/bank-earn/multiplier"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.dbs.com.sg/personal/deposits/bank-earn/multiplier
        </a>
      </p>
      <p>
        Factually. (2023, February 23). The Singapore Government has no net debt. We have a strong balance sheet with assets in excess of liabilities.
        Retrieved from{" "}
        <a
          href="https://www.factually.gov.sg/corrections-and-clarifications/the-singapore-government-has-no-net-debt-we-have-a-strong-balance-sheet-with-assets-in-excess-of-liabilities"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.factually.gov.sg/corrections-and-clarifications/the-singapore-government-has-no-net-debt-we-have-a-strong-balance-sheet-with-assets-in-excess-of-liabilities
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.a). What are the CPF interest rates? Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/service/article/what-are-the-cpf-interest-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/service/article/what-are-the-cpf-interest-rates
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.b). Earning attractive interest. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.c). Earning attractive interest. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.d). Earning attractive interest. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.e). Earning attractive interest. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest
        </a>
      </p>
      <p>
        Central Provident Fund Board. (n.d.f). Withdrawing for immediate retirement needs. Retrieved from{" "}
        <a
          href="https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs
        </a>
      </p>
      <p>
        MoneySense. (n.d.). Assess current situation. Retrieved from{" "}
        <a
          href="https://www.mymoneysense.gov.sg/retirement-resources/assess-current-situation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.mymoneysense.gov.sg/retirement-resources/assess-current-situation
        </a>
      </p>
      <p>
        MoneySense. (n.d.). Guide to ETFs: How synthetic ETFs work. Retrieved from{" "}
        <a
          href="https://www.moneysense.gov.sg/guide-to-etfs-how-synthetic-etfs-work/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.moneysense.gov.sg/guide-to-etfs-how-synthetic-etfs-work/
        </a>
      </p>
      <p>
        REITAS. (n.d.a). Overview of the S-REIT industry. Retrieved from{" "}
        <a
          href="https://www.reitas.sg/singapore-reits/overview-of-the-s-reit-industry/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.reitas.sg/singapore-reits/overview-of-the-s-reit-industry/
        </a>
      </p>
    </div>
  )
}

// Types and Interfaces
interface Keyword {
  keyword: string
  intent: string
  difficulty: number
  volume: number
}

interface SearchResult {
  id: string
  title: string
  url: string
  description: string
  images: {
    id: string
    src: string
    alt: string
  }[]
}

// Sample Data for keywords and search results
const keywordsData: Keyword[] = [
  { keyword: "Best Investments in Singapore", intent: "Informational", difficulty: 2, volume: 1300 },
  { keyword: "Investment options in singapore", intent: "Commercial", difficulty: 2, volume: 2500 },
]

const searchResults: SearchResult[] = [
  {
    id: "investment1",
    title: "First Google Result: Investment Insights",
    url: "https://www.example.com/investment-insights",
    description: "Explore the latest investment insights in Singapore.",
    images: [
      {
        id: "inv1",
        src: "/blog-one.png",
        alt: "Investment Insights Image 1",
      },
      {
        id: "inv2",
        src: "/blog-one-1.png",
        alt: "Investment Insights Image 2",
      },
    ],
  },
  {
    id: "investment2",
    title: "Second Google Result: Investment Opportunities",
    url: "https://www.example.com/investment-opportunities",
    description: "Discover promising investment opportunities in Singapore.",
    images: [
      {
        id: "inv3",
        src: "/blog-one-2.png",
        alt: "Investment Opportunities Image 1",
      },
      {
        id: "inv4",
        src: "/blog-one-3.png",
        alt: "Investment Opportunities Image 2",
      },
    ],
  },
]

// Modal and ImageGallery components for search result images
interface ModalProps {
  images: SearchResult["images"]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

function Modal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="relative mx-auto max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black/90 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface ImageGalleryProps {
  images: SearchResult["images"]
  onImageClick: (index: number) => void
}

function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-muted"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Page() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    currentImages: searchResults[0].images,
  })

  const handleImageClick = (resultImages: SearchResult["images"], index: number) => {
    setModalState({
      isOpen: true,
      currentIndex: index,
      currentImages: resultImages,
    })
  }

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  const handleNext = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.currentImages.length,
    }))
  }

  const handlePrevious = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.currentImages.length) % prev.currentImages.length,
    }))
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modalState.isOpen) return
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "Escape") handleClose()
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [modalState.isOpen])

  return (
    <main className="container mx-auto py-8 px-4 md:px-6 max-w-6xl">
      <section className="mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Best Investments in Singapore
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and analysis for investment opportunities in Singapore.
          </p>
          <div className="flex justify-end">
            <Button asChild>
              <a href="https://docs.google.com/document/d/1J3qGqykJf_rpCJWtvudmhmG2ZPcxwZAXBfsSLRP8pJI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                Edit Document
              </a>
            </Button>
          </div>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Overview of target keywords and their metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Keyword</TableHead>
                    <TableHead>Intent</TableHead>
                    <TableHead className="text-right">Difficulty</TableHead>
                    <TableHead className="text-right">Traffic Potential</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordsData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {item.intent}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{item.difficulty}</TableCell>
                      <TableCell className="text-right">{item.volume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {searchResults.map((result, idx) => (
          <div key={result.id}>
            {idx === 1 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>
                    <div className="bg-green-200 text-green-900 font-bold p-4 rounded-xl text-lg text-center">
                      ✅ This article is ready for feedback. The article will be published - <span className="underline">pending your approval</span>.
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <InvestmentArticleDisplay />
                </CardContent>
              </Card>
            )}
          </div>
        ))}

        <AnimatePresence>
          {modalState.isOpen && (
            <Modal
              images={modalState.currentImages}
              currentIndex={modalState.currentIndex}
              isOpen={modalState.isOpen}
              onClose={handleClose}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
