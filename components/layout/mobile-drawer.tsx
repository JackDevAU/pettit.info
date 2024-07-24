"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { MenuIcon } from "lucide-react";
import Drawer from "./side-drawer";

export default function MobileDrawer() {
  const router = useRouter();
  const pathname = usePathname();

  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const handleLinkClick = (path: string) => {
    setIsDrawerActive(false);
    router.push(path);
  };

  return (
    <>
      <div className="hidden w-[160px] m900:block m800:w-[108px] m500:w-[92px] m400:w-[unset]">
        <button
          onClick={() => setIsDrawerActive(true)}
          className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <MenuIcon className="h-6 w-6 m500:h-4 m500:w-4" />
        </button>
      </div>

      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <div className="scrollbar h-full w-full overflow-y-auto bg-white">
          <button
            onClick={() => {
              handleLinkClick("/templates");
            }}
            className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-base text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
          >
            Templates
          </button>
        </div>
      </Drawer>
    </>
  );
}
