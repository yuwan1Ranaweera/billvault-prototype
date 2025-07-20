"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface IndividualSignUpProps {
  onBack: () => void
  onSignUp: () => void
  onLogin: () => void
}

export function IndividualSignUp({ onBack, onSignUp, onLogin }: IndividualSignUpProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Individual Account</h1>
        <div className="w-10"></div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-20">
        <div className="px-6 pt-2">
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)" }}
            >
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Your Account</h2>
            <p className="text-slate-600">Start managing your bills smarter</p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                  style={{ "--tw-ring-color": "#9B7EBD" } as any}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                  style={{ "--tw-ring-color": "#9B7EBD" } as any}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Phone Number (Optional)</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                  style={{ "--tw-ring-color": "#9B7EBD" } as any}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                  style={{ "--tw-ring-color": "#9B7EBD" } as any}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-auto"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                  style={{ "--tw-ring-color": "#9B7EBD" } as any}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-auto"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox id="terms" className="mt-1 rounded-md" />
              <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                I agree to the{" "}
                <span className="font-medium" style={{ color: "#9B7EBD" }}>
                  Terms of Service
                </span>
                {" and "}
                <span className="font-medium" style={{ color: "#9B7EBD" }}>
                  Privacy Policy
                </span>
              </label>
            </div>

            <Button
              onClick={onSignUp}
              className="w-full py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02] mt-6"
              style={{ background: "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)" }}
            >
              Create Individual Account
            </Button>

            <div className="text-center pt-4 pb-8">
              <span className="text-slate-600">Already have an account? </span>
              <Button
                variant="link"
                onClick={onLogin}
                className="p-0 h-auto font-semibold"
                style={{ color: "#9B7EBD" }}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
