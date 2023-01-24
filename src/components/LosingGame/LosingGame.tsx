import { FC } from "react";
import Lottie from "lottie-react";
import { bombExplode } from "src/img";
import "./style.scss";

const style = {
  height: "100vh",
};
interface IGetResult {
  getResult: () => void;
}

const LosingGame: FC<IGetResult> = ({ getResult }) => (
  <div className="lose-wrapper">
    <div className="lose-wrapper__text">You Lose</div>

    <Lottie
      animationData={bombExplode}
      loop={false}
      autoplay={true}
      style={style}
    />

    <button className="button-next" onClick={getResult}>
      Score Table
    </button>
  </div>
);

export default LosingGame;
