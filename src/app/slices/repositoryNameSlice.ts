import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RepositoryNameState = {
  currentRepoName: string | null;
  prevRepoName: string | null;
  isCurrentName: boolean;
  currentLink: string | undefined
};

const initialState: RepositoryNameState = {
  currentRepoName: null,
  prevRepoName: null,
  isCurrentName: false,
  currentLink: ''
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
    },
    setCurrentLink: (state, action: PayloadAction<string | undefined>) => {
      state.currentLink = action.payload
    }
  },
});

export const { setCurrentRepoName, setPrevRepoName, setIsCurrentName, setCurrentLink } =
  repositoryNameSlice.actions;

export const repositoryNameReducer = repositoryNameSlice.reducer;
