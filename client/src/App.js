import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import LeaderBoardPage from "./components/LeaderBoardPage";
import Game from "./components/GamePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/leaderboard" component={LeaderBoardPage}></Route>
        <Route path="/game" component={Game}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
