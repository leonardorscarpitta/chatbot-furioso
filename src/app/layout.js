import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChatBot Furioso",
  description: "Web App criado em NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-cover flex flex-col`}
        style={{ backgroundImage: "url('/bg.avif')" }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
