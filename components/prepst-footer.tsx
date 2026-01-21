import Link from "next/link"

const footerLinks = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Practice Tests", href: "/practice" },
        { label: "Vocabulary", href: "/vocab" },
    ],
    Resources: [
        { label: "SAT Guide", href: "/guide" },
        { label: "Study Tips", href: "/tips" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "/press" },
    ],
    Legal: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
    ],
}

export function PrepstFooter() {
    return (
        <footer className="bg-[oklch(0.98_0.01_270)] border-t border-[oklch(0.94_0.01_270)]">
            <div className="prepst-container px-6 py-12 lg:py-16">
                {/* Main footer content */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.18_165)] to-[oklch(0.50_0.20_175)] flex items-center justify-center">
                                <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <span className="font-bold text-xl text-[oklch(0.15_0.02_270)]">PrepSt</span>
                        </Link>
                        <p className="text-sm text-[oklch(0.55_0.02_270)] mb-4 max-w-xs">
                            Smarter SAT prep for the modern student. Personalized, adaptive, and actually fun.
                        </p>
                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: "𝕏", href: "https://twitter.com/prepst" },
                                { icon: "📸", href: "https://instagram.com/prepst" },
                                { icon: "💼", href: "https://linkedin.com/company/prepst" },
                                { icon: "📺", href: "https://youtube.com/@prepst" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white border border-[oklch(0.92_0.01_270)] flex items-center justify-center text-sm hover:border-[var(--prepst-mint)] hover:bg-[var(--prepst-mint-light)] transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-[oklch(0.25_0.02_270)] mb-4">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[oklch(0.50_0.02_270)] hover:text-[oklch(0.55_0.18_165)] transition-colors"
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
                <div className="mt-12 pt-8 border-t border-[oklch(0.92_0.01_270)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[oklch(0.55_0.02_270)]">
                        © {new Date().getFullYear()} PrepSt. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-[oklch(0.55_0.02_270)]">Made with</span>
                        <span className="text-red-500">❤️</span>
                        <span className="text-sm text-[oklch(0.55_0.02_270)]">by students, for students</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
