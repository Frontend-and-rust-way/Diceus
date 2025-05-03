import { CardWrapper } from "../work-queue/components/card-wrapper";
import { GoalBar } from "./components/goal-bar";
import { Indicator } from "./components/indicator";

export function PortfolioGoals() {

  return (
    <CardWrapper className="w-full gap-[2px]  md:max-w-[285px]   py-[5px] p-[10px] md:gap-[5px] h-[auto]  ">
      <span className="text-white text:-[16px]  sm:text-[20px]">
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
        <div className="flex flex-col  gap-[10px] sm:gap-[30px] mt-[30px]">
          <Indicator  spanDescription="NEW BUSINESS TARGET" indicatorValue="8.1M" totalValue="$12M" />
          <Indicator  spanDescription="ANNUAL GWP TARGET" indicatorValue="28.4M" totalValue="$42M" />
        </div>

    </CardWrapper>
  );
}