import { IButton } from "../types/interface";
import { cn } from "@/lib/utils";


export function Button({ className, children }: IButton) {
  const hasMultipleChildren =
    Array.isArray(children) ? children.length > 0 : !!children;

  return (
    <button
      className={cn(
        "flex  text-white border-tw-light-greys h-[47px] items-center justify-center px-4 border-2 rounded-[20px]",
        className,
        hasMultipleChildren ? "gap-[10px]" : "gap-0"
      )}
    >
      {children}
    </button>
  );
}