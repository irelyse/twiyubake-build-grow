import { Clock, CheckCircle, AlertCircle, Wrench, Package, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "job_completed",
    title: "Oil Change - Toyota Camry",
    description: "Customer: Jean Mugabo",
    time: "5 minutes ago",
    status: "completed",
    icon: CheckCircle,
    color: "success"
  },
  {
    id: 2,
    type: "equipment_rented",
    title: "Hydraulic Jack Rented",
    description: "Customer: Marie Uwimana",
    time: "15 minutes ago",
    status: "active",
    icon: Package,
    color: "primary"
  },
  {
    id: 3,
    type: "job_pending",
    title: "Brake Repair - Honda Civic",
    description: "Assigned to: Eric Nshimiyimana",
    time: "30 minutes ago",
    status: "pending",
    icon: AlertCircle,
    color: "warning"
  },
  {
    id: 4,
    type: "customer_added",
    title: "New Customer Registration",
    description: "Alice Mukantwari",
    time: "1 hour ago",
    status: "completed",
    icon: Users,
    color: "secondary"
  },
  {
    id: 5,
    type: "job_started",
    title: "Engine Diagnostic",
    description: "Customer: Paul Hakizimana",
    time: "2 hours ago",
    status: "in_progress",
    icon: Wrench,
    color: "primary"
  }
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center mt-0.5
                  ${activity.color === 'success' ? 'bg-success/10 text-success' : ''}
                  ${activity.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                  ${activity.color === 'warning' ? 'bg-warning/10 text-warning' : ''}
                  ${activity.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                `}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.title}
                    </p>
                    <Badge 
                      variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'active' || activity.status === 'in_progress' ? 'secondary' :
                        'outline'
                      }
                      className="ml-2 text-xs"
                    >
                      {activity.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;