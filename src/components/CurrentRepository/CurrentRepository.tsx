import { StarOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../app/hooks";
import { starsCount } from "../../helpers/starsCount";
import "./CurrentRepository.scss";

export const CurrentRepository = () => {
  const { currentRepository } = useAppSelector((state) => state.repository);
  const { issue } = useAppSelector((state) => state.issue);

  const stars = starsCount(currentRepository?.stargazers_count as number);
  console.log(issue);
  return (
    <>
      {!!currentRepository && !!issue ? (
        <section className="current-repository">
          <a
            href={currentRepository?.html_url}
            target="_blank"
            className="current-repository__name"
          >
            {currentRepository?.full_name}
          </a>

          <span className="current-repository__stars">
            <span className="current-repository__star-icon">
              <StarOutlined />
            </span>{" "}
            {stars}
          </span>
        </section>
      ) : null}
    </>
  );
};
