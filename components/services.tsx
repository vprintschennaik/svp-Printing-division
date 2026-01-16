import { PrinterIcon, Package, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: PrinterIcon,
    title: "General Printing",
    description:
      "High-quality business cards, brochures, flyers, letterheads and more. Perfect for your marketing needs.",
    items: ["Business Cards", "Brochures", "Flyers", "Letterheads"],
  },
  {
    icon: Package,
    title: "Wide Format",
    description: "Large format banners, posters, and signage. Make a bold statement with vibrant colors.",
    items: ["Banners", "Posters", "Signage", "Display Graphics"],
  },
  {
    icon: Package,
    title: "Packaging & Labels",
    description: "Custom boxes, labels, stickers and packaging solutions that make your products stand out.",
    items: ["Custom Boxes", "Labels", "Stickers", "Packaging"],
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Rush orders available. Get your printing done fast without compromising on quality.",
    items: ["24-Hour Service", "Express Delivery", "Same-Day Quotes", "Flexible Scheduling"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
