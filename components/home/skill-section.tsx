import { client } from "@/tina/__generated__/client";
import SkillSectionClient from "./skill-section-client";

async function SkillSection() {
	// Fetch all tags and derive skills from content
	const tagsResponse = await client.queries.tagConnection({ first: 200 });
	const tags =
		tagsResponse.data.tagConnection.edges
			?.map((edge) => edge?.node)
			.filter((node) => node !== null && node !== undefined) || [];

	// Only show tags marked as displaySkill
	const skillTags = tags.filter((tag) => tag?.displaySkill);

	// Map to simple shape and sort so featured (bold) skills come first
	const allSkills = skillTags
		.map((tag) => ({
			name: tag?.title as string,
			bold: Boolean(tag?.featured),
		}))
		.sort((a, b) => {
			if (a.bold === b.bold) {
				return a.name.localeCompare(b.name);
			}
			return a.bold ? -1 : 1;
		});

	return (

		<section className="py-24" id="skills">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				{/* Left Column - Title */}
				<div className="lg:col-span-4">
					<h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
						CORE<br />STACK
					</h2>
					<p className="mt-8 text-lg text-neutral-500 font-medium max-w-xs">
						My weapon of choice for building scalable, high-performance digital products.
					</p>
				</div>

				{/* Right Column - Skills Grid */}
				<div className="lg:col-span-8">
					<SkillSectionClient allSkills={allSkills} />
				</div>
			</div>
		</section>
	);
}

export default SkillSection;
