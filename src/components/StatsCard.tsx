import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, changeType, icon: Icon }: StatsCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground mt-1">
              <span
                className={`font-medium ${
                  changeType === "increase" ? "text-success" : "text-destructive"
                }`}
              >
                {change}
              </span>{" "}
              from last month
            </p>
          </div>
          <div className={`p-3 rounded-full ${
            changeType === "increase" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          }`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}