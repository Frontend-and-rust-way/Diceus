export interface IIndicator {
    spanDescription: string;
    indicatorValue: number|string;
    totalValue: number | string;
    width?:`w-[${number}]`;
    height?:`h-[${number}]`
}

export interface IGoalBarProps {
    topLabel: string;
    bottomLabel: string;
    barWidths: [string, string, string]; 
    bottomLabelColor?:string;
}