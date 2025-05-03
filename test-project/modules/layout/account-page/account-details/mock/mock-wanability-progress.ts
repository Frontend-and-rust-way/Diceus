interface MetricItem {
    id: number;
    name: string;
    value: number;
  }
  

 export  const positiveMetrics: MetricItem[] = [
    { id: 1, name: 'Brokers relationship', value: 28 },
    { id: 2, name: 'Loss history', value: 22 },
    { id: 3, name: 'Industry growth', value: 16 },
    { id: 4, name: 'Multiline opportunity', value: 11 }
  ];
  

 export const negativeMetrics: MetricItem[] = [
    { id: 1, name: 'Premium pricing', value: -24 },
    { id: 2, name: 'Total exposure', value: -18 },
    { id: 3, name: 'Loss ratio trend', value: -13 },
    { id: 4, name: 'Market competition', value: -5 }
  ];