import { Link } from "react-router-dom";
import Event from "../models/Event";
import fourOhFour from "../assets/404.jpg";
import "./Card.css";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";

interface Props {
  eventProp: Event;
}

const Card = ({ eventProp }: Props) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  return (
    <li className="Card">
      <div className="cardContainer">
        <h3>{eventProp.name}</h3>
        {eventProp.images[6].url ? (
          <Link to={`/events/${eventProp.id}`}>
            <img src={eventProp.images[6].url} alt={eventProp.name} />
          </Link>
        ) : (
          <img src={fourOhFour} alt="not found" />
        )}
        {isFav(eventProp.id) ? (
          <button
            className="delete"
            onClick={() => deleteFavoriteHandler(eventProp.id)}
          >
            Delete Favorite
          </button>
        ) : (
          <button
            className="add"
            onClick={() => addFavoriteHandler({ event: eventProp })}
          >
            Add Favorite
          </button>
        )}
      </div>
    </li>
  );
};

export default Card;
