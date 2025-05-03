import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ICard {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: ICard) {
    return (
        <div className={cn("border-[1px] flex rounded-[20px] bg-tw-dark-blue border-tw-light-greys", className)}>
            {children}
        </div>
    );
}
