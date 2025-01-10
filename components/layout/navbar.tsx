"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
		{ href: "/blog", label: "Blog" },
	];

	return (
		<nav className="mb-8 sm:mb-16">
			<div className="flex justify-between items-center">
				<Link
					href="/"
					className="text-3xl sm:text-4xl font-black bg-black text-white px-4 py-2 rotate-2 hover:rotate-0 transition-transform"
				>
					JP
				</Link>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="sm:hidden bg-black text-white p-2"
				>
					<Menu className="w-6 h-6" />
				</button>

				{/* Desktop Navigation */}
				<div className="hidden sm:flex gap-4">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`px-4 py-2 border-4 border-black font-bold transition-transform hover:-translate-y-1 ${
								pathname === link.href ? "bg-[#FF3366] text-white" : "bg-white"
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="sm:hidden mt-4 flex flex-col gap-2">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setIsMenuOpen(false)}
							className={`px-4 py-2 border-4 border-black font-bold text-center ${
								pathname === link.href ? "bg-[#FF3366] text-white" : "bg-white"
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
