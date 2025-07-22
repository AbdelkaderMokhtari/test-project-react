
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download, Calendar, BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Monthly Sales Report",
    type: "Sales",
    generatedAt: "2024-01-15",
    status: "Ready",
    size: "2.3 MB",
  },
  {
    id: 2,
    name: "User Activity Report",
    type: "Analytics",
    generatedAt: "2024-01-14",
    status: "Ready",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "Financial Summary",
    type: "Financial",
    generatedAt: "2024-01-13",
    status: "Processing",
    size: "3.1 MB",
  },
  {
    id: 4,
    name: "Product Performance",
    type: "Product",
    generatedAt: "2024-01-12",
    status: "Ready",
    size: "1.5 MB",
  },
];

const quickReports = [
  {
    title: "Sales Overview",
    description: "Revenue, orders, and conversion metrics",
    icon: DollarSign,
    type: "Financial",
  },
  {
    title: "User Engagement",
    description: "User activity, retention, and growth",
    icon: Users,
    type: "Analytics",
  },
  {
    title: "Performance Metrics",
    description: "Page load times, uptime, and errors",
    icon: TrendingUp,
    type: "Performance",
  },
  {
    title: "Content Analytics",
    description: "Most viewed pages and content engagement",
    icon: BarChart3,
    type: "Content",
  },
];

export default function Reports() {
  const getStatusBadge = (status: string) => {
    if (status === "Ready") {
      return <Badge className="bg-green-100 text-green-800">Ready</Badge>;
    } else if (status === "Processing") {
      return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
    }
    return <Badge variant="secondary">{status}</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      Sales: "bg-blue-100 text-blue-800",
      Analytics: "bg-purple-100 text-purple-800",
      Financial: "bg-green-100 text-green-800",
      Product: "bg-orange-100 text-orange-800",
      Performance: "bg-red-100 text-red-800",
      Content: "bg-indigo-100 text-indigo-800",
    };
    return (
      <Badge className={variants[type as keyof typeof variants] || "bg-gray-100 text-gray-800"}>
        {type}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Generate and manage your business reports</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Quick Reports */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Reports</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickReports.map((report, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium">{report.title}</CardTitle>
                  <CardDescription className="text-xs">{report.description}</CardDescription>
                </div>
                <report.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {getTypeBadge(report.type)}
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Report History */}
      <Card>
        <CardHeader>
          <CardTitle>Report History</CardTitle>
          <CardDescription>Previously generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Generated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {report.name}
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(report.type)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {report.generatedAt}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell>{report.size}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={report.status !== "Ready"}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>Predefined report templates for common business needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Weekly Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive weekly overview with key metrics and trends
              </p>
              <Button size="sm" className="w-full">Use Template</Button>
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">Revenue Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Detailed revenue breakdown by product, region, and time period
              </p>
              <Button size="sm" className="w-full">Use Template</Button>
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <h3 className="font-medium">Customer Insights</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Customer behavior, demographics, and satisfaction metrics
              </p>
              <Button size="sm" className="w-full">Use Template</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
