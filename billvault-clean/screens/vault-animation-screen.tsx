"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, FileText } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState, useEffect } from "react"

interface VaultAnimationScreenProps {
  onComplete: () => void
  billData: any
  accountType?: "individual" | "business"
}

export function VaultAnimationScreen({ onComplete, billData, accountType = "individual" }: VaultAnimationScreenProps) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const isIndividual = accountType === "individual"

  useEffect(() => {
    // Adjust these timings based on your video's actual length
    const videoDuration = 3000 // Assuming video is around 3 seconds
    const messageDelay = 2000 // Show message after 2 seconds of video

    const messageTimer = setTimeout(() => {
      setShowSuccessMessage(true)
    }, messageDelay)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, videoDuration + 1000) // Add a little buffer after video ends

    return () => {
      clearTimeout(messageTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col" // Changed to flex-col to stack status bar and video
      style={{
        background: isIndividual
          ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
          : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      }}
    >
      <StatusBar isDark />

      {/* Animated Background - kept for visual consistency if desired, but video is main focus */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-6 w-20 h-20 bg-white/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      {/* Video Player and Overlay Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        {" "}
        {/* flex-1 to take remaining height */}
        <video
          src="/videos/untitled-design-2.mp4" // Path to your uploaded video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain absolute inset-0" // Changed to object-contain
        />
        {/* Success Message Overlay */}
        {showSuccessMessage && (
          <div className="absolute bottom-24 left-0 right-0 text-center animate-fade-in px-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Bill Successfully Saved!</h2>
            <p className="text-white/80 mb-6">Your document is now secure in BillVault</p>

            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 mx-auto max-w-xs">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{billData?.merchant || "Document"}</span>
              </div>
              <div className="text-white/80 text-sm">
                {billData?.total || "Saved"} • {billData?.date || "Today"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skip Button */}
      <Button
        onClick={onComplete}
        variant="ghost"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white z-20"
      >
        Skip Animation
      </Button>
    </div>
  )
}
