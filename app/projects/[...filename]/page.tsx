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
	return <ProjectClientPage project={project} />;
}

export const generateStaticParams = async () => {
	const pages = await client.queries.projectConnection();
	const paths = pages.data?.projectConnection?.edges?.map((edge) => ({
		filename: edge?.node?._sys.breadcrumbs,
	}));

	return paths || [];
};
