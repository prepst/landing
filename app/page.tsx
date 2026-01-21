import { PrepstNav } from "@/components/prepst-nav"
import { PrepstHero } from "@/components/prepst-hero"
import { PrepstFeatures } from "@/components/prepst-features"
import { PrepstSocialProof } from "@/components/prepst-social-proof"
import { PrepstDataViz } from "@/components/prepst-data-viz"
import { PrepstClosing } from "@/components/prepst-closing"
import { PrepstFooter } from "@/components/prepst-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PrepstNav />
      <main>
        <PrepstHero />
        <PrepstFeatures />
        <PrepstSocialProof />
        <PrepstDataViz />
        <PrepstClosing />
      </main>
      <PrepstFooter />
    </div>
  )
}
