import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Center for Child and Family Psychiatry",
  description: "The Center for Child and Family Psychiatry tab bar disc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header/>
        {children}
        <GoogleMap/>
        <Footer/>
      </body>
    </html>
  );
}

