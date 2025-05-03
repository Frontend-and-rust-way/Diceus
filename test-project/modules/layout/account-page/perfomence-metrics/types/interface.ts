export interface MetricItem {
    type: 'winnability' | 'lossRatio' | 'premiumGrowth' | 'exposureDistribution';
    title: string;
    value?: string;
    description?: string;
    comparison?: string;
    data?: ExposureDistributionItem[];
    link?: string;
}
  
export interface ExposureDistributionItem {
    category: string;
    percentage: number;
}