"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, Users, Globe, BarChart3, Smartphone, Truck, Heart, Zap, Sprout, Calendar, ExternalLink, Book, Leaf } from "lucide-react"
import Image from "next/image"
import { JSX, useState } from "react"
import { useGetNewsQuery } from "@/store/app-api"
import { Skeleton } from "./ui/skeleton"
import { News } from "@/models"


const industryReports = [
  {
    title: "Fintech Landscape",
    subtitle: "in West Africa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5VT2WB8X22hFtQKn_2Y76ZJ9psjrT1VbmA&s",
    color: "from-amber-600 to-orange-700",
  },
  {
    title: "Infrastructure Investment",
    subtitle: "across East Africa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LBWyoQ9ur87lA7OgjHsjE93723teCEnMMQ&s",
    color: "from-green-600 to-emerald-700",
  },
  {
    title: "Healthcare Innovation",
    subtitle: "in Southern Africa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPYanbOcxYw5CNzsphpfFCrTcl1tWealrNw&s",
    color: "from-blue-600 to-indigo-700",
  },
]

const promoCards = [
  {
    id: 1,
    title: "African PE Landscape 2024",
    subtitle: "Comprehensive market analysis",
    description:
      "Get exclusive insights into Africa's private equity ecosystem with our latest report covering 54 countries.",
    cta: "Download Report",
    icon: <TrendingUp className="h-6 w-6" />,
    gradient: "from-primary to-amber-600",
  },
  {
    id: 2,
    title: "Connect with 10,000+ African Investors",
    subtitle: "Expand your network",
    description:
      "Access our exclusive database of African investors, fund managers, and deal makers across the continent.",
    cta: "Explore Network",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-blue-600 to-primary",
  },
  {
    id: 3,
    title: "Pan-African Deal Tracker",
    subtitle: "Real-time market intelligence",
    description: "Stay ahead with live updates on deals, exits, and funding rounds across all African markets.",
    cta: "Start Tracking",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-green-600 to-primary",
  },
  {
    id: 4,
    title: "African Market Analytics",
    subtitle: "Data-driven insights",
    description: "Advanced analytics and benchmarking tools for African private market investments and valuations.",
    cta: "View Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    gradient: "from-purple-600 to-primary",
  },
]

const Dashboard = () => {
  const { data, isLoading} = useGetNewsQuery({})

  const [currentPromo, setCurrentPromo] = useState(0)

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promoCards.length)
  }

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promoCards.length) % promoCards.length)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getSectorColor = (sector: string) => {
    const colors: { [key: string]: string } = {
      Fintech: "bg-blue-100 text-blue-800",
      Healthcare: "bg-red-100 text-red-800",
      Logistics: "bg-orange-100 text-orange-800",
      Energy: "bg-yellow-100 text-yellow-800",
      Agriculture: "bg-green-100 text-green-800",
      "Real Estate": "bg-purple-100 text-purple-800",
    }
    return colors[sector] || "bg-gray-100 text-gray-800"
  }

  const getSectorIcon = (sector: string) => {
    const icons: { [key: string]: JSX.Element } = {
      Fintech: <Smartphone className="h-6 w-6" />,
      HealthTech: <Heart className="h-6 w-6" />,
      Logistics: <Truck className="h-6 w-6" />,
      Energy: <Zap className="h-6 w-6" />,
      AgTech: <Sprout className="h-6 w-6" />,
      EdTech: <Book className="h-6 w-6" />,
      CleanTech: <Leaf className="h-6 w-6" />,
    }
    return icons[sector] || <Globe className="h-6 w-6" />
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Promotional Carousel */}
      <div className="mb-8">
        <Card className="relative overflow-hidden">
          <div className={`bg-gradient-to-r ${promoCards[currentPromo].gradient} text-white`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">{promoCards[currentPromo].icon}</div>
                    <div>
                      <h3 className="text-lg font-bold">{promoCards[currentPromo].title}</h3>
                      <p className="text-white/80 text-sm">{promoCards[currentPromo].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-4 max-w-md">{promoCards[currentPromo].description}</p>
                  <Button variant="secondary" size="sm" className="bg-white text-gray-900 hover:bg-white/90">
                    {promoCards[currentPromo].cta}
                  </Button>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevPromo}
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextPromo}
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex space-x-2 mt-4">
                {promoCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPromo ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest African Deals</h2>
            {isLoading ? (
              // Skeleton loading state
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Skeleton className="w-12 h-12 rounded-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <Skeleton className="h-5 w-3/4 mb-2" />
                            <Skeleton className="h-5 w-6 ml-2" />
                          </div>
                          <div className="flex items-center space-x-4 mb-3">
                            <Skeleton className="h-3 w-24" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                          <Skeleton className="h-5 w-16" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Actual content
              <div className="space-y-4">
                {data?.map((item: News) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {getSectorIcon(item.sector ?? "")}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-gray-900 leading-tight">{item.title}</h3>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(item.date ?? new Date().toDateString())}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ExternalLink className="h-3 w-3" />
                              <span>{item.source}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Badge className={`text-xs ${getSectorColor(item.sector ?? "")}`}>{item.sector}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">African Market Reports</h2>
            <Button variant="link" className="p-0 h-auto text-primary">
              View all
            </Button>
          </div>
          <div className="space-y-4">
            {industryReports.map((report, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className={`h-24 bg-gradient-to-r ${report.color} relative`}>
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
                  <h3 className="font-semibold text-white text-sm mb-1">{report.title}</h3>
                  <p className="text-white/80 text-xs">{report.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* African Market Insights Widget */}
          <Card className="mt-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-primary">African Market Insights</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Active PE Funds</span>
                  <span className="text-sm font-semibold text-primary">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">YTD Deal Volume</span>
                  <span className="text-sm font-semibold text-primary">$4.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Top Sector</span>
                  <span className="text-sm font-semibold text-primary">Fintech</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Leading Market</span>
                  <span className="text-sm font-semibold text-primary">Nigeria 🇳🇬</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Full Report
              </Button>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card className="mt-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Quick Access</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🇿🇦 South African PE Landscape
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🇳🇬 Nigerian Fintech Directory
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🇰🇪 East African Infrastructure
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🌍 Pan-African Fund Managers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
