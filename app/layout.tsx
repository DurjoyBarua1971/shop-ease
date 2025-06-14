import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shop Ease - Your Online Shopping Companion",
  description: "Generated by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased pt-16`}
        suppressHydrationWarning={true}
      >
        <CartProvider>
          <div className="flex flex-col h-screen font-sans px-4">
            <Navbar />
            <div className="max-w-5xl w-full mx-auto py-4">{children}</div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
