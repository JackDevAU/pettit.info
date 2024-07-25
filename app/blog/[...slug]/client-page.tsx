"use client";
import React from "react";
import { ComponentsRenderer } from "@/lib/renderer/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Giscus from "@giscus/react";

export default function BlogClientPage({ post }: { post: any }) {
	return (
		<>
			<article className="prose">
				<TinaMarkdown content={post.body} components={ComponentsRenderer} />
			</article>
			<Giscus
				repo="JackDevAU/pettit.info"
				repoId="R_kgDOMaiLSA"
				category="Comments"
				categoryId="DIC_kwDOMaiLSM4ChKTR"
				mapping="pathname"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="bottom"
				theme="preferred_color_scheme"
				lang="en"
				loading="lazy"
				term="Welcome to My Blog! Leave a comment or ask a question."
			/>
		</>
	);
}
