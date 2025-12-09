"use client";
import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ComponentsRenderer } from "@/lib/renderer/components";
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
	data,
	query,
	variables,
}: ProjectClientPageProps) {
	const { data: tinaData } = useTina({
		query,
		variables,
		data,
	});

	const {
		title,
		skills,
		abstract,
		body,
		datePublished,
		coverImage,
		websiteLink,
		githubLink,
	} = tinaData.project;

	return (
		<article className="min-h-screen pt-12 pb-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-8">
				{/* Navigation */}
				<Link
					href="/projects"
					className="inline-flex items-center gap-2 font-bold text-sm tracking-widest hover:opacity-60 transition-opacity uppercase mb-16"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Projects
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
					{/* Sidebar / Meta Info - Sticky on Desktop */}
					<div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-12">
						{/* Title for Mobile */}
						<h1 className="lg:hidden text-6xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
							{title}
						</h1>

						{/* Links */}
						<div className="flex flex-col gap-4">
							{websiteLink && (
								<a
									href={websiteLink}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between bg-black text-white px-6 py-4 rounded-xl font-bold tracking-wider hover:bg-neutral-800 transition-all"
								>
									<span>VISIT SITE</span>
									<ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
								</a>
							)}
							{githubLink && (
								<a
									href={githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between bg-neutral-100 text-black px-6 py-4 rounded-xl font-bold tracking-wider hover:bg-neutral-200 transition-all"
								>
									<span>SOURCE CODE</span>
									<Github className="w-5 h-5" />
								</a>
							)}
						</div>

						{/* Tech Stack */}
						<div className="space-y-4">
							<h3 className="text-sm font-black text-neutral-400 uppercase tracking-widest">
								Technologies
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills?.map((tech) => (
									<span 
										key={tech?.tag?.id} 
										className="border-2 border-black/5 px-3 py-1.5 text-sm font-bold uppercase tracking-wide rounded-lg bg-white"
									>
										{tech?.tag?.title}
									</span>
								))}
							</div>
						</div>

						{/* Date */}
						<div className="space-y-2">
							<h3 className="text-sm font-black text-neutral-400 uppercase tracking-widest">
								Date
							</h3>
							<p className="font-bold text-xl">
								{datePublished ? new Date(datePublished).getFullYear() : "2024"}
							</p>
						</div>
					</div>

					{/* Main Content */}
					<div className="lg:col-span-8">
						{/* Title for Desktop */}
						<h1 className="hidden lg:block text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-12">
							{title}
						</h1>

						{/* Abstract/Intro */}
						{abstract && (
							<p className="text-2xl sm:text-3xl font-medium leading-tight mb-16 max-w-2xl">
								{abstract}
							</p>
						)}

						{/* Featured Image */}
						{coverImage && (
							<div className="relative w-full aspect-video bg-neutral-100 rounded-3xl overflow-hidden mb-16 shadow-2xl">
								<Image
									src={coverImage}
									alt={title}
									fill
									className="object-cover"
									priority
								/>
							</div>
						)}

						{/* Body Content */}
						<div className="max-w-none">
							<TinaMarkdown content={body} components={ComponentsRenderer} />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}