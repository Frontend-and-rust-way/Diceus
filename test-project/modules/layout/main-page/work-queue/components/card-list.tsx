import { cn } from "@/lib/utils";
import { ICardList } from "../types/interfaces";

export function CardList({ mapData, className,autoFocusIndex = 0 }: ICardList) {
  return (
    <div className="flex gap-2">
      {mapData.map( (value, index) => (
        <button
          key={value}
          autoFocus={autoFocusIndex === index ? true : false}
          className={cn("bg-black outline-0 px-[30px] h-[40px] focus:bg-tw-light-blue rounded-2xl text-white", className)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
