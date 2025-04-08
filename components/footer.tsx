import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-4">
              {/* Replace text with Image component */}
              <Image src="/logodesign.png" alt="Logo" width={140} height={140} className="h-50 w-auto" priority />
            </Link>
            <p className="text-zinc-400">
              A leading digital design agency specializing in creative solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.facebook.com/artunexdesign/" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.instagram.com/artynexdesign/" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://x.com/artynexdesign" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="www.linkedin.com/in/artynex" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.youtube.com/channel/UCOCuX9B9W5izpmO8ecynaQQ" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/graphic-design" className="text-zinc-400 hover:text-purple-500 transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/uiuxdesign" className="text-zinc-400 hover:text-purple-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/Branding" className="text-zinc-400 hover:text-purple-500 transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/motion-graphics" className="text-zinc-400 hover:text-purple-500 transition-colors">
                  Motion Graphics
                </Link>
              </li>
              <li>
                <Link href="/services/ar-vr-design" className="text-zinc-400 hover:text-purple-500 transition-colors">
                  AR/VR Design
                </Link>
              </li>
              <li>
                <Link href="/services/eventdesign" className="text-zinc-400 hover:text-purple-500 transition-colors">
                Event Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/about" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/team" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/services/careers" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link href="/insights" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Insights
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Subscribe
            </h3>
            <p className="text-zinc-400 mb-4">Subscribe to our newsletter to receive updates and creative insights.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px] bg-black border-zinc-700" />
              <Button size="icon" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} Artynex. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-zinc-400 hover:text-purple-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-zinc-400 hover:text-purple-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-zinc-400 hover:text-purple-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

