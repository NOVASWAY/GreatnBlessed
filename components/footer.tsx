import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 bg-secondary text-secondary-foreground">
      <div className="container text-center">
        <p>&copy; 2025 GreatnBlessedCustoms. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

