import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <section>
      <ul className={classes.list}>
        {props.meetups &&
          props.meetups.map((meetup) => {
            return (
              <MeetupItem
                key={meetup.id}
                title={meetup.title}
                image={meetup.image}
                address={meetup.address}
                description={meetup.description}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default MeetupList;
