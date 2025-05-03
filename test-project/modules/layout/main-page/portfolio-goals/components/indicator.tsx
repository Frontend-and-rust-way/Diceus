import { IIndicator } from "../types/interfaces";


export function Indicator({spanDescription, indicatorValue, totalValue}: IIndicator) {   
    return ( 
        <div className="flex flex-col text-white"> 
            <span className="text-[10px]">{spanDescription}</span>

            <div className="flex gap-[20px]">
                <div className="flex text-white xl:max-w-[197px] w-full h-[28px] bg-[rgb(49,56,83)] gap-[20px] rounded-r-2xl">
                    <div className="text-right pr-[10px]  h-[100%] rounded-r-2xl" 
                        style={{
                            width:"45%",
                            backgroundImage:"linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%)"}}>
                        <span>{indicatorValue}</span>
                    </div>
                </div>
                <span className="text-white bg-transparent">{totalValue}</span>
            </div>
            
        </div>
    )
}
