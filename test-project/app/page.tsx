"use client" 
import { Header } from "@/modules/layout/main-page/header/header";
import { UserLogo } from "@/modules/layout/main-page/header/components/user-logo";
import { NavListSidebar } from "@/modules/layout/main-page/nav-list-sidebar/nav-list-sidebar";
import { Cardix } from "@/modules/layout/main-page/work-queue/card-wrapper";
import { PortfolioGoals } from "@/modules/layout/main-page/portfolio-goals/portfolio-goals";
import { QuickActionCard } from "@/modules/layout/main-page/quick-action/quick-action";
import { MarketingIntelignece } from "@/modules/layout/main-page/card-market-inteligence/market-inteligence";
import MyAccountsTable from "@/ui/table2";
import { useMediaQuery } from 'react-responsive';
import { cn } from "@/lib/utils";

export default function Home() {

  const isTablet = useMediaQuery({
    maxWidth: 1200,  
  });

  return (
    <main className="min-h-screen ">
       <Header>
        <Header.Description>
          Hi Arthur, welcome! You have 12 open tasks
        </Header.Description>
        <Header.SearchField>
          <UserLogo>AR</UserLogo>
        </Header.SearchField>
      </Header>

    <div className="px-[45px]">  
      <NavListSidebar  lengthButtons={12} />
    </div>
        <div className={cn("flex gap-5 px-[45px] mt-[30px]",isTablet ? "flex-col" : "flex-row" )} >
          <Cardix />
          <QuickActionCardMarketingIntelignece/>
        </div>
        {/* {isTablet ? (<QuickActionCardMarketingIntelignece/>) : null} */}
            <MyAccountsTable/>
    </main>
  );
}

interface IQuickActionCardQuickActionCardMarketingIntelignece{
  className?: string;
  QuickActionCardClassName?:string;
  MarketingInteligneceClassName?: string;
}

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















