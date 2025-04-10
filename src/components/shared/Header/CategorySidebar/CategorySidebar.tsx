import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

export default function CategorySidebar() {
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
          <div className="grid gap-4 py-1 px-4">
            <p>hello world</p>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
