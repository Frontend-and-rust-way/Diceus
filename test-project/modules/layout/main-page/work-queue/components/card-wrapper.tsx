import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ICard {
  children: ReactNode;
  className?: string;
}

export function CardWrapper({ children, className }: ICard) {
  return (
    <div
      className={cn(
        "border border-[rgb(49,59,84)] bg-[rgb(30,34,51)] p-[20px] gap-[20px] flex flex-col rounded-[20px]",
        className
      )}
    >
      {children}
    </div>
  );
}
