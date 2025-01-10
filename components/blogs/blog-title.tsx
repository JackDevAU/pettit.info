"use client";
import { motion } from "framer-motion";

function BlogTitle() {
	return (
		<motion.h1
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			className="text-4xl sm:text-5xl font-black mb-8 sm:mb-12"
		>
			<span className="bg-black text-white px-4 py-2 -rotate-1 inline-block">
				Blog & Thoughts
			</span>
		</motion.h1>
	);
}

export default BlogTitle;
