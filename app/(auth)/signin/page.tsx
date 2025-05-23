import type { Metadata } from "next";

import { SigninForm } from "@/components/auth/forms/signin-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in with a magic link sent to your email or gmail",
};

export default function SigninPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center mx-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in with Google or get a secure link sent to your email
          </p>
        </div>
        <SigninForm />
      </div>
    </div>
  );
}
