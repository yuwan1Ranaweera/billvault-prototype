"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, Camera, Languages } from "lucide-react"
import { StatusBar } from "../components/status-bar"

interface TranslateOptionsScreenProps {
  onBack: () => void
  onTranslateExisting: () => void
  onScanNewForTranslation: () => void
  accountType?: "individual" | "business"
}

export function TranslateOptionsScreen({
  onBack,
  onTranslateExisting,
  onScanNewForTranslation,
  accountType = "individual",
}: TranslateOptionsScreenProps) {
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
        <h1 className="text-lg font-semibold text-slate-900">Translate Bill</h1>
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
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Choose Translation Method</h2>
            <p className="text-slate-600">Select how you want to translate your bill</p>
          </div>

          <div className="space-y-4">
            {/* Translate Existing Bill */}
            <Card
              className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={onTranslateExisting}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: gradientColor }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Translate Existing Bill</h3>
                  <p className="text-slate-600 text-sm">Select a bill from your vault to translate</p>
                </div>
              </div>
            </Card>

            {/* Scan New Bill & Translate */}
            <Card
              className="p-6 bg-white border-2 border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={onScanNewForTranslation}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: gradientColor }}
                >
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">Scan New Bill & Translate</h3>
                  <p className="text-slate-600 text-sm">Scan a physical bill and get it translated</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
