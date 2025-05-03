import { CardWrapper } from "../work-queue/components/card-wrapper";
import { cn } from "@/lib/utils";
import { IMarketingintelignece } from "./types/interface";
import { marketUpdates } from "./mock/description";

export function MarketingIntelignece({ className }: IMarketingintelignece) {
return ( 
    <CardWrapper className={cn("p-[20px] gap-[20px]",className)}>
        <span className="text-white text-[20px]">Market intelignece</span>
        {marketUpdates.map(( value => ( 
            <>
                <div className="flex  items-start border-b-[1px] border-b-[rgb(49,59,84)] gap-[20px]">
                  <span className={`rounded-full w-[16px] h-[16px] aspect-square`} 
                  style={{backgroundColor:value.color}}/>
                  <span className="text-white text-[14px]">{value.text}</span>
                </div>
            </> 
        )))}
    </CardWrapper>
)
}