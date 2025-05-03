import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface TableHeader {
  key: string;
  label: string;
}

interface Account {
  [key: string]: any;
}

interface AccountInfoProps {
  data: Account[];
  headers: TableHeader[];
}

export function AccountInfors({ data, headers }: AccountInfoProps) {
  const formatPremium = (premium: string | number): string => {
    const num = typeof premium === "string" ? parseFloat(premium) : premium;
    if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-11 w-full items-center text-[10px] py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
        {headers.map((header) => (
          <span
            key={header.key}
            className={cn(
              "text-white font-semibold whitespace-nowrap",
              header.key === "status" ? "text-left" : "text-center"
            )}
          >
            {header.label}
          </span>
        ))}
      </div>

      <div className="w-full">
        {data.map((item, index) => (
          <div
            key={item.accountName || index}
            className={cn(
              "grid grid-cols-11 w-full items-center py-2 px-4 text-center",
              index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"
            )}
          >
            <div className="flex flex-col text-left">
              <span className="text-white font-semibold text-xs">
                {item.accountName}
              </span>
              <span className="text-gray-400 text-[10px]">{item.accountType}</span>
            </div>

            <span className="text-white text-xs">{item.line}</span>
            <span className="text-white text-xs">{item.broker}</span>
            <span className="text-white text-xs">{item.renewalDate}</span>

            <span className="text-tw-light-blue font-semibold text-xs">
              {formatPremium(item.premium)}
            </span>

            <span className="text-white font-normal text-xs">
              {formatPremium(item.ratedPremium)}
            </span>

            <div className="flex justify-center">
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-white text-[10px] font-semibold",
                  Number(item.lossRatio) < 30 || Number(item.lossRatio) === 32
                    ? "bg-green-600"
                    : Number(item.lossRatio) < 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
                )}
              >
                {item.lossRatio}%
              </span>
            </div>

            <div className="flex justify-center">
              <div className="text-white text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-950">
                {item.appetite}
              </div>
            </div>

            <div className="flex items-center justify-start gap-1">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  item.status === "Active"
                    ? "bg-green-500"
                    : item.status === "Under review"
                    ? "bg-blue-500"
                    : "bg-gray-500"
                )}
              />
              <span className="text-white text-xs">{item.status}</span>
            </div>

            <div className="flex justify-center">
              <span className="border border-tw-light-blue text-tw-light-blue px-2 py-0.5 rounded-full text-[10px] font-semibold">
                {item.triage}
              </span>
            </div>

            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-0.5 px-2 py-[2px] border border-tw-light-blue rounded-full">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-tw-light-blue"
                  />
                ))}
                <div className="ml-1 text-tw-light-blue text-[10px] whitespace-nowrap">
                  {item.winnability}
                </div>
              </div>

              <button className="rounded-full p-1 border border-white hover:bg-gray-700 transition-colors">
                <EllipsisVertical className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
