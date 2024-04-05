import { useState } from "react";
import { getRepositoryIssues } from "../../api/getCalls/getRepositoryIssues";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIssue } from "../../app/slices/issueSlice";
import { UIButton } from "../UI/UIButton";

export const LoadIssues = () => {
  const dispatch = useAppDispatch();
  const { currentRepository } = useAppSelector((state) => state.repository);

  const [isLoading, setIsLoading] = useState(false);

  const onButtonClick = async () => {
    if (currentRepository) {
      try {
        setIsLoading(true);
        const currentIssues = await getRepositoryIssues(
          currentRepository.full_name
        );
        dispatch(setIssue(currentIssues));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <UIButton onClick={onButtonClick} loading={isLoading}>
      Load issues
    </UIButton>
  );
};
