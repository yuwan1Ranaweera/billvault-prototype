"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface LoginScreenProps {
  onBack: () => void
  onLogin: () => void
  onSignUp: () => void
  accountType: "individual" | "business"
}

export function LoginScreen({ onBack, onLogin, onSignUp, accountType }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isIndividual = accountType === "individual"
  const gradientClass = isIndividual
    ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
    : "linear-gradient(135deg, #10b981 0%, #059669 100%)"
  const colorClass = isIndividual ? "#9B7EBD" : "#10b981"

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">{isIndividual ? "Individual" : "Business"} Sign In</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            style={{ background: gradientClass }}
          >
            <div className="text-2xl font-bold text-white">{isIndividual ? "U" : "B"}</div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-600">Sign in to your {isIndividual ? "personal" : "business"} BillVault account</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">{isIndividual ? "Email" : "Business Email"}</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="email"
                placeholder={isIndividual ? "Enter your email" : "business@company.com"}
                className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                style={{ "--tw-ring-color": colorClass } as any}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
                style={{ "--tw-ring-color": colorClass } as any}
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

          <div className="text-right">
            <Button variant="link" className="p-0 h-auto text-sm font-medium" style={{ color: colorClass }}>
              Forgot password?
            </Button>
          </div>

          <Button
            onClick={onLogin}
            className="w-full text-white py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02]"
            style={{ background: gradientClass }}
          >
            Sign In to {isIndividual ? "Personal" : "Business"} Account
          </Button>

          <div className="text-center pt-6">
            <span className="text-slate-600">{"Don't have an account? "}</span>
            <Button
              variant="link"
              onClick={onSignUp}
              className="p-0 h-auto font-semibold"
              style={{ color: colorClass }}
            >
              Sign up
            </Button>
          </div>

          {/* Account Type Features */}
          <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">{isIndividual ? "Individual" : "Business"} Features:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
              {isIndividual ? (
                <>
                  <div>• OCR Scanning</div>
                  <div>• Smart Categories</div>
                  <div>• Warranty Tracking</div>
                  <div>• Digital Returns</div>
                </>
              ) : (
                <>
                  <div>• QR Code Generation</div>
                  <div>• Customer Sharing</div>
                  <div>• Bulk Processing</div>
                  <div>• Analytics Dashboard</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
