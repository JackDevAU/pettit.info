"use client";

import clsx from "clsx";
import { ArrowUpRightIcon, ChevronDown } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import { useClickAway } from "@uidotdev/usehooks";

export default function NavDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useClickAway(() => {
		setIsOpen(false);
	});

	return (
		<div className="relative" ref={ref}>
			<button
				type="button"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className="flex items-center gap-2 text-xl font-base"
			>
				Contact
				<ChevronDown
					className={clsx(
						isOpen ? "rotate-180" : "rotate-0",
						"h-5 w-5 transition-transform",
					)}
					color="black"
				/>
			</button>
			<ul
				className={clsx(
					isOpen
						? "visible top-12 -left-8 opacity-100"
						: "invisible top-0  -left-8 opacity-0",
					"absolute flex w-[150px] flex-col rounded-base border-2 border-black bg-white text-lg font-base transition-all",
				)}
			>
				<li>
					<Link
						href={"https://github.com/JackDevAU"}
						target="_blank"
						onClick={() => setIsOpen(false)}
						className="text-left flex items-center rounded-t-base px-4 py-3 border-b-2 border-b-black hover:bg-main"
					>
						GitHub
						<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
					</Link>
				</li>
				<li>
					<Link
						href={"https://twitter.com/SSWJackPettit"}
						target="_blank"
						onClick={() => setIsOpen(false)}
						className="text-left flex items-center rounded-t-base px-4 py-3 border-b-2 border-b-black hover:bg-main"
					>
						Twitter
						<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
					</Link>
				</li>
				<li>
					<Link
						href={"https://www.linkedin.com/in/jackdevau/"}
						target="_blank"
						onClick={() => setIsOpen(false)}
						className="text-left flex items-center rounded-t-base px-4 py-3 border-b-2 border-b-black hover:bg-main"
					>
						LinkedIn
						<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
					</Link>
				</li>
			</ul>
		</div>
	);
}
