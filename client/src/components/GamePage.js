import _ from "lodash";
import Button from "@material-ui/core/Button";
import { useState, useRef, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import InstructionComponent from "./InstructionComponent";
import HelpIcon from "@material-ui/icons/Help";
import KeyBoardComponent from "./KeyBoardComponent";
import StackComponent from "./StackComponent";

const words = [
  { word: "KANHA", checked: "no" },
  { word: "RAJ", checked: "no" },
  { word: "AYUSH", checked: "no" },
  { word: "NIRMAL", checked: "no" },
  { word: "KIRAN", checked: "no" },
  { word: "PADMA", checked: "no" },
];

const Game = () => {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(3000);
  const [stackedWords, setStackedWords] = useState([]);
  const [activeWord, setActiveWord] = useState("");
  const [activeId, setActiveId] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  // const [wordCounter, setWordCounter] = useState(0);
  const stack = [];
  const level = 3;
  var tempWord = "";
  let wordCounter = 0;
  const interval = useRef({});

  useEffect(() => {
    clearInterval(interval.current.id);
  }, [end]);

  const handleClose = () => {
    setOpen((prevValue) => !prevValue);
  };

  const endGame = () => {
    setEnd((prevValue) => !prevValue);
    console.log(end, "end");
  };

  const removeStackedWords = (...args) => {
    const id = args;
    stack.push(activeId);
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
      console.log(newInput, "ni");
      if (activeWord.indexOf(newInput) === 0) {
        if (activeWord === newInput) {
          removeStackedWords(activeId);
        }
        setCurrentInput(newInput);
      } else {
        setCurrentInput("");
      }
    }
  };

  const handleGame = () => {
    interval.current.id = setInterval(() => {
      let rng = Math.floor(Math.random() * words.length);
      let idObj = { id: Date.now() };
      let wordObj = Object.assign(words[rng], idObj);
      setStackedWords((prevState) => [...prevState, wordObj]);
      setActiveWord(wordObj.word);
      setActiveId(wordObj.id);
      setCurrentInput("");
    }, time);
    if (!start) {
      setStart(true);
      document.getElementById("start-btn").innerHTML = "END";
    } else {
      setStart(false);
      document.getElementById("start-btn").innerHTML = "START";
    }
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
            onClick={handleGame}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
          >
            Leaderboard
          </Button>
          <div className="level-box">
            <p className="level-text">{level}</p>
            <p className="level-text">Level</p>
          </div>
          <Button
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            onClick={handleClose}
          >
            <HelpIcon style={{ margin: "0" }} />
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
    </div>
  );
};

export default Game;
