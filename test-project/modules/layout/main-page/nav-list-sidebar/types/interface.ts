import { ReactNode } from "react";

export interface IButton {
  className?: string;
  children: ReactNode;
}

export  interface INavList {
  className?: string;
  children: ReactNode;
}
export interface INavListSidebar {
  lengthButtons: number;
  className?: string;
}


