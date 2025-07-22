import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Activity
} from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Dummy data for the chart
const chartData = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
  { name: "Mar", revenue: 5000, users: 3800 },
  { name: "Apr", revenue: 4780, users: 3908 },
  { name: "May", revenue: 5890, users: 4800 },
  { name: "Jun", revenue: 6390, users: 3800 },
  { name: "Jul", revenue: 7490, users: 4300 },
  { name: "Aug", revenue: 6890, users: 5200 },
  { name: "Sep", revenue: 8490, users: 6100 },
  { name: "Oct", revenue: 9390, users: 6800 },
  { name: "Nov", revenue: 10490, users: 7200 },
  { name: "Dec", revenue: 11490, users: 7800 },
];

// Recent activities data
const recentActivities = [
  { action: "New user registration", user: "Alice Johnson", time: "2 minutes ago", type: "user" },
  { action: "Order completed", user: "Order #1234", time: "5 minutes ago", type: "order" },
  { action: "Payment processed", user: "$2,500", time: "10 minutes ago", type: "payment" },
  { action: "New user registration", user: "Bob Smith", time: "15 minutes ago", type: "user" },
  { action: "System backup completed", user: "System", time: "1 hour ago", type: "system" },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231"
          change="+20.1%"
          changeType="increase"
          icon={DollarSign}
        />
        <StatsCard
          title="Active Users"
          value="2,350"
          change="+15.3%"
          changeType="increase"
          icon={Users}
        />
        <StatsCard
          title="Total Orders"
          value="1,234"
          change="+8.2%"
          changeType="increase"
          icon={ShoppingCart}
        />
        <StatsCard
          title="Conversion Rate"
          value="3.2%"
          change="-2.4%"
          changeType="decrease"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'user' ? 'bg-success/10 text-success' :
                    activity.type === 'order' ? 'bg-primary/10 text-primary' :
                    activity.type === 'payment' ? 'bg-warning/10 text-warning' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}