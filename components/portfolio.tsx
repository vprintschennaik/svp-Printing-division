"use client"

import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    category: "Brochures",
    title: "Corporate Brochure Design",
    image: "/professional-corporate-brochure.jpg",
  },
  {
    id: 2,
    category: "Banners",
    title: "Large Format Banner",
    image: "/vibrant-large-format-banner-design.jpg",
  },
  {
    id: 3,
    category: "Packaging",
    title: "Custom Product Box",
    image: "/custom-packaging-design-box.jpg",
  },
  {
    id: 4,
    category: "Flyers",
    title: "Event Flyer Design",
    image: "/colorful-event-flyer.jpg",
  },
  {
    id: 5,
    category: "Labels",
    title: "Product Labels",
    image: "/product-label.png",
  },
  {
    id: 6,
    category: "Signage",
    title: "Shop Signage",
    image: "/retail-shop-signage-design.jpg",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Brochures", "Banners", "Packaging", "Flyers", "Labels", "Signage"]

  const filtered =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our latest and finest printing projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm text-white/80">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
