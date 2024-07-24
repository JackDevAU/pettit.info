import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Welcome!",
    template: `%s - Jack Pettit`,
  },
  description: "A collection of neobrutalism-styled Tailwind components.",
  keywords: ["Jack Pettit", "Portfolio"],
  authors: [{ name: "Jack Pettit", url: "https://github.com/jackdevau" }],
  openGraph: {
    type: "website",
    description: "Jack Pettit's portfolio",
    images: ["https://neobrutalism-components.vercel.app/preview.png"],
    url: "https://neobrutalism-components.vercel.app/",
    title: "Neobrutalism components",
  },
  metadataBase: new URL("https://neobrutalism-components.vercel.app/"),
  twitter: {
    card: "summary_large_image",
    title: "Jack Pettit's portfolio",
    description: "Check out Jack Pettit's portfolio!",
    images: ["https://neobrutalism-components.vercel.app/preview.png"],
    creator: "@PB_Pettit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <div id="drawer"></div>
        <div id="modal"></div>
        <Toaster />
      </body>
    </html>
  );
}
