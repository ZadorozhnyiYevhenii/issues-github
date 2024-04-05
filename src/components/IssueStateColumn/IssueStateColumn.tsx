import { IIssue } from "../../types/IIssue";
import { IssueCard } from "../IssueCard/IssueCard";
import "./IssueStateColumn.scss";
import { UILoader } from "../UI/UILoader";

export const IssueStateColumn = ({
  stateTitle,
  issues,
  loading
}: {
  stateTitle: string;
  issues: IIssue[];
  loading: boolean
}) => {
  return (
    <section className="issue-state">
      <h2 className="issue-state__title">{stateTitle}</h2>
      {loading && <UILoader />}
      {issues && issues.length > 0 ? (
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
