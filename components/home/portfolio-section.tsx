import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import client from "@/tina/__generated__/client";

export default async function PortfolioSection() {
	// Explicitly typing as any[] to avoid implicit any errors with complex generated types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let projects: any[] = [];

	try {
		const projectsResponse = await client.queries.projectConnection({
			first: 3,
			sort: "order", 
		});
		
		projects = projectsResponse.data.projectConnection.edges
			?.map((edge) => edge?.node)
			.filter((node) => node !== null && node !== undefined) || [];
	} catch (error) {
		console.error("Error fetching projects for portfolio section:", error);
	}

	return (
		<section className="py-24 border-t-2 border-black/5" id="portfolio">
			<div className="flex justify-between items-end mb-16">
				<h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
					SELECTED<br />WORKS
				</h2>
				<Link href="/projects" className="hidden sm:flex items-center gap-2 font-bold text-lg hover:underline decoration-4 underline-offset-4">
					VIEW ALL PROJECTS <ArrowUpRight className="w-5 h-5" />
				</Link>
			</div>

			<div className="space-y-4">
				{projects.length > 0 ? (
					projects.map((project, index) => (
						<Link 
							href={`/projects/${project._sys.filename}`} 
							key={project.id}
							className="group relative block"
						>
							<div className="border-t-2 border-black/10 py-8 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
								
								{/* Project Info */}
								<div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-12 z-10">
									<span className="text-sm font-bold opacity-50">0{index + 1}</span>
									<h3 className="text-3xl sm:text-5xl font-black tracking-tight">{project.title}</h3>
								</div>

								<div className="mt-4 sm:mt-0 flex items-center gap-8 z-10">
									<span className="text-sm font-bold tracking-widest uppercase">
                    {/* Display first skill or category if available */}
                    {project.skills && project.skills.length > 0 ? project.skills[0]?.tag?.title : "PROJECT"}
                  </span>
									<span className="text-sm font-bold opacity-50">
                    {project.datePublished ? new Date(project.datePublished).getFullYear() : "2024"}
                  </span>
									<ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
								</div>

								{/* Hover Image Reveal - Visible on Desktop */}
                {project.coverImage && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 grayscale rotate-3 shadow-2xl">
                    <Image 
                      src={project.coverImage} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
							</div>
						</Link>
					))
				) : (
					<div className="text-center py-12 text-gray-500">
						<p>Loading projects or no projects found...</p>
					</div>
				)}
				<div className="border-t-2 border-black/10" />
			</div>

			<div className="mt-8 text-center sm:hidden">
				<Link href="/projects" className="inline-flex items-center gap-2 font-bold text-lg underline decoration-4 underline-offset-4">
					VIEW ALL PROJECTS <ArrowUpRight className="w-5 h-5" />
				</Link>
			</div>
		</section>
	);
}
