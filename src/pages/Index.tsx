import { 
  Wrench, 
  Package, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back to Twiyubake
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your garage and workshop today.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Active Jobs"
              value="12"
              change="+3 from yesterday"
              changeType="increase"
              icon={Wrench}
              color="primary"
            />
            <MetricCard
              title="Available Equipment"
              value="24"
              change="+2 new items"
              changeType="increase"
              icon={Package}
              color="success"
            />
            <MetricCard
              title="Total Customers"
              value="156"
              change="+8 this week"
              changeType="increase"
              icon={Users}
              color="secondary"
            />
            <MetricCard
              title="Revenue Today"
              value="₱45,000"
              change="+12% vs yesterday"
              changeType="increase"
              icon={DollarSign}
              color="warning"
            />
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <h3 className="font-semibold text-foreground">Completed Today</h3>
                  <p className="text-2xl font-bold text-success">8 Jobs</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">3 more than yesterday</p>
            </div>

            <div className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-8 w-8 text-warning" />
                <div>
                  <h3 className="font-semibold text-foreground">In Progress</h3>
                  <p className="text-2xl font-bold text-warning">5 Jobs</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Average completion: 2.5 hours</p>
            </div>

            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <div>
                  <h3 className="font-semibold text-foreground">Urgent</h3>
                  <p className="text-2xl font-bold text-destructive">2 Jobs</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Require immediate attention</p>
            </div>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <QuickActions />
            </div>
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
          </div>

          {/* Performance Insights */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border border-primary/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Performance Insights</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Average Job Time</p>
                  <p className="text-xl font-bold text-foreground">2.3 hours</p>
                  <p className="text-xs text-success">15% faster than last month</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <p className="text-xl font-bold text-foreground">4.8/5</p>
                  <p className="text-xs text-success">+0.2 points this month</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Equipment Utilization</p>
                  <p className="text-xl font-bold text-foreground">87%</p>
                  <p className="text-xs text-warning">Peak usage: 10AM-3PM</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;