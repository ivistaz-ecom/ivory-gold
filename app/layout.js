import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ivory & gold",
  description: "ivory gold is a beauty salon in bangalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
