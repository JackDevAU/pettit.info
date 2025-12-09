import client from "@/tina/__generated__/client";
import React from "react";
import BlogClientPage from "./client-page";

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	const relativePath = `${slug.join("/")}.mdx`;

	try {
		const project = await client.queries.post({
			relativePath,
		});

		return {
			title: project.data.post.title,
			description: project.data.post.description,
		};
	} catch (error) {
		return {
			title: "Post Not Found",
		};
	}
}

import { calculateReadTime } from "@/lib/utils";

export default async function PostPage({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;
	const relativePath = `${slug.join("/")}.mdx`;

	try {
		const { data, query, variables } = await client.queries.post({
			relativePath,
		});

		if (!data.post) {
			return <div className="pt-24 text-center text-xl font-bold">Post not found</div>;
		}

		// Calculate read time on server
		const serverReadTime = calculateReadTime(data.post.body);

		return <BlogClientPage data={data} query={query} variables={variables} serverReadTime={serverReadTime} />;
	} catch (error) {
		console.error("Error fetching post:", error);
		return <div className="pt-24 text-center text-xl font-bold">Error loading post.</div>;
	}
}

export const generateStaticParams = async () => {
	try {
		const pages = await client.queries.postConnection();
		const paths = pages.data?.postConnection?.edges?.map((edge) => ({
			slug: edge?.node?._sys.breadcrumbs,
		}));

		return paths || [];
	} catch (error) {
		console.error("Error generating static params for blog:", error);
		return [];
	}
};
