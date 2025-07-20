"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { PurpleWaveBg } from "../components/purple-wave-bg"

interface SignUpVerificationProps {
  onBack: () => void
  onContinue: () => void
}

export function SignUpVerification({ onBack, onContinue }: SignUpVerificationProps) {
  return (
    <PurpleWaveBg>
      <StatusBar isDark />

      <div className="absolute top-16 left-6 z-10">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-0 h-auto">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Button>
      </div>

      <div className="relative z-10 pt-32 px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign Up</h1>
        <div className="w-16 h-1 bg-purple-300 rounded mb-12"></div>

        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Enter confirmation code</h2>
          <p className="text-sm text-gray-600">
            A 4-digit code was sent to
            <br />
            name@email.com
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <Input
              key={i}
              type="text"
              maxLength={1}
              className="w-14 h-14 text-center text-xl font-semibold rounded-xl border-gray-200 bg-gray-50 focus:bg-white"
            />
          ))}
        </div>

        <div className="text-center mb-8">
          <Button variant="link" className="text-purple-700 p-0 h-auto font-medium">
            Resend code
          </Button>
        </div>

        <Button
          onClick={onContinue}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-full text-lg font-semibold h-14"
        >
          Continue
        </Button>
      </div>
    </PurpleWaveBg>
  )
}
