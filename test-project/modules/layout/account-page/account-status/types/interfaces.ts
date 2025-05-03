import { ReactNode } from "react";

export interface IPolicy {
  type: string;
  premium: string;
  effDate: string;
  icon:  ReactNode;
}

export interface IStatusStep {
    label: string;
    completed: boolean;
}

export interface IComplianceItem {
    label: string;
    completed: boolean;
}