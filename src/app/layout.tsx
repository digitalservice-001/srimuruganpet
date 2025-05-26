import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";
import Head from "next/head"
import LayoutWrapper from "@/components/LayoutWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Murugan Pet Industry",
  description: "Sri Murugan Pet Industry is a leading manufacturer of high-quality pet products, specializing in pet food, accessories, and care items. Our commitment to quality and innovation ensures that pets receive the best care possible.",
  icons: {
    icon: "/Icon.png", // Ensure Icon.png is in your /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Icon.png" type="image/png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>      </body>
    </html>
  );
}
