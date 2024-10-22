import BoxReveal from "@/components/util/box-reveal";
import NumberTicker from "@/components/util/number-ticker";
import { H1, H3 } from "@/components/util/typography";
import { getMyGitHubContributions } from "@/lib/api/actions/github/get-contributions";
import { calculateTotalCoffeeConsumption } from "@/lib/stats/coffee/total-coffees";
import client from "@/tina/__generated__/client";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Home() {
	const estimatedTotalCoffees = calculateTotalCoffeeConsumption();
	const contributions = await getMyGitHubContributions();
	const blogs = (await client.queries.postConnection()).data.postConnection
		.totalCount;

	return (
		<div className="flex flex-col min-h-screen justify-center items-center md:text-center mx-auto">
			<div className="w-auto mx-auto">
				<main className="flex p-4 lg:p-0 lg:w-[33rem]">
					<div className="flex flex-col md:items-start ">
						<section className="flex flex-col items-start">
							<BoxReveal duration={0.2}>
								<H1 text="Hi," />
							</BoxReveal>
							<BoxReveal duration={0.3}>
								<H1 text="I'm Jack. " />
							</BoxReveal>
							<BoxReveal duration={0.3} width="100%">
								<hr className="w-full border-black border-4 my-4" />
							</BoxReveal>
						</section>
						<section className="flex flex-col items-start ">
							<BoxReveal duration={0.3}>
								<H3 text="So far, this year I've">...</H3>
							</BoxReveal>
							<BoxReveal duration={0.7}>
								<div className="flex flex-col items-start text-left p-4">
									<ul className="list-disc ">
										<li>
											<H3 text="Drank ">
												<NumberTicker value={estimatedTotalCoffees} />
												<span> cups of coffee.</span>
											</H3>
										</li>

										<li>
											<H3 text="Fixed some bugs. ">
												<NumberTicker value={contributions} />
												<span> (GitHub Commits)</span>
											</H3>
										</li>

										<li>
											<H3 text="Blogged " classNames="">
												{blogs ? <NumberTicker value={blogs} /> : 0}
												<span> time{blogs > 1 ? "s" : ""}!</span>
											</H3>
										</li>
									</ul>
								</div>
							</BoxReveal>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
