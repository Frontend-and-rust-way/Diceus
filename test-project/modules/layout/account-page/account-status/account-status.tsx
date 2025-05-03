"use client";
import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const statusSteps = [
  { label: "Submitted", completed: true },
  { label: "Review", completed: true },
  { label: "Quote", completed: true },
  { label: "Bind", completed: true },
  { label: "Issue", completed: true },
  { label: "Renew", completed: false },
];

const complianceItems = [
  { label: "KYC verification", completed: true },
  { label: "Regulatory approval", completed: true },
  { label: "Required Documentation", completed: true },
  { label: "Financial Verification", completed: true },
];

export function AccountStatus() {
  return (
    <div className="flex flex-col rounded-3xl p-5 bg-tw-dark-gray h-full">
      <span className="text-2xl font-semibold text-white mb-5">Account Status</span>
      <div className="bg-[#1e1f2b] text-white rounded-xl p-6 flex flex-col justify-center">
        <div className="flex justify-between items-center w-full relative">
          {statusSteps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center w-full relative">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-green-500 text-green-500 bg-[#0d0e15] z-10">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-sm mt-1">{step.label}</span>
              {index !== statusSteps.length - 1 && (
                <div className="absolute top-[12px] right-[-50%] w-full">
                  <div className="h-[1px] border-t border-dashed border-green-600 w-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComplianceBlock() {
  return (
    <div className="flex flex-col rounded-3xl p-5 bg-tw-dark-gray h-full">
      <div className="flex items-center justify-start gap-[20px] mb-5">
        <h2 className="text-2xl font-semibold text-white">Compliance & Documentation</h2>
        <Link href="#" className="text-blue-400 text-sm">See history →</Link>
      </div>
      <div className="bg-[#1e1f2b] text-white rounded-xl p-6 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complianceItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <Check size={14} className="text-green-500" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Pol() {
  return (
    <section className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:grid-cols-2">
        <AccountStatus />
        <ComplianceBlock />
      </div>
    </section>
  );
}
