import { IIssue } from "./IIssue";

export interface IDashboardItems {
  id: number;
  title: string;
  items: IIssue[];
  isLoading: boolean;
}