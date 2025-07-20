"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, User, Building2, ChevronRight, Check } from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface AccountTypeScreenProps {
  onBack: () => void
  onIndividual: () => void
  onBusiness: () => void
  isSignUp?: boolean
}

export function AccountTypeScreen({ onBack, onIndividual, onBusiness, isSignUp = true }: AccountTypeScreenProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">{isSignUp ? "Create Account" : "Sign In"}</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Choose Account Type</h2>
          <p className="text-slate-600">Select how you'll be using BillVault</p>
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
                  <h3 className="text-lg font-semibold text-slate-900">Individual</h3>
                  <p className="text-slate-600 text-sm">Personal bill management</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  OCR Scanning
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Smart Categories
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Warranty Tracking
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Digital Returns
                </div>
              </div>
            </div>
          </Card>

          {/* Business Account */}
          <Card
            className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={onBusiness}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Business</h3>
                  <p className="text-slate-600 text-sm">For companies & retailers</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  QR Code Generation
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Customer Sharing
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Bulk Processing
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Analytics Dashboard
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button variant="link" className="p-0 h-auto font-semibold" style={{ color: "#9B7EBD" }}>
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
