import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";


const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export default AllEventsPage;