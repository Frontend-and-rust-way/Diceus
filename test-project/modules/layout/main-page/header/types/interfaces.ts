import { ReactNode } from "react";
import { UserLogo } from "../components/user-logo";
export interface IHeader{
    children: ReactNode;
    className?: string;
}

export interface IDescriptionHeading{
    children:ReactNode;
    className?:string;
}
export interface IUserLogo{
    children: string;
    className?: string;
}

export interface ISearchField {
    children: React.ReactElement<typeof UserLogo>;
}