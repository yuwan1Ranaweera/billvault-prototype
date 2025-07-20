"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { PurpleWaveBg } from "../components/purple-wave-bg"

interface SignUpIndividualProps {
  onBack: () => void
  onContinue: () => void
}

export function SignUpIndividual({ onBack, onContinue }: SignUpIndividualProps) {
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
        <div className="w-16 h-1 bg-purple-300 rounded mb-4"></div>

        <h2 className="text-lg font-semibold text-gray-900 mb-8">Create an account to get started</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-full h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <Input
              type="email"
              placeholder="name@email.com"
              className="w-full h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Create a password"
                className="w-full h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white pr-12"
              />
              <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <div className="relative">
              <Input
                type="password"
                placeholder="Confirm password"
                className="w-full h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white pr-12"
              />
              <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-start space-x-3 pt-4">
            <Checkbox id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              {"I've read and agree with the "}
              <span className="text-purple-700 font-medium">Terms and Conditions</span>
              {" and the "}
              <span className="text-purple-700 font-medium">Privacy Policy</span>
            </label>
          </div>

          <Button
            onClick={onContinue}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-full text-lg font-semibold h-14 mt-8"
          >
            Continue
          </Button>
        </div>
      </div>
    </PurpleWaveBg>
  )
}
