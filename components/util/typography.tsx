import { cn } from "@/lib/utils";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const baseStyles = "font-sans tracking-tight";

export const typographyVariants = cva(baseStyles, {
	variants: {
		variant: {
			huge: "scroll-m-20 text-7xl font-extrabold lg:text-7xl",
			h1: "scroll-m-20 text-4xl font-extrabold lg:text-5xl",
			h2: "scroll-m-20 text-3xl font-semibold first:mt-0",
			h3: "scroll-m-20 text-2xl font-semibold mt-2",
			h4: "scroll-m-20 text-xl font-semibold",
			p: "leading-7",
			blockquote: "mt-6 border-l-2 pl-6 italic",
			list: " ml-6 list-disc",
			li: " ml-6 list-disc",
			inlineCode:
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
			lead: "text-xl text-muted-foreground",
			large: "text-lg font-semibold",
			small: "text-sm font-medium leading-none",
			muted: "text-sm text-muted-foreground",
			link: "font-medium text-primary underline underline-offset-4",
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
