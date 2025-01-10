import CounterSection from "@/components/home/counter-section";
import InfoHomeSection from "@/components/home/info-section";
import SkillSection from "@/components/home/skill-section";
import { getMyGitHubContributions } from "@/lib/api/actions/github/get-contributions";
import { calculateTotalCoffeeConsumption } from "@/lib/stats/coffee/total-coffees";
import client from "@/tina/__generated__/client";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Home() {
	const estimatedTotalCoffees = calculateTotalCoffeeConsumption();
	const contributions = await getMyGitHubContributions();
	const currentYear = new Date().getFullYear();

	const blogs = (
		await client.queries.postConnection()
	).data.postConnection.edges?.filter(
		(p) =>
			new Date(
				p?.node?.datePublished || p?.node?.lastUpdated || "",
			).getFullYear() >= currentYear,
	).length; // Use .length to count the filtered blogs

	return (
		<>
			<InfoHomeSection />
			<CounterSection
				coffeeCount={estimatedTotalCoffees}
				gitHubCommits={contributions}
				blogPosts={blogs}
			/>
			<SkillSection />
		</>
	);
}
