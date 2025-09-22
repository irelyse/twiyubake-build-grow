import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Download, DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";

const transactions = [
  { id: "TXN001", type: "Income", description: "Engine Repair - CUS001", amount: 85000, date: "2024-01-15", status: "Completed", category: "Service" },
  { id: "TXN002", type: "Expense", description: "Spare Parts Purchase", amount: -25000, date: "2024-01-15", status: "Completed", category: "Inventory" },
  { id: "TXN003", type: "Income", description: "Equipment Rental - CUS003", amount: 120000, date: "2024-01-14", status: "Completed", category: "Rental" },
  { id: "TXN004", type: "Expense", description: "Employee Salaries", amount: -180000, date: "2024-01-13", status: "Completed", category: "Payroll" },
  { id: "TXN005", type: "Income", description: "Brake Service - CUS002", amount: 45000, date: "2024-01-12", status: "Pending", category: "Service" },
  { id: "TXN006", type: "Expense", description: "Electricity Bill", amount: -15000, date: "2024-01-12", status: "Completed", category: "Utilities" }
];

const invoices = [
  { id: "INV001", customer: "Patrick Uwimana", amount: 85000, dueDate: "2024-01-20", status: "Paid", items: "Engine Repair, Oil Change" },
  { id: "INV002", customer: "Safari Construction", amount: 120000, dueDate: "2024-01-25", status: "Pending", items: "Equipment Rental (3 days)" },
  { id: "INV003", customer: "Immaculée Nsengimana", amount: 45000, dueDate: "2024-01-18", status: "Overdue", items: "Brake Service, Inspection" },
  { id: "INV004", customer: "Transport Cooperative", amount: 200000, dueDate: "2024-01-30", status: "Draft", items: "Fleet Maintenance Service" }
];

const Finance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter(transaction => 
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInvoices = invoices.filter(invoice => 
    invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
      case "Paid":
        return <Badge className="bg-success/10 text-success border-success/20">{status}</Badge>;
      case "Pending":
        return <Badge className="bg-warning/10 text-warning border-warning/20">{status}</Badge>;
      case "Overdue":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">{status}</Badge>;
      case "Draft":
        return <Badge className="bg-muted/50 text-muted-foreground border-muted/20">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const totalIncome = transactions.filter(t => t.type === "Income").reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const totalExpenses = transactions.filter(t => t.type === "Expense").reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const profit = totalIncome - totalExpenses;
  const pendingInvoices = invoices.filter(i => i.status === "Pending" || i.status === "Overdue").reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Finance Management</h1>
              <p className="text-muted-foreground">Track invoices, transactions, and budgets</p>
            </div>

            {/* Finance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Income"
                value={`₱${totalIncome.toLocaleString()}`}
                change="+12.5%"
                changeType="increase"
                icon={TrendingUp}
              />
              <MetricCard
                title="Total Expenses"
                value={`₱${totalExpenses.toLocaleString()}`}
                change="+5.2%"
                changeType="increase"
                icon={TrendingDown}
              />
              <MetricCard
                title="Net Profit"
                value={`₱${profit.toLocaleString()}`}
                change="+18.3%"
                changeType="increase"
                icon={DollarSign}
              />
              <MetricCard
                title="Pending Invoices"
                value={`₱${pendingInvoices.toLocaleString()}`}
                change="-8.1%"
                changeType="decrease"
                icon={CreditCard}
              />
            </div>

            <Tabs defaultValue="transactions" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <TabsList>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                  <TabsTrigger value="budget">Budget</TabsTrigger>
                </TabsList>
                
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search..."
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
                    Add New
                  </Button>
                </div>
              </div>

              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Transactions</CardTitle>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === "Income" 
                                ? "bg-success/10 text-success" 
                                : "bg-destructive/10 text-destructive"
                            }`}>
                              {transaction.type === "Income" ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`font-medium ${
                              transaction.type === "Income" ? "text-success" : "text-destructive"
                            }`}>
                              {transaction.type === "Income" ? "+" : ""}₱{Math.abs(transaction.amount).toLocaleString()}
                            </span>
                            {getStatusBadge(transaction.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="invoices">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Invoices</CardTitle>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredInvoices.map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                          <div>
                            <p className="font-medium">{invoice.id} - {invoice.customer}</p>
                            <p className="text-sm text-muted-foreground">{invoice.items}</p>
                            <p className="text-xs text-muted-foreground">Due: {invoice.dueDate}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-medium">₱{invoice.amount.toLocaleString()}</span>
                            {getStatusBadge(invoice.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget">
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center py-12">
                        <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Budget management features coming soon...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Finance;