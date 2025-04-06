import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-4">
            {/* Replace text with Image component */}
            <Image 
              src="/logodesign.png" 
              alt="Logo" 
              width={140} 
              height={140} 
              className="h-50 w-auto"
              priority
            />
          </Link>
            <p className="text-muted-foreground">
              A leading digital design agency specializing in creative solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" asChild>
                <Link href="#" aria-label="Facebook">
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
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/graphic-design"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/motion-graphics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Motion Graphics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ar-vr-design"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AR/VR Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sound-design"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sound Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates and creative insights.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Artynex. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

