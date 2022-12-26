import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const Events = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
};

export default Events;