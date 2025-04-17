import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { MemeProvider } from "../contexts/MemeContext";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meme Library",
  description: "Directory of popular memes with the ability to edit",
  keywords: ["memes", "library", "collection", "humor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} font-sans antialiased bg-gray-50 min-h-screen flex flex-col`}>
        <MemeProvider>
          <Navbar />

          <main className="container mx-auto px-4 py-6 flex-grow">
            {children}
          </main>
          
          <footer className="bg-white border-t py-4">
            <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Meme Library. All rights reserved.
            </div>
          </footer>
        </MemeProvider>
      </body>
    </html>
  );
}