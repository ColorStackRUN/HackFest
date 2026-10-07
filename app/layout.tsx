import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackFest 2026 · Building Newark",
  description:
    "HackFest 2026 at Rutgers–Newark. Students building tech that builds up the city. No experience needed.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
