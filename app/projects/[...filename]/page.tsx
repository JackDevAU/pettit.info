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

		const ogImage = `/og?label=Project&title=${encodeURIComponent(project.data.project.title)}`;

		return {
			title: project.data.project.title,
			description: project.data.project.abstract,
			openGraph: {
				title: project.data.project.title,
				description: project.data.project.abstract ?? undefined,
				images: [ogImage],
			},
			twitter: {
				card: "summary_large_image",
				images: [ogImage],
			},
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

	let result: Awaited<ReturnType<typeof client.queries.project>>;
	try {
		result = await client.queries.project({
			relativePath,
		});
	} catch (error) {
		return <div className="pt-24 text-center text-xl font-bold">Project not found or error loading content.</div>;
	}

	const { data, query, variables } = result;

	return <ProjectClientPage data={data} query={query} variables={variables} />;
}

export const generateStaticParams = async () => {
	const pages = await client.queries.projectConnection();
	const paths = pages.data?.projectConnection?.edges?.map((edge) => ({
		filename: edge?.node?._sys.breadcrumbs,
	}));

	return paths || [];
};