import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90",
            footerAction: "text-primary",
            card: "bg-card",
          },
        }}
        signUpUrl="/sign-up"
        redirectUrl="/dashboard"
      />
    </div>
  );
} 