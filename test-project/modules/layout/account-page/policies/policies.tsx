"use client"
import React from "react";


interface Policy {
  type: string;
  premium: string;
  effDate: string;
  icon: React.ReactNode;
}

const policies: Policy[] = [
  {
    type: "Marine Cargo",
    premium: "$625,000",
    effDate: "6/30/2026",
    icon: <span role="img" aria-label="marine">🚢</span>,
  },
  {
    type: "General Liability",
    premium: "$175,000",
    effDate: "6/30/2026",
    icon: <span role="img" aria-label="shield">🛡️</span>,
  },
  {
    type: "Workers Comp",
    premium: "$75,000",
    effDate: "---",
    icon: <span role="img" aria-label="workers">👷‍♂️</span>,
  },
  {
    type: "Prorerty",
    premium: "$64,829.83",
    effDate: "---",
    icon: <span role="img" aria-label="property">🏢</span>,
  },
  {
    type: "Umbrella",
    premium: "$275,000",
    effDate: "13/03/2026",
    icon: <span role="img" aria-label="umbrella">☂️</span>,
  },
];
function PolicyCard({ type, premium, effDate, icon }: Policy) {
  return (
    <div className="text-tw-light-greys bg-tw-dark-lighter rounded-xl p-4 w-full shadow-lg flex flex-col gap-2">
      <div className="flex text-white items-center gap-2 text-lg font-semibold">
        {icon} {type}
      </div>
      <div className="text-sm">Premium: {premium}</div>
      <div className="text-sm">Eff.Date: {effDate || '---'}</div>
    </div>
  );
}



export function PoliciesBlock() {
  return (
    <section>
      <h2 className="text-white text-3xl font-bold  mb-6">Policies</h2>
      <div className="flex flex-col py-5 px-2.5  rounded-4xl bg-tw-dark-gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 xl:gap-8">
          {policies.map((policy, index) => (
            <PolicyCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </section>
  );
}



