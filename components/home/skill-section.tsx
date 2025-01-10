"use client";
import { motion } from "framer-motion";

function SkillSection() {
	return (
		<section>
			<h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-black text-white px-4 py-2 inline-block rotate-1">
				Skills & Technologies
			</h3>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
				{[
					"JavaScript/TypeScript",
					"React",
					".NET",
					"Azure",
					"Node.js/Bun/Deno",
					"Python",
					"SQL/NoSQL",
					"Docker",
				].map((skill, index) => (
					<motion.div
						key={index}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: index * 0.1 }}
						className="bg-white border-4 border-black p-3 sm:p-4 text-center font-bold shadow-brutal hover:bg-[#FF3366] hover:text-white transition-colors text-sm sm:text-base"
					>
						{skill}
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default SkillSection;
