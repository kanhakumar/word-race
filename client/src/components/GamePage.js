import _ from "lodash";
import Button from "@material-ui/core/Button";
import { useState, useRef, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import InstructionComponent from "./InstructionComponent";
import HelpIcon from "@material-ui/icons/Help";
import KeyBoardComponent from "./KeyBoardComponent";
import StackComponent from "./StackComponent";
import GameOverComponent from "./GameOverComponent";
import { updateUserData } from "../utils";

const words = [
  { word: "KANHA", checked: "no" },
  { word: "RAJ", checked: "no" },
  { word: "AYUSH", checked: "no" },
  { word: "NIRMAL", checked: "no" },
  { word: "KIRAN", checked: "no" },
  { word: "PADMA", checked: "no" },
];

const GamePage = () => {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(2000);
  const [stackedWords, setStackedWords] = useState([]);
  const [activeWord, setActiveWord] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [level, setLevel] = useState(1);
  const [wordPointPerLevel, setWordPointPerLevel] = useState(1);
  const interval = useRef({});

  useEffect(() => {
    clearInterval(interval.current.id);
  }, [end]);

  const handleClose = () => {
    setOpen((prevValue) => !prevValue);
  };

  const closeGameOverModal = () => {
    setEnd((prevValue) => !prevValue);
    setStackedWords([]);
    setStart(false);
    setScore(0);
    setLevel(1);
    setMultiplier(1);
  };

  const endGame = () => {
    setEnd((prevValue) => !prevValue);
    updateUserData(score, level);
  };

  const increaseWordScorePerLevel = () => {
    setWordPointPerLevel(10 * level);
  };

  const increaseScore = () => {
    setScore((prevValue) => prevValue + wordPointPerLevel);
    setMultiplier((prevValue) => prevValue + 1);
    // handleWordApperingRate();
  };

  const increaseLevel = () => {
    if (score >= 30 * level) {
      setLevel((prevValue) => prevValue + 1);
    }
  };

  const proceedToLeaderBoard = () => {
    window.location = "/leaderboard";
  };

  // const handleWordApperingRate = () => {
  //   setTime(level * multiplier);
  // };

  const removeStackedWords = (...args) => {
    const id = args;
    setStackedWords((prevState) => {
      let index = _.findIndex(prevState, { id });
      let newItems = _.cloneDeep(prevState);
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const onKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (key.match(/[A-Z]/i)) {
      const newInput = currentInput + key;
      if (activeWord.indexOf(newInput) === 0) {
        if (activeWord === newInput) {
          removeStackedWords(activeId);
          increaseScore();
          increaseLevel();
        }
        setCurrentInput(newInput);
      } else {
        setCurrentInput("");
        setMultiplier(1);
      }
    }
  };

  const startGame = () => {
    interval.current.id = setInterval(() => {
      increaseWordScorePerLevel();
      let rng = Math.floor(Math.random() * words.length);
      let idObj = { id: Date.now() };
      let wordObj = Object.assign(words[rng], idObj);
      setStackedWords((prevState) => [...prevState, wordObj]);
      setActiveWord(wordObj.word);
      setActiveId(wordObj.id);
      setCurrentInput("");
    }, time);
    setStart(true);
  };

  return (
    <div
      onKeyDown={(e) => {
        onKeyPress(e);
      }}
      tabIndex="0"
    >
      <div className="playground-container">
        <div className="controlls">
          <Button
            id="start-btn"
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
            onClick={startGame}
          >
            Start
          </Button>

          <div className="level-box">
            <p className="level-text">{level}</p>
            <p className="level-text">Level</p>
          </div>
          <div className="score-box">
            <p className="level-text">{score}</p>
            <p className="level-text">Score</p>
          </div>
          <div className="multiplier-box">
            <p className="level-text">{multiplier}X</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
            onClick={proceedToLeaderBoard}
          >
            Leaderboard
          </Button>
          <Button className="instruction-btn" onClick={handleClose}>
            <HelpIcon style={{ margin: "0", transform: "scale(1.2, 1.2)" }} />
          </Button>
        </div>
        <div className="wordstack">
          <StackComponent stackedWords={stackedWords} endGame={endGame} />
        </div>
      </div>
      <div className="keyboard-container">
        <KeyBoardComponent />
      </div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={open}>
          <div className="paper">
            <InstructionComponent handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
      <Modal
        className="modal"
        open={end}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={end}>
          <div className="paper">
            <GameOverComponent
              closeGameOverModal={closeGameOverModal}
              score={score}
              level={level}
              multiplier={multiplier}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default GamePage;
