import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHandler = (values) => {
    fetch(
      "https://react-meetups-3db82-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(history.replace("/"));
  };

  return (
    <div>
      <h1>New Meetup</h1>
      <NewMeetupForm onSubmit={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
