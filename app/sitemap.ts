import type { MetadataRoute } from "next";
import client from "@/tina/__generated__/client";

const BASE_URL = process.env.SITE_URL || "https://pettit.info";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Fetch blog posts from TinaCMS
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const postsResponse = await client.queries.postConnection();
    const posts =
      postsResponse.data.postConnection.edges
        ?.map((edge) => edge?.node)
        .filter(Boolean) || [];

    // Filter out drafts and map to sitemap entries
    blogPages = posts
      .filter((post) => !post?.draft)
      .map((post) => ({
        url: `${BASE_URL}/blog/${post?._sys.filename}`,
        lastModified: post?.lastUpdated
          ? new Date(post.lastUpdated)
          : post?.datePublished
            ? new Date(post.datePublished)
            : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  // Fetch projects from TinaCMS
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const projectsResponse = await client.queries.projectConnection();
    const projects =
      projectsResponse.data.projectConnection.edges
        ?.map((edge) => edge?.node)
        .filter(Boolean) || [];

    // Filter out drafts and map to sitemap entries
    projectPages = projects
      .filter((project) => !project?.draft)
      .map((project) => ({
        url: `${BASE_URL}/projects/${project?._sys.filename}`,
        lastModified: project?.lastUpdated
          ? new Date(project.lastUpdated)
          : project?.datePublished
            ? new Date(project.datePublished)
            : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
  }

  return [...staticPages, ...blogPages, ...projectPages];
}
