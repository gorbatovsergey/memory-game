import { bombExplode, winner } from "../img";

const defaultOptionsBomb = {
  loop: false,
  autoplay: true,
  animationData: bombExplode,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptionsWinner = {
  loop: true,
  autoplay: true,
  animationData: winner,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export { defaultOptionsBomb, defaultOptionsWinner };
