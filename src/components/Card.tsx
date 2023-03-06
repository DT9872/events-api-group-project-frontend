import { Link } from "react-router-dom";
import Event from "../models/Event";
import fourOhFour from "../assets/404.jpg";
import "./Card.css";

interface Props {
  eventProp: Event;
}

const Card = ({ eventProp }: Props) => {
  return (
    <li className="Card">
      <h3>{eventProp.name}</h3>
      {eventProp.images[1].url ? (
        <Link to={`/events/${eventProp.id}`}>
          <img src={eventProp.images[1].url} alt={eventProp.name} />
        </Link>
      ) : (
        <img src={fourOhFour} alt="not found" />
      )}
    </li>
  );
};

export default Card;
