'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"
import { useGetContactsQuery } from "@/store/app-api"

function SkeletonRow() {
  return (
    <TableRow>
      {Array.from({ length: 5 }).map((_, idx) => (
        <TableCell key={idx}>
          <div className="h-4 bg-muted rounded animate-pulse w-full max-w-[120px]" />
        </TableCell>
      ))}
    </TableRow>
  )
}

export function ContactsTable() {

  const {data:contacts, isLoading, isFetching} = useGetContactsQuery({})

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Investor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
              isLoading || isFetching ? (
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
              ) : contacts && contacts.length > 0 ?
              contacts.map((contact, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{contact.name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{contact.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{contact.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {contact.company && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{contact.company.name}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {contact.investor && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{contact.investor.name}</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              )): 
              (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6">
                    <div className="text-sm text-muted-foreground">No Contact found</div>
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
