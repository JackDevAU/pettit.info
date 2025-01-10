"use client";
import { motion } from "framer-motion";
import React from "react";
import Footer from "../layout/footer";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

function InfoHomeSection() {
	return (
		<section className="mb-12 sm:mb-16">
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl"
			>
				<h2 className="text-4xl sm:text-7xl font-black mb-4 sm:mb-6 leading-tight">
					Hi, I&apos;m Jack Pettit
					<br />
					<span className="bg-[#FF3366] text-white px-4 -rotate-1 inline-block mt-2">
						Fullstack Engineer
					</span>
				</h2>
				<p className="text-lg sm:text-xl bg-white p-4 sm:p-6 border-4 border-black shadow-brutal">
					Specializing in frontend development with React and TypeScript, and
					backend development with .NET
				</p>
			</motion.div>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5 * 0.2 }}
			>
				<section className="mt-4 sm:mt-2 justify-start flex">
					<div className="flex justify-center gap-3 sm:gap-4">
						<a
							href={"https://github.com/JackDevAU"}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white p-2 border-4 border-black shadow-brutal hover:-translate-y-1 transition-transform"
						>
							<Github className="w-5 h-5 sm:w-6 sm:h-6" />
						</a>
						<a
							href={"https://www.linkedin.com/in/jackdevau/"}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white p-2 border-4 border-black shadow-brutal hover:-translate-y-1 transition-transform"
						>
							<Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
						</a>
						<a
							href={"https://twitter.com/SSWJackPettit"}
							className="bg-white p-2 border-4 border-black shadow-brutal hover:-translate-y-1 transition-transform"
						>
							<Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
						</a>
					</div>
				</section>
			</motion.div>
		</section>
	);
}

export default InfoHomeSection;
