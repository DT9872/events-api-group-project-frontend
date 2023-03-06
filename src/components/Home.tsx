import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Event from "../models/Event";
import { getEventsByKeyword, getEvents } from "../services/EventsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    (async () => {
      if (keyword) {
        const events: Event[] = (await getEventsByKeyword(keyword))._embedded
          .events;
        setEvents(events);
      } else {
        const events: Event[] = (await getEvents())._embedded.events;
        setEvents(events);
      }
    })();
  }, [keyword]);
  return (
    <div className="Home">
      <Form />
      <CardList eventArrayProp={events} />
    </div>
  );
};

export default Home;
