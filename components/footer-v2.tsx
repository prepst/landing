"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Results", href: "#testimonials" },
    { label: "SAT App", href: "https://sat.prepst.com/" },
    { label: "Pricing", href: "#" },
  ],
  Resources: [
    { label: "Study Tips", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:hello@prepst.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/prepst", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/prepst", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/prepst", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@prepst", label: "YouTube" },
]

export function FooterV2() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#674bc4] to-[#5a3fb0] flex items-center justify-center shadow-lg shadow-[#dad3fd_/_0.5]">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">PrepSt</span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              The AI-powered SAT prep platform that adapts to how you learn. Free, personalized, and actually effective.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#dad3fd] hover:text-[#674bc4] hover:border-[#dad3fd] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#674bc4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PrepSt. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>by students, for students</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
