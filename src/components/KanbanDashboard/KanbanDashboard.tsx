import { IssueStateColumn } from "../IssueStateColumn/IssueStateColumn";
import { useFetchIssues } from "../../hooks/useFetchIssues";
import { IssuesStateParams } from "./common";
import "./KanbanDashboard.scss";

export const KanbanDashboard = () => {
  const { issues: todoIssues, isLoading: isTodoLoading } = useFetchIssues(
    IssuesStateParams.OPEN
  );

  const { issues: inProgressIssues, isLoading: isProgressLoading } =
    useFetchIssues(IssuesStateParams.IN_PROGRESS);

  const { issues: doneIssues, isLoading: isDoneLoading } = useFetchIssues(
    IssuesStateParams.IN_PROGRESS
  );

  return (
          <div className="dashboard">
            <IssueStateColumn
              stateTitle="ToDo"
              issues={todoIssues}
              loading={isTodoLoading}
            />
            <IssueStateColumn
              stateTitle="In Progress"
              issues={inProgressIssues}
              loading={isProgressLoading}
            />
            <IssueStateColumn
              stateTitle="Done"
              issues={doneIssues}
              loading={isDoneLoading}
            />
          </div>
  );
};
