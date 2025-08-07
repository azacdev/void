import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { aeonik, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";
import { ThemeProvider } from "@/components/theme-provider";

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
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden scroll-smooth",
          aeonik.variable,
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
