import { CardWrapper } from "../work-queue/components/card-wrapper";
import { GoalBar } from "./components/goal-bar";
import { Indicator } from "./components/indicator";

export function PortfolioGoals() {

  return (
    <CardWrapper className="w-full max-w-[285px] py-[5px] p-[20px] gap-[10px]  h-[535px] ">
      <span className="text-white text-[20px]">
        Portfolio goals
      </span>
      <span className="text-[rgb(148,163,184)] text-[12px]">PORTFOLIO LOSS RATIO TARGET</span>
        <GoalBar
            bottomLabelColor="green"
            topLabel="TG: 55%"
            bottomLabel="-6.8% (good)"
            barWidths={["40%", "28%", "33%"]}  
        />
      <span className="text-[12px] text-[rgb(148,163,184)] mt-4">RENEWAL RETENTION</span>
      <GoalBar
        bottomLabelColor="green"
        topLabel="TG: 55%"
        bottomLabel="On Target"
        barWidths={["40.2%", "28%", "33%"]}
      />
        <Indicator  spanDescription="NEW BUSINESS TARGET" indicatorValue="8.1M" totalValue="$12M" />
        <Indicator  spanDescription="ANNUAL GWP TARGET" indicatorValue="28.4M" totalValue="$42M" />
    </CardWrapper>
  );
}