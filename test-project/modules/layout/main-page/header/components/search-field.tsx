import { Input } from "@/ui/input"
import { ISearchField } from "../types/interfaces";
    
export function SearchField({ children }: ISearchField) {
    return (
        <div className="w-full flex flex-row items-center gap-[10px] sm:gap-[20px] justify-between sm:justify-end">
            <Input />
            {children}
        </div>
    );
}
