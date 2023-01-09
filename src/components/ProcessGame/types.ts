import { IClickCell } from "../Game/types";

export interface IPropsProcessGame {
  seconds: number;
  board: { id: string; img: string; isOpen: boolean; isGuessed: boolean }[];
  activeEvents: boolean;
  clickCell: ({ id, img, isOpen, isGuessed }: IClickCell) => void;
}
