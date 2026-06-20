import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Impact Portfolio | Data & AI Specialist",
  description: "A business impact case study system for KPI systems, operational intelligence, shadow systems, and AI-enabled workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
