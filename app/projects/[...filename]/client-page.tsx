"use client";
import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type {
	ProjectQuery,
	ProjectQueryVariables,
} from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

type ProjectClientPageProps = {
	query: string;
	variables: ProjectQueryVariables;
	data: ProjectQuery;
};
export default function ProjectClientPage({
	project,
}: { project: ProjectClientPageProps }) {
	const { data } = useTina(project);

	const {
		title,
		skills,
		abstract,
		body,
		datePublished,
		coverImage,
		websiteLink,
		githubLink,
	} = data.project;

	return (
		<article className="max-w-4xl mx-auto">
			<div className="mb-8">
				<Link
					href="/projects"
					className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-[#FF3366] transition-colors mb-6"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Projects
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
					{skills?.map((tech) => (
						<span
							key={tech?.tag?.id}
							className="bg-[#FF3366] text-white px-3 py-1 text-sm font-bold"
						>
							{tech?.tag?.title}
						</span>
					))}
				</div>
			</div>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="grid gap-8"
			>
				<div className="border-4 border-black overflow-hidden relative h-[300px] sm:h-[400px]">
					<Image
						src={coverImage}
						alt={title}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 1024px"
						priority
					/>
				</div>

				<div className="flex flex-row gap-8 items-center">
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-grow"
						>
							<button
								type="button"
								className="flex items-center justify-center w-full gap-2 bg-[#FF3366] text-white px-4 py-6 rounded border-2 border-black shadow-brutal hover:-translate-y-1 transition-transform"
							>
								<Github className="w-6 h-6" />
								<p className="font-sans text-2xl font-semibold">GitHub</p>
							</button>
						</a>
					)}
					{websiteLink && (
						<a
							href={websiteLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-grow"
						>
							<button
								type="button"
								className="flex items-center justify-center w-full gap-2 bg-green-500 text-white px-4 py-6 rounded border-2 border-black shadow-brutal hover:-translate-y-1 transition-transform"
							>
								<Globe className="w-6 h-6" />
								<p className="font-sans text-2xl font-semibold">Live Demo</p>
							</button>
						</a>
					)}
				</div>

				<div className="bg-white border-4 border-black p-6 sm:p-8 shadow-brutal prose prose-lg max-w-none">
					{/* <div dangerouslySetInnerHTML={{ __html: project.content }} /> */}
					<TinaMarkdown content={body} />
				</div>
			</motion.div>
		</article>
	);
}
