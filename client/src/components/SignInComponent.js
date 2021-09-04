import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
  form: {
    width: "90%",
  },
  input: {
    marginLeft: "20px",
    maxWidth: "404px",
  },
  submitBtn: {
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#3f51b5",
    },
    marginLeft: "20px",
    marginBottom: "10px",
    maxWidth: "404px",
  },
});

export default function SignInComponent() {
  const classes = useStyles();
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <div className={classes.header}>Let's get you first!</div>
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
          {isUser && (
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitBtn}
            // onClick={setIsUser(true)}
          >
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}
