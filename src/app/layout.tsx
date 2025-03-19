import type { Metadata } from "next";
import { Geist, Geist_Mono, Creepster, Jaro } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const creepster = Creepster({
  variable: "--font-creepster",
  subsets:  ["latin"],
  weight: "400",
})

const jaro = Jaro({
  variable: "--font-jaro",
  subsets:  ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "MemeVerse",
  description: "Create, Share and GO Viral in Memeverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable} ${jaro.variable} antialiased`}
      >
         <ClerkProvider>

        {children}
         </ClerkProvider>
      </body>
    </html>
   
  );
}
