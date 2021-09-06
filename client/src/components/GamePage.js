import Button from "@material-ui/core/Button";
import { useState } from "react";
import CircularStatic from "./ProgressComponent";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import InstructionComponent from "./InstructionComponent";
import HelpIcon from "@material-ui/icons/Help";
import KeyBoardComponent from "./KeyBoardComponent";
import StackComponent from "./StackComponent";

const Game = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="playground-container">
        <div className="controlls">
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
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
          <Button
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            onClick={handleClose}
          >
            <HelpIcon style={{ margin: "0" }} />
          </Button>
        </div>
        <div className="wordstack">
          <StackComponent />
        </div>
        <div className="score-details">
          <CircularStatic />
          <CircularStatic />
          <CircularStatic />
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
    </>
  );
};

export default Game;
