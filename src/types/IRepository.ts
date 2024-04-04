export interface IRepository {
  items: IRepositoryItem[]
}

export interface IRepositoryItem {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  open_issues: number;
  html_url: string
}
