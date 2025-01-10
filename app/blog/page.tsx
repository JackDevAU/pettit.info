import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Typography from "@/components/util/typography";
import client from "@/tina/__generated__/client";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import BlogTitle from "@/components/blogs/blog-title";
import BlogCard from "@/components/blogs/blog-cards";
import type { Post } from "@/tina/__generated__/types";

export const metadata: Metadata = {
	title: "Blog Posts",
	description: "A collection of blog posts",
};
export default async function PostsListPage() {
	const posts = await client.queries.postConnection();
	return (
		<>
			<BlogTitle />
			{posts.data.postConnection.totalCount === 0 ? (
				<p className="text-center">No posts yet!</p>
			) : (
				<div className="grid grid-cols-1 gap-6 sm:gap-8">
					{posts.data.postConnection.edges?.reverse().map((post, idx) => (
						<BlogCard
							post={post?.node as Post}
							key={post?.node?.id}
							index={idx}
						/>
					))}
				</div>
			)}
		</>
	);
}

// {posts.data.postConnection.totalCount === 0 ? (
// 	<p className="text-center">No posts yet!</p>
// ) : (
// 	<ul className="md:p-8 mx-auto">
// 		{posts.data.postConnection.edges?.map((post) => (
// 			<li key={post?.node?._sys.filename}>
// 				<Link href={`/blog/${post?.node?._sys.filename}`}>
// 					<Card className="p-2 mt-4">
// 						<CardHeader>
// 							<Typography variant="h3">{post?.node?.title}</Typography>
// 						</CardHeader>
// 						<CardContent>{post?.node?.description}</CardContent>
// 					</Card>
// 				</Link>
// 			</li>
// 		))}
// 	</ul>
// )}
