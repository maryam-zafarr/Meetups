import React from "react";
import { Route, Switch } from "react-router-dom";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <Switch>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
    </Switch>
  );
};

export default App;
