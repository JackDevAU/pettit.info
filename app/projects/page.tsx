import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import React from "react";
import type { Metadata } from "next";
import ProjectComponent from "@/components/project";
import type { Project } from "@/tina/__generated__/types";

export const metadata: Metadata = {
	title: "Projects",
	description: "A collection of projects I've worked on or am working on",
};

export default async function ProjectsPage() {
	const { data } = await client.queries.projectConnection();
	const projects = data?.projectConnection;

	return (
		<div className="pt-24 ">
			<Typography variant={"h1"} className="pt-8">
				Projects
			</Typography>
			<div className="grid grid-cols-1">
				{projects.totalCount > 0 ? (
					projects?.edges
						?.sort((a, b) => {
							const orderA = a?.node?.order ?? Number.MAX_SAFE_INTEGER;
							const orderB = b?.node?.order ?? Number.MAX_SAFE_INTEGER;
							return orderA - orderB;
						})
						.map((project) => (
							<ProjectComponent
								key={project?.node?.id}
								project={{ ...project?.node } as Project}
							/>
						))
				) : (
					<p>No Projects yet</p>
				)}
			</div>
		</div>
	);
}
