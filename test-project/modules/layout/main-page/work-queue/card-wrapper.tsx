import { CardWrapper } from "./components/card-wrapper";
import { CardListCol } from "./components/card-list-col";
import { CardList } from "./components/card-list";
import { constants } from "./constants/constants";
import { workQueueData } from "./mock/card-statistic-data";


export function Cardix() {
    return (
        <> 
            <CardWrapper className="w-full max-w-[1035px] h-[550px] p-[10px]">
                <span className="text-white text-[25px]">Work Queue</span>
                <CardList mapData={constants}/>
                <CardListCol dataList={workQueueData}/>
            </CardWrapper>
        </>
    )
}
