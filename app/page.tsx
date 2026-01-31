import { NavV2 } from "@/components/nav-v2"
import { HeroV2 } from "@/components/hero-v2"
import { ProblemV2 } from "@/components/problem-v2"
import { SolutionV2 } from "@/components/solution-v2"
import { FeaturesV2 } from "@/components/features-v2"
import { TestimonialsV2 } from "@/components/testimonials-v2"
import { ComparisonV2 } from "@/components/comparison-v2"
import { FAQV2 } from "@/components/faq-v2"
import { CTAFinalV2 } from "@/components/cta-final-v2"
import { FooterV2 } from "@/components/footer-v2"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavV2 />
      <main>
        <HeroV2 />
        <ProblemV2 />
        <SolutionV2 />
        <FeaturesV2 />
        <TestimonialsV2 />
        <ComparisonV2 />
        <div id="faq">
          <FAQV2 />
        </div>
        <CTAFinalV2 />
      </main>
      <FooterV2 />
    </div>
  )
}
