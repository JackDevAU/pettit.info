"use client";
import NumberTicker from "../util/number-ticker";
import { motion } from "framer-motion";
import { Coffee, Bug, BookText } from "lucide-react";

type CounterSectionProps = {
	coffeeCount: number;
	gitHubCommits: number;
	blogPosts: number;
};
function CounterSection({
	coffeeCount,
	gitHubCommits,
	blogPosts,
}: CounterSectionProps) {
	return (
		<section className="mb-12 sm:mb-16">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<h3 className="text-2xl sm:text-3xl font-bold mb-6">
					<span className="bg-black text-white px-4 py-2 rotate-1 inline-block">
						So far, this year I've...
					</span>
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div className="bg-white border-4 border-black p-4 shadow-brutal hover:-translate-y-1 transition-transform">
						<div className="flex items-center gap-3 mb-2">
							<Coffee className="w-6 h-6" />
							<span className="text-lg font-bold">Coffee Count</span>
						</div>
						<p className="text-3xl">
							<NumberTicker value={coffeeCount} /> cups
						</p>
					</div>

					<div className="bg-white border-4 border-black p-4 shadow-brutal hover:-translate-y-1 transition-transform">
						<div className="flex items-center gap-3 mb-2">
							<Bug className="w-6 h-6" />
							<span className="text-lg font-bold">GitHub Commits</span>
						</div>
						<p className="text-3xl">
							<NumberTicker value={gitHubCommits} />
						</p>
					</div>

					<div className="bg-white border-4 border-black p-4 shadow-brutal hover:-translate-y-1 transition-transform">
						<div className="flex items-center gap-3 mb-2">
							<BookText className="w-6 h-6" />
							<span className="text-lg font-bold">Blog Posts</span>
						</div>
						<p className="text-3xl">
							<NumberTicker value={blogPosts} />
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default CounterSection;
