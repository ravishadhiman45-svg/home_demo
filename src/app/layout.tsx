import type { Metadata } from "next";
import { Geist_Mono, Inter, Lato, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--ff-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

const lato = Lato({
  variable: "--ff-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanot Solutions | Build Authority. Rank Higher. Grow Faster.",
  description:
    "Earn high-quality backlinks, strengthen your search visibility, and turn organic traffic into meaningful business growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lato.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
