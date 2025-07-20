import { Wifi, Battery, Signal } from "lucide-react"

interface StatusBarProps {
  isDark?: boolean
}

export function StatusBar({ isDark = false }: StatusBarProps) {
  const textColor = isDark ? "text-white" : "text-slate-900"
  const iconColor = isDark ? "fill-white" : "fill-slate-900"

  return (
    <div className={`flex justify-between items-center px-6 pt-4 pb-2 ${textColor} text-sm font-semibold`}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Signal className={`w-4 h-4 ${iconColor}`} />
        <Wifi className={`w-4 h-4 ${iconColor}`} />
        <Battery className={`w-6 h-3 ${iconColor}`} />
      </div>
    </div>
  )
}
