import { FC } from "react";
import Lottie from "lottie-react";
import { IPropsWinningGame } from "./types";
import { winner } from "src/img";
import "./style.scss";

const style = {
  height: 300,
  width: 300,
};

const WinningGame: FC<IPropsWinningGame> = ({ getResult, seconds }) => (
    <>

      <p className="congratulations-text">Congratulations!</p>

      <p className="congratulations-text">You finished the game in {60 - seconds} seconds</p>

      <Lottie animationData={winner} loop={true} autoplay={true} style={style}/>

      <button className="button-next" onClick={getResult}>
        Score Table
      </button>
      
    </>
  );

export default WinningGame;
