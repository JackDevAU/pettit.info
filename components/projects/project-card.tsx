"use client";
import { getRandomNeoBrutalistColor } from "@/lib/utils";
import type { Project } from "@/tina/__generated__/types";
import { motion } from "framer-motion";
import { ExternalLink, Github, GithubIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Typography from "../util/typography";
import { Badge } from "../ui/badge";

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<motion.article
			key={project.title}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: index * 0.2 }}
			className="border-4 border-black shadow-brutal overflow-hidden"
			style={{
				backgroundColor: project?.color || getRandomNeoBrutalistColor(),
			}}
		>
			<div className="grid md:grid-cols-2 gap-4 sm:gap-6">
				<div className="h-48 sm:h-64 md:h-auto">
					<Image
						src={project.coverImage}
						alt={`${project.title} screenshots`}
						width={1200}
						height={800}
						className="w-full h-full object-cover border-b-4 md:border-b-0 md:border-r-4 border-black"
					/>
				</div>
				<div className="p-4 sm:p-6">
					<Link href={`/projects/${project._sys.filename}`}>
						<h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 hover:underline">
							{" "}
							{project.title}
						</h2>
					</Link>
					<p className="mb-4 sm:mb-6 text-base sm:text-lg">
						{project.abstract}
					</p>
					<div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
						{project?.skills?.map((tech) => (
							<span
								key={tech?.tag?.id}
								className="bg-black text-white px-3 py-1 text-sm"
							>
								{tech?.tag?.title}
							</span>
						))}
					</div>
					<div className="flex gap-3 sm:gap-4">
						{project?.githubLink && (
							<Link
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-black text-white px-3 sm:px-4 py-2 hover:-translate-y-1 transition-transform text-sm sm:text-base"
							>
								<Github className="w-4 h-4 sm:w-5 sm:h-5" />
								Code
							</Link>
						)}
						{project?.websiteLink && (
							<Link
								href={project.websiteLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-black text-white px-3 sm:px-4 py-2 hover:-translate-y-1 transition-transform text-sm sm:text-base"
							>
								<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
								Live Demo
							</Link>
						)}
					</div>
				</div>
			</div>
		</motion.article>
	);
}

export default ProjectCard;
