import { cn } from "@/lib/utils"
import { IHeader } from "./types/interfaces"
import { Description } from "./components/description-heading"
import { SearchField } from "./components/search-field"

function HeaderBase({ children, className }: IHeader) {
  return (
      <header
          className={cn(
              "mt-[10px] py-[10px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[10px] sm:gap-5 px-[45px] text-sm sm:text-base md:text-2xl border-b-2 border-[rgb(56,60,75)]",
              className
          )}
      >
          {children}
      </header>
  );
}
  
export const Header = Object.assign(HeaderBase,{
  Description,
  SearchField,
})