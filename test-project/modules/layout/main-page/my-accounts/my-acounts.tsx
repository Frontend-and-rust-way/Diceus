import { Input } from "@/ui/input";
import { IAccountSection } from "./types/interface";
import { cn } from "@/lib/utils";
import { IMyAccountWrapper } from "./types/interface";

export function MyAccountWrapper({children}: IMyAccountWrapper) {
    return (
        <>
            {children}
        </>
    )
}

export function AccountSection({mode = "full", className,isDescriptionExists = true,inputColor }: IAccountSection) {
  const buttonsDescription = ["filter", "Sort", "Group", "+New"]; 
  const buttonDescriptionPart = ["filter","Group"];
  const chooseArray = mode ==="full" ? buttonsDescription : buttonDescriptionPart
  


  return (
    <div className="w-full flex gap-[20px] items-center justify-start">
      {isDescriptionExists && <span className="text-white text-[30px]">My accounts</span>}

      <Input
        className={cn(inputColor,"w-full max-w-[250px] h-[28px] placeholder:text-[20px]")}
        placeholderdescription="Search"
      />
      {chooseArray.map((value) => (
        <button
          key={value}
          className={cn(
            "rounded-2xl focus:outline-0 border-[1px] text-tw-light-blue border-tw-light-blue focus:text-white focus:bg-tw-light-blue w-full max-w-[100px] h-auto",
            className,
            value === "+New"  ? "bg-tw-light-blue text-white" : null,
          )}
          autoFocus={value === "+New" ? true : false}   
        >
          {value}
        </button>
      ))}
    </div>
  );
}
