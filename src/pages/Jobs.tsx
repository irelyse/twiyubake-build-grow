import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const jobs = [
  { id: "J001", customer: "Jean Mugabo", service: "Oil Change", vehicle: "Toyota Camry", status: "Completed", employee: "Eric Nshimiyimana", date: "2024-01-15" },
  { id: "J002", customer: "Marie Uwimana", service: "Brake Repair", vehicle: "Honda Civic", status: "In Progress", employee: "Alice Mukantwari", date: "2024-01-16" },
  { id: "J003", customer: "Paul Hakizimana", service: "Engine Diagnostic", vehicle: "Toyota RAV4", status: "Pending", employee: "-", date: "2024-01-16" },
  { id: "J004", customer: "Grace Nyirahabimana", service: "Tire Replacement", vehicle: "Nissan Sentra", status: "Completed", employee: "David Mukamana", date: "2024-01-14" },
  { id: "J005", customer: "Samuel Nkurunziza", service: "AC Repair", vehicle: "Ford Focus", status: "In Progress", employee: "Eric Nshimiyimana", date: "2024-01-16" },
  { id: "J006", customer: "Claudine Uwase", service: "Battery Replacement", vehicle: "Hyundai Elantra", status: "Pending", employee: "-", date: "2024-01-17" },
  { id: "J007", customer: "Joseph Muhire", service: "Transmission Service", vehicle: "Toyota Corolla", status: "Completed", employee: "Alice Mukantwari", date: "2024-01-13" },
  { id: "J008", customer: "Immaculee Mukamana", service: "Suspension Repair", vehicle: "Mazda 3", status: "In Progress", employee: "David Mukamana", date: "2024-01-16" }
];

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const filteredJobs = jobs.filter(job => 
    job.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case "In Progress":
        return <Badge className="bg-primary/10 text-primary border-primary/20">In Progress</Badge>;
      case "Pending":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Job Management</h1>
              <p className="text-muted-foreground">Manage all garage jobs and track progress</p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle>All Jobs</CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full sm:w-64"
                      />
                    </div>
                    <Button variant="outline" size="default">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Job
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Employee</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentJobs.map((job) => (
                        <TableRow key={job.id} className="hover:bg-muted/50">
                          <TableCell className="font-mono">{job.id}</TableCell>
                          <TableCell className="font-medium">{job.customer}</TableCell>
                          <TableCell>{job.service}</TableCell>
                          <TableCell>{job.vehicle}</TableCell>
                          <TableCell>{getStatusBadge(job.status)}</TableCell>
                          <TableCell>{job.employee}</TableCell>
                          <TableCell className="text-muted-foreground">{job.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {totalPages > 1 && (
                  <div className="mt-6">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) setCurrentPage(currentPage - 1);
                            }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              isActive={currentPage === page}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                              }}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                            }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;