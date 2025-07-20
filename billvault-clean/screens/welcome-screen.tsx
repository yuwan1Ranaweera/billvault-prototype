"use client"

import { Button } from "@/components/ui/button"
import { StatusBar } from "../components/status-bar"
import { Scan, Languages, QrCode } from "lucide-react"
import Image from "next/image" // Import the Image component from Next.js

interface WelcomeScreenProps {
  onLogin: () => void
  onSignUp: () => void
}

export function WelcomeScreen({ onLogin, onSignUp }: WelcomeScreenProps) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Custom Brand Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #2E073F 0%, #7A1CAC 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-6 w-20 h-20 bg-indigo-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-16 h-full w-full">
            {Array.from({ length: 128 }).map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>
      </div>

      <StatusBar isDark />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
          {/* Logo/Icon */}
          <Image
            src="/images/logo.png" // Path to your updated logo
            alt="BillVault App Logo - Stylized Bill Icon" // Descriptive alt text for accessibility
            width={96} // Set appropriate width for your logo
            height={96} // Set appropriate height for your logo
            className="object-contain mb-8 rounded-3xl shadow-2xl ring-1 ring-white/30" // Maintain aspect ratio and add styling
            priority // Prioritize loading for LCP
          />

          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">BillVault</h1>
          <p className="text-xl text-white/90 mb-2 font-medium">Smart Document Management</p>
          <p className="text-lg text-white/70 mb-8 leading-relaxed px-4">
            {" "}
            {/* Reduced mb-12 to mb-8 */}
            OCR scanning, QR codes, and AI-powered bill organization
          </p>

          {/* Feature Pills - Reverted to original horizontal alignment */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {" "}
            {/* Reduced mb-12 to mb-8 */}
            <div className="flex items-center bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 ring-1 ring-white/30">
              <Scan className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">OCR Scan</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 ring-1 ring-white/30">
              <QrCode className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">QR Codes</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 ring-1 ring-white/30">
              <Languages className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">Multi-Lang</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - Moved up by adjusting margins above */}
        <div className="p-6 space-y-4">
          <Button
            onClick={onSignUp}
            className="w-full bg-white hover:bg-gray-50 text-slate-900 py-4 rounded-2xl text-lg font-semibold h-14 shadow-xl transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started Free
          </Button>

          <Button
            onClick={onLogin}
            variant="outline"
            className="w-full border-2 border-white/30 text-white hover:bg-white/10 py-4 rounded-2xl text-lg font-semibold bg-transparent h-14 backdrop-blur-xl transition-all duration-200 hover:scale-[1.02]"
          >
            Sign In
          </Button>

          <p className="text-center text-white/60 text-sm mt-4">Trusted by 50,000+ users worldwide</p>
        </div>
      </div>
    </div>
  )
}
