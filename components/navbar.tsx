"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDropdown } from "@/components/user-dropdown";

interface NavbarProps {
  user: any | null;
}

export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();

  console.log("User", user);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">YourApp</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                href="/signin"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
              >
                Sign in
              </Link>
              <Link href="/signup">
                <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
