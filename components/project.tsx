import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentsRenderer } from "@/lib/renderer/components";
import Typography from "@/components/util/typography";
import type { Project } from "@/tina/__generated__/types";

export default function ProjectComponent({ project }: { project: Project }) {
	return (
		<article className="grid-cols-1 md:grid-cols-3 grid pt-8 h-full pb-4 ">
			<div className=" col-span-2 flex-grow flex flex-col justify-between bg-white">
				<div className="flex flex-grow border-2 border-black bg-blue-500">
					<Image
						src={project.coverImage}
						alt={`${project.title} screenshots`}
						width={1200}
						height={800}
						className="w-full h-full object-cover border-black border-2"
					/>
				</div>
				<Typography
					variant="h2"
					className="text-3xl font-bold border-l-2 border-r-2 border-b-4 border-black bg-white p-4"
				>
					{project.title}
				</Typography>
			</div>
			<div className="bg-white flex flex-col justify-between border-l-2 border-t-4 border-r-4 border-b-4 border-black">
				<div className="flex-grow p-4 prose">
					<TinaMarkdown
						content={project.body}
						components={ComponentsRenderer}
					/>
				</div>
				<div className="p-8 border-black border-t-4 border-b-4 gap-4 flex flex-wrap">
					{project.skills?.map((skill) => (
						<Badge
							key={skill?.tag?.id}
							className={`${skill?.tag?.colour} text-lg font-semibold`}
						>
							{skill?.tag?.title}
						</Badge>
					))}
				</div>
				<div className="flex flex-row gap-8 p-8 items-center">
					{project?.githubLink && (
						<Link href={project?.githubLink} className="flex-grow ">
							<Button className="w-full shadow-base gap-2 flex-grow bg-mainAccent text-white px-4 py-6 rounded border-2 border-black flex">
								<GithubIcon className="w-6 h-6" />
								<Typography className="mt-0" variant="h3">
									GitHub
								</Typography>
							</Button>
						</Link>
					)}
					{project?.websiteLink && (
						<Link
							href={project?.websiteLink}
							className={project.githubLink ? "" : "flex-grow"}
						>
							<Button className=" shadow-base w-full bg-green-500 text-white px-4 py-6 rounded border-2 border-black">
								<GlobeIcon className="w-6 h-6" />
							</Button>
						</Link>
					)}
					{!project?.githubLink && !project.websiteLink ? (
						<Button
							className=" shadow-base w-full bg-zinc-500 text-white px-4 py-6 rounded border-2 border-black opacity-50 cursor-not-allowed"
							disabled
						>
							Coming Soon
						</Button>
					) : null}
				</div>
			</div>
		</article>
	);
}
