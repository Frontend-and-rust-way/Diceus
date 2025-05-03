import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";
import { IAccountSection } from "../types/interface";

export function AccountSections({ className, mode , isDescriptionExists}: IAccountSection) {
  const fullModeButtons = ["filter", "Sort", "Group", "+New"];
  const compactModeButtons = ["filter", "Group"];
  const buttonsToRender = mode === "full" ? fullModeButtons : compactModeButtons;
  
  
  return (
    <div className="w-full flex gap-[20px] items-center justify-start">
       {isDescriptionExists && <span className="text-white text-[30px]">My accounts</span> }
      <Input
        className="w-full max-w-[250px] h-[28px] placeholder:text-[20px]"
        placeholderdescription="Search"
      />
      {buttonsToRender.map((label) => (
        <button
          key={label}
          className={cn(
            "rounded-2xl focus:outline-0 border-[1px] text-tw-light-blue border-tw-light-blue focus:text-white focus:bg-tw-light-blue w-full max-w-[100px] h-auto",
            className
          )}
          autoFocus={label === "+New"}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
