import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function CategorySidebar() {
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSubMenu = (id: number) => {
    setOpenSubMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer px-5 py-[14px] w-fit">
            <RiMenu2Fill className="text-xl mr-1" />
            <span className="uppercase font-medium text-sm">
              Shop By Categories
            </span>
            <MdKeyboardArrowDown className="ml-4 text-lg" />
          </div>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="border-b border-gray-200">
            <SheetTitle>Shop By Categories</SheetTitle>
          </SheetHeader>
          <div className="px-4">
            {/* menu */}
            <div className="">
              <div className="flex items-center justify-between w-full">
                <Link
                  to="#"
                  className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                >
                  Fashion
                </Link>
                <Button
                  onClick={() => toggleMenu(1)}
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer border-none outline-none"
                >
                  {openMenus.includes(1) ? <FiMinusSquare /> : <FiPlusSquare />}
                </Button>
              </div>

              <div
                className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                  openMenus.includes(1)
                    ? "max-h-[600px] opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative mx-auto flex w-full flex-col pl-4">
                  {/* sub menu */}
                  <div className="">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to="#"
                        className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                      >
                        Apparel
                      </Link>
                      <Button
                        onClick={() => toggleSubMenu(1)}
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer border-none outline-none"
                      >
                        {openSubMenus.includes(1) ? (
                          <FiMinusSquare />
                        ) : (
                          <FiPlusSquare />
                        )}
                      </Button>
                    </div>

                    <div
                      className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                        openSubMenus.includes(1)
                          ? "max-h-[600px] opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="relative flex w-full flex-col pl-4 gap-1">
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between w-full">
                <Link
                  to="#"
                  className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                >
                  Fashion
                </Link>
                <Button
                  onClick={() => toggleMenu(2)}
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer border-none outline-none"
                >
                  {openMenus.includes(2) ? <FiMinusSquare /> : <FiPlusSquare />}
                </Button>
              </div>

              <div
                className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                  openMenus.includes(2)
                    ? "max-h-[600px] opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative mx-auto flex w-full flex-col pl-4">
                  {/* sub menu */}
                  <div className="">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to="#"
                        className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                      >
                        Apparel
                      </Link>
                      <Button
                        onClick={() => toggleSubMenu(2)}
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer border-none outline-none"
                      >
                        {openSubMenus.includes(2) ? (
                          <FiMinusSquare />
                        ) : (
                          <FiPlusSquare />
                        )}
                      </Button>
                    </div>

                    <div
                      className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                        openSubMenus.includes(2)
                          ? "max-h-[600px] opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="relative flex w-full flex-col pl-4 gap-1">
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between w-full">
                <Link
                  to="#"
                  className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                >
                  Fashion
                </Link>
                <Button
                  onClick={() => toggleMenu(3)}
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer border-none outline-none"
                >
                  {openMenus.includes(3) ? <FiMinusSquare /> : <FiPlusSquare />}
                </Button>
              </div>

              <div
                className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                  openMenus.includes(3)
                    ? "max-h-[600px] opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative mx-auto flex w-full flex-col pl-4">
                  {/* sub menu */}
                  <div className="">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to="#"
                        className="text-sm hover:text-primary transition-colors duration-300 ease-out w-full py-2"
                      >
                        Apparel
                      </Link>
                      <Button
                        onClick={() => toggleSubMenu(3)}
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer border-none outline-none"
                      >
                        {openSubMenus.includes(3) ? (
                          <FiMinusSquare />
                        ) : (
                          <FiPlusSquare />
                        )}
                      </Button>
                    </div>

                    <div
                      className={`w-full basis-full overflow-hidden transition-all duration-500 ease-in-out ${
                        openSubMenus.includes(3)
                          ? "max-h-[600px] opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="relative flex w-full flex-col pl-4 gap-1">
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                        <p className="text-sm">Rolling Diamond</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
