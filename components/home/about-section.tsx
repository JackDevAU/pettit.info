import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
	return (
		<section className="py-24" id="about-me">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Image Side */}
				<div className="relative aspect-square lg:aspect-[4/5] bg-neutral-200 order-2 lg:order-1">
					<Image
						src="/JackP.jpg"
						alt="Jack Pettit Portrait"
						fill
						className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
					/>
					{/* Decorative Box */}
					<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black flex items-center justify-center">
						<ArrowUpRight className="text-white w-12 h-12" />
					</div>
				</div>

				{/* Content Side */}
				<div className="order-1 lg:order-2 space-y-12">
					<h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
						WHO<br />I AM
					</h2>

					<div className="space-y-8 text-xl sm:text-2xl font-medium leading-relaxed max-w-xl">
						<p>
							I'm Jack, an Australian Fullstack Software Engineer who builds scalable solutions with React and .NET. As a Certified Scrum Master, I value clean code, agile workflows, and delivering real value.
						</p>
						<p className="text-neutral-500">
							Whether it’s discussing architectural patterns, the latest in frontend tech, or simply brewing a good coffee, I’m always open to connecting.
						</p>
					</div>

					{/* New Stats Row */}
					<div className="grid grid-cols-2 gap-8 pt-4 border-t border-black/10">
						<div>
							<h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Tenure</h4>
							<p className="text-4xl font-black">4+ YEARS</p>
						</div>
						<div>
							<h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Projects</h4>
							<p className="text-4xl font-black">30+ DELIVERED</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
