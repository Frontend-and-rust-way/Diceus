import { ICardLists } from "@/modules/layout/main-page/work-queue/types/interfaces";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";

function getStatusColor(status: string) {
  switch (status) {
    case "New":
      return "bg-blue-500";
    case "Completed":
      return "bg-green-500";
    case "Pending Review":
      return "bg-yellow-400";
    default:
      return "bg-gray-400";
  }
}

function getInitials(name: string) {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0][0];
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function CardListCol({ dataList }: ICardLists) {
  return (
    <div className="flex flex-col">
      {/* Table header */}
      <div className="grid grid-cols-[1.2fr_1.8fr_1.2fr_1.2fr_1fr_40px] items-center text-xs text-[#bfc8e6] font-semibold py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
        <span>ORIGINATOR</span>
        <span>CLIENT/LINE</span>
        <span>TYPE</span>
        <span>STATUS</span>
        <span>CREATED</span>
        <span></span>
      </div>
      {dataList.map((value, index) => (
        <div
          key={value.id}
          className={cn(
            "grid grid-cols-[1.2fr_1.8fr_1.2fr_1.2fr_1fr_40px] items-center text-white py-3 px-4 text-sm gap-2 border-b border-[rgb(41,50,69)]",
            index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"
          )}
        >

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#2d3959] flex items-center justify-center text-xs font-bold text-white">
              {getInitials(value.originator)}
            </span>
            <span className="truncate">{value.originator}</span>
          </div>

          <div className="flex flex-col">
            <span className="truncate">{value.client}</span>
            <span className="text-tw-light-greys text-xs truncate">{value.line}</span>
          </div>

          <span className="truncate">{value.type}</span>

          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full inline-block ${getStatusColor(value.status)}`}></span>
            <span className="truncate">{value.status}</span>
          </div>

          <span className="text-gray-400 truncate">{value.date}</span>

          <span>
            <EllipsisVertical className="w-4 h-4 text-[#bfc8e6] hover:text-white cursor-pointer" />
          </span>
        </div>
      ))}
    </div>
  );
} 