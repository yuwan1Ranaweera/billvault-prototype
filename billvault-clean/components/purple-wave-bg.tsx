import type { ReactNode } from "react"

interface PurpleWaveBgProps {
  children: ReactNode
}

export function PurpleWaveBg({ children }: PurpleWaveBgProps) {
  return (
    <div className="w-full h-full relative bg-white">
      {/* Purple wave background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 375 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 32C93.75 72 281.25 72 375 32V0H0V32Z" fill="white" />
        </svg>
      </div>
      {children}
    </div>
  )
}
