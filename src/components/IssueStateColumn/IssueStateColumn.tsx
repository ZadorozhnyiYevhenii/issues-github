import { IIssue } from "../../types/IIssue";
import { IssueCard } from "../IssueCard/IssueCard";
import "./IssueStateColumn.scss";

export const IssueStateColumn = ({
  stateTitle,
  issues,
}: {
  stateTitle: string;
  issues: IIssue[];
}) => {
  return (
    <section className="issue-state">
      <h2 className="issue-state__title">{stateTitle}</h2>
      {issues.length ? (
        <ul className="issue-state__list">
          {issues.map((issue) => (
            <li key={issue.id}>
              <IssueCard issue={issue} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
