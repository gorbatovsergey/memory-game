import { FC } from "react";
import Lottie from "react-lottie";
import { defaultOptionsWinner } from "src/constants/defaultOptionsLottie";
import { IPropsWinningGame } from "./types";
import "./style.scss";

const WinningGame: FC<IPropsWinningGame> = ({ getResult, seconds }) => {
  return (
    <>

      <p className="congratulations-text">Congratulations!</p>

      <p className="congratulations-text">You finished the game in {60 - seconds} seconds</p>

      <Lottie options={defaultOptionsWinner} height={"300px"} width={"300px"} />

      <button className="button-next" onClick={getResult}>
        Score Table
      </button>
      
    </>
  );
};

export default WinningGame;
