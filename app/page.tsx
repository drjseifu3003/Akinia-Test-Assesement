import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Search,
  FileText,
  Clock,
  Handshake,
  BarChart3,
  Scale,
  Building2,
  Users,
  Database,
  Cpu,
  Puzzle,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">Akinia</span>
        </Link>
        <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="#product" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Product
          </Link>
          <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="#customers" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Customers
          </Link>
          <Link href="#resources" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="#company" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Company
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Sign in
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-primary hover:bg-primary/90 text-white">Free trial</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    🌍 Fresh insights into African PE deals, exits, and investor rankings
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Africa&apos;s leading private market intelligence platform
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Building the largest network to gather the most comprehensive and exclusive information on African
                    private & public companies, investors, deals, funds, advisors and contacts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/signup">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Request a free trial
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Interactive tour
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-4">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="h-16 bg-gray-100 rounded"></div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-3 bg-gray-200 rounded w-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="w-full py-12 bg-white border-y">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Trusted by leading investors, advisors, and executives across Africa and globally for the most
                comprehensive African market intelligence.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center opacity-60">
              {["CVC", "APOLLO", "CINVEN", "Moelis", "Jefferies", "UBS", "CARLYLE", "INSIGHT"].map((company) => (
                <div key={company} className="flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-700">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Get unparalleled insights into African private markets with data you can trust
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Akinia empowers investors, advisors, and C-suite executives with the deepest African private market
                intelligence, combining local expertise with advanced technology for faster, data-driven decisions
                across the continent.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">More African Opportunities</h3>
                  <p className="text-gray-600">
                    Discover untapped investment opportunities across Africa&apos;s fastest-growing markets. Our
                    comprehensive database covers everything from Lagos startups to Johannesburg corporates, ensuring
                    you never miss a deal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Exclusive African Networks</h3>
                  <p className="text-gray-600">
                    Access our extensive network of African entrepreneurs, investors, and advisors. Connect with key
                    players across 54 countries and build relationships that drive successful outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Local Market Expertise</h3>
                  <p className="text-gray-600">
                    Leverage our deep understanding of African markets, regulations, and business practices. Our local
                    teams provide insights that international databases simply cannot match.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Expert solutions for African markets
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Private Equity</h3>
                  <p className="text-gray-600 mb-4">
                    Identify and evaluate African PE opportunities across all sectors and stages
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">M&A Advisory</h3>
                  <p className="text-gray-600 mb-4">
                    Navigate complex African M&A transactions with comprehensive market intelligence
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Infrastructure & Development</h3>
                  <p className="text-gray-600 mb-4">
                    Access critical data on African infrastructure projects and development opportunities
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Venture Capital</h3>
                  <p className="text-gray-600 mb-4">
                    Discover Africa&apos;s most promising startups and emerging growth companies
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Akinia Engine */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
                The Akinia Africa Engine
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Combining local African expertise with advanced technology to provide the most comprehensive
                intelligence on Africa&apos;s private markets
              </p>
            </div>

            {/* Process Flow */}
            <div className="grid gap-8 md:grid-cols-3 mb-16">
              <div className="text-center">
                <div className="w-full h-16 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-semibold text-lg">Input</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-semibold text-lg">Our engine</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-semibold text-lg">Output</span>
                </div>
              </div>
            </div>

            {/* Engine Components */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">African Networks</h3>
                  <p className="text-gray-600">
                    Deep relationships with entrepreneurs, investors, and advisors across all 54 African countries
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Local Research Teams</h3>
                  <p className="text-gray-600">
                    On-ground researchers in major African financial centers providing real-time insights
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Government & Regulatory Data</h3>
                  <p className="text-gray-600">
                    Comprehensive access to African government registers, regulatory filings, and official databases
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Market Intelligence</h3>
                  <p className="text-gray-600">Proprietary data on African deals, valuations, and market trends</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Cultural Expertise</h3>
                  <p className="text-gray-600">
                    Understanding of local business practices, languages, and market dynamics
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Puzzle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Pan-African Coverage</h3>
                  <p className="text-gray-600">
                    From Cape Town to Cairo, Lagos to Nairobi - complete continental coverage
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Tour Section */}
        <section className="w-full py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="relative w-full max-w-[600px] aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="absolute inset-4">
                  <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-12 bg-white rounded shadow-sm"></div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-2 bg-white rounded w-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                    Take a look for yourselves
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Take a virtual tour of our platform to get a taste of how we can revolutionize your team&apos;s research
                    and deal sourcing workflow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Interactive Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-white border-t">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Ready to unlock Africa&apos;s potential?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                Join the leading investors and advisors who trust Akinia for African market intelligence and deal
                sourcing.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Start your free trial
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-50 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center justify-start mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Akinia</span>
              </Link>
              <p className="text-sm text-gray-600">Find, understand and track companies that matter to you.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">PRODUCT</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Data & Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Deal Sourcing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Product Tour
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">SOLUTIONS</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Private equity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    M&A advisors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Consultants
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Law firms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">RESOURCES</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Resource library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Insight reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Industry research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Customer stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">COMPANY</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Akinia. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-gray-600 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-600 hover:text-primary">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}