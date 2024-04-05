import { IIssue } from "../../types/IIssue";
import "./IssueCard.scss";

export const IssueCard = ({ issue }: { issue: IIssue }) => {
  const { title, number, user, comments, html_url } = issue;
  return (
    <div className="issue-card">
      <a className="issue-card__title" href={html_url}>
        {title}
      </a>
      <div className="issue-card__number">#{number}</div>
      <div className="issue-card__user-name">{user.login}</div>
      <div className="issue-card__comments">Comments: {comments}</div>
    </div>
  );
};
