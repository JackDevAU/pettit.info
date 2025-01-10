"use client";
import { calculateReadTime } from "@/lib/utils";
import type { Post } from "@/tina/__generated__/types";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

function BlogCard({ post, index }: { post: Post; index: number }) {
	return (
		<motion.article
			key={post._sys.filename}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: index * 0.2 }}
			className="bg-white border-4 border-black p-4 sm:p-6 shadow-brutal hover:-translate-y-1 transition-transform"
		>
			<div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
				{post.category && (
					<span className="bg-[#FF3366] text-white px-3 py-1 text-sm font-bold">
						{post.category.title}
					</span>
				)}
				<div className="flex items-center gap-2 text-sm">
					<Calendar className="w-4 h-4" />
					{post?.lastUpdated
						? new Intl.DateTimeFormat("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric",
							}).format(new Date(post.lastUpdated))
						: "No update date"}
				</div>

				<div className="flex items-center gap-2 text-sm">
					<Clock className="w-4 h-4" />
					{calculateReadTime(post.body)}
				</div>
			</div>

			<h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
				{post.title}
			</h2>
			<p className="mb-4 sm:mb-6 text-base sm:text-lg">{post.description}</p>

			<Link
				href={`/blog/${post._sys.filename}`}
				className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-[#FF3366] transition-colors"
			>
				Read More <ArrowRight className="w-4 h-4" />
			</Link>
		</motion.article>
	);
}

export default BlogCard;
