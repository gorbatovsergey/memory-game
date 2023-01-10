import { createSlice } from "@reduxjs/toolkit";

interface INickname {
  name: string;
  time: string;
};

interface ITable {
  results: INickname[];
};

const initialState: ITable = {
  results: [],
};

const resultTableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    getResultTable: (state) => {
      const scoreTable = JSON.parse(localStorage.getItem("nickname")!);
      state.results = scoreTable;
    },

    addResultTable: (state, action) => {
      const scoreTable = JSON.parse(localStorage.getItem("nickname") || "[]");
      scoreTable.push(action.payload);
      const scroreTableSorting = scoreTable.sort(
        (element: INickname, nextElement: INickname) => {
          if (element.time > nextElement.time) {
            return 1;
          }
          if (element.time < nextElement.time) {
            return -1;
          }
          return 0;
        }
      );
      const top8 = scroreTableSorting.slice(0, 9)
      localStorage.setItem("nickname", JSON.stringify(top8));
    },

    clearResultsTable: (state) => {
      localStorage.removeItem("nickname");
      state.results = [];
    },
  },
});

export const { getResultTable, addResultTable, clearResultsTable } =
  resultTableSlice.actions;
export default resultTableSlice.reducer;
