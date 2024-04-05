import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setRepositoryName } from "../../app/slices/repositorySlice";
import { UIButton } from "../UI/UIButton";

export const LoadIssues = () => {
  const dispatch = useAppDispatch();
  const { currentRepository } = useAppSelector((state) => state.repository);

  const onButtonClick = async () => {
    if (currentRepository) {
      dispatch(setRepositoryName(currentRepository.full_name))
    }
  };
  return (
    <UIButton onClick={onButtonClick} >
      Load issues
    </UIButton>
  );
};
