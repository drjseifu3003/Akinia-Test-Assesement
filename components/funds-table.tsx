'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"
import { useGetFundsQuery } from "@/store/app-api"
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

export function FundsTable() {
  const [selectedInvestementFocus, setSelectedInvestementFocus] = useState<"all"|"Series A-B Tech"|"Series B-C"|"Multi-Stage"|"Impact Investing"|"Seed to Series A"|"LogisEarly Stage"|"Pre-Seed"|"Seed"|"Series A"|"Accelerator">("all")
  const [selectedStatus, setSelectedStatus] = useState<"all"|"Active"|"Fully Deployed"|"Realized">("all")
    
  const {data:funds, isLoading, isFetching, refetch} = useGetFundsQuery({
     investment_focus: selectedInvestementFocus === "all" ? "" : selectedInvestementFocus,
     status: selectedStatus === "all" ? "" : selectedStatus
  })

  useEffect(() => {
    refetch()
  }, [selectedInvestementFocus, selectedStatus, refetch])

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Funds</h1>
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
              Investement Focus
            </Label>
            <Select defaultValue={selectedInvestementFocus} value={selectedInvestementFocus} onValueChange={(value) => setSelectedInvestementFocus(value as typeof selectedInvestementFocus)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Series A-B Tech">Series A-B Tech</SelectItem>
                <SelectItem value="Series B-C">Series B-C</SelectItem>
                <SelectItem value="Multi-Stage">Multi-Stage</SelectItem>
                <SelectItem value="Impact Investing">Impact Investing</SelectItem>
                <SelectItem value="Seed to Series A">Seed to Series A</SelectItem>
                <SelectItem value="Early Stage">Early Stage</SelectItem>
                <SelectItem value="Pre-Seed">Pre-Seed</SelectItem>
                <SelectItem value="Seed">Seed</SelectItem>
                <SelectItem value="Series A">Series A</SelectItem>
                <SelectItem value="Accelerator">Accelerator</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">
              Status
            </Label>
            <Select defaultValue={selectedStatus} value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as typeof selectedStatus)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Fully Deployed">Fully Deployed</SelectItem>
              <SelectItem value="Realized">Realized</SelectItem>
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
                <TableHead>Fund Size(M)</TableHead>
                <TableHead>Vintage</TableHead>
                <TableHead>Investement Focus</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deployed Capital</TableHead>
                <TableHead>IRR_Percent</TableHead>
                <TableHead>Investor</TableHead>
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
              ) :
              funds && funds.length > 0 ? (
              funds.map((fund, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{fund.name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{fund.fund_size_m}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{fund.vintage}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{fund.investment_focus}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{fund.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{fund.deployed_capital_m}</TableCell>
                  <TableCell>{fund.irr_percent}</TableCell>
                  <TableCell>
                    {fund.investor && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{fund.investor.name}</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6">
                    <div className="text-sm text-muted-foreground">No Funds found</div>
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
