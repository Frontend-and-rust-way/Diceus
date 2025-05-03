import { accounts } from "../mock/mock-my-account";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { tableHeaders } from "../constants/table-headers";


export function AccountInfo() {
  const formatPremium = (premium: string | number): string => {
    const num = typeof premium === "string" ? parseFloat(premium) : premium;
    if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <div className="w-full overflow-x-auto">

      <div className="grid grid-cols-11 w-full items-center text-[10px] py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
        {tableHeaders.map((header) => (
          <span
            key={header}
            className={cn(
              "text-white font-semibold whitespace-nowrap",
              header === "STATUS" ? "text-left" : "text-center"
            )}
          >
            {header}
          </span>
        ))}
      </div>

      <div className="w-full">
        {accounts.map((account, index) => (
          <div
            key={account.accountName}
            className={cn(
              "grid grid-cols-11 w-full items-center py-2 px-4 text-center",
              index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"
            )}
          >

            <div className="flex flex-col text-left">
              <span className="text-white font-semibold text-xs">
                {account.accountName}
              </span>
              <span className="text-gray-400 text-[10px]">
                {account.accountType}
              </span>
            </div>

  
            <span className="text-white text-xs">{account.line}</span>
            

            <span className="text-white text-xs">{account.broker}</span>
            

            <span className="text-white text-xs">{account.renewalDate}</span>


            <span className="text-tw-light-blue font-semibold text-xs">
              {formatPremium(account.premium)}
            </span>
            
            <span className="text-white font-normal text-xs">
              {formatPremium(account.ratedPremium)}
            </span>

            <div className="flex justify-center">
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-white text-[10px] font-semibold",
                  Number(account.lossRatio) < 30 || Number(account.lossRatio) === 32
                    ? "bg-green-600"
                    : Number(account.lossRatio) < 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
                )}
              >
                {account.lossRatio}%
              </span>
            </div>


            <div className="flex justify-center">
              <div className="text-white text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-950">
                {account.appetite}
              </div>
            </div>


            <div className="flex items-center justify-start gap-1">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  account.status === "Active"
                    ? "bg-green-500"
                    : account.status === "Under review"
                    ? "bg-blue-500"
                    : "bg-gray-500"
                )}
              />
              <span className="text-white text-xs">{account.status}</span>
            </div>


            <div className="flex justify-center">
              <span className="border border-tw-light-blue text-tw-light-blue px-2 py-0.5 rounded-full text-[10px] font-semibold">
                {account.triage}
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
                  {account.winnability}
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

interface IWinnabilityProps{
  description:string;
  
}
export function Mark({description}:IWinnabilityProps) {

  return ( 
    <div className="flex items-center gap-0.5 px-2 py-[2px] border border-tw-light-blue rounded-full">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-tw-light-blue"
      />
    ))}
    <div className="ml-1 text-tw-light-blue text-[10px] whitespace-nowrap">
        {description}
    </div>
  </div>
  ) 
}