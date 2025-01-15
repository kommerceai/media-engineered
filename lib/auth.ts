import { currentUser } from "@clerk/nextjs/server";

import { supabase } from "./supabase";

export type AuthSession = {
  userId: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

export async function createSupabaseSession(session: AuthSession) {
  try {
    // Get the current user's details from Clerk
    const { userId, email, firstName, lastName } = session;

    // Check if user exists in Supabase
    const { data: existingUser } = await supabase
      .from("users")
      .select()
      .eq("clerk_id", userId)
      .single();

    if (!existingUser) {
      // Create new user in Supabase
      const { data: newUser, error } = await supabase
        .from("users")
        .insert([
          {
            clerk_id: userId,
            email,
            first_name: firstName,
            last_name: lastName,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return newUser;
    }

    return existingUser;
  } catch (error) {
    console.error("Error creating Supabase session:", error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const user = await currentUser();

    if (!user) return null;

    const { data: dbUser, error } = await supabase
      .from("users")
      .select("*")
      .eq("clerk_id", user.id)
      .single();

    if (error) throw error;
    return dbUser;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
