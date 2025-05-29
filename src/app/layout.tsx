import { Header } from "@/components/header";
import type { Metadata } from "next";
import {
  Arsenal,
  DM_Serif_Display,
  Montserrat,
  Poppins,
} from "next/font/google";
import localFont from "next/font/local";
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

const dmSerifDispaly = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dmSerifDisplay",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const playListScript = localFont({
  src: [
    {
      path: "../../public/fonts/playlist-script.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/playlist-script.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/playlist-script.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-playListScript",
  display: "swap",
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
      <body
        className={`${arsenal.variable} ${poppins.variable} ${dmSerifDispaly.variable} ${montserrat.variable} ${playListScript.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
