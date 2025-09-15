import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  color = 'primary'
}: MetricCardProps) => {
  const colorClasses = {
    primary: 'from-primary/10 to-primary/5 text-primary border-primary/20',
    secondary: 'from-secondary/10 to-secondary/5 text-secondary border-secondary/20',
    success: 'from-success/10 to-success/5 text-success border-success/20',
    warning: 'from-warning/10 to-warning/5 text-warning border-warning/20',
  };

  const changeColor = changeType === 'increase' 
    ? 'text-success' 
    : changeType === 'decrease' 
    ? 'text-destructive' 
    : 'text-muted-foreground';

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
            <p className={`text-xs mt-2 ${changeColor}`}>
              {change}
            </p>
          </div>
          <div className={`
            w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center border
            ${colorClasses[color]}
          `}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;