"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Camera, X, Zap, Languages, FileText, CheckCircle, Globe, Scan } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface OCRScanScreenProps {
  onBack: () => void
  onScanComplete: (billData: any) => void
  accountType?: "individual" | "business"
  translateMode?: boolean // New prop for translation mode
}

export function OCRScanScreen({
  onBack,
  onScanComplete,
  accountType = "individual",
  translateMode = false,
}: OCRScanScreenProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [extractedData, setExtractedData] = useState<any>(null)

  const isIndividual = accountType === "individual"

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "zh", name: "Chinese", flag: "🇨🇳" },
    { code: "ja", name: "Japanese", flag: "🇯🇵" },
  ]

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScanComplete(true)

      // Simulate AI OCR extraction
      const mockData = {
        merchant: isIndividual ? "SuperMart Grocery" : "TechStore Electronics",
        date: "December 10, 2024",
        total: isIndividual ? "$45.67" : "$1,234.56",
        category: isIndividual ? "Food & Dining" : "Electronics",
        items: isIndividual
          ? [
              { name: "Organic Bananas", qty: "2 lbs", price: "$3.98" },
              { name: "Whole Milk", qty: "1 gal", price: "$4.29" },
              { name: "Bread Loaf", qty: "1 pc", price: "$2.49" },
              { name: "Mixed Vegetables", qty: "1 bag", price: "$5.67" },
            ]
          : [
              { name: "MacBook Pro", qty: "1", price: "$999.00" },
              { name: "Wireless Mouse", qty: "1", price: "$79.99" },
              { name: "USB-C Cable", qty: "2", price: "$29.99" },
            ],
        confidence: 0.94,
        language: selectedLanguage,
        translatedText: translateMode
          ? "This is a simulated translation of the bill content into English. The original bill was for groceries at SuperMart, totaling $45.67 on December 10, 2024. Items included bananas, milk, bread, and mixed vegetables."
          : undefined, // Add translated text if in translate mode
      }
      setExtractedData(mockData)
    }, 3000)
  }

  if (scanComplete) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <StatusBar />

        {/* Fixed Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-6 h-6 text-slate-700" />
          </Button>
          <h1 className="text-lg font-semibold text-slate-900">AI OCR Results</h1>
          <div className="w-10"></div>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pb-20">
          <div className="px-6 pt-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Scan Complete!</h2>
              <p className="text-slate-600">
                AI extracted text with {Math.round(extractedData.confidence * 100)}% confidence
              </p>
            </div>

            {/* AI Generated Bill Image */}
            <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Scanned Document</h3>
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl relative overflow-hidden border-2 border-dashed border-blue-200">
                {/* Simulated Receipt */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center mb-3">
                    <div className="w-12 h-3 bg-blue-600 rounded mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-slate-800">{extractedData.merchant}</div>
                    <div className="text-xs text-slate-600">{extractedData.date}</div>
                  </div>
                  <div className="space-y-1">
                    {extractedData.items.slice(0, 3).map((item: any, index: number) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="text-slate-700 truncate">{item.name}</span>
                        <span className="text-slate-900 font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-200 mt-2 pt-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>Total:</span>
                      <span>{extractedData.total}</span>
                    </div>
                  </div>
                </div>

                {/* AI Processing Overlay */}
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  AI Processed
                </div>
              </div>
            </Card>

            {/* Extracted Data */}
            <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Extracted Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Merchant:</span>
                  <span className="font-medium text-slate-900">{extractedData.merchant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="font-medium text-slate-900">{extractedData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Total Amount:</span>
                  <span className="font-bold text-slate-900">{extractedData.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Category:</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {extractedData.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Language:</span>
                  <span className="font-medium text-slate-900">
                    {languages.find((l) => l.code === extractedData.language)?.flag}{" "}
                    {languages.find((l) => l.code === extractedData.language)?.name}
                  </span>
                </div>
                {translateMode && extractedData.translatedText && (
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Translated Text:</h4>
                    <p className="text-slate-700 italic">{extractedData.translatedText}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Items List */}
            <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Items Detected</h3>
              <div className="space-y-3">
                {extractedData.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.qty}</p>
                    </div>
                    <p className="font-medium text-slate-900">{item.price}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-8">
              <Button
                onClick={() => onScanComplete(extractedData)}
                className="w-full py-4 rounded-2xl text-lg font-semibold h-14 shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: isIndividual
                    ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
                    : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                }}
              >
                {translateMode ? "Save Translated Bill" : "Save to BillVault"}
              </Button>

              <Button
                variant="outline"
                className="w-full py-4 rounded-2xl text-lg font-semibold h-14 border-2 bg-transparent"
                style={{
                  borderColor: isIndividual ? "#9B7EBD" : "#10b981",
                  color: isIndividual ? "#3B1E54" : "#059669",
                }}
              >
                Edit Details
              </Button>
            </div>
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
        <h1 className="text-white font-semibold">{translateMode ? "Scan for Translation" : "AI OCR Scanner"}</h1>
        <Button variant="ghost" size="sm" className="p-2 h-auto">
          <X className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Language Selector */}
      <div className="px-6 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Language:</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLanguage === lang.code ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedLanguage(lang.code)}
              className={`flex-shrink-0 ${
                selectedLanguage === lang.code ? "bg-white text-slate-900" : "text-white hover:bg-white/20"
              }`}
            >
              {lang.flag} {lang.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Camera View */}
      <div className="px-6 flex-1 flex flex-col items-center justify-center">
        <div className="relative w-80 h-96 bg-black/20 rounded-3xl border-2 border-white/30 border-dashed flex items-center justify-center mb-8 backdrop-blur-sm overflow-hidden">
          {isScanning ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-white/60 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Scan className="w-12 h-12 text-white animate-spin mx-auto mb-2" />
                  <p className="text-white text-sm">AI Processing...</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Camera className="w-16 h-16 text-white/60 mx-auto mb-4" />
              <p className="text-white/80 text-sm px-4">Position your bill within the frame</p>
              <p className="text-white/60 text-xs px-4 mt-2">AI will auto-detect and extract text</p>
            </div>
          )}

          {/* Corner guides */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/60"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/60"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/60"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/60"></div>
        </div>

        {/* AI Features */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/80 text-xs">AI OCR</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/80 text-xs">Multi-Lang</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/80 text-xs">Auto-Sort</span>
          </div>
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
              <Camera className="w-8 h-8 text-white" />
            </div>
          )}
        </Button>

        {isScanning && (
          <p className="text-white/80 text-sm mt-4 animate-pulse">
            Scanning and extracting text in {languages.find((l) => l.code === selectedLanguage)?.name}...
          </p>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-8">
        <div className="flex justify-center space-x-8">
          <Button variant="ghost" className="text-white/80 hover:text-white">
            Gallery
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white">
            Flash
          </Button>
          <Button variant="ghost" className="text-white/80 hover:text-white">
            Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
