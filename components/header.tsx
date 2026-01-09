"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { smoothScrollTo, getActiveSection } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("/")
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", scroll: false },
    { href: "#gallery", label: "Gallery", scroll: true },
    { href: "#how-it-works", label: "How It Works", scroll: true },
  ]

  // Handle scroll to update active section
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname)
      return
    }

    const sections = ["#gallery", "#how-it-works"]

    const handleScroll = () => {
      setActiveSection(getActiveSection(sections))
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [pathname])

  const handleNavClick = (href: string, isScroll: boolean) => {
    setIsOpen(false)
    if (isScroll && href.startsWith("#")) {
      setTimeout(() => smoothScrollTo(href, 80), 100)
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll: boolean) => {
    if (isScroll && href.startsWith("#")) {
      e.preventDefault()
      smoothScrollTo(href, 80)
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary/98 backdrop-blur-md supports-[backdrop-filter]:bg-primary/90 text-primary-foreground shadow-lg">
      <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="text-lg sm:text-xl md:text-2xl font-bold hover:opacity-90 transition-all duration-200 flex-shrink-0 group"
        >
          <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-white group-hover:to-yellow-200 transition-all duration-300">
            GreatnBlessed
          </span>
          <span className="hidden sm:inline text-white/90 group-hover:text-white transition-colors">Customs</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === "/" 
              ? (item.href === "/" ? activeSection === "/" : activeSection === item.href)
              : pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href, item.scroll)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  "hover:bg-primary-foreground/15 hover:text-primary-foreground hover:scale-105",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/20",
                  isActive && "bg-primary-foreground/15 text-primary-foreground shadow-sm"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-foreground" />
                )}
              </Link>
            )
          })}
          <Link href="/contact" className="ml-2">
            <Button 
              variant="secondary" 
              size="sm"
              className="font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[85vw] sm:w-[400px] bg-background/95 backdrop-blur"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-1">Menu</h2>
                <p className="text-sm text-muted-foreground">Navigate through our site</p>
              </div>
              
              <nav className="flex flex-col space-y-2 flex-1">
                {navItems.map((item) => {
                  const isActive = pathname === "/" 
                    ? (item.href === "/" ? activeSection === "/" : activeSection === item.href)
                    : pathname === item.href
                  
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href, item.scroll)}
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                          "hover:bg-accent hover:text-accent-foreground",
                          "active:scale-[0.98] touch-manipulation",
                          isActive && "bg-accent text-accent-foreground font-semibold"
                        )}
                      >
                        <span className="flex-1">{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-primary ml-2" />
                        )}
                      </Link>
                    </SheetClose>
                  )
                })}
                
                <div className="pt-4 mt-4 border-t">
                  <SheetClose asChild>
                    <Link 
                      href="/contact" 
                      onClick={() => handleNavClick("/contact", false)}
                      className="block"
                    >
                      <Button 
                        variant="default" 
                        className="w-full font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

