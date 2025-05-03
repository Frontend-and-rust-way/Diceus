import React from "react";

const policies = [
  {
    line: "Marine Cargo",
    icon: "🚢",
    number: "17030212",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    statusColor: "bg-green-500",
    expiringTech: "$587,500",
    expiringPremium: "$605,000",
    renewalToTech: "$610,000",
    renewalTech: "$620,000",
    renewalPremium: "$625,000",
    rateChange: "3.3%",
    lossRatio: "22%",
    lossColor: "bg-green-500",
  },
  {
    line: "General Liability",
    icon: "🟢",
    number: "4631092",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    statusColor: "bg-green-500",
    expiringTech: "$160,000",
    expiringPremium: "$165,000",
    renewalToTech: "$170,000",
    renewalTech: "$172,500",
    renewalPremium: "$175,000",
    rateChange: "6.1%",
    lossRatio: "55%",
    lossColor: "bg-yellow-400",
  },
  {
    line: "Workers Comp",
    icon: "🟣",
    number: "9182371",
    effDate: "Pending",
    expDate: "Pending",
    status: "Pending",
    statusColor: "bg-yellow-400",
    expiringTech: "$0",
    expiringPremium: "$0",
    renewalToTech: "$73,500",
    renewalTech: "$75,000",
    renewalPremium: "$75,000",
    rateChange: "N/A",
    lossRatio: "N/A",
    lossColor: "bg-gray-400",
  },
  {
    line: "Umbrella",
    icon: "🔴",
    number: "5274936",
    effDate: "13/03/2026",
    expDate: "13/03/2027",
    status: "Active",
    statusColor: "bg-green-500",
    expiringTech: "$245,000",
    expiringPremium: "$250,000",
    renewalToTech: "$267,500",
    renewalTech: "$270,000",
    renewalPremium: "$275,000",
    rateChange: "10.0%",
    lossRatio: "78%",
    lossColor: "bg-red-500",
  },
];

const total = {
  expiringTech: "$992,500",
  expiringPremium: "$1,020,000",
  renewalToTech: "$1,121,000",
  renewalTech: "$1,137,500",
  renewalPremium: "$1,150,000",
  rateChange: "6.9%",
  lossRatio: "58.3%",
};

const TableHeader = () => (
  <thead>
    <tr className="text-[#7b89a8]">
      {["LINE", "EFF. DATE", "EXP. DATE", "STATUS", "EXPIRING TECH", "EXPIRING PREMIUM", "RENEWAL TO TECH", "RENEWAL TECH", "RENEWAL PREMIUM", "RATE CHANGE", "LOSS RATIO", ""].map((header) => (
        <th key={header} className="text-left py-2 px-3 font-medium">
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const TableRow = ({ p }: { p: typeof policies[0] }) => (
  <tr className="border-b border-[#232b43] hover:bg-[#232b43] transition">
    <td className="py-4 px-3 flex items-center gap-3">
      <span className="text-2xl">{p.icon}</span>
      <div>
        <div className="font-semibold">{p.line}</div>
        <div className="text-xs text-[#7b89a8]">{p.number}</div>
      </div>
    </td>
    {[p.effDate, p.expDate].map((val, i) => (
      <td key={i} className="py-4 px-3">{val}</td>
    ))}
    <td className="py-4 px-3">
      <span className={`inline-flex items-center gap-1 ${p.statusColor} bg-opacity-20 text-xs px-2 py-1 rounded-full`}>
        <span className={`w-2 h-2 rounded-full ${p.statusColor} inline-block`}></span>
        {p.status}
      </span>
    </td>
    {[p.expiringTech, p.expiringPremium, p.renewalToTech, p.renewalTech].map((val, i) => (
      <td key={i} className="py-4 px-3">{val}</td>
    ))}
    <td className="py-4 px-3 font-bold">{p.renewalPremium}</td>
    <td className={`py-4 px-3 ${p.rateChange.includes('-') ? 'text-red-500' : p.rateChange === 'N/A' ? 'text-[#7b89a8]' : parseFloat(p.rateChange) > 5 ? 'text-red-500' : 'text-green-400'} font-semibold`}>
      {p.rateChange}
    </td>
    <td className="py-4 px-3">
      {p.lossRatio !== "N/A" ? (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${p.lossColor}`}>
          {p.lossRatio}
        </span>
      ) : (
        <span className="text-[#7b89a8]">N/A</span>
      )}
    </td>
    <td className="py-4 px-3">
      <button className="text-[#7b89a8] hover:text-white text-2xl">⋮</button>
    </td>
  </tr>
);

export default function PoliciesTable() {
  return (
    <div className="min-h-screen px-[45px] text-white ">
      <h1 className="text-3xl font-bold mb-6">Policies</h1>
      <div className="bg-[#1a2236] rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#232b43] text-white rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none"
          />
          <div className="flex gap-2">
            {["Filter", "Group"].map((label) => (
              <button key={label} className="bg-[#232b43] text-white px-4 py-2 rounded-lg border border-[#2e3650] hover:bg-[#28304a] transition">
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <TableHeader />
            <tbody>
              {policies.map((p) => (
                <TableRow key={p.number} p={p} />
              ))}
              <tr className="bg-[#232b43] text-white font-bold">
                <td className="py-4 px-3" colSpan={4}>TOTAL ({policies.length})</td>
                {[total.expiringTech, total.expiringPremium, total.renewalToTech, total.renewalTech, total.renewalPremium, total.rateChange].map((val, i) => (
                  <td key={i} className="py-4 px-3">{val}</td>
                ))}
                <td className="py-4 px-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-yellow-400">
                    {total.lossRatio}
                  </span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
