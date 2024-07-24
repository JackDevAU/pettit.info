import Typography from "@/components/util/typography";
import { ComponentsRenderer } from "@/lib/renderer/components";
import client from "@/tina/__generated__/client";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await client.queries.post({ relativePath: `${slug}.mdx` });

  if (!post.data.post) {
    return <div className="pt-24">Post not found</div>;
  }

  return (
    <div className="py-24">
      <div className="flex flex-col justify-center items-center">
        <Typography variant="huge" className="pt-8 pb-8 text-mainAccent">
          {post.data.post.title}
        </Typography>
        <article className="prose">
          <TinaMarkdown
            content={post.data.post.body}
            components={ComponentsRenderer}
          />
        </article>
      </div>
    </div>
  );
}
