import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositoryItem } from "../../types/IRepository";

type RepositoryState = {
  currentRepository: IRepositoryItem | undefined;
};

const initialState: RepositoryState = {
  currentRepository: undefined
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState,
  reducers: {
    setCurrentRepository: (state, action: PayloadAction<IRepositoryItem | undefined>) => {
      state.currentRepository = action.payload;
    },
  },
});

export const { setCurrentRepository } = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
