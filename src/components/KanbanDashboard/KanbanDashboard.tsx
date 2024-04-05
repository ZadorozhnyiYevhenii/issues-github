import { useEffect, useState } from "react";
import { IssueStateColumn } from "../IssueStateColumn/IssueStateColumn";
import { IIssue } from "../../types/IIssue";
import "./KanbanDashboard.scss";
import { useAppSelector } from "../../app/hooks";
import { getRepositoryIssues } from "../../api/getCalls/getRepositoryIssues";

export const KanbanDashboard = () => {
  const [todoIssues, setTodoIssues] = useState<IIssue[]>([]);
  const [inProgressIssues, setInProgressIssues] = useState<IIssue[]>([]);
  const [doneIssues, setDoneIssues] = useState<IIssue[]>([]);

  const { repositoryName } = useAppSelector(state => state.repository);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getRepositoryIssues(repositoryName, 'open');
        setTodoIssues(data.items)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [repositoryName]);

  return (
    <div className="dashboard">
      <IssueStateColumn stateTitle="ToDo" issues={todoIssues} />
      <IssueStateColumn stateTitle="In Progress" issues={inProgressIssues} />
      <IssueStateColumn stateTitle="Done" issues={doneIssues} />
    </div>
  );
};
