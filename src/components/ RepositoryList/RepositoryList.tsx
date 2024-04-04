import { IRepositoryItem } from "../../types/IRepository";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import './RepositoryList.scss';

export const RepositoryList = ({
  repositories,
  onRepoChoose
}: {
  repositories: IRepositoryItem[] | undefined;
  onRepoChoose: (id: number) => void
}) => {
  return (
    <>
      {repositories ? (
        <ul className="repository">
          {repositories.map((repository) => (
            <li key={repository.id} className="repository__item">
              <RepositoryItem repository={repository} onRepoChoose={() => onRepoChoose(repository.id)} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
