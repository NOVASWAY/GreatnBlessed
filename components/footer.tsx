import Link from "next/link"

export function Footer() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="py-10 sm:py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 mt-auto border-t border-gray-700">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GreatnBlessedCustoms
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Express Your Style with Custom Clothing
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-all duration-200 min-h-[44px] flex items-center justify-center md:justify-start hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Get in Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Custom designs made for you</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-2 text-white hover:text-purple-400 font-semibold transition-all duration-200 hover:gap-3"
              >
                Contact Us
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; 2025 GreatnBlessedCustoms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

