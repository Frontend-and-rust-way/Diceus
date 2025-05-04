"use client" 
import { Header } from "@/modules/layout/main-page/header/header";
import { UserLogo } from "@/modules/layout/main-page/header/components/user-logo";
import { NavListSidebar } from "@/modules/layout/main-page/nav-list-sidebar/nav-list-sidebar";
import { Cardix } from "@/modules/layout/main-page/work-queue/card-wrapper";
import MyAccountsTable from "@/ui/table2";
import { useMediaQuery } from 'react-responsive';
import { cn } from "@/lib/utils";
import { QuickActionCardMarketingIntelignece } from "@/modules/layout/account-page/quick-action-card-marketing-inteligence/quick-action-card-marketing-inteligence";
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





