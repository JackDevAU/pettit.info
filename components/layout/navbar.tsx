import Link from "next/link";

import MobileDrawer from "@/components/layout/mobile-drawer";
import NavDropdown from "@/components/layout/nav-dropdown";

function Navbar() {
	return (
		<nav className="fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5 md:h-16 ">
			<div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
				<div className="flex items-center gap-10 md:flex-1 md:pl-5 group">
					<Link className="text-4xl font-heading m500:text-xl" href={"/"}>
						J
						<span className="group-hover:text-mainAccent duration-150 ease-in-out">
							P
						</span>
					</Link>
				</div>
				<MobileDrawer />
				<div className="md:flex items-center gap-10 hidden">
					<Link className="text-xl font-base" href="/blog">
						Blog
					</Link>

					<Link className="text-xl font-base" href="/projects">
						Projects
					</Link>

					<NavDropdown />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
