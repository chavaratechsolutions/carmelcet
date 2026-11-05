import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carmel College of Engineering & Technology (CCET) | Enlightened for Excellence",
  description:
    "Engineers with integrity, built in Alappuzha. Four NBA-accredited B.Tech programmes, mentors who know your name, and a CMI legacy in education since 1831.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#F8F9FA] text-[#0C1E37] antialiased">
        {children}
      </body>
    </html>
  );
}
