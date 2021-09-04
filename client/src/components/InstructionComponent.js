import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  preview: {
    right: theme.spacing(-21),
    backgroundColor: "#3667d6",
    color: "#d4ddf0",
    boxShadow: "0 8px 25px -8px #7367f0",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#d4ddf0",
      color: "#3667d6",
    },
  },
  root: {
    width: 440,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  submit: {
    right: theme.spacing(-44),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    color: "#d3ebdb",
    boxShadow: "0 8px 25px -8px #7367f0",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#3f51b5",
    },
  },
  inputtext: {
    width: theme.spacing(53.5),
    marginLeft: theme.spacing(1.5),
    marginBottom: theme.spacing(3.5),
    marginTop: theme.spacing(-3),
    height: theme.spacing(5),
  },
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
  footer: {
    backgroundColor: "#e9e7e7",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: "5px",
    marginTop: theme.spacing(1.3),
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
  form: {
    width: "90%",
  },
  input: {
    marginLeft: "20px",
  },
  submitBtn: {
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#3f51b5",
    },
    marginLeft: "20px",
    marginBottom: "10px",
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
        <div className={classes.header}>
          <p>header</p>
        </div>
        <div>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Sign In
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(InstructionComponent);
