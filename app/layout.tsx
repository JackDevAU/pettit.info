import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Welcome!",
		template: "%s - Jack Pettit",
	},
	alternates: {
		types: {
			"application/rss+xml": "https://pettit.info/feed.xml",
		},
	},
	description: "My Personal Website - for all things me",
	keywords: ["Jack Pettit", "Portfolio"],
	authors: [{ name: "Jack Pettit", url: "https://github.com/jackdevau" }],
	openGraph: {
		type: "website",
		description: "Jack Pettit's portfolio",
		images: [""],
		url: "https://pettit.info",
		title: "Jack Pettit's portfolio",
	},
	metadataBase: new URL("https://pettit.info"),
	twitter: {
		card: "summary_large_image",
		title: "Jack Pettit's portfolio",
		description: "Check out Jack Pettit's portfolio!",
		images: ["https://pettit.infopreview.png"],
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
				<main className="min-h-screen px-4 sm:px-8 py-6 sm:py-8 max-w-8xl justify-center mx-auto">
					<Navbar />
					{children}
					<Footer />
				</main>
				{/* <div id="drawer" />
				<div id="modal" /> */}
				{/* <Toaster /> */}
				<Analytics />
			</body>
		</html>
	);
}
