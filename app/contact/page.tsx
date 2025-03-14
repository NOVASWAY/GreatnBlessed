import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="https://wa.me/27768592764"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>076 859 2764</span>
            </a>
            <a
              href="https://wa.me/27799394191"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>079 939 4191</span>
            </a>
            <a
              href="https://instagram.com/greatnblessedcustoms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transform hover:scale-105 transition-all"
            >
              <Instagram className="w-6 h-6" />
              <span>@greatnblessedcustoms</span>
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                className="mt-1 hover:border-primary focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 hover:border-primary focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="mt-1 hover:border-primary focus:border-primary transition-colors"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full transform hover:scale-105 transition-all">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

