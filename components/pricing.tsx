import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Standard",
    description: "Perfect for small projects",
    price: "Starting at",
    amount: "₹500",
    features: [
      "Digital design consultation",
      "Up to 2 revisions",
      "Standard turnaround (5-7 days)",
      "Basic color correction",
      "Single quantity printing",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "Starting at",
    amount: "₹2,000",
    featured: true,
    features: [
      "Professional design team",
      "Unlimited revisions",
      "Rush turnaround (2-3 days)",
      "Color matching",
      "Bulk quantity discounts",
      "Free design mockups",
    ],
  },
  {
    name: "Enterprise",
    description: "For large campaigns",
    price: "Custom Quote",
    amount: "",
    features: [
      "Dedicated account manager",
      "Custom design solutions",
      "Express production",
      "Special finishing options",
      "Volume discounts",
      "Priority support 24/7",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include quality assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 transition-all ${
                plan.featured ? "border-2 border-primary shadow-xl transform md:scale-105" : "border border-border"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">{plan.price}</p>
                <p className="text-3xl font-bold text-primary">{plan.amount}</p>
              </div>
              <Button
                className={`w-full mb-8 ${
                  plan.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
