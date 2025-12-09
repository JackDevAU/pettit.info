"use client";

import Link from "next/link";
import { Menu, ChevronDown, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuLinks = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Skills", href: "/skills" },
		{ label: "Projects", href: "/projects" },
		{ label: "Blog", href: "/blog" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<>
			<nav className="flex justify-between items-center py-6 px-4 sm:px-8 border-b-2 border-black/5 relative z-50 bg-[#F2F2F2]">
				{/* Left: Hamburger Menu */}
				<button 
					onClick={() => setIsMenuOpen(true)}
					className="bg-black text-white p-3 hover:bg-neutral-800 transition-colors"
				>
					<Menu className="w-6 h-6" />
				</button>

				{/* Center: Brand Name */}
				<Link href="/" className="text-2xl sm:text-4xl font-black tracking-tighter uppercase absolute left-1/2 -translate-x-1/2">
					JACK PETTIT
				</Link>

				{/* Right: Language & Contact */}
				<div className="flex items-center gap-6">
					
					<Link 
						href="/contact"
						className="hidden sm:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-neutral-800 transition-all hover:scale-105"
					>
						CONTACT ME
						<ArrowUpRight className="w-4 h-4" />
					</Link>

					{/* Mobile Contact Icon */}
					<Link href="/contact" className="sm:hidden bg-black text-white p-3 rounded-full">
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</div>
			</nav>

			{/* Full Screen Menu Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: "-100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100%" }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="fixed inset-0 bg-black z-[60] text-white flex flex-col p-8"
					>
						<div className="flex justify-between items-center mb-16">
							<span className="text-sm font-bold tracking-widest text-neutral-500">NAVIGATION</span>
							<button 
								onClick={() => setIsMenuOpen(false)}
								className="bg-white text-black p-3 hover:scale-110 transition-transform"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						<div className="flex flex-col gap-4">
							{menuLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2 + index * 0.1 }}
								>
									<Link 
										href={link.href}
										onClick={() => setIsMenuOpen(false)}
										className="text-5xl sm:text-7xl font-black tracking-tighter hover:text-neutral-400 transition-colors uppercase"
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</div>

						<div className="mt-auto pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-8">
							<div className="space-y-2">
								<h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Contact</h4>
								<p className="text-xl font-bold">hello@jackpettit.dev</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Socials</h4>
								<div className="flex gap-4 text-lg font-bold">
									<a href="https://www.linkedin.com/in/jackdevau/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">LinkedIn</a>
									<a href="https://github.com/jackdevau" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">GitHub</a>
									<a href="https://twitter.com/SSWJackPettit" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">Twitter</a>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}