import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { bombExplode } from "src/img";
import './style.scss'

const style = {
  height: '100vh',
};

const LosingGame: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lose-wrapper">

      <div className="lose-wrapper__text">You Lose</div>

      <Lottie animationData={bombExplode} loop={false} autoplay={true} style={style}/>

      <button className="button-next" onClick={() => navigate("/result")}>
        Score Table
      </button>
      
    </div>
  );
};

export default LosingGame;
