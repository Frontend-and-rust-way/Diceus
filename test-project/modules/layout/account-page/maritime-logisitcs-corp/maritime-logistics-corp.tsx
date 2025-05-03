import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import { CardWrapper } from "../../main-page/work-queue/components/card-wrapper";
import { items } from "./mock/mock-attention-card";
import Link from "next/link";
import { MoveRight } from "lucide-react";
export function Description(){
  return ( 
    <div className="mb-4">
      <span className="text-white">Dashboard / </span>
      <span className="text-white">Accounts / </span>
      <span className="text-tw-light-blue">Maritime Logistics Corp</span>
    </div>
  );
}

interface IAccountInfo {
  title: string;
  value: string;
}

interface ICompanyProfile {
  name: string;
  logo: string;
  details: IAccountInfo[];
}

const maritimeData: ICompanyProfile = {
  name: "Maritime Logistics Corp",
  logo: "/ChatGPT Image 1 трав. 2025 р., 11_20_51.png",
  details: [
    { title: "425 Harbor Boulevard, Suite 300,", value: "Seattle, WA 98104" },
    { title: "Existing Account", value: "54383" },
    { title: "Broker", value: "Marsh McLennan" },
    { title: "Underwriter", value: "KATE Johnson" },
  ],
};

export function MaritimeLogisticsCorp()  {
  const { name, logo, details } = maritimeData;

  return (
    <div className="flex gap-[20px] items-start">
      <Image
        className="rounded-full"
        src={logo}
        alt="maritime-logistics-corp"
        width={102}
        height={102}
      />

      <div className="flex flex-col gap-2">
        <span className="text-[25px] font-semibold text-white">{name}</span>

        <div className="flex gap-6 text-white text-sm pt-2">
          {details.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col pr-[20px]",
                index !== details.length - 1 ? "border-r-2 border-tw-light-greys" : ""
              )}
            >
              <span className="text-gray-400 uppercase text-xs mb-1">{item.title}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function  AttentionCard() { 
    return (
            <CardWrapper className="mt-[20px]  max-w-[710px] w-full p-[10px] gap-[10px]  px-[60px] border-amber-400"> 
              <div className="flex items-center gap-[20px]">
                <span className="flex items-center justify-center outline-2 outline-amber-400 text-amber-400 w-[20px] h-[20px] rounded-full font-bold text-lg">
                  !
                </span>
                <span className=" text-[14px] 2xl:text-[20px] text-yellow-400">Needs Attention</span>
              </div>

              <div className="flex justify-start gap-[20px]">
                {items.map((item) => ( 
                    <div key={item.status} className="flex  flex-col gap-[2px]">
                      <span className="text-white text-[12px] ">{item.title}</span>
                      <span className="text-gray-500 text-[12px]">{item.status} {item.date}</span>
                      <Link href="/hello world" className="flex items-center gap-[10px] text-tw-light-blue">{item.actionLink} <MoveRight size={20}/></Link>
                    </div>
                ))}
              </div>
            </CardWrapper>
    )
}

