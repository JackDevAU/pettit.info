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
		];
	},
	redirects: async () => {
		return [
			{
				// Rss was bad... ooops
				source: "/vercel-free-password-protection-nextjs",
				destination: "/blog/vercel-free-password-protection-nextjs",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
