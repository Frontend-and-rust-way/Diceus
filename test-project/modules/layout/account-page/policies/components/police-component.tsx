import { cn } from "@/lib/utils";
import { insurancePolicies } from "../mock/mock-ppolice";
type InsurancePolicy = {
  line: string;
  policyNumber: string;
  effectiveDate: string;
  expirationDate: string;
  status: 'Active' | 'Pending';
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: number | 'N/A';
  lossRatio: string | 'N/A';
};


type Props = {
  data: InsurancePolicy[];
};

export function InsurancePolicyTable({ data }: Props) {
  const headers = [
    "Line",
    "Policy #",
    "Effective",
    "Expiration",
    "Status",
    "Exp. Tech",
    "Exp. Premium",
    "Renewal to Tech",
    "Renewal Tech",
    "Renewal Premium",
    "Rate Change",
    "Loss Ratio",
  ];

  const formatCurrency = (value: number): string => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value}`;
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-12 w-full items-center text-[10px] py-2 px-4 bg-[rgb(37,42,61)] border-b border-gray-700">
        {headers.map((header) => (
          <span
            key={header}
            className="text-white font-semibold whitespace-nowrap text-center"
          >
            {header}
          </span>
        ))}
      </div>

      <div className="w-full">
        {data.map((policy, index) => (
          <div
            key={policy.policyNumber}
            className={cn(
              "grid grid-cols-12 w-full items-center py-2 px-4 text-center",
              index % 2 === 0 ? "bg-transparent" : "bg-[rgb(35,40,56)]"
            )}
          >
            <span className="text-white text-xs">{policy.line}</span>
            <span className="text-white text-xs">{policy.policyNumber}</span>
            <span className="text-white text-xs">{policy.effectiveDate}</span>
            <span className="text-white text-xs">{policy.expirationDate}</span>

            <span
              className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded-full",
                policy.status === "Active"
                  ? "bg-green-600 text-white"
                  : "bg-yellow-500 text-black"
              )}
            >
              {policy.status}
            </span>

            <span className="text-white text-xs">
              {formatCurrency(policy.expiringTech)}
            </span>
            <span className="text-white text-xs">
              {formatCurrency(policy.expiringPremium)}
            </span>
            <span className="text-white text-xs">
              {formatCurrency(policy.renewalToTech)}
            </span>
            <span className="text-white text-xs">
              {formatCurrency(policy.renewalTech)}
            </span>
            <span className="text-white text-xs">
              {formatCurrency(policy.renewalPremium)}
            </span>
            <span className="text-white text-xs">
              {policy.rateChange === "N/A" ? "N/A" : `${policy.rateChange}%`}
            </span>
            <span
              className={cn(
                "text-xs font-semibold",
                policy.lossRatio === "N/A"
                  ? "text-gray-400"
                  : Number(policy.lossRatio.replace("%", "")) > 50
                  ? "text-red-400"
                  : "text-green-400"
              )}
            >
              {policy.lossRatio}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
