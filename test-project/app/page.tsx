import { Header } from "@/modules/layout/main-page/header/header";
import { UserLogo } from "@/modules/layout/main-page/header/components/user-logo";
import { NavListSidebar } from "@/modules/layout/main-page/nav-list-sidebar/nav-list-sidebar";
import { Cardix } from "@/modules/layout/main-page/work-queue/card-wrapper";
import { PortfolioGoals } from "@/modules/layout/main-page/portfolio-goals/portfolio-goals";
import { QuickActionCard } from "@/modules/layout/main-page/quick-action/quick-action";
import { MarketingIntelignece } from "@/modules/layout/main-page/card-market-inteligence/market-inteligence";

import MyAccountsTable from "@/ui/table2";


export default function Home() {
  
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
        <div className="flex gap-5 px-[45px]  mt-[30px]">
          <Cardix />
          <PortfolioGoals />
          <div className="flex w-[285px] flex-col gap-5">
            <QuickActionCard
                          className="w-full max-w-[285px]" />
            <MarketingIntelignece />
          </div>
        </div>

            <MyAccountsTable/>
    </main>
  );
}
