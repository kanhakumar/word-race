import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";

const Api = "http://localhost:4000/api/";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInComponent() {
  const classes = useStyles();
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const postUser = () => {
    setIsUser(true);
    document.getElementById("btn").innerHTML = "Go!";
  };

  const handleSubmit = async () => {
    if (!isUser) {
      // checkuser api call
      const response = await axios.post(Api + "/user/getUser", {
        email,
      });
      console.log(response);
      // if user is there proceed
      if (response.data.success === true) {
        window.location = "http://localhost:3000/game";
      }
      // else postUser
      else {
        postUser();
      }
    } else {
      // post request with data.
      const res = await axios.post(Api + "/user/addUser", {
        email,
        name,
      });
      console.log(res);
      if (res.data.success === true) {
        window.location = "http://localhost:3000/game";
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          {isUser && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Button
            style={{ fontFamily: "cursive" }}
            id="btn"
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Enter!
          </Button>
        </form>
      </div>
    </Container>
  );
}
