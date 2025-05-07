"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogOneArticlePage() {
  const [htmlContent, setHtmlContent] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/blog-one/blog-one.html")
      .then((res) => res.text())
      .then((htmlText) => {
        // Parse the HTML using DOMParser.
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlText, "text/html")

        // Remove all <style> blocks.
        doc.querySelectorAll("style").forEach((styleEl) => styleEl.remove())

        // Remove inline style attributes from all elements
        // EXCEPT for IMG elements and elements that appear to be cropping containers.
        doc.querySelectorAll("[style]").forEach((el) => {
          // If an element is an image, or if it is a <span> (or any element) that has an inline style
          // containing "overflow" (assumed cropping container), then preserve it.
          const tag = el.tagName
          if (tag === "IMG") return
          const styleStr = el.getAttribute("style") || ""
          if (styleStr.includes("overflow")) return
          // Otherwise, remove the style.
          el.removeAttribute("style")
        })

        // Fix image paths and adjust image properties.
        doc.querySelectorAll("img").forEach((img) => {
          // Update image paths: if src starts with "images/", then prefix with "/blog-one/"
          const src = img.getAttribute("src")
          if (src && src.startsWith("images/")) {
            img.setAttribute("src", `/blog-one/${src}`)
          }
          // Add Tailwind classes to center the image.
          img.classList.add("mx-auto", "block")
          
          // Determine if this image is already inside a cropping container.
          // (We check its immediate parent. Adjust if needed for deeper nesting.)
          let isCropped = false
          const parent = img.parentElement
          if (parent && parent.getAttribute("style")?.includes("overflow")) {
            isCropped = true
          }
          // If the image is NOT in a cropping container, apply a fixed size.
          if (!isCropped) {
            // Instead of overriding existing cropping properties, only set default size
            // for images that are not cropped.
            img.style.width = "400px"
            img.style.height = "300px"
            // Use object-fit: contain so that the whole image is visible.
            img.style.objectFit = "contain"
          }
        })

        // Define a set of class names (from the original HTML) that indicate bold text.
        const boldClasses = new Set(["c17", "c19", "c10", "c8"])
        doc.querySelectorAll("*").forEach((el) => {
          const classAttr = el.getAttribute("class")
          if (classAttr) {
            const classes = classAttr.split(" ")
            if (classes.some((cls) => boldClasses.has(cls))) {
              el.classList.add("font-bold")
            }
          }
        })

        // Use the processed HTML from the document's body.
        const finalHtml = doc.body.innerHTML
        setHtmlContent(finalHtml)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching HTML file:", error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <main className="container mx-auto py-8 px-4 md:px-6 max-w-6xl">
        <p>Loading article…</p>
      </main>
    )
  }

  return (
    <main className="container mx-auto py-8 px-4 md:px-6 max-w-6xl">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Blog One Article</h1>
        <div className="flex justify-end">
          <Button asChild>
            <a
              href="https://docs.google.com/document/d/1uoXeKdFBxFZ7SL_XIEyrDJVnV7lJkaPPqMmmyF9rFNI/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit Document
            </a>
          </Button>
        </div>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Article Content</CardTitle>
        </CardHeader>
        <CardContent>
          {/* The Tailwind classes here (prose, prose-lg, max-w-none) apply your typography styles.
              The processed HTML—with images centered and fixed if not cropped—is rendered below. */}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </CardContent>
      </Card>
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
    </main>
    
  )
}
