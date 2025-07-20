import { Button } from "@/components/ui/button"
import { Wifi, Battery, Signal } from "lucide-react"

export default function BillVaultOnboarding() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-black rounded-[3rem] p-2">
        <div className="w-full h-full bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-sm font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-4 h-4 fill-white" />
              <Wifi className="w-4 h-4 fill-white" />
              <Battery className="w-6 h-3 fill-white" />
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6 pt-8 pb-0 text-center text-white relative z-10">
            <h1 className="text-3xl font-bold mb-2">Store Smarter</h1>
            <p className="text-lg opacity-90 mb-8">Never lose a bill again</p>
          </div>

          {/* Floating Bills Illustration */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Central Phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-32 h-56 bg-white rounded-2xl shadow-2xl relative">
                <div className="absolute top-4 left-4 right-4">
                  <div className="h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-purple-100 rounded mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Floating Bills */}
            <div className="absolute top-32 left-8 w-16 h-20 bg-white/90 rounded-lg shadow-lg transform rotate-12 z-10">
              <div className="p-2">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="absolute top-40 right-8 w-20 h-24 bg-white/90 rounded-lg shadow-lg transform -rotate-12 z-10">
              <div className="p-2">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-purple-200 rounded"></div>
              </div>
            </div>

            <div className="absolute top-56 left-12 w-14 h-18 bg-white/80 rounded-lg shadow-lg transform rotate-45 z-5">
              <div className="p-1">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="absolute top-48 right-16 w-12 h-16 bg-white/80 rounded-lg shadow-lg transform -rotate-45 z-5">
              <div className="p-1">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="absolute top-64 left-20 w-18 h-22 bg-white/70 rounded-lg shadow-lg transform rotate-12 z-5">
              <div className="p-2">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="absolute top-60 right-12 w-16 h-20 bg-white/70 rounded-lg shadow-lg transform -rotate-12 z-5">
              <div className="p-2">
                <div className="h-1 bg-gray-300 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Section */}
          <div className="absolute bottom-0 left-0 right-0 h-80">
            {/* Wave Shape */}
            <svg
              className="absolute bottom-0 w-full h-32"
              viewBox="0 0 375 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 60C93.75 20 281.25 20 375 60V120H0V60Z" fill="white" />
            </svg>

            {/* Content Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-white h-64 px-6 pt-16 pb-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Get Started to build your personal Bill Vault, Safe & Stress-free.
                </p>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-full text-lg font-medium"
                    size="lg"
                  >
                    Login
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-purple-700 text-purple-700 hover:bg-purple-50 py-3 rounded-full text-lg font-medium bg-transparent"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
