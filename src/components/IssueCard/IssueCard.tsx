import { IIssue } from "../../types/IIssue";
import "./IssueCard.scss";

export const IssueCard = ({ issue }: { issue: IIssue }) => {
  const { title, number, user, comments, html_url } = issue;
  return (
    <div className="issue-card" draggable={true}>
      <a className="issue-card__title" href={html_url}>
        {title}
      </a>
      <div className="issue-card__number">
        <span className="issue-card__number-title">Issue:</span> #{number}
      </div>
      <div className="issue-card__wrap">
        <a className="issue-card__user-name" href={user.html_url}>{user.login}</a>
        <div className="issue-card__comments">Comments: {comments}</div>
      </div>
    </div>
  );
};
