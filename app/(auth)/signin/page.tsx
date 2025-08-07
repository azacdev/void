import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { SigninForm } from "@/components/auth/forms/signin-form";
import { BorderBeam } from "@/components/animations/border-beam";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In | Void",
  description: "Sign in with a magic link sent to your email or with Google",
};

export default async function SigninPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left side - Form */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start mb-8"
          >
            <h1 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                Void
              </span>
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-white">Sign in</h2>
          <p className="mt-2 text-sm text-gray-400">
            New to Void?{" "}
            <Link href="/signup" className="text-cyan-400 hover:text-cyan-300">
              Sign up for an account
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <SigninForm />
        </div>
      </div>

      {/* Right side - Branding/Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/3 left-1/2 w-3/4 h-1/3 -translate-x-1/2 blur-[8rem] bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-12">
          <div className="relative w-full max-w-md aspect-video rounded-xl p-1 ring-1 ring-inset ring-white/20 overflow-hidden">
            <BorderBeam
              size={200}
              duration={10}
              delay={5}
              colorFrom="#00f5ff"
              colorTo="#00ff94"
            />
            <div className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm h-full w-full flex items-center justify-center">
              <Image
                src="/assets/dashboard-dark.svg"
                alt="Void Dashboard Preview"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-medium text-white">
              Enter the{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                Void
              </span>
            </h3>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Experience the next generation of SaaS solutions with Void.
              Powerful tools, seamless workflows, infinite possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
