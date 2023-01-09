import { FC, useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useAppDispatch } from "src/hook";
import { createNickname } from "src/store/menuGameSlice";
import { gameRules } from "src/constants/constants";
import { validationNickname } from "src/utils/validationNickname";
import { Title, ButtonStartGame, DescriptionTitle, modal } from "./style";
import "./style.scss";

Modal.setAppElement("body");

const GameMenu: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [flagValidation, setFlagValidation] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setFlagValidation(false);
    dispatch(createNickname(""));
  };

  const startGame = () => {
    dispatch(createNickname(name));
    if (validationNickname(name)) {
      return navigate("/game");
    }

    setFlagValidation(true);
  };

  const checkForEnter = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && startGame();

  return (
    <div className="menu">

      <Title>Puzzle Game</Title>

      <ol className="rules">
        <DescriptionTitle>The goal of the game:</DescriptionTitle>
        <p>Open all the cells in the allotted time.</p>
        <DescriptionTitle>Rules Game:</DescriptionTitle>
        {gameRules.map((rule, index) => (
          <li className="rule" key={index}>
            {rule}
          </li>
        ))}
      </ol>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modal}
        contentLabel="Example Modal"
      >

        <h3 className="modal-title">Make up a nickname for yourself</h3>

        <input
          type="text"
          className="modal-input"
          onChange={(event) => setName(event.target.value)}
          onKeyDown={(event) => checkForEnter(event)}
          autoFocus={true}
        />

        {flagValidation && (
          <p className="validation-info">
            You can use numbers, letters, symbols - and _. The length is from 3
            to 10 characters.
          </p>
        )}

        <button className="modal-button" onClick={startGame}>
          Apply
        </button>

      </Modal>

      <ButtonStartGame onClick={openModal}>START GAME</ButtonStartGame>
      
    </div>
  );
};

export default GameMenu;
