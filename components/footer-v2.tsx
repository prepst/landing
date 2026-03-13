"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FooterV2() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 rounded-3xl border border-gray-100 bg-[#faf9ff] p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#674bc4] to-[#5a3fb0] flex items-center justify-center shadow-lg shadow-[#dad3fd_/_0.5]">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">PrepSt</span>
            </Link>
            <p className="text-lg font-semibold text-gray-900">
              Free SAT prep, built by students for students.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              No pricing page. No premium tier. Just a better way to study.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://sat.prepst.com/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#dad3fd] px-6 py-3 font-semibold text-[#674bc4] shadow-lg shadow-[#dad3fd_/_0.35] transition-colors hover:bg-[#c8befc]"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@prepst.com"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:border-[#dad3fd] hover:text-[#674bc4]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PrepSt</p>
          <p>Built by students, for students</p>
        </div>
      </div>
    </footer>
  )
}
