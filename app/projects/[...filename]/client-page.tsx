"use client";
import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentsRenderer } from "@/lib/renderer/components";
import Typography from "@/components/util/typography";

export default function ProjectClientPage({ project }: { project: any }) {
	return (
		<div className="flex flex-col justify-between border-l-2 border-t-4 border-r-4 border-b-4 border-black">
			<div className="flex-grow p-4 prose">
				<TinaMarkdown content={project.body} components={ComponentsRenderer} />
			</div>
			<div className="p-8 border-black border-t-4 border-b-4 gap-4 flex">
				{project.skills?.map((skill: any, index: number) => (
					<Badge
						key={index}
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
			</div>
		</div>
	);
}
