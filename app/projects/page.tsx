import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "A collection of projects I've worked on or am working on",
};

export default async function ProjectsPage() {
	const { data } = await client.queries.projectConnection();
	const projects = data?.projectConnection;

	return (
		<div className="pt-24 space-y-8">
			<Typography variant={"h1"} className="pt-8">
				Projects
			</Typography>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projects.totalCount > 0 ? (
					projects?.edges?.map((project) => (
						<Link
							className="w-full h-full block"
							key={project?.node?.id}
							href={`/projects/${project?.node?._sys.filename}`}
						>
							<Card className="h-full w-full bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
								<div className="relative w-full h-64 mb-4 border-b-4 border-black">
									<Image
										className="object-cover w-full h-full"
										src={project?.node?.coverImage || ""}
										alt={`Project ${project?.node?.abstract}`}
										layout="fill"
									/>
								</div>
								<div className="p-6">
									<Typography
										variant="h2"
										className="font-bold text-2xl mb-2 text-black"
									>
										{project?.node?.title}
									</Typography>
									<Typography variant="p" className="text-black">
										{project?.node?.abstract}
									</Typography>

									<div className="flex gap-1">
										{project?.node?.skills?.map((skill, index: number) => (
											<Badge
												key={index}
												className={`${skill?.tag?.colour} text-lg font-semibold`}
											>
												{skill?.tag?.title}
											</Badge>
										))}
									</div>
								</div>
							</Card>
						</Link>
					))
				) : (
					<p>No Projects yet</p>
				)}
			</div>
		</div>
	);
}
