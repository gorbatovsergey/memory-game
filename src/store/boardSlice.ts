import { createSlice } from "@reduxjs/toolkit";
import { boardCells } from "src/constants/constants";
import { rebuildBoard } from "src/utils/helpers";

interface IBoardCell {
  id: string;
  img: string;
  isOpen: boolean;
  isGuessed: boolean;
}

interface IBoard {
  board: IBoardCell[];
  intermediateCell: IBoardCell;
  previousIntermediateCell: IBoardCell;
  activeEvents: boolean;
};

const initialState: IBoard = {
  board: rebuildBoard(boardCells),
  intermediateCell: {
    id: "",
    img: "",
    isOpen: false,
    isGuessed: false,
  },
  previousIntermediateCell: {
    id: "",
    img: "",
    isOpen: false,
    isGuessed: false,
  },
  activeEvents: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoard: (state) => {
      state.board = rebuildBoard(boardCells);
    },

    flipCard: (state, action) => {
      const id = action.payload;

      state.board = state.board.map((element) =>
        element.id === id ? { ...element, isOpen: !element.isOpen } : element
      );
    },

    guessedCards: (state, action) => {
      const id = action.payload;
      const { board, previousIntermediateCell } = state;

      state.board = board.map((element) =>
        element.id === id || element.id === previousIntermediateCell.id
          ? { ...element, isGuessed: true }
          : element
      );
    },

    hideCards: (state) => {
      state.board = state.board.map((element) =>
        element.isGuessed === true ? element : { ...element, isOpen: false }
      );
    },

    setIntermediateCell: (state, action) => {
      state.previousIntermediateCell = state.intermediateCell;
      state.intermediateCell = action.payload;
    },
  },
});

export const {
  getBoard,
  flipCard,
  guessedCards,
  hideCards,
  setIntermediateCell,
} = boardSlice.actions;
export default boardSlice.reducer;
