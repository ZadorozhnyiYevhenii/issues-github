import { IssuesCloseOutlined, StarOutlined } from "@ant-design/icons";
import { IRepositoryItem } from "../../types/IRepository";
import "./RepositoryItem.scss";
import { starsCount } from "../../helpers/starsCount";

export const RepositoryItem = ({
  repository,
  onRepoChoose,
}: {
  repository: IRepositoryItem;
  onRepoChoose: (id: number) => void;
}) => {
  const stars = starsCount(repository.stargazers_count);

  return (
    <div
      className="repository-item"
      onClick={() => onRepoChoose(repository.id)}
    >
      <div className="repository-item__name">{repository.full_name}</div>
      <div className="repository-item__stars">
        <span className="repository-item__star-icon">
          <StarOutlined />
        </span>{" "}
        {stars}
      </div>
      <div className="repository-item__issues">
        <IssuesCloseOutlined /> {repository.open_issues}
      </div>
    </div>
  );
};
