"use client";
import { ComponentsRenderer } from "@/lib/renderer/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import Giscus from "@giscus/react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { PostQuery, PostQueryVariables } from "@/tina/__generated__/types";
import { format } from "date-fns";

type PostProps = {
  query: string;
  variables: PostQueryVariables;
  data: PostQuery;
  serverReadTime?: string;
};

import { useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { calculateReadTime } from "@/lib/utils";


export default function BlogClientPage({ data, query, variables, serverReadTime }: PostProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const { title, lastUpdated, datePublished, body, category } = tinaData.post;
  const [readTime, setReadTime] = useState(serverReadTime || "1 MIN READ");

  useEffect(() => {
    // Re-calculate on client side for live previews if body changes
    setReadTime(calculateReadTime(body));
  }, [body]);

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      <article className="max-w-4xl mx-auto pt-12 pb-24">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-sm tracking-widest hover:opacity-60 transition-opacity uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center text-sm font-bold tracking-widest text-neutral-400">
               <span>
                  {datePublished ? format(new Date(datePublished), 'MMMM dd, yyyy').toUpperCase() : 'DATE UNKNOWN'}
               </span>
               <span>•</span>
               <span>{readTime}</span>
               {category && (
                 <>
                   <span>•</span>
                   <span className="text-black">{category.title.toUpperCase()}</span>
                 </>
               )}
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.9]">
              {title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-none">
          <TinaMarkdown content={body} components={ComponentsRenderer} />
        </div>

        {/* Footer / Comments */}
        <div className="mt-24 pt-12 border-t-2 border-black/5">
          <h3 className="text-2xl font-black mb-8">COMMENTS</h3>
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
            theme="light"
            lang="en"
            loading="lazy"
            term="Welcome to My Blog! Leave a comment or ask a question."
          />
        </div>
      </article>
    </>
  );
}
