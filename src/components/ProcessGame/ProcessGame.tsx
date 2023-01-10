import { FC } from "react";
import { IPropsProcessGame } from "./types";
import "./style.scss";

const ProcessGame: FC<IPropsProcessGame> = ({
  seconds,
  board,
  activeEvents,
  clickCell,
}) => (
    <>

      <div className="timer">
        <p className="seconds">{seconds}</p>
      </div>

      <div className="board">
        {board.map(({ id, img, isOpen, isGuessed }) => (
          <div
            id={id}
            key={id}
            className={activeEvents ? "cell active-events" : "cell"}
            onClick={() => clickCell({ id, img, isOpen, isGuessed })}
          >
            <div
              className={
                isOpen ? "flip-box-inner active-inner" : "flip-box-inner"
              }
            >

              <div className="flip-box-front">
                <div className="active-background" />
              </div>

              <div className="flip-box-back">
                <img src={img} alt="minion" className="img-cell" />
              </div>

            </div>
          </div>
        ))}
      </div>
      
    </>
  );

export default ProcessGame;
