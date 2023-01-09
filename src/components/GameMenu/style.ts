import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const DescriptionTitle = styled.h3`
  color: white;
`;

const ButtonStartGame = styled.button`
  color: white;
  font-weight: bold;
  font-size: 25px;
  border-radius: 15px;
  height: 80px;
  margin-bottom: 40px;
  background-color: #00c1a2;
  border: none;
  outline: 0;
  padding: 7px 20px;
  &:hover {
    cursor: pointer;
    background-image: radial-gradient(ellipse farthest-corner at 50% 50%, #0C7564,#777);
  }
}
`;

const modal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export { Title, ButtonStartGame, DescriptionTitle, modal };
