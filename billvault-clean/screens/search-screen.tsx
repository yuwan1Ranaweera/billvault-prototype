"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Search, Filter, Calendar, Tag, DollarSign, FileText, Clock } from "lucide-react"
import { StatusBar } from "../components/status-bar"
import { useState } from "react"

interface SearchScreenProps {
  onBack: () => void
  accountType?: "individual" | "business"
}

export function SearchScreen({ onBack, accountType = "individual" }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const isIndividual = accountType === "individual"

  const filters = [
    { id: "all", label: "All", icon: FileText },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "amount", label: "Amount", icon: DollarSign },
    { id: "date", label: "Date", icon: Calendar },
    { id: "category", label: "Category", icon: Tag },
  ]

  const searchResults = [
    {
      id: 1,
      name: isIndividual ? "Grocery Receipt - SuperMart" : "Customer Receipt #1001",
      date: "Dec 10, 2024",
      amount: "$45.67",
      category: "Food & Dining",
      type: "receipt",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: isIndividual ? "Electric Bill - PowerCorp" : "Bulk Upload - Electronics",
      date: "Dec 8, 2024",
      amount: isIndividual ? "$89.23" : "$2,456.78",
      category: isIndividual ? "Utilities" : "Electronics",
      type: "bill",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      name: isIndividual ? "Medical Invoice - HealthCare+" : "QR Shared - Pharmacy",
      date: "Dec 5, 2024",
      amount: isIndividual ? "$156.00" : "$89.45",
      category: isIndividual ? "Healthcare" : "Pharmacy",
      type: "invoice",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <StatusBar />

      {/* Fixed Header */}
      <div className="px-6 pt-4 pb-4 bg-gradient-to-br from-slate-50 to-purple-50 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2 h-auto rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-6 h-6 text-slate-700" />
          </Button>
          <h1 className="text-lg font-semibold text-slate-900">Search Bills</h1>
          <Button variant="ghost" size="sm" className="p-2 h-auto rounded-full hover:bg-slate-100">
            <Filter className="w-6 h-6 text-slate-700" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Search bills, receipts, merchants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-2xl border-slate-200 bg-white focus:ring-2 focus:border-transparent shadow-sm"
            style={{ "--tw-ring-color": isIndividual ? "#9B7EBD" : "#10b981" } as any}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex-shrink-0 rounded-full ${
                  selectedFilter === filter.id
                    ? isIndividual
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Scrollable Results */}
      <div className="h-full overflow-y-auto pb-24">
        <div className="px-6 pt-2">
          {/* Search Stats */}
          <div className="mb-6">
            <p className="text-slate-600 text-sm">
              Found {searchResults.length} results {searchQuery && `for "${searchQuery}"`}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {searchResults.map((result) => (
              <Card
                key={result.id}
                className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-1 bg-white/90 rounded-lg flex flex-col justify-center items-center">
                      <div className="w-6 h-1 bg-slate-300 rounded mb-1"></div>
                      <div className="w-4 h-1 bg-slate-300 rounded mb-1"></div>
                      <div className="w-5 h-1 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-slate-900">{result.name}</h4>
                      <span className="font-bold text-slate-900">{result.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500">{result.date}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                        {result.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results State */}
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
