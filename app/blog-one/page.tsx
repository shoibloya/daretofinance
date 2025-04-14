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
              href="https://docs.google.com/document/d/your-doc-id/edit?usp=sharing"
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
    </main>
  )
}
