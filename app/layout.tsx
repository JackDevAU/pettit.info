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
			<body className={`${inter.className} bg-[#F2F2F2] min-h-screen overflow-x-hidden`}>
				<div className="bg-noise" />
				<main className="relative w-full min-h-screen flex flex-col">
					<Navbar />
					<div className="flex-grow px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto w-full">
						{children}
					</div>
					<Footer />
				</main>
				<Analytics />
			</body>
		</html>
	);
}
