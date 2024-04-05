export interface IIssue {
  id: number;
  title: string;
  html_url: string;
  number: number;
  comments: number
  user: {
    login: string
  }
}

export interface IIssueResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IIssue[]
}
