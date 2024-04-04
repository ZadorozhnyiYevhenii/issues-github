import { IRepositoryItem } from "../../types/IRepository";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import './RepositoryList.scss';

export const RepositoryList = ({
  repositories,
}: {
  repositories: IRepositoryItem[] | undefined;
}) => {
  return (
    <>
      {repositories ? (
        <ul className="repository">
          {repositories.map((repository) => (
            <li key={repository.id} className="repository__item">
              <RepositoryItem repository={repository} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
