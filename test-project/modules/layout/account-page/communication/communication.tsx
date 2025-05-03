import { CardWrapper } from "../../main-page/work-queue/components/card-wrapper";
import { AccountSection } from "../../main-page/my-accounts/my-acounts";
import { messages1 } from "./mock/mock-data";
import { messages2 } from "./mock/mock-data";
import { InfoCards } from "./components/info-card";


export function Communication() {
  return (
    <section className="px-4   py-6">
      <h1 className="text-white text-3xl md:text-[40px] font-semibold mb-6">
        Communication
      </h1>

      <CardWrapper className="p-4 sm:p-6 md:p-[30px] h-auto">
        <AccountSection
          inputColor="bg-gray-500 "
          mode="part"
          isDescriptionExists={false}
        />

        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex flex-col gap-[10px] w-full md:w-1/2">
            {messages1.map((msg) => (
              <InfoCards
                key={msg.id}
                name={`${msg.sender} // ${msg.date}`}
                subject={msg.subject}
                description={`${msg.content}`}
                isButtonExists={msg.isButtonExists}
                isButtonsExists={msg.isButtonsExists}
                buttonMode={msg.buttonMode}
                number={msg.attachments}
                borderColor={msg.borderColor ?? ""}
                className={msg.className ?? ""}
              />
            ))}
          </div>

          <div className="flex flex-col gap-[15px] w-full md:w-1/2">
            {messages2.map((msg) => (
              <InfoCards
                key={msg.id}
                subject={msg.subject}
                name={`${msg.sender} // ${msg.date}`}
                description={`${msg.content}`}
                isButtonExists={msg.isButtonExists}
                isButtonsExists={msg.isButtonsExists}
                buttonMode={msg.buttonMode}
                number={msg.attachments}
                borderColor={msg.borderColor ?? ""}
                className={msg.className ?? ""}
              />
            ))}
          </div>
        </div>        
      </CardWrapper>
    </section>
  );
}
