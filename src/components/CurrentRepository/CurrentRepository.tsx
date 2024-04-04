import { useAppSelector } from "../../app/hooks";
import { starsCount } from "../helpers/starsCount";
import './CurrentRepository.scss';

export const CurrentRepository = () => {
  const { currentRepository } = useAppSelector((state) => state.repository);

  const stars = starsCount(currentRepository?.stargazers_count as number);

  return (
    <>
    {currentRepository ? (
      <section className="current-repository">
      <a href={currentRepository?.html_url} target="_blank">
        {currentRepository?.full_name}
      </a>

      <span>{stars}</span>
    </section>
    ) : (
      null
    )}
    </>
  );
};
