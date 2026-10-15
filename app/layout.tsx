import type { Metadata } from "next";
import { event } from "../lib/event";
import "./globals.css";

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT ?? "3000"}`);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HackFest 2026 | November 6–8 at Rutgers–Newark",
  description: event.description,
  openGraph: {
    title: "HackFest 2026 | November 6–8 at Rutgers–Newark",
    description: event.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: event.name,
    description: event.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
