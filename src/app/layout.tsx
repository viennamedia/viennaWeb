import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Import Link from next/link
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vienna Blog",
  description: "The latest updates and insights on music royalties and artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <header className="w-full bg-black border-b border-gray-700 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Vienna</h1>
            <nav>
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link href="/" className="hover:text-secondary">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-secondary">About</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-secondary">Blog</Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-secondary">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6">{children}</main>

        <footer className="w-full bg-black border-t border-gray-700 px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} Vienna. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
