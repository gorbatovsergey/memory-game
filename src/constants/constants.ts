import { min1, min2, min3, min4, min5, min6, min7, min8 } from "../img";

export const gameRules = [
  "You can open two cells at a time.",
  "If the contents of the cells (pictures) coincide - they remain open.",
  "If the pictures do not match - the cells are closed and you try again.",
  "Game is considered as finished when you opened all cells.",
  "You lose if you do not have time to open all the cells.",
];

export const boardCells = [
  { id: "cell-1", img: min1, isOpen: false, isGuessed: false },
  { id: "cell-2", img: min2, isOpen: false, isGuessed: false },
  { id: "cell-3", img: min3, isOpen: false, isGuessed: false },
  { id: "cell-4", img: min4, isOpen: false, isGuessed: false },
  { id: "cell-5", img: min5, isOpen: false, isGuessed: false },
  { id: "cell-6", img: min6, isOpen: false, isGuessed: false },
  { id: "cell-7", img: min7, isOpen: false, isGuessed: false },
  { id: "cell-8", img: min8, isOpen: false, isGuessed: false },
  { id: "cell-9", img: min1, isOpen: false, isGuessed: false },
  { id: "cell-10", img: min2, isOpen: false, isGuessed: false },
  { id: "cell-11", img: min3, isOpen: false, isGuessed: false },
  { id: "cell-12", img: min4, isOpen: false, isGuessed: false },
  { id: "cell-13", img: min5, isOpen: false, isGuessed: false },
  { id: "cell-14", img: min6, isOpen: false, isGuessed: false },
  { id: "cell-15", img: min7, isOpen: false, isGuessed: false },
  { id: "cell-16", img: min8, isOpen: false, isGuessed: false },
];
