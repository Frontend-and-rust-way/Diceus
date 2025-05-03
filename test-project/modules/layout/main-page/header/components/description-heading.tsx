import { IDescriptionHeading } from "../types/interfaces"
import { cn } from "@/lib/utils"

export function Description({ children, className }: IDescriptionHeading) {
    return (
        <span className={cn(
            "text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium",
            className
        )}>
            {children}
        </span>
    );
}
