import { CardWrapper } from "../../main-page/work-queue/components/card-wrapper";
import { cardInfo } from "./mock/mock-perfomance-metrics";
import { Dot } from "lucide-react";
import { Progress } from "@/ui/progress";

export function PerfomanceMetrics() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        {cardInfo.map((card) => (
          <div key={card.type} className="w-full">
            <CardWrapper className="w-full flex flex-col justify-between h-auto text-white min-h-[240px]">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-xl sm:text-2xl">{card.type}</span>
                    {card.title === "Winnability" && (
                      <div className="flex gap-[2px] items-center ml-2">
                        <Dot size={10} />
                        <Dot size={10} />
                        <Dot size={10} />
                        <Dot size={10} />
                      </div>
                    )}
                  </div>
  
                  <div className="text-[36px] sm:text-[42px] lg:text-[45px]">
                    {card.value}
                    <span className="text-zinc-500 text-[16px] sm:text-[18px] ml-2">
                      {card?.description} {card?.comparison}
                    </span>
                  </div>
                </div>
  
                <span className="text-tw-light-blue text-sm sm:text-base">{card.link}</span>
              </div>
            </CardWrapper>
          </div>
        ))}
        <div className="w-full">
          <CardDistribution />
        </div>
      </div>
    );
  }
  

export function CardDistribution() {
  const mockCardDescription = [
    { heading: "Marine Cargo: 71.4%", value: 71.4 },
    { heading: "General Liability: 20%", value: 50 },
    { heading: "Workers Comp: 48.6%", value: 38.6 },
  ];

  return (
    <CardWrapper className="p-5 pt-10 w-full text-white">
      <span className="text-[22px] sm:text-[25px] mb-4 block">Exposure Distribution</span>
      <div className="flex flex-col gap-4">
        {mockCardDescription.map((card) => (
          <div key={card.heading} className="flex items-center gap-4">
            <Progress className="max-w-[200px] w-full h-[20px]" value={card.value} />
            <span className="text-sm sm:text-base">{card.heading}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}


interface IDescriptionComponent{
    description: string;
    number:number;
}
export function DescriptionComponent({description, number}: IDescriptionComponent) {

    return (
        <div className="flex items-center space-between mt-[10px]">
            <span className="text-white text-[20px]">{description}</span>
            <span className="rounded-[10px] bg-tw-light-gray text-white  text-[20px]">{number}</span>
        </div>
    )
}


