import { cn } from "@/lib/utils";
import { INavList } from "../types/interface";

export function NavList({ className, children }: INavList) {
  return (
    <nav className={cn("w-full flex gap-2 overflow-x-auto scrollbar-hide", className)}>
      {children}
    </nav>
  );
}
