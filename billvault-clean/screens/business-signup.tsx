"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff, Mail, Lock, Building2, Phone, MapPin } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface BusinessSignUpProps {
  onBack: () => void
  onSignUp: () => void
  onLogin: () => void
}

export function BusinessSignUp({ onBack, onSignUp, onLogin }: BusinessSignUpProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-emerald-50 relative z-10">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Business Account</h1>
        <div className="w-10"></div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-20">
        <div className="px-6 pt-2">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Business Account</h2>
            <p className="text-slate-600">Enable QR sharing and customer features</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Name</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full h-12 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Type</label>
              <Select>
                <SelectTrigger className="w-full h-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail Store</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="supermarket">Supermarket</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  <SelectItem value="electronics">Electronics Store</SelectItem>
                  <SelectItem value="clothing">Clothing Store</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="business@company.com"
                  className="w-full h-12 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Phone</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full h-12 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="123 Business St, City, State"
                  className="w-full h-12 pl-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
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
                  className="w-full h-12 pl-12 pr-12 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
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

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox id="business-terms" className="mt-1 rounded-md" />
              <label htmlFor="business-terms" className="text-sm text-slate-600 leading-relaxed">
                I agree to the <span className="text-emerald-600 font-medium">Business Terms</span>
                {" and "}
                <span className="text-emerald-600 font-medium">Privacy Policy</span>
              </label>
            </div>

            <Button
              onClick={onSignUp}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02] mt-6"
            >
              Create Business Account
            </Button>

            <div className="text-center pt-4 pb-8">
              <span className="text-slate-600">Already have an account? </span>
              <Button variant="link" onClick={onLogin} className="text-emerald-600 p-0 h-auto font-semibold">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
