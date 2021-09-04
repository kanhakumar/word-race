import Button from "@material-ui/core/Button";
import { useState } from "react";
import CircularStatic from "./ProgressComponent";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import SignInComponent from "./SignInComponent";

const Game = () => {
  const [open, setOpen] = useState(true);

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
        </div>
        <div className="wordstack">playground</div>
        <div className="score-details">
          <CircularStatic />
          <CircularStatic />
          <CircularStatic />
        </div>
      </div>
      <div className="keyboard-container">keyboard</div>
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
            <SignInComponent handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Game;
