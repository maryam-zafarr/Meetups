import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/meetups" />
      </Route>
      <Route path="/meetups" exact>
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
    </Switch>
  );
};

export default App;
