import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Tang — Product Designer · Payments & Crypto",
  description:
    "Product designer specializing in payments and crypto — checkout for 300M PlayStation players, core money-movement flows at OKX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
