import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Arsenal, Poppins } from "next/font/google";
import "./globals.css";

const arsenal = Arsenal({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arsenal",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Travel Bug Tales Best Holiday Packages",
  description: "Book your Best trip with Travel Bug Tales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arsenal.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
