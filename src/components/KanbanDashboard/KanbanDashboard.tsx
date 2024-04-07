import { DragEvent, useEffect, useState } from "react";
import { IDashboardItems } from "../../types/IDashboardItems";
import { IssueCard } from "../IssueCard/IssueCard";
import { UILoader } from "../UI/UILoader";
import { IIssue } from "../../types/IIssue";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIsCurrentName } from "../../app/slices/repositoryNameSlice";
import { StorageKeys } from "../../constants/storageKeys";
import "./KanbanDashboard.scss";

export const KanbanDashboard = () => {
  const [columns, setColumns] = useLocalStorage(StorageKeys.CURRENT, []);
  const dispatch = useAppDispatch();
  const { isCurrentName } = useAppSelector((state) => state.repositoryName);

  useEffect(() => {
    const storedItems = localStorage.getItem(StorageKeys.CURRENT);
    if (isCurrentName && storedItems) {
      setColumns(JSON.parse(storedItems));
    }
    dispatch(setIsCurrentName(false));
  }, [isCurrentName, dispatch]);

  const [currentColumn, setCurrentColumn] = useState<IDashboardItems | null>(
    null
  );
  const [currentIssue, setCurrentIssue] = useState<IIssue | null>(null);

  const handleDragOver = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (board: IDashboardItems, item: IIssue) => {
    setCurrentColumn(board);
    setCurrentIssue(item);
  };

  const handleDrop = (
    e: DragEvent<HTMLLIElement>,
    board: IDashboardItems,
    item: IIssue
  ) => {
    e.preventDefault();
    const currentIndex = currentColumn?.items.indexOf(currentIssue as IIssue);
    currentColumn?.items.splice(currentIndex as number, 1);
    const dropIndex = board.items.indexOf(item);
    if (currentIssue?.id !== item.id) {
      board.items.splice(dropIndex, 0, currentIssue as IIssue);
    }

    const newColumns = (columns as IDashboardItems[]).map((col) => {
      if (col.id === board.id) {
        return board;
      }

      if (col.id === currentColumn?.id) {
        return currentColumn;
      }

      return col;
    });

    setColumns(newColumns);
  };

  const onCardDrop = (board: IDashboardItems) => {
    if (board.items.length === 0) {
      const currentIndex = currentColumn?.items.indexOf(currentIssue as IIssue);
      currentColumn?.items.splice(currentIndex as number, 1);
      board.items.push(currentIssue as IIssue);
      const newColumns = (columns as IDashboardItems[]).map((col) => {
        if (col.id === board.id) {
          return board;
        }

        if (col.id === currentColumn?.id) {
          return currentColumn;
        }

        return col;
      });

      setColumns(newColumns);
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <ul className="dashboard">
      {(columns as IDashboardItems[])?.map((column) => (
        <div
          className="dashboard__issue-state"
          key={column.id}
          onDrop={() => onCardDrop(column)}
          onDragOver={(e) => onDragOver(e)}
        >
          <h2 className="dashboard__title">{column.title}</h2>
          {column.isLoading && <UILoader />}
          <ul className="dashboard__list">
            {column.items.map((issue) => (
              <li
                key={issue.id}
                draggable
                onDragOver={(e) => handleDragOver(e)}
                onDragStart={() => handleDragStart(column, issue)}
                onDrop={(e) => handleDrop(e, column, issue)}
              >
                <IssueCard issue={issue} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
};
