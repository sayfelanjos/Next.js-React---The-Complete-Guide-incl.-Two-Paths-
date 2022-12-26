import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "./EventsSearch";


const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch/>
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export default AllEventsPage;