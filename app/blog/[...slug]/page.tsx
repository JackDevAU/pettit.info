import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import React from "react";
import BlogClientPage from "./client-page";

export async function generateMetadata({
	params,
}: { params: { slug: string[] } }) {
	const project = await client.queries.post({
		relativePath: `${params.slug}.mdx`,
	});

	return {
		title: project.data.post.title,
		description: project.data.post.description,
	};
}

export default async function PostPage({
	params,
}: {
	params: { slug: string[] };
}) {
	const post = await client.queries.post({
		relativePath: `${params.slug}.mdx`,
	});

	if (!post.data.post) {
		return <div className="pt-24">Post not found</div>;
	}

	return (
		<div className="py-24">
			<div className="flex flex-col justify-center items-center">
				<Typography variant="huge" className="pt-8 pb-8 text-mainAccent">
					{post.data.post.title}
				</Typography>
				<BlogClientPage post={post.data.post} />
			</div>
		</div>
	);
}

export const generateStaticParams = async () => {
	const pages = await client.queries.postConnection();
	const paths = pages.data?.postConnection?.edges?.map((edge) => ({
		slug: edge?.node?._sys.breadcrumbs,
	}));

	return paths || [];
};
