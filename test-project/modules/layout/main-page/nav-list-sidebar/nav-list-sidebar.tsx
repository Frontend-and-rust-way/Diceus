import { navItems } from "./mock/mock-list-button";
import { Button } from "./components/button";
import { NavList } from "./components/nav-list";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { INavListSidebar } from "./types/interface";
import { cn } from "@/lib/utils";

export function NavListSidebar({className,lengthButtons }: INavListSidebar) {
  
  return (
    <NavList className={cn("mt-[20px] w-full", className)}>
      <div className="flex w-full overflow-hidden">
        <div className="flex w-[150%] gap-[30px]">
          {navItems
            .filter((_, index) => index < lengthButtons)
            .map((value, index) => (
              <Button
                key={`${value.label}-${index}`}
                className={cn(value.label === "Goals & Rules" ? "w-[170px]" : "")}
              >
                <span className="text-tw-light-blue">{value.icon}</span>
                <span className="flex text-[15px]">{value.label}</span>
              </Button>
          ))}
        </div>
      </div>
      <ChevronLeft
        size={10}
        className="text-tw-light-greys border-tw-light-greys border-[1px] flex items-center justify-center rounded-full w-[50px] h-[50px]"
      />
      <ChevronRight
        size={10}
        className="text-tw-light-greys border-tw-light-greys border-[1px] flex items-center justify-center rounded-full w-[50px] h-[50px]"
      />
    </NavList>
  );
}
