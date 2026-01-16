import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
            V
          </div>
          <span className="text-xl font-bold text-foreground">Shri Vignesh Prints</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground hover:text-primary transition">
            Services
          </Link>
          <Link href="#portfolio" className="text-foreground hover:text-primary transition">
            Portfolio
          </Link>
          <Link href="#pricing" className="text-foreground hover:text-primary transition">
            Pricing
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </nav>

        <Button className="hidden md:block bg-primary hover:bg-primary/90">Get Quote</Button>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
