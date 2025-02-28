import type { Components } from "tinacms/dist/rich-text";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Typography from "@/components/util/typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gh from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";

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
		<Typography variant="p" {...props}>
			{props?.children}
		</Typography>
	),
	ul(props) {
		return (
			<ul {...props} className="list-disc ">
				{props?.children}
			</ul>
		);
	},
	ol(props) {
		return (
			<ol {...props} className="list-decimal ">
				{props?.children}
			</ol>
		);
	},
	code: (props) => {
		return (
			<code
				className=" border-1 text-sm p-1 rounded-md text-[#FF3366]"
				{...props}
			/>
		);
	},
	code_block: (props) => {
		return (
			<div className="flex h-full gap-2 overflow-x-auto">
				<div className="border-black border-l-2 min-w-0">
					<SyntaxHighlighter
						language={props?.lang || "plaintext"}
						style={gh} // You can uncomment this line if you're using a specific style
						customStyle={{
							whiteSpace: "pre-wrap", // Ensures long lines wrap naturally
							wordBreak: "break-word", // Breaks words that are too long
						}}
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
