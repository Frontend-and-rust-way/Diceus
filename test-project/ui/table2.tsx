// components/MyAccountsTable.tsx
import React from "react";
import { EllipsisVertical } from "lucide-react";

// Mock data
const accounts = [
  {
    accountName: "NAMEX Tech Solutions",
    accountType: "Large Enterprise",
    line: "D&O Liability",
    broker: "Willis Towers",
    renewalDate: "04/16/2025",
    premium: 2300000,
    ratedPremium: 2800000,
    lossRatio: 32,
    appetite: "HIGH",
    status: "Active",
    triage: 180,
    winnability: "Very Strong",
  },
  {
    accountName: "Alliance Healthcare Systems",
    accountType: "Mid-Market",
    line: "Medical Malpractice",
    broker: "Aon Risk",
    renewalDate: "06/30/2025",
    premium: 1700000,
    ratedPremium: 1900000,
    lossRatio: 38,
    appetite: "MEDIUM",
    status: "Under review",
    triage: 165,
    winnability: "Strong",
  },
  {
    accountName: "Maritime Logistics Corp",
    accountType: "Shipping/Logistics",
    line: "Marine Cargo",
    broker: "Marsh McLennan",
    renewalDate: "09/05/2025",
    premium: 875000,
    ratedPremium: 920000,
    lossRatio: 25,
    appetite: "HIGH",
    status: "Active",
    triage: 182,
    winnability: "Very Strong",
  },
  {
    accountName: "GreenField Energy Ltd",
    accountType: "Energy Sector",
    line: "Environmental Liability",
    broker: "Aon Risk",
    renewalDate: "07/22/2025",
    premium: 1200000,
    ratedPremium: 1400000,
    lossRatio: 67,
    appetite: "CAUTIOUS",
    status: "Under review",
    triage: 158,
    winnability: "Medium",
  },
];

// Table headers
const tableHeaders = [
  "ACCOUNT NAME/TYPE",
  "LINE",
  "BROKER",
  "RENEWAL DATE",
  "PREMIUM",
  "RATED PREMIUM",
  "LOSS RATIO",
  "APPETITE",
  "STATUS",
  "TRIAGE",
  "WINNABILITY",
];

function formatPremium(premium: number): string {
  if (premium >= 1_000_000) return `$${(premium / 1_000_000).toFixed(1)}M`;
  if (premium >= 1_000) return `$${(premium / 1_000).toFixed(0)}K`;
  return `$${premium}`;
}

function getLossColor(loss: number) {
  if (loss < 30) return "bg-green-600";
  if (loss < 50) return "bg-yellow-500";
  return "bg-red-500";
}

function getAppetiteColor(appetite: string) {
  switch (appetite) {
    case "HIGH":
      return "bg-blue-950 text-white";
    case "MEDIUM":
      return "bg-blue-900 text-white";
    case "CAUTIOUS":
      return "bg-yellow-900 text-yellow-200";
    default:
      return "bg-gray-700 text-white";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-green-500";
    case "Under review":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
}

function getWinnabilityDots(winnability: string) {

  return (
    <div className="flex items-center gap-0.5 px-2 py-[2px] border border-tw-light-blue rounded-full">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-tw-light-blue"
        />
      ))}
      <div className="ml-1 text-tw-light-blue text-[10px] whitespace-nowrap">
        {winnability}
      </div>
    </div>
  );
}

export default function MyAccountsTable() {
  return (
    <div className="pl-[90px] min-h-screen text-white p-8">
      <div className="bg-[#1a2236] rounded-2xl p-6 shadow-lg">
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <span className="text-white text-3xl font-semibold">My accounts</span>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#232b43] text-white rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none placeholder:text-lg"
          />
          <div className="flex gap-2">
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-4 py-2 hover:bg-tw-light-blue hover:text-white transition">Filter</button>
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-4 py-2 hover:bg-tw-light-blue hover:text-white transition">Sort</button>
            <button className="rounded-2xl border border-tw-light-blue text-tw-light-blue px-4 py-2 hover:bg-tw-light-blue hover:text-white transition">Group</button>
            <button className="rounded-2xl bg-tw-light-blue text-white px-4 py-2 border border-tw-light-blue">+ New</button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-11 w-full items-center text-[12px] py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
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
                className={`grid grid-cols-11 w-full items-center py-3 px-4 text-center ${index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"}`}
              >

                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold text-base">
                    {account.accountName}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {account.accountType}
                  </span>
                </div>

                <span className="text-white text-sm">{account.line}</span>

                <span className="text-white text-sm">{account.broker}</span>

                <span className="text-white text-sm">{account.renewalDate}</span>

                <span className="text-tw-light-blue font-semibold text-sm">
                  {formatPremium(account.premium)}
                </span>

                <span className="text-white font-normal text-sm">
                  {formatPremium(account.ratedPremium)}
                </span>
 
                <div className="flex justify-center">
                  <span
                    className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${getLossColor(account.lossRatio)}`}
                  >
                    {account.lossRatio}%
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${getAppetiteColor(account.appetite)}`}>
                    {account.appetite}
                  </div>
                </div>

                <div className="flex items-center justify-start gap-1">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(account.status)}`} />
                  <span className="text-white text-sm">{account.status}</span>
                </div>
    
                <div className="flex justify-center">
                  <span className="border border-tw-light-blue text-tw-light-blue px-2 py-0.5 rounded-full text-xs font-semibold">
                    {account.triage}
                  </span>
                </div>
     
                <div className="flex items-center justify-between gap-1">
                  {getWinnabilityDots(account.winnability)}
                  <button className="rounded-full p-1 border border-white hover:bg-gray-700 transition-colors">
                    <EllipsisVertical className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}