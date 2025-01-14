import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
	return (
		<section className="mt-12 sm:mt-16">
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
	);
}

export default Footer;
