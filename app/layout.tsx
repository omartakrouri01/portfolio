import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sigma-umber-60.vercel.app"),
  title: "Omar Takrouri | Data & AI Specialist",
  description:
    "Portfolio of Omar Takrouri: data analysis projects (KPI systems, executive dashboards, retention analysis) and AI projects in production (an email-driven complaints board and a voice-first Arabic collections assistant).",
  openGraph: {
    title: "Omar Takrouri | Data & AI Specialist",
    description: "Data analysis projects and AI systems in production, with measured business impact.",
    images: ["/images/omar-photo.jpg"]
  }
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
