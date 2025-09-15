import { Plus, Calendar, FileText, Truck, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  {
    title: "New Job",
    description: "Create a new repair or maintenance job",
    icon: Wrench,
    color: "primary",
    action: () => console.log("New Job")
  },
  {
    title: "Add Equipment",
    description: "Register new equipment for rental",
    icon: Truck,
    color: "secondary",
    action: () => console.log("Add Equipment")
  },
  {
    title: "New Customer",
    description: "Add a new customer to the system",
    icon: Users,
    color: "success",
    action: () => console.log("New Customer")
  },
  {
    title: "Generate Report",
    description: "Create financial or operational report",
    icon: FileText,
    color: "warning",
    action: () => console.log("Generate Report")
  }
];

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5 text-primary" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-muted/50 transition-all duration-200 hover:shadow-sm"
                onClick={action.action}
              >
                <div className="flex items-center space-x-2 w-full">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center
                    ${action.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                    ${action.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                    ${action.color === 'success' ? 'bg-success/10 text-success' : ''}
                    ${action.color === 'warning' ? 'bg-warning/10 text-warning' : ''}
                  `}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-left">{action.title}</span>
                </div>
                <p className="text-xs text-muted-foreground text-left w-full">
                  {action.description}
                </p>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;