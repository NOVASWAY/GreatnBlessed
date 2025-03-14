import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
          <div className="container px-4 mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Express Your Style with GreatnBlessedCustoms!</h1>
              <p className="text-lg md:text-xl mb-6">Unleash your creativity with our custom clothing designs.</p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100 transform hover:scale-105 transition-all"
              >
                Start Customizing
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2022.36.36%20(2)-ySCOJxEKwIRzY1vymghKEv8WixYIQv.jpeg"
                alt="Custom anime design t-shirt"
                width={400}
                height={400}
                className="rounded-lg shadow-lg hover:opacity-90 transition-opacity max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-12 md:py-16 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Custom Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={600}
                    height={600}
                    className="w-full h-60 sm:h-80 object-cover hover:opacity-90 transition-opacity"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Tell us what you want", icon: "💡" },
                { step: 2, title: "We make it happen", icon: "🎨" },
                { step: 3, title: "You look amazing!", icon: "🌟" },
              ].map((step) => (
                <div key={step.step} className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {step.step}. {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

