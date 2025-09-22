import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Plus, Search, Filter, Settings, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const equipment = [
  { id: "E001", name: "Hydraulic Jack", category: "Lifting", status: "Available", condition: "Excellent", location: "Bay 1", lastMaintenance: "2024-01-10" },
  { id: "E002", name: "Air Compressor", category: "Pneumatic", status: "In Use", condition: "Good", location: "Bay 2", lastMaintenance: "2024-01-08" },
  { id: "E003", name: "Engine Hoist", category: "Lifting", status: "Available", condition: "Good", location: "Bay 3", lastMaintenance: "2024-01-05" },
  { id: "E004", name: "Tire Changer", category: "Tire Service", status: "Maintenance", condition: "Fair", location: "Tire Bay", lastMaintenance: "2024-01-12" },
  { id: "E005", name: "Brake Lathe", category: "Brake Service", status: "Available", condition: "Excellent", location: "Bay 1", lastMaintenance: "2024-01-11" },
  { id: "E006", name: "Diagnostic Scanner", category: "Diagnostic", status: "In Use", condition: "Excellent", location: "Bay 2", lastMaintenance: "2024-01-09" },
  { id: "E007", name: "Welding Machine", category: "Repair", status: "Available", condition: "Good", location: "Workshop", lastMaintenance: "2024-01-07" },
  { id: "E008", name: "Car Lift", category: "Lifting", status: "Available", condition: "Excellent", location: "Bay 4", lastMaintenance: "2024-01-06" }
];

const Equipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  const filteredEquipment = equipment.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEquipment.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEquipment = filteredEquipment.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-success/10 text-success border-success/20"><CheckCircle className="w-3 h-3 mr-1" />Available</Badge>;
      case "In Use":
        return <Badge className="bg-primary/10 text-primary border-primary/20">In Use</Badge>;
      case "Maintenance":
        return <Badge className="bg-warning/10 text-warning border-warning/20"><AlertTriangle className="w-3 h-3 mr-1" />Maintenance</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return <Badge variant="outline" className="text-success border-success/50">Excellent</Badge>;
      case "Good":
        return <Badge variant="outline" className="text-primary border-primary/50">Good</Badge>;
      case "Fair":
        return <Badge variant="outline" className="text-warning border-warning/50">Fair</Badge>;
      default:
        return <Badge variant="outline">{condition}</Badge>;
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Equipment Management</h1>
              <p className="text-muted-foreground">Track and manage all garage equipment and tools</p>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Button variant="outline" size="default">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Equipment
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEquipment.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status</span>
                        {getStatusBadge(item.status)}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Condition</span>
                        {getConditionBadge(item.condition)}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Location</span>
                        <span className="text-sm font-medium">{item.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last Maintenance</span>
                        <span className="text-sm">{item.lastMaintenance}</span>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <span className="text-xs text-muted-foreground">ID: {item.id}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Equipment;