"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, QrCode, X, CheckCircle, Share, Download } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface QRScannerScreenProps {
  onBack: () => void
  onScanComplete: () => void
  accountType?: "individual" | "business"
}

export function QRScannerScreen({ onBack, onScanComplete, accountType = "individual" }: QRScannerScreenProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [qrData, setQrData] = useState<any>(null)

  const isIndividual = accountType === "individual"

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScanComplete(true)

      // Simulate QR code data
      const mockQRData = {
        type: "bill_share",
        merchant: "TechStore Pro",
        amount: "$299.99",
        date: "Dec 10, 2024",
        items: ["Wireless Headphones", "Phone Case", "Screen Protector"],
        sharedBy: "TechStore Pro",
        businessType: "Electronics Store",
      }
      setQrData(mockQRData)
    }, 2000)
  }

  if (scanComplete) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
        <StatusBar />

        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
              <ArrowLeft className="w-6 h-6 text-slate-700" />
            </Button>
            <h1 className="text-lg font-semibold text-slate-900">QR Code Scanned</h1>
            <div className="w-10"></div>
          </div>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">QR Code Found!</h2>
            <p className="text-slate-600">Business shared their receipt with you</p>
          </div>

          {/* QR Data Card */}
          <Card className="p-6 mb-6 bg-white border border-slate-200 shadow-sm">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{qrData.merchant}</h3>
              <p className="text-slate-600">{qrData.businessType}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Amount:</span>
                <span className="font-bold text-slate-900">{qrData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Date:</span>
                <span className="font-medium text-slate-900">{qrData.date}</span>
              </div>
              <div>
                <span className="text-slate-600">Items:</span>
                <div className="mt-2 space-y-1">
                  {qrData.items.map((item: string, index: number) => (
                    <div key={index} className="text-sm bg-slate-50 px-3 py-2 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={onScanComplete}
              className="w-full py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: isIndividual
                  ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Save to BillVault
            </Button>

            <Button
              variant="outline"
              className="w-full py-4 rounded-2xl text-lg font-semibold h-14 border-2 bg-transparent"
              style={{
                borderColor: isIndividual ? "#9B7EBD" : "#10b981",
                color: isIndividual ? "#3B1E54" : "#059669",
              }}
            >
              <Share className="w-5 h-5 mr-2" />
              Share Receipt
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: isIndividual
          ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
          : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      }}
    >
      <StatusBar isDark />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Button>
        <h1 className="text-white font-semibold">QR Code Scanner</h1>
        <Button variant="ghost" size="sm" className="p-2 h-auto">
          <X className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Scanner View */}
      <div className="px-6 flex-1 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 bg-black/20 rounded-3xl border-2 border-white/30 border-dashed flex items-center justify-center mb-8 backdrop-blur-sm overflow-hidden">
          {isScanning ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-white/60 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          ) : (
            <div className="text-center">
              <QrCode className="w-16 h-16 text-white/60 mx-auto mb-4" />
              <p className="text-white/80 text-sm px-4">Position QR code within the frame</p>
            </div>
          )}

          {/* Corner guides */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/60"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/60"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/60"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/60"></div>
        </div>

        {/* Scan Button */}
        <Button
          onClick={handleScan}
          disabled={isScanning}
          className="w-20 h-20 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 disabled:opacity-50"
        >
          {isScanning ? (
            <div
              className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: isIndividual ? "#9B7EBD" : "#10b981" }}
            ></div>
          ) : (
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: isIndividual
                  ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              }}
            >
              <QrCode className="w-8 h-8 text-white" />
            </div>
          )}
        </Button>

        {isScanning && <p className="text-white/80 text-sm mt-4 animate-pulse">Scanning QR code...</p>}
      </div>

      {/* Bottom Info */}
      <div className="px-6 pb-8">
        <div className="text-center">
          <p className="text-white/80 text-sm mb-2">Scan QR codes from businesses to</p>
          <p className="text-white/60 text-xs">automatically receive their receipts</p>
        </div>
      </div>
    </div>
  )
}
