import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return null; // Handle by middleware
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Add dashboard content here */}
        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {user.firstName}!</h2>
          <p className="text-muted-foreground">
            This is your personal dashboard. More features coming soon.
          </p>
        </div>
      </div>
    </div>
  );
} 