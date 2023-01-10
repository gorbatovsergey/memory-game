import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WinningGame, LosingGame, ProcessGame } from "src/components";
import { addResultTable } from "src/store/resultsSlice";
import {
  flipCard,
  guessedCards,
  hideCards,
  getBoard,
  setIntermediateCell,
} from "src/store/boardSlice";
import { useAppSelector, useAppDispatch } from "src/hook";
import { IClickCell } from "./types";
import "./style.scss";

const Game: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nickname = useAppSelector((state) => state.nicknameReducer.nickname);
  const intermediateCell = useAppSelector((state) => state.boardReducer.intermediateCell);
  const board = useAppSelector((state) => state.boardReducer.board);
  const [seconds, setSeconds] = useState(60);
  const [activeEvents, setActiveEvents] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    dispatch(getBoard());
  }, []);

  useEffect(() => {
    if (seconds > 0 && points !== 16) {
      setTimeout(setSeconds, 1000, seconds - 1);
    }

    if (!nickname) {
      navigate("/")
    }
  }, [seconds, points, nickname, navigate]);

  const foundMatch = (id: string) => {
    dispatch(guessedCards(id));
    dispatch(setIntermediateCell({}));
    setPoints(points + 2);
  };

  const doNotFoundMatch = () => {
    setActiveEvents(true);
    setTimeout(() => {
      setActiveEvents(false);
      dispatch(hideCards());
      dispatch(setIntermediateCell({}));
    }, 1000);
  };

  const clickCell = ({ id, img, isOpen, isGuessed }: IClickCell) => {
    if (isOpen) return;

    dispatch(flipCard(id));
    dispatch(setIntermediateCell({ id, img, isOpen, isGuessed }));

    if (intermediateCell.id) {
      intermediateCell.img === img ? foundMatch(id) : doNotFoundMatch();
    }
  };

  const getResult = () => {
    const user = { name: nickname, time: 60 - seconds };
    dispatch(addResultTable(user));
    navigate("/result");
  };

  return (
    <div className="game">
      {points === 16 ? (
        <WinningGame getResult={getResult} seconds={seconds}/>
      ) : seconds === 0 ? (
        <LosingGame />
      ) : (
        <ProcessGame
          seconds={seconds}
          board={board}
          activeEvents={activeEvents}
          clickCell={clickCell}
        />
      )}
    </div>
  );
};

export default Game;
