import "@/styles/globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { aeonik, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable
        )}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
