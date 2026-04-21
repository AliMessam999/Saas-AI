import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import "./globals.css";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saas-AI",
  description: "AI SAAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <ClerkProvider> */}
          <header className="flex justify-between items-center border p-4 gap-4 h-16">
            <div className="logo">
              <img src="/logo.png" alt="Logo" width={150} height={150} />
            </div>
            <div className="flex justify-end gap-4">
              <Show when="signed-out">
                <SignInButton>
                  <Button className="bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer">Sign Up</Button>
                </SignUpButton>
              </Show>
            </div>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        {/* </ClerkProvider> */}
      </body>
    </html>
    </ClerkProvider>
  );
}

// 34:09