import { NextResponse } from "next/server";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // TODO: Send email notification
    // For now, just log the data
    console.log("Contact form submission:", validatedData);

    // Here you would typically:
    // 1. Store in database
    // 2. Send email notification
    // 3. Set up webhook triggers

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
