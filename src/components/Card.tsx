import { Link } from "react-router-dom";
import Event from "..models/Events";
import "./Card.css";

interface Props {
  eventProp: Event;
}

const Card = ({ eventProp }: Props) => {
  return (
    <li className="Card">
      <h3>{eventProp.name}</h3>
      {eventProp.images.image.url ? (
        <Link to={`/gifs/${eventProp.id}`}>
          <img src={eventProp.images.image} alt={eventProp.name} />
        </Link>
      ) : (
        <img src={fourOhFour} alt="not found" />
      )}
      ;
    </li>
  );
};

export default Card;
