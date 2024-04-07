import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RepositoryNameState = {
  currentRepoName: string | null;
  prevRepoName: string | null;
  isCurrentName: boolean
};

const initialState: RepositoryNameState = {
  currentRepoName: null,
  prevRepoName: null,
  isCurrentName: false
};

export const repositoryNameSlice = createSlice({
  name: "repositoryName",
  initialState: initialState,
  reducers: {
    setCurrentRepoName: (state, action: PayloadAction<string>) => {
      state.currentRepoName = action.payload;
    },
    setPrevRepoName: (state, action: PayloadAction<string>) => {
      state.prevRepoName = action.payload;
    },
    setIsCurrentName: (state, action: PayloadAction<boolean>) => {
      state.isCurrentName = action.payload
    }
  },
});

export const { setCurrentRepoName, setPrevRepoName, setIsCurrentName } =
  repositoryNameSlice.actions;

export const repositoryNameReducer = repositoryNameSlice.reducer;
