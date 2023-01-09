import { configureStore } from "@reduxjs/toolkit";
import getBoardReducer from "./boardSlice";
import createNicknameReducer from "./menuGameSlice";
import getResultsReducer from "./resultsSlice";

const store = configureStore({
  reducer: {
    nicknameReducer: createNicknameReducer,
    resultsReducer: getResultsReducer,
    boardReducer: getBoardReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
