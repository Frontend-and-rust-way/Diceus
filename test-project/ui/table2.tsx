import React from "react";
import { EllipsisVertical } from "lucide-react";
import { tableHeaders } from "@/modules/layout/main-page/my-accounts/constants/table-headers";
import { accounts } from "@/mock/mock-ui-table";

function formatPremium(premium: number): string {
  if (premium >= 1_000_000) return `$${(premium / 1_000_000).toFixed(1)}M`;
  if (premium >= 1_000) return `$${(premium / 1_000).toFixed(0)}K`;
  return `$${premium}`;
}

function getLossColor(loss: number) {
  if (loss < 30) return "bg-[#2ED47A]";
  if (loss < 50) return "bg-[#F6C343]";
  return "bg-[#E94F4F]";
}

function getAppetiteColor(appetite: string) {
  switch (appetite) {
    case "HIGH":
      return "bg-[#232B43] text-[#E6EAF5]";
    case "MEDIUM":
      return "bg-[#232B43] text-[#E6EAF5]";
    case "CAUTIOUS":
      return "bg-[#F6C343] text-[#232B43]";
    default:
      return "bg-gray-700 text-white";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#2ED47A]";
    case "Under review":
      return "bg-[#3A7BFF]";
    default:
      return "bg-gray-500";
  }
}

function getWinnabilityDots(winnability: string, rowIndex: number) {
  return (
    <div className="flex items-center gap-1 px-3 py-1 border border-[#3A7BFF] rounded-full">
      {[1, 2, 3, 4].map((value) => (
        <div
          key={`dot-${rowIndex}-${value}`}
          className="w-2 h-2 rounded-full bg-[#3A7BFF]"
        />
      ))}
      <span className="ml-1 text-[#3A7BFF] text-xs font-medium whitespace-nowrap">
        {winnability}
      </span>
    </div>
  );
}

export default function MyAccountsTable() {
  return (
    <div className="px-2 sm:px-6 md:px-[45px] min-h-screen text-[#E6EAF5] py-8">
      <div className="bg-[#181E2D] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#232B43]">

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-[#E6EAF5] text-2xl md:text-3xl font-semibold">My accounts</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#232B43] text-[#E6EAF5] rounded-full px-5 py-2 w-full md:w-64 focus:outline-none placeholder:text-base md:placeholder:text-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full border border-[#3A7BFF] text-[#3A7BFF] px-5 py-1.5 font-medium bg-transparent hover:bg-[#3A7BFF] hover:text-white transition">Filter</button>
            <button className="rounded-full border border-[#3A7BFF] text-[#3A7BFF] px-5 py-1.5 font-medium bg-transparent hover:bg-[#3A7BFF] hover:text-white transition">Sort</button>
            <button className="rounded-full border border-[#3A7BFF] text-[#3A7BFF] px-5 py-1.5 font-medium bg-transparent hover:bg-[#3A7BFF] hover:text-white transition">Group</button>
            <button className="rounded-full bg-[#3A7BFF] text-white px-5 py-1.5 font-medium border border-[#3A7BFF]">+ New</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-11 w-full items-center text-[13px] py-2 px-4 bg-[#232B43] border-b border-[#2E3650] rounded-t-xl">
              {tableHeaders.map((header) => (
                <span
                  key={header}
                  className={`font-semibold whitespace-nowrap ${header === "ACCOUNT NAME/TYPE" ? "text-left" : "text-center"}`}
                >
                  {header}
                </span>
              ))}
            </div>
            <div className="w-full">
              {accounts.map((account, index) => (
                <div
                  key={account.accountName}
                  className={`grid grid-cols-11 w-full items-center py-4 px-4 text-center ${index % 2 === 0 ? "bg-transparent" : "bg-[#232B43]"}`}
                >
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-base">
                      {account.accountName}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {account.accountType}
                    </span>
                  </div>

                  <span className="text-sm">{account.line}</span>
                  <span className="text-sm">{account.broker}</span>
                  <span className="text-sm">{account.renewalDate}</span>
                  <span className="text-[#3A7BFF] font-semibold text-sm">
                    {formatPremium(account.premium)}
                  </span>
                  <span className="text-sm">
                    {formatPremium(account.ratedPremium)}
                  </span>
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getLossColor(account.lossRatio)}`}
                    >
                      {account.lossRatio}%
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <div className={`text-xs font-medium px-3 py-1 rounded-full ${getAppetiteColor(account.appetite)}`}>
                      {account.appetite}
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(account.status)}`} />
                    <span className="text-sm">{account.status}</span>
                  </div>
                  <div className="flex justify-center">
                    <span className="border border-[#3A7BFF] text-[#3A7BFF] px-3 py-1 rounded-full text-xs font-semibold">
                      {account.triage}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {getWinnabilityDots(account.winnability, index)}
                    <button className="rounded-full p-1 border border-[#E6EAF5] hover:bg-[#232B43] transition-colors">
                      <EllipsisVertical className="w-5 h-5 text-[#E6EAF5]" />
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
