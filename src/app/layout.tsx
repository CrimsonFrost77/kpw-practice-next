import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from '@/components/navigation/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalikair Pourashava",
  description: "Official website of Kaliakair Pourashava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}