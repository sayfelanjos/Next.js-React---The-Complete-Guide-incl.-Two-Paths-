import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  );
};

export default AllEventsPage;