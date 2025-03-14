import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="py-4 bg-primary text-primary-foreground">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GreatnBlessedCustoms
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#examples">Examples</Link>
            </li>
            <li>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

