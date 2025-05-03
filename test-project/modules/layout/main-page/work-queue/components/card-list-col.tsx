import { ICardLists } from "../types/interfaces";
import { cn } from "@/lib/utils";
// import { EllipsisVertical } from "lucide-react";

export function CardListCol({ dataList }: ICardLists) {
  return (
    <>
      <div className="flex flex-col">
        {dataList.map((value, index) => (
          <div
            key={value.id}
            className={cn(
              "border-b border-[rgb(41,50,69)] h-[55  px] grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center text-white p-2 text-sm gap-4",
              index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"
            )}
          >
            <span className="truncate">{value.originator}</span>

            <div className="grid">
              <span className="truncate">{value.client}</span>
              <span className="text-tw-light-greys truncate">{value.line}</span>
            </div>

            <span className="truncate">{value.type}</span>

            <div className="grid grid-cols-[auto_1fr] items-center gap-[2px]">
              <span
                className="w-2 h-2rounded-full inline-block"
                style={{
                  backgroundColor:
                    value.status === "New"
                      ? "blue"
                      : value.status === "Completed"
                      ? "green"
                      : value.status === "Pending Review"
                      ? "yellow"
                      : "",
                }}
              ></span>
              <span className="truncate">{value.status}</span>
            </div>

            <span className="text-gray-400 truncate">{value.date}</span>

          </div>
        ))}
      </div>
    </>
  );
}
