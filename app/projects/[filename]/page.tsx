import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProjectPage({
	params: { filename },
}: {
	params: { filename: string };
}) {
	const project = await client.queries.project({
		relativePath: `${filename}.mdx`,
	});

	if (project.errors) {
		return <div className="pt-24">Post not found</div>;
	}

	return (
		<article className="grid-cols-2 grid pt-24 h-screen pb-4">
			<div className="flex flex-col justify-between ">
				<div className="flex flex-grow border-2 border-black">
					<Image
						src={project.data.project.coverImage}
						alt={`${project.data.project.title} screenshots`}
						width={1200}
						height={800}
						className="w-full h-full object-cover border-black border-2"
					/>
				</div>
				<Typography
					variant="h2"
					className="text-3xl font-bold border-l-2 border-r-2 border-b-4 border-black bg-white p-4"
				>
					{project.data.project.title}
				</Typography>
			</div>
			<div className="flex flex-col justify-between border-l-2 border-t-4 border-r-4 border-b-4 border-black">
				<div className="flex flex-grow p-4">
					<TinaMarkdown content={project.data.project.body} />
				</div>
				<div className="p-8 border-black border-t-4 border-b-4 gap-4 flex">
					{project.data.project.skills?.map((skill, index) => (
						<Badge
							key={index}
							className={`${skill?.tag?.colour} text-lg font-semibold`}
						>
							{skill?.tag?.title}
						</Badge>
					))}
				</div>
				<div className="flex flex-row gap-8 p-8 items-center">
					{project.data.project?.githubLink && (
						<Link
							href={project.data.project?.githubLink}
							className="flex-grow "
						>
							<Button className="w-full shadow-base gap-2 flex-grow bg-mainAccent text-white px-4 py-6 rounded border-2 border-black flex">
								<GithubIcon className="w-6 h-6" />
								<Typography className="mt-0" variant="h3">
									GitHub
								</Typography>
							</Button>
						</Link>
					)}
					{project.data.project?.websiteLink && (
						<Link
							href={project.data.project?.websiteLink}
							className={project.data.project.githubLink ? "" : "flex-grow"}
						>
							<Button className=" shadow-base w-full bg-green-500 text-white px-4 py-6 rounded border-2 border-black">
								<GlobeIcon className="w-6 h-6" />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
