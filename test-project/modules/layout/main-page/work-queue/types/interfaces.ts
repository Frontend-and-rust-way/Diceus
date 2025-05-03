
export interface IWorkQueueData {
    id: string;
    originator: string
    initials: string;
    client: string;
    line: string;
    type: string;
    status: string;
    date: string;
  }

export interface ICardLists {
  dataList: IWorkQueueData[];
}
export interface ICardList {
  mapData: string[]; 
  className?: string;
  autoFocusIndex?: number;
}