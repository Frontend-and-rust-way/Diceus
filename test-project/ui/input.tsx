import { cn } from "@/lib/utils";

interface IInput{ 
  className?:string;
  placeholderdescription?:string;
}

export function Input({ className, placeholderdescription = "Search" }: IInput) {
  return (
      <input
          type="text"
          className={cn(
              "w-full max-w-full sm:max-w-[300px] md:max-w-[400px] lg:max-w-[479px]",
              "text-white pl-[16px] rounded-[30px] bg-tw-input-default outline-none h-[40px] sm:h-[44px] md:h-[48px]",
              "placeholder:text-tw-light-greys placeholder:text-sm sm:placeholder:text-base",
              className
          )}
          placeholder={placeholderdescription}
      />
  );
}
