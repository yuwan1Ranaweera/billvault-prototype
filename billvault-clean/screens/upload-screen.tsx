"use client"

import { Button } from "@/components/ui/button"
import { Camera, X } from "lucide-react"
import { useState } from "react"

interface UploadScreenProps {
  onBack: () => void
  onUploadComplete: (billData: any) => void // Changed from onCapture
  accountType?: "individual" | "business"
}

export function UploadScreen({ onBack, onUploadComplete, accountType = "individual" }: UploadScreenProps) {
  const [isUploading, setIsUploading] = useState(false)
  const isIndividual = accountType === "individual"

  const handleUpload = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      // Simulate uploaded bill data
      const mockData = {
        merchant: "Uploaded Document",
        date: "Today",
        total: "$99.99",
        category: "General",
      }
      onUploadComplete(mockData)
    }, 2000) // Simulate upload time
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
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-0 h-auto">
          <X className="w-6 h-6 text-white" />
        </Button>
        <h1 className="text-white font-medium">Upload Bill</h1>
        <div className="w-6"></div>
      </div>

      {/* Upload Area */}
      <div className="px-6 flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-80 bg-black/20 rounded-2xl border-2 border-white/30 border-dashed flex items-center justify-center mb-8 backdrop-blur-sm">
          <div className="text-center">
            <Camera className="w-16 h-16 text-white/60 mx-auto mb-4" />
            <p className="text-white/80 text-sm">Tap to select a bill from your gallery</p>
          </div>
        </div>

        <Button
          onClick={handleUpload}
          disabled={isUploading}
          className="w-20 h-20 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 disabled:opacity-50"
        >
          {isUploading ? (
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
        {isUploading && <p className="text-white/80 text-sm mt-4 animate-pulse">Uploading bill...</p>}
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-8">
        <div className="flex justify-center space-x-8">
          <Button variant="ghost" className="text-white">
            Camera
          </Button>
          <Button variant="ghost" className="text-white">
            Files
          </Button>
        </div>
      </div>
    </div>
  )
}
