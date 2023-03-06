import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../models/Event";
import { getEventById } from "../services/EventsService";
import "./Details.css";

const Details = () => {
  const [events, setEvents] = useState<Event | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const eventFromTM: Event = await getEventById(id!);
      setEvents(eventFromTM);
    })();
  }, []);

  return (
    <div className="Details">
      <h2>{events?.name}</h2>
      <img src={events?.images[1].url} alt={events?.name} />
    </div>
  );
};

export default Details;
