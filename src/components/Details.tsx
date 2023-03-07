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
      <div className="DetailsImg">
        <img src={events?.images[1].url} alt={events?.name} />
      </div>
      <div className="DetailsInfo">
        <h2>{events?.name}</h2>
        <h3>{`${events?.dates.start.localDate} at ${events?.dates.start.localTime}`}</h3>
        <h3>{events?._embedded.venues[0].name}</h3>
        <h3>
          {`${events?._embedded.venues[0].city.name}, 
        ${events?._embedded.venues[0].state.stateCode}`}
        </h3>
      </div>
    </div>
  );
};

export default Details;
