import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import client from "@/tina/__generated__/client";

export default async function BlogSection() {
	// Explicitly typing as any[] to avoid implicit any errors with complex generated types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let posts: any[] = [];

	try {
		// Fetch all posts and filter/sort manually so we can
		// reliably grab the three latest non-draft posts.
		const postsResponse = await client.queries.postConnection();

		// Filter and sort manually to be safe for "Latest"
		posts = postsResponse.data.postConnection.edges
			?.map((edge) => edge?.node)
			.filter((node) => node !== null && node !== undefined)
			// Exclude drafts from the home page list
			.filter((node) => !node?.draft)
			.sort((a, b) => {
				const dateA = new Date(a?.datePublished || 0).getTime();
				const dateB = new Date(b?.datePublished || 0).getTime();
				return dateB - dateA; // Descending order
			})
			.slice(0, 3) || [];

	} catch (error) {
		console.error("Error fetching posts for blog section:", error);
	}

	return (
		<section className="py-24" id="blog">
			<div className="flex justify-between items-end mb-16">
				<h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
					LATEST<br />INSIGHTS
				</h2>
				<Link href="/blog" className="hidden sm:flex items-center gap-2 font-bold text-lg hover:underline decoration-4 underline-offset-4">
					READ ALL POSTS <ArrowUpRight className="w-5 h-5" />
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{posts.length > 0 ? (
					posts.map((post) => (
						<Link
							href={`/blog/${post._sys.filename}`}
							key={post.id}
							className="group flex flex-col h-full justify-between border-l-2 border-black/10 pl-8 hover:border-black transition-colors duration-300"
						>
							<div className="space-y-6">
								<span className="text-xs font-bold tracking-widest text-neutral-400">
									{post.datePublished ? new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase() : "RECENT"}
								</span>
								<h3 className="text-3xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 line-clamp-3">
									{post.title}
								</h3>
							</div>
							<div className="mt-8">
								<span className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
									Read Article <ArrowUpRight className="w-4 h-4" />
								</span>
							</div>
						</Link>
					))
				) : (
					<div className="col-span-3 text-center py-12 text-gray-500">
						<p>Loading posts or no posts found...</p>
					</div>
				)}
			</div>

			<div className="mt-12 text-center sm:hidden">
				<Link href="/blog" className="inline-flex items-center gap-2 font-bold text-lg underline decoration-4 underline-offset-4">
					READ ALL POSTS <ArrowUpRight className="w-5 h-5" />
				</Link>
			</div>
		</section>
	);
}
