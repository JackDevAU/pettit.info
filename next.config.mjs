/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "assets.tina.io",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/admin",
				destination: "/admin/index.html",
			},
			{
				// Rss was bad... ooops
				source: "vercel-free-password-protection-nextjs",
				destination: "/blob/vercel-free-password-protection-nextjs",
			},
		];
	},
};

export default nextConfig;
