"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface BusinessLoginProps {
  onBack: () => void
  onLogin: () => void
  onSignUp: () => void
}

export function BusinessLogin({ onBack, onLogin, onSignUp }: BusinessLoginProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-emerald-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Business Sign In</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="text-2xl font-bold text-white">B</div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-600">Sign in to your business BillVault account</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Business Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="email"
                placeholder="business@company.com"
                className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
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
                className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
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
            <Button variant="link" className="text-emerald-600 p-0 h-auto text-sm font-medium">
              Forgot password?
            </Button>
          </div>

          <Button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            Sign In to Business Account
          </Button>

          <div className="text-center pt-6">
            <span className="text-slate-600">{"Don't have an account? "}</span>
            <Button variant="link" onClick={onSignUp} className="text-emerald-600 p-0 h-auto font-semibold">
              Sign up
            </Button>
          </div>

          {/* Business Features */}
          <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Business Features:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
              <div>• QR Code Generation</div>
              <div>• Customer Sharing</div>
              <div>• Bulk Processing</div>
              <div>• Analytics Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
