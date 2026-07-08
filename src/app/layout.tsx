import type { Metadata } from "next";
import { Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { siteContent } from "@/lib/content";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-grotesk",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  title: `${siteContent.name} | Personal Site`,
  description: siteContent.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${splineMono.variable} font-sans`}>
        <a href="#about" className="skip-link">
          Skip to the argument
        </a>
        <MotionProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
