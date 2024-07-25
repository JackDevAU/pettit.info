import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Typography from "../util/typography";
import { Badge } from "../ui/badge";
import type { Project } from "@/tina/__generated__/types";

export default function ZZProjectCard({ project }: { project: Project }) {
	return (
		<Link
			className="w-full h-full block"
			key={project?.id}
			href={`/projects/${project?._sys.filename}`}
		>
			<Card className="h-full w-full bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
				<div className="relative w-full h-64 mb-4 border-b-4 border-black">
					<Image
						className="object-cover w-full h-full"
						src={project?.coverImage || ""}
						alt={`Project ${project?.abstract}`}
						layout="fill"
					/>
				</div>
				<div className="p-6">
					<Typography
						variant="h2"
						className="font-bold text-2xl mb-2 text-black"
					>
						{project?.title}
					</Typography>
					<Typography variant="p" className="text-black">
						{project?.abstract}
					</Typography>

					<div className="flex gap-1">
						{project?.skills?.map((skill, index: number) => (
							<Badge
								key={index}
								className={`${skill?.tag?.colour} text-lg font-semibold`}
							>
								{skill?.tag?.title}
							</Badge>
						))}
					</div>
				</div>
			</Card>
		</Link>
	);
}
