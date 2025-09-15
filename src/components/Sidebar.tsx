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

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: true },
  { name: "Jobs & Services", icon: Wrench, current: false },
  { name: "Equipment Rental", icon: Truck, current: false },
  { name: "Inventory", icon: Package, current: false },
  { name: "Employees", icon: UserCheck, current: false },
  { name: "Customers", icon: Users, current: false },
  { name: "Finances", icon: DollarSign, current: false },
  { name: "Reports", icon: FileText, current: false },
  { name: "Analytics", icon: BarChart3, current: false },
  { name: "Settings", icon: Settings, current: false },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-card border-r border-border">
      <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant={item.current ? "default" : "ghost"}
                className={`w-full justify-start text-left h-11 ${
                  item.current 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
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