import { CardWrapper } from "../work-queue/components/card-wrapper";
import { quickActions } from "./constants/constants";
import { cn } from "@/lib/utils";

interface IQuickActionCard{
    className?:string;

}
export function  QuickActionCard({className}: IQuickActionCard) {

    return  (   
        <CardWrapper className={cn("w-full p-[10px] gap-[0px]",className)}>
            <span className="text-white text-[20px]">Quick Actions</span>    
            {quickActions.map(action => ( 
              <button key={action} className="rounded-xl h-[40px] bg-tw-light-blue text-white my-[5px] w-full">
                {action}
              </button>
            ))}
        </CardWrapper>
    )
}