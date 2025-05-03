import { IAccounts } from "../types/interface";

export const accounts: IAccounts[] = [
    {
      accountName: "NAMEX Tech Solutions",
      accountType: "Large Enterprise",
      line: "D&O Liability",
      broker: "Willis Towers",
      renewalDate: "2025-04-16",
      premium: 2_300_000,  
      ratedPremium: 2_800_000,
      lossRatio: 32,
      appetite: "HIGH",
      status: "Active",
      triage: 180,
      winnability: "Very Strong"
    },
    {
      accountName: "Alliance Healthcare Systems",
      accountType: "Mid-Market",
      line: "Medical Malpractice",
      broker: "Aon Risk",
      renewalDate: "2025-06-30",
      premium: 1_700_000, // $1.7M
      ratedPremium: 1_900_000,
      lossRatio: 38,
      appetite: "MEDIUM",
      status: "Under review",
      triage: 165,
      winnability: "Strong"
    },
    {
      accountName: "Maritime Logistics Corp",
      accountType: "Shipping/Logistics",
      line: "Marine Cargo",
      broker: "Marsh McLennan",
      renewalDate: "2025-09-05",
      premium: 875_000, // $875K
      ratedPremium: 920_000,
      lossRatio: 25,
      appetite: "HIGH",
      status: "Active",
      triage: 182,
      winnability: "Very Strong"
    },
    {
      accountName: "GreenField Energy Ltd",
      accountType: "Energy Sector",
      line: "Environmental Liability",
      broker: "Aon Risk",
      renewalDate: "2025-07-22",
      premium: 1_200_000, // $1.2M
      ratedPremium: 1_400_000,
      lossRatio: 67,
      appetite: "CAUTIOUS",
      status: "Under review",
      triage: 158,
      winnability: "Medium"
    }
];
  