import type { Components } from "tinacms/dist/rich-text";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Typography from "@/components/util/typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const ComponentsRenderer: Components<{}> = {
	h1: (props) => (
		<Typography variant="h1" {...props}>
			{props?.children}
		</Typography>
	),
	h2: (props) => (
		<Typography variant="h2" {...props}>
			{props?.children}
		</Typography>
	),
	h3: (props) => (
		<Typography variant="h3" {...props}>
			{props?.children}
		</Typography>
	),
	p: (props) => (
		<Typography variant="p" as="div" {...props}>
			{props?.children}
		</Typography>
	),
	ul(props) {
		return (
			<Typography variant="list" as="ul" {...props}>
				{props?.children}
			</Typography>
		);
	},
	ol(props) {
		return (
			<Typography variant="list" as="ol" className="list-decimal" {...props}>
				{props?.children}
			</Typography>
		);
	},
	li(props) {
		return (
			<Typography variant="li" as="li" {...props}>
				{props?.children}
			</Typography>
		);
	},
	code: (props) => {
		return (
			<Typography variant="inlineCode" as="code" {...props}>
				{props?.children}
			</Typography>
		);
	},
	code_block: (props) => {
		return (
			<div className="my-8 rounded-xl overflow-hidden bg-black text-white p-6 shadow-2xl">
				<div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-red-500/80" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
						<div className="w-3 h-3 rounded-full bg-green-500/80" />
					</div>
					<span className="ml-auto text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
						{props?.lang || "CODE"}
					</span>
				</div>
				<div className="overflow-x-auto">
					<SyntaxHighlighter
						language={props?.lang || "plaintext"}
						style={vscDarkPlus}
						customStyle={{
							background: "transparent",
							padding: 0,
							margin: 0,
							fontSize: "0.9rem",
							lineHeight: "1.5",
							fontFamily: "monospace",
						}}
						wrapLines={true}
						wrapLongLines={true}
					>
						{props?.value || ""}
					</SyntaxHighlighter>
				</div>
			</div>
		);
	},

	img: (props) => {
		return (
			<div className="flex flex-col items-center">
				<AspectRatio ratio={16 / 9}>
					<Image
						src={props?.url ?? "#"}
						alt={props?.alt ?? ""}
						fill
						className="rounded-md object-contain"
					/>
				</AspectRatio>
				<p className="pt-8 text-sm text-muted-foreground">{props?.alt}</p>
			</div>
		);
	},
	a: (props) => {
		// if a link is internal, use Next.js Link component
		if (props?.url?.startsWith("/")) {
			return (
				<Link
					className="font-medium text-primary underline underline-offset-4"
					href={props?.url}
				>
					{props.children}
				</Link>
			);
		}
		return (
			<a
				href={props?.url}
				className="font-medium text-primary underline underline-offset-4"
				target="_blank"
				rel="noopener noreferrer"
			>
				{props?.children}
			</a>
		);
	},
};
