import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import React from "react";
import ProjectClientPage from "./client-page";

export async function generateMetadata({
	params,
}: { params: { filename: string[] } }) {
	const project = await client.queries.project({
		relativePath: `${params.filename}.mdx`,
	});

	return {
		title: project.data.project.title,
		description: project.data.project.abstract,
	};
}

export default async function ProjectPage({
	params: { filename },
}: {
	params: { filename: string[] };
}) {
	const project = await client.queries.project({
		relativePath: `${filename}.mdx`,
	});

	if (project.errors) {
		return <div className="pt-24">Post not found</div>;
	}

	return (
		<article className="grid-cols-1 md:grid-cols-2 grid pt-24 h-screen pb-4">
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
			<ProjectClientPage project={project.data.project} />
		</article>
	);
}

export const generateStaticParams = async () => {
	const pages = await client.queries.projectConnection();
	const paths = pages.data?.projectConnection?.edges?.map((edge) => ({
		filename: edge?.node?._sys.breadcrumbs,
	}));

	return paths || [];
};
