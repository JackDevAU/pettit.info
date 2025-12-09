import client from "@/tina/__generated__/client";
import React from "react";
import ProjectClientPage from "./client-page";

export async function generateMetadata({
	params,
}: { params: Promise<{ filename: string[] }> }) {
	const { filename } = await params;
	// Join the filename array to handle nested paths or ensure string format
	const relativePath = `${filename.join('/')}.mdx`;
	
	try {
		const project = await client.queries.project({
			relativePath,
		});

		return {
			title: project.data.project.title,
			description: project.data.project.abstract,
		};
	} catch (error) {
		return {
			title: "Project Not Found",
		};
	}
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ filename: string[] }>;
}) {
	const { filename } = await params;
	// Join the filename array to handle nested paths or ensure string format
	// The previous error "content/projects/undefined.mdx" suggests 'filename' was undefined or not parsed correctly
	const relativePath = `${filename.join('/')}.mdx`;

	try {
		const { data, query, variables } = await client.queries.project({
			relativePath,
		});

		return <ProjectClientPage data={data} query={query} variables={variables} />;
	} catch (error) {
		return <div className="pt-24 text-center text-xl font-bold">Project not found or error loading content.</div>;
	}
}

export const generateStaticParams = async () => {
	const pages = await client.queries.projectConnection();
	const paths = pages.data?.projectConnection?.edges?.map((edge) => ({
		filename: edge?.node?._sys.breadcrumbs,
	}));

	return paths || [];
};