import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import client from "@/tina/__generated__/client";

export default async function ProjectsPage() {
  // Explicitly typing as any[] to avoid implicit any errors with complex generated types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sortedProjects: any[] = [];

  try {
    const projectsResponse = await client.queries.projectConnection();
    const projects =
      projectsResponse.data.projectConnection.edges
        ?.map((edge) => edge?.node)
        .filter(Boolean) || [];

    // Filter out drafts
    const publishedProjects = projects.filter((project) => !project?.draft);

    // Sort projects by order if available
    sortedProjects = publishedProjects.sort(
      (a, b) => (a?.order || 0) - (b?.order || 0),
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div className="pt-12 pb-24">
      <div className="mb-16">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
          ALL<br />PROJECTS
        </h1>
        <p className="mt-8 text-xl text-neutral-500 max-w-2xl font-medium">
          A collection of selected works, experiments, and open source contributions.
        </p>
      </div>

      <div className="space-y-4">
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project, index) => (
            <Link 
              href={`/projects/${project?._sys.filename}`} 
              key={project?.id || index}
              className="group relative block"
            >
              <div className="border-t-2 border-black/10 py-8 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
                
                {/* Project Info */}
                <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-12 z-10">
                  <span className="text-sm font-bold opacity-50">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black tracking-tight">{project?.title}</h3>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center gap-8 z-10">
                  <span className="text-sm font-bold tracking-widest uppercase hidden sm:block">
                     {/* Display first skill or category if available */}
                     {project?.skills && project.skills.length > 0 ? project.skills[0]?.tag?.title : "VIEW PROJECT"}
                  </span>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
                </div>

                {/* Hover Image Reveal - Only if image exists */}
                {project?.coverImage && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 grayscale rotate-3 shadow-2xl">
                    <Image 
                      src={project.coverImage} 
                      alt={project.title || "Project Cover"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-xl font-bold text-neutral-400">Loading projects or no projects found.</p>
        )}
        <div className="border-t-2 border-black/10" />
      </div>
    </div>
  );
}
