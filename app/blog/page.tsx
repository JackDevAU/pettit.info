import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import client from "@/tina/__generated__/client";
import { format } from "date-fns";

export default async function BlogPage() {
  let posts: any[] = [];

  try {
    const postsResponse = await client.queries.postConnection();
    const allPosts = postsResponse.data.postConnection.edges?.map((edge) => edge?.node).filter(Boolean) || [];

    // Filter out drafts
    posts = allPosts.filter((post) => !post?.draft);
 
    // Sort by date manually if needed, or rely on query sort if added later
    posts.sort((a, b) => {
        const dateA = new Date(a?.datePublished || 0).getTime();
        const dateB = new Date(b?.datePublished || 0).getTime();
        return dateB - dateA; // Descending
    });

  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  return (
    <div className="pt-12 pb-24">
      <div className="mb-16">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
          ALL<br />INSIGHTS
        </h1>
        <p className="mt-8 text-xl text-neutral-500 max-w-2xl font-medium">
          Thoughts on software engineering, design patterns, and the future of web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <Link href={`/blog/${post?._sys.filename}`} key={post?.id || i} className="group flex flex-col h-full justify-between border-t-2 border-black/10 pt-8 hover:border-black transition-colors duration-300">
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-widest text-neutral-400">
                  {post?.datePublished ? format(new Date(post.datePublished), 'MMM dd, yyyy').toUpperCase() : 'DATE UNKNOWN'}
                </span>
                <h3 className="text-3xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 line-clamp-3">
                  {post?.title}
                </h3>
                <p className="text-neutral-500 font-medium line-clamp-3">
                  {post?.description}
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p>Loading posts or no posts found...</p>
          </div>
        )}
      </div>
    </div>
  );
}
