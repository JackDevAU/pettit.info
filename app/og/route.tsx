import { ImageResponse } from "next/og";

export const runtime = "edge";

const interBold = fetch(new URL("./Inter-Bold.ttf", import.meta.url)).then((res) =>
	res.arrayBuffer(),
);
const interBlack = fetch(new URL("./Inter-Black.ttf", import.meta.url)).then((res) =>
	res.arrayBuffer(),
);

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const title = searchParams.get("title");
	const label = searchParams.get("label") ?? (title ? "Blog" : null);

	const fonts = [
		{ name: "Inter", data: await interBold, weight: 700 as const },
		{ name: "Inter", data: await interBlack, weight: 900 as const },
	];

	if (!title) {
		return new ImageResponse(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundColor: "#f2f2f2",
					padding: 80,
					fontFamily: "Inter",
					position: "relative",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						fontSize: 180,
						fontWeight: 900,
						lineHeight: 0.85,
						letterSpacing: -9,
						color: "#000000",
					}}
				>
					<div>JACK</div>
					<div>PETTIT</div>
				</div>
				<div
					style={{
						marginTop: 28,
						fontSize: 38,
						fontWeight: 700,
						letterSpacing: -1,
						textTransform: "uppercase",
						color: "#262626",
					}}
				>
					Fullstack Software Engineer
				</div>
				<div
					style={{
						position: "absolute",
						right: 80,
						bottom: 70,
						width: 190,
						height: 190,
						borderRadius: 9999,
						backgroundColor: "#000000",
						color: "#ffffff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 26,
						fontWeight: 900,
					}}
				>
					PETTIT.INFO
				</div>
			</div>,
			{ width: 1200, height: 630, fonts },
		);
	}

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				backgroundColor: "#f2f2f2",
				padding: 80,
				fontFamily: "Inter",
			}}
		>
			<div
				style={{
					fontSize: 24,
					fontWeight: 700,
					letterSpacing: 10,
					textTransform: "uppercase",
					color: "#a3a3a3",
				}}
			>
				{label}
			</div>
			<div
				style={{
					display: "flex",
					fontSize: title.length > 40 ? 60 : 76,
					fontWeight: 900,
					letterSpacing: title.length > 40 ? -3 : -4,
					lineHeight: 0.95,
					textTransform: "uppercase",
					color: "#000000",
				}}
			>
				{title}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontSize: 34,
						fontWeight: 900,
						letterSpacing: -1,
						color: "#000000",
					}}
				>
					JACK PETTIT
				</div>
				<div
					style={{
						fontSize: 24,
						fontWeight: 700,
						letterSpacing: 6,
						color: "#737373",
					}}
				>
					PETTIT.INFO
				</div>
			</div>
		</div>,
		{ width: 1200, height: 630, fonts },
	);
}
