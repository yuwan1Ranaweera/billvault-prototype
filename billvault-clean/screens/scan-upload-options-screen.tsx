"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, Gift, CalendarCheck, Camera, Upload } from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface ScanUploadOptionsScreenProps {
  onBack: () => void
  onSelectOption: (type: "bill" | "warranty" | "gift-voucher", action: "scan" | "upload") => void
  accountType?: "individual" | "business"
}

export function ScanUploadOptionsScreen({
  onBack,
  onSelectOption,
  accountType = "individual",
}: ScanUploadOptionsScreenProps) {
  const isIndividual = accountType === "individual"
  const gradientColor = isIndividual
    ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
    : "linear-gradient(135deg, #10b981 0%, #059669 100%)"

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Scan / Upload Options</h1>
        <div className="w-10"></div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto pb-24">
        <div className="px-6 pt-2">
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              style={{ background: gradientColor }}
            >
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">What are you adding?</h2>
            <p className="text-slate-600">Choose the type of document you want to add</p>
          </div>

          <div className="space-y-4">
            {/* Normal Bill */}
            <Card className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: gradientColor }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Normal Bill / Receipt</h3>
                  <p className="text-slate-600 text-sm">Standard expense or purchase document</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onSelectOption("bill", "scan")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Camera className="w-4 h-4 mr-2" /> Scan
                </Button>
                <Button
                  onClick={() => onSelectOption("bill", "upload")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Upload className="w-4 h-4 mr-2" /> Upload
                </Button>
              </div>
            </Card>

            {/* Warranty Card */}
            <Card className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
                >
                  <CalendarCheck className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Warranty Card</h3>
                  <p className="text-slate-600 text-sm">Track product warranties and expirations</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onSelectOption("warranty", "scan")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Camera className="w-4 h-4 mr-2" /> Scan
                </Button>
                <Button
                  onClick={() => onSelectOption("warranty", "upload")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Upload className="w-4 h-4 mr-2" /> Upload
                </Button>
              </div>
            </Card>

            {/* Gift Voucher */}
            <Card className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #facc15 0%, #eab308 100%)" }}
                >
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Gift Voucher</h3>
                  <p className="text-slate-600 text-sm">Manage gift cards and store credits</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => onSelectOption("gift-voucher", "scan")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Camera className="w-4 h-4 mr-2" /> Scan
                </Button>
                <Button
                  onClick={() => onSelectOption("gift-voucher", "upload")}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <Upload className="w-4 h-4 mr-2" /> Upload
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
