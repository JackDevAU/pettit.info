"use client";
import React from "react";
import { ComponentsRenderer } from "@/lib/renderer/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogClientPage({ post }: { post: any }) {
	return (
		<article className="prose">
			<TinaMarkdown content={post.body} components={ComponentsRenderer} />
		</article>
	);
}
