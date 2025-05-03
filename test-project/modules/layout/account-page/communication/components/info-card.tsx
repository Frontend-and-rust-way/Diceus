import { CardWrapper } from "@/modules/layout/main-page/work-queue/components/card-wrapper";
import { cn } from "@/lib/utils";
import { IInfoCardsProps } from "../types/interface";

export function InfoCards(props: IInfoCardsProps) {
  const {
    name,
    description,
    subject,
    isButtonExists = false,
    isButtonsExists = false,
    buttonMode = "",
    number = 0,
    borderColor = "",
    className = ""
  } = props;

  return (
    <CardWrapper className={cn("gap-[10px] p-4", borderColor, className)}>
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2">
        {isButtonExists && (
          <>
            <button className="flex items-center justify-center px-5 py-1 rounded-2xl bg-blue-800 text-white text-sm">
              {buttonMode}
            </button>
            <span className="text-sm text-black">{subject}</span>
          </>
        )}
      </div>

      <span className="text-black text-sm">{name}</span>
      <span className="text-white text-sm max-w-full break-words">{description}</span>

      {isButtonsExists && (
        <div className="flex flex-col   flex-wrap gap-2">
          <button className="flex items-center justify-center max-w-[170px] bg-green-700 text-white rounded-2xl h-[30px] px-3 text-sm">
            {number} attachments
          </button>
          <button className="flex items-center justify-center bg-blue-500 max-w-[121px] h-[40px] text-white rounded-2xl px-4 text-sm">
            Reply
          </button>
        </div>
      )}
    </CardWrapper>
  );
}