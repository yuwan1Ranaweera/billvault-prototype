import type { ReactNode } from "react"

interface MobileFrameProps {
  children: ReactNode
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="relative w-[375px] h-[812px] bg-black rounded-[3rem] p-2 shadow-2xl ring-1 ring-white/10">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-inner">{children}</div>
      </div>
    </div>
  )
}
