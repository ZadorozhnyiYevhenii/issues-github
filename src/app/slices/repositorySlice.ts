import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RepositoryState = {
  repositoryName: string;
};

const initialState: RepositoryState = {
  repositoryName: "",
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setRepositoryName: (state, action: PayloadAction<string>) => {
      state.repositoryName = action.payload;
    },
  },
});

export const { setRepositoryName } = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
