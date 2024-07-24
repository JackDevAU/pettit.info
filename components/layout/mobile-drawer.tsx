"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function MobileDrawer() {
	const router = useRouter();
	const pathname = usePathname();

	const [isDrawerActive, setIsDrawerActive] = useState(false);

	const handleLinkClick = (path: string) => {
		setIsDrawerActive(false);
		router.push(path);
	};

	return (
		<div className="md:hidden block">
			<Sheet open={isDrawerActive} onOpenChange={setIsDrawerActive}>
				<SheetTrigger>
					<MenuIcon className="h-6 w-6" />
				</SheetTrigger>
				<SheetContent className="p-8 w-2/3 flex flex-col justify-between border-black border-4">
					<div className="pt-10 flex flex-col gap-4 items-start">
						<Button
							variant="link"
							className="text-xl font-base"
							onClick={() => handleLinkClick("/blog")}
						>
							Blog
						</Button>

						<Button
							variant="link"
							className="text-xl font-base"
							onClick={() => handleLinkClick("/projects")}
						>
							Projects
						</Button>
					</div>
					<div>
						<Button
							variant="link"
							className="text-xl font-base"
							onClick={() => handleLinkClick("https://github.com/JackDevAU")}
						>
							GitHub
							<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
						</Button>
						<Button
							variant="link"
							className="text-xl font-base"
							onClick={() =>
								handleLinkClick("https://twitter.com/SSWJackPettit")
							}
						>
							Twitter
							<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
						</Button>
						<Button
							variant="link"
							className="text-xl font-base"
							onClick={() =>
								handleLinkClick("https://www.linkedin.com/in/jackdevau/")
							}
						>
							LinkedIn
							<ArrowUpRightIcon className="ml-[15px] w-6 m400:ml-4 m400:w-[12px]" />
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
