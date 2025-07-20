"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Share, Edit, Trash2, QrCode, Download, Calendar, MapPin, Tag } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState, type FC } from "react" // Add type FC import

interface BillDetailsScreenProps {
  onBack: () => void
  billData: any // Expect billData to be passed
  accountType?: "individual" | "business"
}

export const BillDetailsScreen: FC<BillDetailsScreenProps> = ({ onBack, billData, accountType = "individual" }) => {
  const isIndividual = accountType === "individual"
  const [showTranslated, setShowTranslated] = useState(false) // State to toggle translation

  const gradientColor = isIndividual
    ? "linear-gradient(135deg, #3B1E54 0%, #9B7EBD 100%)"
    : "linear-gradient(135deg, #10b981 0%, #059669 100%)"

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-semibold text-slate-900">Bill Details</h1>
        <Button variant="ghost" size="sm" className="p-2 h-auto rounded-full hover:bg-slate-100">
          <Share className="w-6 h-6 text-slate-700" />
        </Button>
      </div>

      <div className="px-6 pb-20">
        {/* Bill Preview */}
        <Card className="p-6 mb-6 bg-white border border-slate-200 shadow-lg">
          <div className="text-center mb-4">
            <div className="w-24 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg relative overflow-hidden">
              {/* Simulated bill image */}
              <div className="absolute inset-2 bg-white rounded-lg p-2">
                <div className="text-center mb-2">
                  <div className="w-8 h-2 bg-blue-500 rounded mx-auto mb-1"></div>
                  <div className="text-xs font-bold text-slate-800">{billData?.merchant || "Merchant"}</div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded mb-2"></div>
                  <div className="h-8 bg-purple-100 rounded mb-2"></div>
                  <div className="h-1 bg-gray-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded"></div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-800">{billData?.total || "$0.00"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              {billData?.name || billData?.merchant || "Bill Name"}
            </h2>
            <p className="text-slate-600 mb-4">{billData?.receiptId || "Receipt #XXXXX"}</p>

            <div className="flex justify-center space-x-4">
              <Button size="sm" className="rounded-full" style={{ background: gradientColor }}>
                <QrCode className="w-4 h-4 mr-2" />
                Generate QR
              </Button>
              <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </Card>

        {/* Bill Information */}
        <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Bill Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm text-slate-600">Date</p>
                <p className="font-medium text-slate-900">{billData?.date || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm text-slate-600">Location</p>
                <p className="font-medium text-slate-900">{billData?.location || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Tag className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm text-slate-600">Category</p>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {billData?.category || "Uncategorized"}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Translated Text Section */}
        {billData?.translatedText && (
          <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Translated Content</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTranslated(!showTranslated)}
                className="rounded-full text-xs"
              >
                {showTranslated ? "View Original" : "View Translation"}
              </Button>
            </div>
            {showTranslated ? (
              <p className="text-slate-700 italic">{billData.translatedText}</p>
            ) : (
              <div className="space-y-3">
                {billData?.items?.map((item: any, index: number) => (
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
                <div className="flex justify-between items-center pt-3 border-t-2 border-slate-200">
                  <p className="font-bold text-slate-900">Total</p>
                  <p className="font-bold text-xl text-slate-900">{billData?.total || "$0.00"}</p>
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Items (only if not showing translated text or no translated text available) */}
        {!billData?.translatedText || !showTranslated ? (
          <Card className="p-4 mb-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Items</h3>
            <div className="space-y-3">
              {billData?.items?.map((item: any, index: number) => (
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
              )) || <p className="text-slate-500">No items detected.</p>}

              <div className="flex justify-between items-center pt-3 border-t-2 border-slate-200">
                <p className="font-bold text-slate-900">Total</p>
                <p className="font-bold text-xl text-slate-900">{billData?.total || "$0.00"}</p>
              </div>
            </div>
          </Card>
        ) : null}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="py-3 rounded-2xl font-semibold border-2 bg-transparent"
            style={{ borderColor: "#9B7EBD", color: "#3B1E54" }}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            className="py-3 rounded-2xl font-semibold border-2 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
