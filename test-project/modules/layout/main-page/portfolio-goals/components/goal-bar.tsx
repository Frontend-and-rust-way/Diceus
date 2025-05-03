import { IGoalBarProps } from "../types/interfaces";
import { Triangle } from "lucide-react";
  
export function GoalBar({ topLabel, bottomLabel, barWidths,bottomLabelColor }: IGoalBarProps) {
    return (
      <div className="relative w-full rounded-[10px] my-[25px]">
  
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[100%] flex flex-col items-center gap-1">
          <span className="text-white text-xs">{topLabel}</span>
          <Triangle size={11} className="text-tw-light-blue rotate-180" />
        </div>
  
        <div className="flex w-full h-4 overflow-hidden rounded-[10px]">
          <span
            className="h-[20px] bg-green-300"
            style={{ width: barWidths[0] }}
          />
          <span
            className="h-[20px] bg-yellow-200"
            style={{ width: barWidths[1] }}
          />
          <span
            className="h-[20px] bg-red-700"
            style={{ width: barWidths[2] }}
          />
        </div>
  
        <div className="absolute top-[100%] left-1/4 flex flex-col items-center gap-1">
          <Triangle size={11} className="text-green-500"/>
          <span className="text-white text-xs" style={{color:bottomLabelColor}}>{bottomLabel}</span>
        </div>
      </div>
    );
}
  