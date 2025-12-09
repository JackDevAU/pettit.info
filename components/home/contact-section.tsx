import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Calendar, Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ContactSection() {
	return (
		<section className="py-24" id="contact">
			<div className="bg-black text-white p-6 sm:p-16 lg:p-24 relative overflow-hidden group rounded-3xl mx-4 lg:mx-0">
				{/* Background Noise for Texture */}
				<div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

				<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Side: Text */}
					<div className="space-y-8 text-center lg:text-left">
						<h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
							LET'S<br />WORK<br />TOGETHER
						</h2>
						<p className="text-xl sm:text-2xl text-neutral-400 max-w-lg font-medium mx-auto lg:mx-0">
							Ready to start your next project? Let's discuss how we can build scalable, high-performance solutions together.
						</p>
					</div>

					{/* Right Side: Links & Actions */}
					<div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mr-0">
						{/* Email Card */}
						<Link
							href="mailto:hello@jackpettit.dev"
							className="group/item flex items-center justify-between p-6 bg-neutral-900/50 hover:bg-neutral-800 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300"
						>
							<div className="flex items-center gap-4">
								<div className="p-3 bg-white/10 rounded-full group-hover/item:bg-white group-hover/item:text-black transition-colors">
									<Mail className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg">Email Me</h3>
									<p className="text-neutral-400 text-sm">hello@jackpettit.dev</p>
								</div>
							</div>
							<ArrowUpRight className="w-6 h-6 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
						</Link>

						{/* Schedule Call Card */}
						<Link
							href="https://www.ssw.com.au/people/jack-pettit/"
							target="_blank"
							rel="noopener noreferrer"
							className="group/item flex items-center justify-between p-6 bg-white text-black border border-white rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
						>
							<div className="flex items-center gap-4">
								<div className="p-3 bg-black text-white rounded-full">
									<Calendar className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg">Book a Call</h3>
									<p className="text-neutral-600 text-sm font-medium">via SSW Profile</p>
								</div>
							</div>
							<ArrowUpRight className="w-6 h-6 group-hover/item:rotate-45 transition-transform" />
						</Link>

						{/* Social Links Row */}
						<div className="grid grid-cols-2 gap-4">
							<Link
								href="https://linkedin.com/in/jackdevau/"
								target="_blank"
								className="flex items-center justify-center gap-3 p-4 bg-neutral-900/50 hover:bg-[#0077b5] border border-white/10 rounded-xl transition-all duration-300 font-bold"
							>
								<Linkedin className="w-5 h-5" />
								LinkedIn
							</Link>
							<Link
								href="https://github.com/jackdevau"
								target="_blank"
								className="flex items-center justify-center gap-3 p-4 bg-neutral-900/50 hover:bg-[#333] border border-white/10 rounded-xl transition-all duration-300 font-bold"
							>
								<FaGithub className="w-5 h-5" />
								GitHub
							</Link>
						</div>

						{/* Location Indicator */}
						<div className="flex items-center justify-center lg:justify-start gap-2 text-neutral-500 font-medium pt-4">
							<MapPin className="w-4 h-4" />
							<span>Based in Australia • Available Globally</span>
						</div>
					</div>
				</div>

				{/* Big Decorative Circle */}
				<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neutral-800 rounded-full blur-[120px] -z-0 opacity-30 pointer-events-none"></div>
			</div>
		</section>
	);
}
