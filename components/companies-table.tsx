'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"
import { useGetCompaniesQuery } from "@/store/app-api"
import { Label } from "./ui/label"
import { useEffect, useState } from "react"


function SkeletonRow() {
  return (
    <TableRow>
      {Array.from({ length: 8 }).map((_, idx) => (
        <TableCell key={idx}>
          <div className="h-4 bg-muted rounded animate-pulse w-full max-w-[120px]" />
        </TableCell>
      ))}
    </TableRow>
  )
}

export function CompaniesTable() {
  const [selectedSector, setSelectedSector] = useState<"all"|"Fintech"|"HealthTech"|"CleanTech"|"EdTech"|"AgTech"|"Logistics"|"E-commerce">("all")
  const [selectedStage, setSelectedStage] = useState<"all"|"Series A"|"Series B"|"Series C"|"Series D"|"Growth">("all")
  
  const {data:companies, isLoading, isFetching, refetch} = useGetCompaniesQuery({
    sector: selectedSector === "all" ? "" : selectedSector,
    stage: selectedStage === "all" ? "" : selectedStage
  })

  useEffect(() => {
    refetch()
  }, [selectedSector, selectedStage, refetch])

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Companies</h1>
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
          <div className="space-y-2">
            <Label htmlFor="phone">
              Stage
            </Label>
            <Select defaultValue={selectedStage} value={selectedStage} onValueChange={(value) => setSelectedStage(value as typeof selectedStage)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Series A">Series A</SelectItem>
              <SelectItem value="Series B">Series B</SelectItem>
              <SelectItem value="Series C">Series C</SelectItem>
              <SelectItem value="Series D">Series D</SelectItem>
              <SelectItem value="Growth">Growth</SelectItem>
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
                <TableHead>Sector</TableHead>
                <TableHead>HQ Location</TableHead>
                <TableHead>Founded</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Valuation</TableHead>
                <TableHead>Primary Investor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading || isFetching ? (
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
              ) : companies && companies.length > 0 ? (
              companies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{company.name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{company.sector}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{company.hq_location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{company.founded}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{company.stage}</span>
                    </div>
                  </TableCell>
                  <TableCell>{company.employees}</TableCell>
                  <TableCell>{company.valuation_m}</TableCell>
                  <TableCell>
                    {company.primary_investor && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{company.primary_investor.name}</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              )))
              :
              (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6">
                    <div className="text-sm text-muted-foreground">No companies found</div>
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
