import type { Metadata } from "next";
import { event } from "../lib/event";
import { siteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HackFest 2026 | November 6–8 at Rutgers–Newark",
  description: event.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
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
