import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { defaultOptionsBomb } from "src/constants/defaultOptionsLottie";
import './style.scss'

const LosingGame: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lose-wrapper">

      <div className="lose-wrapper__text">You Lose</div>

      <Lottie options={defaultOptionsBomb} height={"100vh"} />

      <button className="button-next" onClick={() => navigate("/result")}>
        Score Table
      </button>
      
    </div>
  );
};

export default LosingGame;
