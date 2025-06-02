"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Building2, Users, Handshake, UserCheck, HelpCircle, Plus, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Investors", href: "/investors", icon: Users },
  { name: "Funds", href: "/funds", icon: Handshake },
  { name: "Contacts", href: "/contacts", icon: UserCheck },
]

const bookmarks = [
  { name: "West African Fintech", count: 12, color: "bg-primary" },
  { name: "Nigerian PE Deals 2024", count: 8, color: "bg-primary" },
  { name: "East African Infrastructure", count: 5, color: "bg-primary" },
  { name: "South African Healthcare", count: 3, color: "bg-primary" },
  { name: "Pan-African Energy", count: null, color: null },
  { name: "Kenyan Agritech Startups", count: null, color: null },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <Link href="/">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">Akinia</span>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Explore</div>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary border-r-2 border-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary",
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* African Market Insights */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-3 mb-4">
            <div className="text-xs font-medium text-primary uppercase tracking-wide mb-2">African Market Pulse</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Active Deals</span>
                <span className="text-xs font-semibold text-primary">247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">New This Week</span>
                <span className="text-xs font-semibold text-primary">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Top Market</span>
                <span className="text-xs font-semibold text-primary">🇳🇬 Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bookmarks */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Saved Lists</div>
            <Plus className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
          </div>
          <div className="space-y-1">
            {bookmarks.map((bookmark, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer group"
              >
                <Bookmark className="mr-3 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="flex-1 truncate">{bookmark.name}</span>
                {bookmark.count && (
                  <span className={cn("ml-2 px-1.5 py-0.5 text-xs text-white rounded-full", bookmark.color)}>
                    {bookmark.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md cursor-pointer transition-colors">
          <HelpCircle className="mr-3 h-4 w-4" />
          Help & Support
        </div>
        <div className="mt-2 px-3 py-2 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <span>🌍</span>
            <span>African Market Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  )
}
