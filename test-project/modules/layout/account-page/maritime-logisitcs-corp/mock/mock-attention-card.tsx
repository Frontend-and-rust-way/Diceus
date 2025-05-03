import { IItems } from "../types/interface";

export const items:IItems[] = [
    {
      title: "Marine Survey Required",
      status: "Scheduled",
      date: "2025-06-12",
      actionLink: "Review details link ",
      actionUrl: "#"
    },
    {
      title: "Loss Control Complete",
      status: "Last inspection",
      date: "2025-02-15",
      actionLink: "View report ",
      actionUrl: "#"
    },
    {
      title: "Claims Review Required",
      status: "3 open claims // $245.000 TTL",
      amount: 245000,
      attentionRequired: true,
      actionLink: "View claims ",
      actionUrl: "#"
    }
  ];
  