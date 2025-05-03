"use client"
import { CardWrapper } from "../../main-page/work-queue/components/card-wrapper";
import { spans } from "./mock/mock-card-support";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { riskAssessmentData } from "./mock/mock-risk-assessment-data";
import { mockAiRecommendations } from "./mock/mock-ai-recomendation";
import { ArrowUp, ArrowDown } from "lucide-react";
import { increasingData } from "./mock/mock-increasing-data";
import { decreasingData } from "./mock/mock-decreasing-data";
import { Progress } from "@/ui/progress";
import { Mark } from "../../main-page/my-accounts/components/account-info";
import useMediaQuery from '@mui/material/useMediaQuery';

export function AccountDetails() {
  const  isMobile = useMediaQuery(("(max-width: 1100PX)"));

  return (
    <CardWrapper className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col border-gray-600 border-dashed lg:border-r-2 pr-0 lg:pr-[20px]">
        <CardSupport />
        {riskAssessmentData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center my-4 mx-4 lg:mx-[50px] text-sm lg:text-[25px] text-white"
          >
            <span>{item.title}</span>
            <div className="bg-gray-800 flex items-center justify-center border-white border-2 rounded-2xl w-10 h-10">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full">
        <span className="text-white text-2xl lg:text-[40px] mb-4">Winnability</span>
        <div className={`flex  lg:flex-row    gap-4 w-full items-start ${isMobile ? "flex-wrap":""} `}>
          <CardOne dataHeading="Overall Score" percent="82%" />
          <CardTwo />
          <CardDistribution />
        </div>
        <WinnabilitySectionPage />
        <AIRcomandation />
      </div>
    </CardWrapper>
  );
}

export function CardSupport() {
  return (
    <CardWrapper>
      <div className="flex justify-between items-center">
        <span className="text-lg lg:text-[30px] text-white">DECISION SUPPORT</span>
        <div className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-tw-input-default border-white border-2 text-white">4</div>
      </div>
      <div className="flex flex-col gap-2 pl-4 lg:pl-[40px]">
        {spans.map((span, i) => (
          <span key={span.span} className={cn("text-sm lg:text-[16px]", i === 0 ? "text-tw-light-blue" : "text-white")}>
            {span.span}
          </span>
        ))}
      </div>
    </CardWrapper>
  );
}

export function AIRcomandation() {
  return (
    <CardWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Rocket size={20} className="text-green-600" />
          <span className="text-green-600 text-sm lg:text-base">AI-Powered Recommendations</span>
        </div>

        <div className="text-white flex flex-col gap-4">
          {mockAiRecommendations.map((item) => (
            <div key={item.recommendation}>
              <span>{item.recommendation}</span>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-1">
                <span className="text-gray-500 text-sm">{item.details}</span>
                <button className="h-10 px-4 bg-green-600 rounded-2xl text-black text-sm w-full sm:w-auto">
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

type WinnabilityItem = {
  number: number;
  description: string;
  descriptionProgress: string;
  percentage: number;
};

interface IWinnabilityAnalizProps {
  title: string;
  iconType: "up" | "down";
  color: "green" | "yellow";
  data: WinnabilityItem[];
}

export function WinnabilityAnaliz({ title, iconType, color, data }: IWinnabilityAnalizProps) {
  const Icon = iconType === "up" ? ArrowUp : ArrowDown;

  const borderColor = color === "green" ? "border-green-600" : "border-yellow-500";
  const textColor = color === "green" ? "text-green-400 border-green-400" : "text-yellow-400 border-yellow-400";
  const progressGradient = color === "green"
    ? "linear-gradient(to right, #1f1f1f, #16af0a)"
    : "linear-gradient(to right, #1f1f1f, #facc15)";

  return (
    <CardWrapper className="w-full gap-6 bg-[#1A1D2E] p-4 rounded-xl">
      <div className="flex gap-4 items-center text-white text-base font-semibold">
        <div className={`border-2 rounded-full w-[35px] h-[35px] flex items-center justify-center ${textColor}`}>
          <Icon className={textColor} />
        </div>
        <span>{title}</span>
      </div>

      {data.map(({ number, descriptionProgress, percentage }) => (
        <div key={number} className="flex gap-3">
          <div className={cn("flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold", borderColor, textColor)}>
            <span>{number}</span>
          </div>

          <div className="flex flex-col w-full">
            <span className="text-white text-sm">{descriptionProgress}</span>
            <div className="flex items-center gap-4">
              <div
                className="h-3 transition-all duration-300 rounded-r-2xl"
                style={{
                  width: `${Math.abs(percentage + 40)}%`,
                  background: progressGradient,
                }}
              />
              <span className={cn("text-sm font-medium", textColor)}>
                {percentage > 0 ? "+" : ""}
                {percentage}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </CardWrapper>
  );
}

export default function WinnabilitySectionPage() {
  return (
    <div className="flex flex-col lg:flex-row w-full py-6 gap-6">
      <WinnabilityAnaliz title="Increasing Winnability" iconType="up" color="green" data={increasingData} />
      <WinnabilityAnaliz title="Decreasing Winnability" iconType="down" color="yellow" data={decreasingData} />
    </div>
  );
}

interface ICardOne {
  dataHeading: string;
  percent: string;
}

export function CardOne({ dataHeading, percent }: ICardOne) {
  return (
    <CardWrapper className="h-[151px] w-full">
      <span className="text-sm text-gray-400">{dataHeading}</span>
      <div className="flex items-center justify-between mt-2 gap-4">
        <span className="text-xl font-semibold text-white">{percent}</span>
        <Mark description="very strong" />
      </div>
    </CardWrapper>
  );
}

export function CardTwo() {
  return (
    <CardWrapper className="h-[151px] text-[rgb(37,42,61)] pb-6 w-full">
      <span className="text-sm text-gray-400 mb-2">Historical trend</span>
      <Image
        src="/image-removebg-preview.png"
        alt="Graph trend"
        width={300}
        height={40}
        className="w-full relative top-[-20px] h-[80px] object-contain"
      />
    </CardWrapper>
  );
}

export function CardDistribution() {
  const mockCardDescription = [
    { heading: "You Score 52%", value: 82 },
    { heading: "Market Avg 68%", value: 68 },
    { heading: "TOP competitor 88%", value: 88 },
  ];

  return (
    <CardWrapper className="text-white h-auto gap-2 basis-full sm:basis-full  xl:basis-[460px]">
      <span className="text-base lg:text-lg">Position</span>
      <div className="flex flex-col gap-1">
        {mockCardDescription.map((card) => (
          <div key={card.heading} className="items-center gap-4 inline-flex w-full">
            <Progress className="flex-1 h-[14px] max-w-[225px]" value={card.value} />
            <span className="text-xs lg:text-sm whitespace-nowrap">{card.heading}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

