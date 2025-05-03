export interface IMessages {
    id: number;
    status: string | null;
    subject: string;
    date: string;
    content: string;
    attachments: number;
    sender: string
}
 
export interface IInfoCardsProps {
    name: string;
    description: string;
    isButtonExists?: boolean;
    isButtonsExists?: boolean;
    buttonMode?: string;
    number?: number;
    borderColor: string;
    className?: string;
    subject: string;
  }