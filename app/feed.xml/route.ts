import client from "@/tina/__generated__/client";
import RSS from "rss";

export async function GET() {
	const feed = new RSS({
		title: "Jack Pettit's portfolio",
		description: "My Personal Website - for all things me",
		site_url: process.env.SITE_URL || "https://pettit.info",
		feed_url: process.env.SITE_URL || "https://pettit.info" + "/feed.xml",
		copyright: `${new Date().getFullYear()} Pettit.info`,
		language: "en",
		pubDate: new Date(),
	});

	const posts = await client.queries.postConnection();
	if (posts.data.postConnection.totalCount > 0) {
		posts.data.postConnection.edges?.map((postNode) => {
			const post = postNode?.node;

			// Skip draft posts
			if (post?.draft) return;

			feed.item({
				title: post?.title || "",
				guid: `https://pettit.info/blog/${post?._sys.filename}`,
				url: `https://pettit.info/blog/${post?._sys.filename}`,
				date: post?.datePublished || new Date(),
				description: post?.description || "",
				author: "Jack Pettit",
			});
		});
	}

	return new Response(feed.xml({ indent: true }), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	});
}
