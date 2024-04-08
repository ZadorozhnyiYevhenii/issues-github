import { useAppSelector } from "../../app/hooks";
import "./CurrentRepository.scss";

export const CurrentRepository = () => {
  const { currentLink, currentRepoName } = useAppSelector(state => state.repositoryName)
  return (
    <>
      {currentRepoName ? (
        <section className="current-repository">
          <a
            href={currentLink}
            target="_blank"
            className="current-repository__name"
            data-testid='repo-link'
          >
            {currentRepoName}
          </a>
        </section>
      ) : null}
    </>
  );
};
