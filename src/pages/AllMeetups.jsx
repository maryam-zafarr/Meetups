import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [loadedMeetups, setLoadedMeetups] = useState();

  useEffect(() => {
    const fetchMeetups = async () => {
      const response = await fetch(
        "https://react-meetups-3db82-default-rtdb.firebaseio.com/meetups.json"
      );
      const data = await response.json();

      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }

      setLoadedMeetups(meetups);
    };
    fetchMeetups();
  });

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
