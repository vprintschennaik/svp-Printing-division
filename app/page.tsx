"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              V
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Shri Vignesh Prints</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-orange-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Print Your Vision to Reality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium printing services for brochures, flyers, banners, packaging and labels
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-600">General Printing</h3>
              <p className="text-gray-600">Brochures, flyers, business cards, posters and more</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Wide Format</h3>
              <p className="text-gray-600">Banners, large posters, and display materials</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Packaging</h3>
              <p className="text-gray-600">Custom boxes, labels, and packaging solutions</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Quick Turnaround</h3>
              <p className="text-gray-600">Fast delivery without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                ></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700">
                Send Inquiry
              </button>
            </form>
            <div className="mt-8 pt-8 border-t text-center space-y-2">
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a href="tel:9444944196" className="text-orange-600 hover:underline">
                  9444 944 196
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:vprintschennaik@gmail.com" className="text-orange-600 hover:underline">
                  vprintschennaik@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Shri Vignesh Prints. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
