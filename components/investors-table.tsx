"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"
import { useGetInvestorsQuery } from "@/store/app-api"
import { Label } from "./ui/label"

function SkeletonRow() {
  return (
    <TableRow>
      {Array.from({ length: 6 }).map((_, idx) => (
        <TableCell key={idx}>
          <div className="h-4 bg-muted rounded animate-pulse w-full max-w-[120px]" />
        </TableCell>
      ))}
    </TableRow>
  )
}


export function InvestorsTable() {
  const [selectedSector, setSelectedSector] = useState<"all"|"Fintech"|"HealthTech"|"CleanTech"|"EdTech"|"AgTech"|"Logistics"|"E-commerce">("all")
  
  const { data: investors, isLoading, isFetching, refetch} = useGetInvestorsQuery({
    focus_sectors: selectedSector === "all" ? "" : selectedSector
  })

  useEffect(() => {
    refetch()
  }, [selectedSector])

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Investors</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="phone">
              Sector
            </Label>
            <Select defaultValue={selectedSector} value={selectedSector} onValueChange={(value) => setSelectedSector(value as typeof selectedSector)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Fintech">Fintech</SelectItem>
                <SelectItem value="HealthTech">HealthTech</SelectItem>
                <SelectItem value="CleanTech">CleanTech</SelectItem>
                <SelectItem value="EdTech">EdTech</SelectItem>
                <SelectItem value="AgTech">AgTech</SelectItem>
                <SelectItem value="Logistics">Logistics</SelectItem>
                <SelectItem value="E-commerce">E-commerce</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>HQ Location</TableHead>
                <TableHead>Founded</TableHead>
                <TableHead>AUM</TableHead>
                <TableHead>Focus Sectors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { isLoading || isFetching ? (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
              ) : investors && investors.length > 0 ? 
              (
               investors.map((investor, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{investor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{investor.type}</span>
                  </TableCell>
                  <TableCell>{investor.hq_location}</TableCell>
                  <TableCell>{investor.founded}</TableCell>
                  <TableCell>{investor.aum_m}</TableCell>
                  <TableCell className="space-x-2">
                    {
                      investor.focus_sectors?.split(',').map((sector) => (
                        <Badge>{sector}</Badge>
                      ))
                    }
                    
                  </TableCell>
                </TableRow>
              ))) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6">
                    <div className="text-sm text-muted-foreground">No Investor found</div>
                  </TableCell>
                </TableRow>
              )
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
