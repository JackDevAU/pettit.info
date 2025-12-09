import { cn } from "@/lib/utils";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const baseStyles = "font-sans tracking-tight";

export const typographyVariants = cva(baseStyles, {
	variants: {
		variant: {
			huge: "scroll-m-20 text-7xl font-black lg:text-7xl uppercase tracking-tighter",
			h1: "scroll-m-20 text-5xl font-black lg:text-6xl tracking-tighter uppercase mb-6",
			h2: "scroll-m-20 text-4xl font-black tracking-tighter uppercase mt-12 mb-6 border-b-2 border-black/5 pb-2",
			h3: "scroll-m-20 text-2xl font-bold tracking-tight uppercase mt-8 mb-4",
			h4: "scroll-m-20 text-xl font-bold tracking-tight uppercase mt-6",
			p: "leading-relaxed text-lg sm:text-xl font-medium text-neutral-600 mb-6",
			blockquote: "mt-8 mb-8 border-l-4 border-black pl-6 italic text-2xl font-medium text-black",
			list: "ml-6 list-disc space-y-2 text-lg sm:text-xl font-medium text-neutral-600 mb-6 marker:text-black",
			li: "pl-2",
			inlineCode:
				"relative rounded bg-neutral-200 px-[0.4rem] py-[0.2rem] font-mono text-sm font-bold text-black",
			lead: "text-2xl font-medium text-neutral-500 mb-8",
			large: "text-lg font-bold uppercase",
			small: "text-sm font-bold leading-none uppercase tracking-widest",
			muted: "text-sm text-neutral-400 font-bold uppercase tracking-widest",
			link: "font-bold text-black underline decoration-2 underline-offset-4 hover:decoration-4 transition-all uppercase",
		},
	},
	defaultVariants: {
		variant: "p",
	},
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
	children: React.ReactNode;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	as: Component = "p",
	children,
	className,
	...props
}) => {
	return (
		<Component
			className={cn(typographyVariants({ variant, className }))}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Typography;

//! @deprecated
export function H1({
	text,
	children,
	classNames,
}: {
	text?: string;
	classNames?: string;
	children?: React.ReactNode;
}) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-7xl",
				classNames,
			)}
		>
			{text}
			{children}
		</h1>
	);
}

//! @deprecated
export function H2({
	text,
	children,
	classNames,
}: {
	text?: string;
	classNames?: string;
	children?: React.ReactNode;
}) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				classNames,
			)}
		>
			{text}
			{children}
		</h3>
	);
}

export function H3({
	text,
	children,
	classNames,
}: {
	text?: string;
	classNames?: string;
	children?: React.ReactNode;
}) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				classNames,
			)}
		>
			{text}
			{children}
		</h3>
	);
}
