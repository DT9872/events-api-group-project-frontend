import { useEffect, useState } from "react";
import Event from "../models/Event";
import { getEvents } from "../services/EventsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      const events: Event[] = (await getEvents())._embedded.events;
      setEvents(events);
    })();
  }, []);
  return (
    <div className="Home">
      <Form />
      <CardList eventArrayProp={events} />
    </div>
  );
};

export default Home;
