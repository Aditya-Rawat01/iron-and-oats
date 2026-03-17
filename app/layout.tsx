import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRON & OATS — Train. Fuel. Repeat.",
  description: "Where athletic performance meets culinary craft. A gym cafe for those who refuse to settle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
