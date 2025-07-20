"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, User, Building2, ChevronRight } from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface LoginAccountTypeProps {
  onBack: () => void
  onIndividual: () => void
  onBusiness: () => void
}

export function LoginAccountType({ onBack, onIndividual, onBusiness }: LoginAccountTypeProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Sign In</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-600">Choose your account type to sign in</p>
        </div>

        <div className="space-y-4 mb-8">
          {/* Individual Account */}
          <Card
            className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={onIndividual}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)" }}
                >
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Individual Account</h3>
                  <p className="text-slate-600 text-sm">Sign in to your personal account</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </Card>

          {/* Business Account */}
          <Card
            className="p-6 bg-white border-2 border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={onBusiness}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Business Account</h3>
                  <p className="text-slate-600 text-sm">Sign in to your business account</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Don't have an account?{" "}
            <Button variant="link" className="p-0 h-auto font-semibold" style={{ color: "#9B7EBD" }}>
              Sign up here
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
