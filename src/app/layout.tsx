import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhonrel Acharon - Software Engineer",
  description: "Professional portfolio website showcasing my experience as a software engineer, featuring projects, skills, and contact information.",
  keywords: ["portfolio", "developer", "full-stack", "web development", "React", "Node.js", "TypeScript"],
  authors: [{ name: "Jhonrel Acharon" }],
  openGraph: {
    title: "Jhonrel Acharon - Software Engineer",
    description: "Professional portfolio website showcasing my experience as a software engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
