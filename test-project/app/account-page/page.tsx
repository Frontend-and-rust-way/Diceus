import { Header } from "@/modules/layout/main-page/header/header";
import { UserLogo } from "@/modules/layout/main-page/header/components/user-logo";
import { AttentionCard } from "@/modules/layout/account-page/maritime-logisitcs-corp/maritime-logistics-corp";
import { Description } from "@/modules/layout/account-page/maritime-logisitcs-corp/maritime-logistics-corp";
import { MaritimeLogisticsCorp } from "@/modules/layout/account-page/maritime-logisitcs-corp/maritime-logistics-corp";
import { PerfomanceMetrics } from "@/modules/layout/account-page/perfomence-metrics/perfomence-metircs";
import { NavListSidebar } from "@/modules/layout/main-page/nav-list-sidebar/nav-list-sidebar";
import { PoliciesBlock } from "@/modules/layout/account-page/policies/policies";
import { Communication } from "@/modules/layout/account-page/communication/communication";
import { Pol } from "@/modules/layout/account-page/account-status/account-status";
import { AccountDetails } from "@/modules/layout/account-page/account-details/account-details";
import PoliciesTable from "@/ui/table";

export default function AccountPage() {

    return (
        <> 
            <Header>
                <Header.Description>
                    Hi Arthur, welcome! You have 12 open tasks
                </Header.Description>
                <Header.SearchField>
                    <UserLogo>AR</UserLogo>
                </Header.SearchField>
            </Header>

            <main className="flex px-[70px] flex-col"> 
                <NavListSidebar  lengthButtons={7} />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <Description/>   
                        <MaritimeLogisticsCorp /> 
                    </div>
                    <AttentionCard/>
                </div>

                <span className="text-white text-[25px] mb-4 block">Perfomance Metrics</span>
                <PerfomanceMetrics />
                <PoliciesBlock/>
                <Pol/>
                <Communication/> 
                <AccountDetails/> 
                <PoliciesTable />;
            </main>
        </>
    )
}
