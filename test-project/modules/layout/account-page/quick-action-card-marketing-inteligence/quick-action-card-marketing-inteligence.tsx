import { useMediaQuery } from "react-responsive";

import { PortfolioGoals } from "../../main-page/portfolio-goals/portfolio-goals";
import { QuickActionCard } from "../../main-page/quick-action/quick-action";
import { cn } from "@/lib/utils";
import { MarketingIntelignece } from "../../main-page/card-market-inteligence/market-inteligence";
import { IQuickActionCardQuickActionCardMarketingIntelignece } from "./types/interface";

export function  QuickActionCardMarketingIntelignece({className,QuickActionCardClassName,MarketingInteligneceClassName}:IQuickActionCardQuickActionCardMarketingIntelignece) {
    const isTablet = useMediaQuery(
      {
      maxWidth: 1200,  
    });
    
      return  ( 
        <>  
        {isTablet ?  (
         <div className="flex flex-col  items-start min-w-full gap-[30px]  py-[60px]  md:flex-row">
          <PortfolioGoals />
          <div className={cn("w-full flex flex-col gap-5",className)}>
            <QuickActionCard
              className={cn("min-w-full",QuickActionCardClassName)}/>
            <MarketingIntelignece 
                className={cn("min-w-full",MarketingInteligneceClassName)}
            />
          </div>
        </div> 
        ): 
        <> 
          <PortfolioGoals/>
          <div className={cn("flex flex-col gap-5",className)}>
            <QuickActionCard
                className={cn("w-full",QuickActionCardClassName)}/>
            <MarketingIntelignece 
                className={cn("w-full",MarketingInteligneceClassName)}/>
          </div>
          </>} 
        </>
      )
  }