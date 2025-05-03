import { cn } from "@/lib/utils";
import { IUserLogo } from "../types/interfaces";

export function UserLogo({children, className}: IUserLogo) {
    return( 
        <div className={cn("w-[48px] h-[48px] text-[20px] flex items-center justify-center text-white rounded-full bg-blue-950",className)}> 
            {children}
        </div> 
    )
}