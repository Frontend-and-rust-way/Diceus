interface IRecommendationItem {
    id: number;
    title: string;
    description: string;
    actionLabel: string;
  }
  
export const recommendationsData: IRecommendationItem[] = [
    {
      id: 1,
      title: "Offer 5% premium discount in exchange for 3-year commitment",
      description: "Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.",
      actionLabel: "Apply"
    },
    {
      id: 2,
      title: "Propose risk control services for cargo handling procedures",
      description: "Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios.",
      actionLabel: "Apply"
    }
  ];