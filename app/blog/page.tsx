import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog Posts",
	description: "A collection of blog posts",
};
export default async function PostsListPage() {
	const posts = await client.queries.postConnection();
	return (
		<div className="pt-24">
			<Typography variant="h1" className="pt-8">
				Posts
			</Typography>
			{posts.data.postConnection.totalCount === 0 ? (
				<p className="text-center">No posts yet!</p>
			) : (
				<ul className="md:p-8 mx-auto">
					{posts.data.postConnection.edges?.map((post) => (
						<li key={post?.node?._sys.filename}>
							<Link href={`/blog/${post?.node?._sys.filename}`}>
								<Card className="p-2 mt-4">
									<CardHeader>
										<Typography variant="h3">{post?.node?.title}</Typography>
									</CardHeader>
									<CardContent>{post?.node?.description}</CardContent>
								</Card>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
