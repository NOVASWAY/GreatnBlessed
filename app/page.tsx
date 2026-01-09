"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { smoothScrollTo } from "@/lib/navigation"
import Link from "next/link"

export default function Home() {
  const handleViewGallery = () => {
    smoothScrollTo("#gallery", 80)
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
          </div>
          
          <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 text-center md:text-left space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Express Your Style</span>
                    <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                      with GreatnBlessedCustoms
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-xl">
                    Unleash your creativity with premium custom clothing designs that reflect your unique personality.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto min-h-[50px] px-8 text-base font-semibold shadow-lg hover:shadow-xl"
                    >
                      Start Customizing
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleViewGallery}
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 transform hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto min-h-[50px] px-8 text-base font-semibold"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-0">
                <div className="relative w-full max-w-lg group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.36%20(2)-ySCOJxEKwIRzY1vymghKEv8WixYIQv.jpeg"
                      alt="Custom anime design t-shirt"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of unique, handcrafted designs that bring your vision to life
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.33-OcFrCB9FAMkzgtN4832jXlWqHEhVEm.jpeg",
                  alt: "Classical Art T-Shirt Design",
                  title: "Classical Art Prints",
                  description: "Timeless renaissance artwork transformed into wearable masterpieces.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.34-jpafgTYH9AM0dgAa8vHTbEcTTnT7bO.jpeg",
                  alt: "Modern Collage T-Shirt Design",
                  title: "Custom Collages",
                  description: "Modern photo collages that tell your unique story.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.35-iOMf5eSFM3PcE0gCe0E61DlgHvWZ0r.jpeg",
                  alt: "Typography T-Shirt Design",
                  title: "Urban Typography",
                  description: "Bold typographic designs with urban style elements.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.37-5hOJxjHJstGHvo0LGaj2zXeiDP8cUk.jpeg",
                  alt: "Money Theme T-Shirt Design",
                  title: "Street Culture",
                  description: "Contemporary street art inspired designs.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.36-NfyCxb0sa9XCNfCLRqjGo8Z1OrncE0.jpeg",
                  alt: "Anime Grid Hoodie Design",
                  title: "Anime Collection",
                  description: "Vibrant anime-inspired designs for hoodies and shirts.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.35%20(1)-mvHNBAGjCjR2YLfB4aKG1LyPBYhkML.jpeg",
                  alt: "Anime Eyes Hoodie Design",
                  title: "Character Art",
                  description: "Detailed character artwork for unique statement pieces.",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/contact"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] hover:-translate-y-2 active:scale-100 transition-all duration-300 hover:shadow-2xl touch-manipulation border border-gray-100 cursor-pointer"
                >
                  <div className="relative w-full aspect-square sm:aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-gray-50">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple steps to get your custom design created
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {[
                { step: 1, title: "Tell us what you want", icon: "💡", color: "from-yellow-400 to-orange-500" },
                { step: 2, title: "We make it happen", icon: "🎨", color: "from-purple-400 to-pink-500" },
                { step: 3, title: "You look amazing!", icon: "🌟", color: "from-blue-400 to-cyan-500" },
              ].map((step, index) => (
                <Link
                  key={step.step}
                  href="/contact"
                  className="group relative text-center transform hover:scale-105 hover:-translate-y-2 active:scale-100 transition-all duration-300 p-6 sm:p-8 touch-manipulation cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce-subtle">{step.icon}</span>
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

