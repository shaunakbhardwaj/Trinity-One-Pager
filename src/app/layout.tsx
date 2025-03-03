import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Optimize font loading by preloading only necessary subsets
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: 'swap', // Improve perceived performance
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Trinity - Leading Experiential Marketing Agency",
  description: "Pioneering the future of experiential marketing and immersive brand engagement through innovative technology and creative excellence.",
  keywords: ["experiential marketing", "brand activation", "creative technology", "innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} font-sans antialiased relative overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
