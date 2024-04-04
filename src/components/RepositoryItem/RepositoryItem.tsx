import { IssuesCloseOutlined, StarOutlined } from "@ant-design/icons";
import { IRepositoryItem } from "../../types/IRepository";
import "./RepositoryItem.scss";

export const RepositoryItem = ({
  repository,
}: {
  repository: IRepositoryItem;
}) => {
  return (
    <div className="repository-item">
      <div className="repository-item__name">{repository.full_name}</div>
      <div className="repository-item__stars">
        <span className="repository-item__star-icon">
          <StarOutlined />
        </span>{" "}
        {repository.stargazers_count}
      </div>
      <div className="repository-item__issues">
        <IssuesCloseOutlined /> {repository.open_issues}
      </div>
    </div>
  );
};
