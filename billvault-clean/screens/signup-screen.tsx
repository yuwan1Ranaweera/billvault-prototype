"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface SignUpScreenProps {
  onBack: () => void
  onSignUp: () => void
  onLogin: () => void
}

export function SignUpScreen({ onBack, onSignUp, onLogin }: SignUpScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Sign Up</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
          <p className="text-slate-600">Join thousands of smart users</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
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
                className="w-full h-14 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
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
              I agree to the <span className="text-purple-600 font-medium">Terms of Service</span>
              {" and "}
              <span className="text-purple-600 font-medium">Privacy Policy</span>
            </label>
          </div>

          <Button
            onClick={onSignUp}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02] mt-6"
          >
            Create Account
          </Button>

          <div className="text-center pt-4">
            <span className="text-slate-600">Already have an account? </span>
            <Button variant="link" onClick={onLogin} className="text-purple-600 p-0 h-auto font-semibold">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
