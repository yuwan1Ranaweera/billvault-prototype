"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  User,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Crown,
  Building2,
} from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface ProfileScreenProps {
  onBack: () => void
  onLogout: () => void
  accountType?: "individual" | "business"
}

export function ProfileScreen({ onBack, onLogout, accountType = "individual" }: ProfileScreenProps) {
  const isIndividual = accountType === "individual"

  const menuItems = [
    { icon: Settings, label: "Account Settings", action: () => {} },
    { icon: Bell, label: "Notifications", action: () => {} },
    { icon: Shield, label: "Privacy & Security", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", action: () => {} },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-6 h-6 text-slate-700" />
          </Button>
          <h1 className="text-lg font-semibold text-slate-900">Profile</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-24">
        <div className="px-6 pt-2">
          {/* Profile Card */}
          <Card className="p-6 mb-6 bg-white border border-slate-200 shadow-sm">
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{
                  background: isIndividual
                    ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                    : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                }}
              >
                {isIndividual ? (
                  <User className="w-10 h-10 text-white" />
                ) : (
                  <Building2 className="w-10 h-10 text-white" />
                )}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">{isIndividual ? "John Doe" : "TechStore Pro"}</h2>
              <p className="text-slate-600 mb-4">{isIndividual ? "john.doe@email.com" : "admin@techstore.com"}</p>

              {/* Account Type Badge */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium text-white flex items-center"
                  style={{
                    background: isIndividual
                      ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                      : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  }}
                >
                  {isIndividual ? <User className="w-4 h-4 mr-2" /> : <Building2 className="w-4 h-4 mr-2" />}
                  {isIndividual ? "Individual Account" : "Business Account"}
                </span>
                {!isIndividual && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{isIndividual ? "247" : "1,247"}</p>
                  <p className="text-sm text-slate-600">Documents</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{isIndividual ? "12" : "89"}</p>
                  <p className="text-sm text-slate-600">This Month</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{isIndividual ? "45.2" : "234.8"}</p>
                  <p className="text-sm text-slate-600">MB Stored</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Menu Items */}
          <div className="space-y-3 mb-6">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={item.action}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <span className="font-medium text-slate-900">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Business Features (if business account) */}
          {!isIndividual && (
            <Card className="p-4 mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <h3 className="font-semibold text-slate-900 mb-3">Business Features</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  QR Code Generation
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Customer Sharing
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Bulk Processing
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Analytics Dashboard
                </div>
              </div>
            </Card>
          )}

          {/* Logout Button */}
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full py-4 rounded-2xl text-lg font-semibold h-14 border-2 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
