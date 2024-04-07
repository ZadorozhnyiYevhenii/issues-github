import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIsCurrentName } from "../../app/slices/repositoryNameSlice";
import { StorageKeys } from "../../constants/storageKeys";
import { useFetchIssues } from "../../hooks/useFetchIssues";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IssuesStateParams } from "../KanbanDashboard/common";
import { UIButton } from "../UI/UIButton";

export const LoadIssues = () => {
  const { currentRepoName } = useAppSelector((state) => state.repositoryName);
  const { isPrevRepo } = useAppSelector((state) => state.repository);

  const dispatch = useAppDispatch();

  const { issues: todoIssues, isLoading: isTodoLoading } = useFetchIssues(
    IssuesStateParams.OPEN
  );

  const { issues: inProgressIssues, isLoading: isProgressLoading } =
    useFetchIssues(IssuesStateParams.IN_PROGRESS);

  const { issues: doneIssues, isLoading: isDoneLoading } = useFetchIssues(
    IssuesStateParams.CLOSED
  );

  const [, setColumns] = useLocalStorage(StorageKeys.CURRENT, []);

  const onButtonClick = () => {
    if (isPrevRepo) {
      const prevColumns = localStorage.getItem(StorageKeys.CURRENT);

      if (prevColumns) {
        setColumns(JSON.parse(prevColumns));
      }

      dispatch(setIsCurrentName(true));
    } else if (currentRepoName) {
      setColumns([
        {
          id: 1,
          title: "ToDo",
          items: todoIssues,
          isLoading: isTodoLoading,
        },
        {
          id: 2,
          title: "In Progress",
          items: inProgressIssues,
          isLoading: isProgressLoading,
        },
        {
          id: 3,
          title: "Done",
          items: doneIssues,
          isLoading: isDoneLoading,
        },
      ]);
      dispatch(setIsCurrentName(true));
    }
  };
  return <UIButton onClick={onButtonClick}>Load issues</UIButton>;
};
