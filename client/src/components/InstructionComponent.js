import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  header: {
    backgroundColor: "#f5f5f5",
    marginBottom: "0px",
    padding: ".8rem 1.4rem",
    lineHeight: "1.45",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontweight: "bold",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  closebutton: {
    right: theme.spacing(-53),
    width: theme.spacing(1),
    top: theme.spacing(-6.8),
    paddingRight: theme.spacing(-2),
    letterSpacing: "normal",
    wordSpacing: "normal",
    textTransform: "none",
    textIndent: "0px",
    textShadow: "none",
    minWidth: "35px",
    textAlign: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      right: theme.spacing(-52.8),
      width: theme.spacing(2),
      top: theme.spacing(-6.3),
      backgroundColor: "#c00202",
      color: "#d3ebdb",
    },
  },
  content: {
    marginLeft: "1.2em",
    marginRight: "1em",
    marginTop: "-2.4em",
    fontFamily: "cursive",
  },
});

class InstructionComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClose = props.handleClose;
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.header}>How to play!</div>
        <Button className={classes.closebutton} onClick={this.handleClose}>
          X
        </Button>
        <div className={classes.content}>
          <p>
            Word Race is a game designed to improve QWERTY typing rate and
            efficiency. Words appear one by one at a rate that goes up as time
            progresses. There’s a limited “stack space” that fills up after a
            certain amount of words have appeared. Once a player types a word
            correctly, that word is removed from the stack.{" "}
          </p>
          <p>
            The score is calculated based on how fast the player was able to
            clear that word, and a multiplier. The multiplier increases with
            every word the player types correctly and resets on any mistype.
            Optionally a leveling system can also be added that varies the word
            appearing rate, the stack space and leveling up bonus score, else
            the rate can go up constantly, flattening out at say one word per
            two seconds.
          </p>
          <p>
            If the stack is full, it’s game over. The player can then submit
            their score and compare with a leaderboard.
          </p>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(InstructionComponent);
