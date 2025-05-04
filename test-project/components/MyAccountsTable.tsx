import React from "react";
import { EllipsisVertical } from "lucide-react";
import { tableHeaders } from "@/modules/layout/main-page/my-accounts/constants/table-headers";
import { accounts } from "@/mock/mock-ui-table";

export default function MyAccountsTable() {
  return (
    <div className="px-4 sm:px-6 md:px-[45px] min-h-screen text-white p-4 sm:p-6 md:p-8">
      <div className="bg-[#1a2236] rounded-2xl p-4 sm:p-6 shadow-lg">
 
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-white text-2xl sm:text-3xl font-semibold">My accounts</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#232b43] text-white rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none placeholder:text-base sm:placeholder:text-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-tw-light-blue hover:text-white transition">Filter</button>
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-tw-light-blue hover:text-white transition">Sort</button>
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-tw-light-blue hover:text-white transition">Group</button>
            <button className="rounded-2xl bg-tw-light-blue text-white px-3 sm:px-4 py-2 text-sm sm:text-base border border-tw-light-blue">+ New</button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-11 w-full items-center text-[10px] sm:text-[12px] py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
              {tableHeaders.map((header) => (
                <span
                  key={header}
                  className={`text-white font-semibold whitespace-nowrap ${header === "STATUS" ? "text-left" : "text-center"}`}
                >
                  {header}
                </span>
              ))}
            </div>
            <div className="w-full">
              {accounts.map((account, index) => (
                <div
                  key={account.accountName}
                  className={`grid grid-cols-11 w-full items-center py-2 sm:py-3 px-4 text-center ${index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"}`}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {account.accountName}
                    </span>
                    <span className="text-gray-400 text-[10px] sm:text-xs">
                      {account.accountType}
                    </span>
                  </div>

                  <span className="text-white text-xs sm:text-sm">{account.line}</span>

                  <span className="text-white text-xs sm:text-sm">{account.broker}</span>

                  <span className="text-white text-xs sm:text-sm">{account.renewalDate}</span>

                  <span className="text-tw-light-blue font-semibold text-xs sm:text-sm">
                    {formatPremium(account.premium)}
                  </span>

                  <span className="text-white font-normal text-xs sm:text-sm">
                    {formatPremium(account.ratedPremium)}
                  </span>

                  <div className="flex justify-center">
                    <span
                      className={`px-1.5 sm:px-2 py-0.5 rounded-full text-white text-[10px] sm:text-xs font-semibold ${getLossColor(account.lossRatio)}`}
                    >
                      {account.lossRatio}%
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <div className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full ${getAppetiteColor(account.appetite)}`}>
                      {account.appetite}
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-1">
                    <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${getStatusColor(account.status)}`} />
                    <span className="text-white text-xs sm:text-sm">{account.status}</span>
                  </div>

                  <div className="flex justify-center">
                    <span className="border border-tw-light-blue text-tw-light-blue px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
                      {account.triage}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-1">
                    {getWinnabilityDots(account.winnability)}
                    <button className="rounded-full p-1 border border-white hover:bg-gray-700 transition-colors">
                      <EllipsisVertical className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
