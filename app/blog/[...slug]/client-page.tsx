"use client";
import { ComponentsRenderer } from "@/lib/renderer/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import Giscus from "@giscus/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type {
	Post,
	PostQuery,
	PostQueryVariables,
} from "@/tina/__generated__/types";
import { calculateReadTime } from "@/lib/utils";

type PostProps = {
	query: string;
	variables: PostQueryVariables;
	data: PostQuery;
};
export default function BlogClientPage({ post }: { post: PostProps }) {
	const { data } = useTina(post);
	const { title, lastUpdated, body, category } = data.post;

	return (
		<>
			<article className="max-w-4xl mx-auto">
				<div className="mb-8">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-[#FF3366] transition-colors mb-6"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Blog
					</Link>

					<motion.h1
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						className="text-3xl sm:text-5xl font-black mb-6"
					>
						<span className="bg-black text-white px-4 py-2 -rotate-1 inline-block">
							{title}
						</span>
					</motion.h1>

					<div className="flex flex-wrap gap-4 mb-8">
						{category && (
							<span className="bg-[#FF3366] text-white px-3 py-1 text-sm font-bold">
								{category.title}
							</span>
						)}
						<div className="flex items-center gap-2 text-sm">
							<Calendar className="w-4 h-4" />
							{new Date(lastUpdated).toLocaleDateString()}
						</div>
						<div className="flex items-center gap-2 text-sm">
							<Clock className="w-4 h-4" />
							{calculateReadTime(body)}
						</div>
					</div>
				</div>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="bg-white border-4 border-black p-6 sm:p-8 shadow-brutal prose prose-lg max-w-none"
				>
					<TinaMarkdown content={body} components={ComponentsRenderer} />
				</motion.div>
			</article>
			<Giscus
				repo="JackDevAU/pettit.info"
				repoId="R_kgDOMaiLSA"
				category="Comments"
				categoryId="DIC_kwDOMaiLSM4ChKTR"
				mapping="pathname"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="bottom"
				theme="noborder_light"
				lang="en"
				loading="lazy"
				term="Welcome to My Blog! Leave a comment or ask a question."
			/>
		</>
	);
}
