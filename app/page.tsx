import HeroSection from "@/components/home/hero-section";
import BlogSection from "@/components/home/blog-section";
import PortfolioSection from "@/components/home/portfolio-section";
import TalksSection from "@/components/home/talks-section";

export const revalidate = 86400; // Revalidate every 24 hours

export default function Home() {
	return (
		<div className="flex flex-col gap-24 pb-24">
			<HeroSection />
			<PortfolioSection />
			<TalksSection />
			<BlogSection />
		</div>
	);
}
