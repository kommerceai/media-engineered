import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90",
            footerAction: "text-primary",
            card: "bg-card",
          },
        }}
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
      />
    </div>
  );
} 