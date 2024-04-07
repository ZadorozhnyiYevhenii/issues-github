import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositoryItem } from "../../types/IRepository";

type RepositoryState = {
  currentRepository: Pick<IRepositoryItem, 'full_name' | 'stargazers_count' | 'html_url'> | undefined;
  isPrevRepo: boolean
};

const initialState: RepositoryState = {
  currentRepository: undefined,
  isPrevRepo: false
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setCurrentRepository: (
      state,
      action: PayloadAction<Pick<IRepositoryItem, 'full_name' | 'stargazers_count' | 'html_url'> | undefined>
    ) => {
      state.currentRepository = action.payload;
    },
    setIsPrevRepo: (state, action: PayloadAction<boolean>) => {
      state.isPrevRepo = action.payload
    }
  },
});

export const { setCurrentRepository, setIsPrevRepo } =
  repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
