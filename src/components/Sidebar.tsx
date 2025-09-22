import { 
  LayoutDashboard, 
  Wrench, 
  Package, 
  Users, 
  DollarSign, 
  UserCheck,
  BarChart3,
  Settings,
  FileText,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Jobs", icon: Wrench, href: "/jobs" },
  { name: "Equipment", icon: Package, href: "/equipment" },
  { name: "Employees", icon: UserCheck, href: "/employees" },
  { name: "Customers", icon: Users, href: "/customers" },
  { name: "Finances", icon: DollarSign, href: "/finances" },
  { name: "Reports", icon: FileText, href: "/reports" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="hidden md:flex flex-col w-64 bg-card border-r border-border">
      <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={`
                  w-full justify-start text-left h-11
                  ${isActive 
                    ? 'bg-primary/10 text-primary border-l-2 border-l-primary' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }
                `}
                asChild
              >
                <Link to={item.href}>
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </nav>
        
        {/* Quick Stats */}
        <div className="mt-8 px-4">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/10">
            <h3 className="text-sm font-medium text-foreground mb-2">Today's Summary</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Jobs</span>
                <span className="font-medium text-primary">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Available Equipment</span>
                <span className="font-medium text-success">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Revenue Today</span>
                <span className="font-medium text-secondary">₱45,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;