"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Instagram } from "lucide-react"

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <main className="flex-grow container py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Funky Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Let's Get Creative! 🎨
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              Reach out and let's make something amazing together
            </p>
          </div>
          
          {/* Contact Cards with Funky Layout */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* WhatsApp 1 */}
            <a
              href="https://wa.me/254768592764"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 touch-manipulation"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center sm:justify-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                    <WhatsAppIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white/80 text-sm sm:text-base font-medium mb-1">WhatsApp</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">+254 768 592 764</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-white/20 text-6xl font-bold transform rotate-12">💬</div>
            </a>
            
            {/* WhatsApp 2 */}
            <a
              href="https://wa.me/254799394191"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 touch-manipulation"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center sm:justify-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping animation-delay-200"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce animation-delay-200">
                    <WhatsAppIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white/80 text-sm sm:text-base font-medium mb-1">WhatsApp</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">+254 799 394 191</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-white/20 text-6xl font-bold transform -rotate-12">✨</div>
            </a>
            
            {/* Instagram */}
            <a
              href="https://instagram.com/greatnblessedcustoms"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 touch-manipulation"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center sm:justify-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping animation-delay-400"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce animation-delay-400">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white/80 text-sm sm:text-base font-medium mb-1">Instagram</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">@greatnblessedcustoms</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-white/20 text-6xl font-bold transform rotate-12">📸</div>
            </a>
          </div>

          {/* Fun Decorative Elements */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <span className="text-2xl animate-bounce">🎨</span>
              <span className="text-sm font-medium">Ready to create something unique?</span>
              <span className="text-2xl animate-bounce animation-delay-200">✨</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

