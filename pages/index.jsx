import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HelloWorld = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
};

export default HelloWorld;