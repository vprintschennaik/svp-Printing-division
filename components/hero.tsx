import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-orange-600 text-white py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">Print Your Vision to Reality</h1>
          <p className="text-xl sm:text-2xl mb-10 text-white/90 text-balance max-w-3xl mx-auto">
            Premium printing services for brochures, flyers, banners, packaging and labels. Quality you can see. Results
            you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
