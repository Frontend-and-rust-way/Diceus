import { ReactNode } from "react";
export interface IAccounts{
    accountName: string;
    accountType: string;
    line: string;
    broker: string;
    renewalDate: string;
    premium: number | string;
    ratedPremium: number | string;
    lossRatio: number | string;
    appetite: string;
    status: string
    triage: number | string;
    winnability: string;
}

export interface IAccountSection {
    className?: string;
    mode?: "full" | "part";
    isDescriptionExists?: boolean;
    inputColor?:string;
}

export interface IMyAccountWrapper{
    children: ReactNode;
}