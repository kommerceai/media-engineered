"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, user } = useUser();

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <div className="px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
} 