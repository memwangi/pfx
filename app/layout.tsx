import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
              <Navbar />
            {children}
            </div>
          
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
