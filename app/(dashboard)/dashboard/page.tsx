import { auth } from "@clerk/nextjs";
import {
  BarChart3,
  Bell,
  Calendar,
  Edit2,
  Eye,
  FileText,
  MessageSquare,
  Settings,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const stats = [
    {
      title: "Total Views",
      value: "24.8K",
      change: "+12%",
      description: "Last 30 days",
      icon: BarChart3,
    },
    {
      title: "Followers",
      value: "1,429",
      change: "+4.3%",
      description: "Total audience",
      icon: Users,
    },
    {
      title: "Content Pieces",
      value: "45",
      change: "+2",
      description: "Published content",
      icon: FileText,
    },
  ];

  const recentActivity = [
    {
      title: "Blog post published",
      description: "How to Grow Your Audience Organically",
      timestamp: "2 hours ago",
      icon: Edit2,
      stats: { views: "234", likes: "45", comments: "12" },
    },
    {
      title: "New milestone reached",
      description: "1000+ followers milestone achieved",
      timestamp: "1 day ago",
      icon: TrendingUp,
      stats: { increase: "+23%" },
    },
    {
      title: "Content scheduled",
      description: "5 posts scheduled for next week",
      timestamp: "2 days ago",
      icon: Calendar,
      stats: { scheduled: "5" },
    },
  ];

  const upcomingContent = [
    {
      title: "Social Media Strategy Guide",
      type: "Blog Post",
      date: "Tomorrow",
    },
    { title: "Growth Hacking Tips", type: "Video", date: "Next Week" },
    {
      title: "Community Building Workshop",
      type: "Live Event",
      date: "In 2 weeks",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track your content performance and engagement.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-green-500">{stat.change}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest content performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        {activity.stats.views && (
                          <span className="text-xs flex items-center text-muted-foreground">
                            <Eye className="h-3 w-3 mr-1" />{" "}
                            {activity.stats.views}
                          </span>
                        )}
                        {activity.stats.likes && (
                          <span className="text-xs flex items-center text-muted-foreground">
                            <ThumbsUp className="h-3 w-3 mr-1" />{" "}
                            {activity.stats.likes}
                          </span>
                        )}
                        {activity.stats.comments && (
                          <span className="text-xs flex items-center text-muted-foreground">
                            <MessageSquare className="h-3 w-3 mr-1" />{" "}
                            {activity.stats.comments}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Content</CardTitle>
            <CardDescription>Scheduled posts and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">{content.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {content.type}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {content.date}
                  </span>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                View Content Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Button className="w-full justify-start" variant="outline">
                <Edit2 className="mr-2 h-4 w-4" />
                Create New Content
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Content
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Manage Team
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Content engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Engagement Rate</span>
                <span className="text-sm font-medium">4.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Avg. Time on Content</span>
                <span className="text-sm font-medium">2:45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Conversion Rate</span>
                <span className="text-sm font-medium">2.8%</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Full Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
