import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RepositoryState = {
  isPrevRepo: boolean;
};

const initialState: RepositoryState = {
  isPrevRepo: false,
};

export const isPrevRepoSlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setIsPrevRepo: (state, action: PayloadAction<boolean>) => {
      state.isPrevRepo = action.payload;
    },
  },
});

export const { setIsPrevRepo } = isPrevRepoSlice.actions;

export const isPrevRepoReducer = isPrevRepoSlice.reducer;
