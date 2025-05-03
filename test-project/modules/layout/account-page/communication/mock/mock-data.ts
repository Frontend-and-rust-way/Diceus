  export interface IMessage {
    id: number;
    status: string | null;
    subject: string;
    sender: string;
    date: string;
    content: string;
    attachments: number;
    isButtonExists?: boolean;
    isButtonsExists?: boolean;
    buttonMode?: string;
    borderColor?: string;
    className?: string;
  }

  export const messages1: IMessage[] = [
    {
      id: 1,
      status: 'NEW',
      subject: 'Policy Renewal - Auto Insurance 5/15/25',
      sender: 'Michael Roberts',
      date: 'Apr 5',
      content: `Hello Arthur, I’m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I’ve attached the current policy details and premium breakdown for your reference.`,
      attachments: 3,
      isButtonExists: true,
      isButtonsExists: true,
      buttonMode: 'NEW',
      borderColor: 'border-blue-800',
    },
    {
      id: 2,
      status: 'NEW',
      subject: 'New Quote Request - Workers Comp Insurance',
      sender: 'Sarah Chen',
      date: 'Apr 5',
      content: `Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I’ve completed the initial risk assessment based...`,
      attachments: 3,
      isButtonExists: true,
      isButtonsExists: true,
      buttonMode: 'NEW',
      borderColor: 'border-tw-light-blue',
    },
  ];

  export const messages2: IMessage[] = [
    {
      id: 3,
      status: 'Responded',
      subject: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
      sender: 'Joshua Dunmire',
      date: 'Mar 25',
      content: `Arthur, attached please find our submission for the above mentioned applicant. We have...`,
      attachments: 0,
      isButtonExists: true,
      isButtonsExists: false,
      buttonMode: 'Responded',
      className: 'bg-slate-800 border-none',
    },
    {
      id: 4,
      status: null,
      subject: 'New Business: BPM Real Estate Group, LLC',
      sender: 'Isabel Kreller',
      date: 'Feb 28',
      content: `Hello Arthur, I am pleased to present you with a submission on this client’s upcoming...`,
      attachments: 5,
      isButtonExists: false,
      isButtonsExists: true,
      borderColor: 'border-blue-800',
      className: 'bg-slate-800 border-none',
    },
  ];
  