import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Event from "../models/Event";
import { getEvents } from "../services/EventsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const city = searchParams.get("city");
  const stateCode = searchParams.get("state");
  const localDate = searchParams.get("date");

  useEffect(() => {
    (async () => {
      if (keyword || city || stateCode || localDate) {
        const events: Event[] = (
          await getEvents(keyword, city, stateCode, localDate)
        )._embedded.events;
        setEvents(events);
      } else {
        const events: Event[] = (await getEvents(null, null, null, null))
          ._embedded.events;
        setEvents(events);
      }
    })();
  }, [keyword, city, stateCode, localDate]);
  return (
    <div className="Home">
      <Form />
      <CardList eventArrayProp={events} />
    </div>
  );
};

export default Home;
