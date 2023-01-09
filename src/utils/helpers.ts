export const rebuildBoard = (
  arr: {
    id: string;
    img: string;
    isOpen: boolean;
    isGuessed: boolean;
  }[]
) => {
  const newBoard = [...arr].sort(() => Math.random() - 0.5);

  return newBoard;
};
